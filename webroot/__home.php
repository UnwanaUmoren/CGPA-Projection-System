<?php session_start()?>
<?php require("log/dcon.php")?>
<?php require("includes/c_construct_rt.php")?>
<?php require("includes/log_check.php")?>
<?php require("includes/gen_header01.php")?>
<?php require("includes/owned_headers/home.php")?>
<?php require("includes/gen_header02.php")?>
<!--Content Starts-->

<?php 
	$retrieve = new retrieve;
	$result = new result;
	$update = new update;
	$_SESSION['session'] = $retrieve->session();
	$_SESSION['semester'] = $retrieve->semester();
	
	$_SESSION['portal_status'] = $retrieve->portalStatus();
	$semester = $_SESSION['semester'];
	$session = $_SESSION['session'];
	$st_all = $retrieve->full_details($user);
	
	$reg_status = $retrieve->reg_status($semester, $user);
	$det = $st_all->fetch_assoc();
	
		$fname = $det['fname']; 
		$mname = $det['mname'];
		$lname = $det['lname'];
		$age = $det['dob'];
		$department = $det['department'];
		$department_name = $retrieve->dep_name($department);
		$level = $det['level'];
		$pass_link = $det['passport_url'];
		$last_log = $det['old'];
		$levelUpdate = $det['level_update'];
	
	$in_reg_list = $retrieve->reg_status_check($user, $semester, $level);
	$in_reg_list2 = $retrieve->reg_status_check2($user, $semester, $level);	
		//session variables
		$_SESSION['level']= $level;
		$_SESSION['dept']= $department_name;
		$_SESSION['dept_code'] = $department;
		$_SESSION['pass_link'] = $pass_link;
		$_SESSION['fname'] = $fname;
		$_SESSION['lname'] = $lname;
		$_SESSION['reg_status'] = $reg_status;
		$_SESSION['in_reg_list'] = $in_reg_list;
		$_SESSION['in_reg_list2'] = $in_reg_list2;
		
	$last_Cgpa = $result->last_gp_and_cgpa($user, $semester, $level);	
		
	//}
	$log = getdate($last_log);
	$cdate = getdate(time());
	$dob = getdate(strtotime($age));
	$current_age = 0;
	if (($cdate['mon'] >= $dob['mon'] && $cdate['mday'] >= $dob['mday'])){
		$current_age = $cdate['year']- $dob['year'];
		$_SESSION['age'] = $current_age;
	}else{
		$current_age = ($cdate['year']- $dob['year'])-1;
		$_SESSION['age'] = $current_age;
	}
	
	if ($semester == "second"){
		$update->UnsetLevel($user, $level);
	}

?>
<div class="main_con">
   <div class="l_curve"></div>
   <div class="m_con">
   		<div class="passport">
            <div class="main_pass"><?php echo "<img src='{$pass_link}' alt='{$lname}, {$fname}' width='96' height='126' />"?></div>
            <div class="welcome"><p>Welcome in <?php echo $lname. ", ". $fname?></p></div>
            <div class="l_login"><p><span style="color:#333">Your last login was on:</span> <?php echo $log['weekday']." ".$log['mday'].$retrieve->dateSuffix($log['mday']).", " .$log['month'].", " .$log['year']. " at ".$retrieve->reverse_24($log['hours']) .":".$log['minutes'].":".$log['seconds'] ."  " .$retrieve->set_AM_PM($log['hours']); ?></p></div>  
    	</div>
        <div class="con_2">
        	<div class="con_left">
            	<div class="prof_details"> 
                	<table width="290" border="0">
                      <tr>
                        <td width="107">Name:</td>
                        <td width="173"><?php echo $lname.", ".$fname." ".$mname?></td>
                      </tr>
                      <tr>
                        <td>Age:</td>
                        <td><?php echo $current_age ?></td>
                      </tr>
                      <tr>
                        <td>Department:</td>
                        <td><?php echo $department_name ?></td>
                      </tr>
                      <tr>
                        <td>Level:</td>
                        <td><?php echo $level ?></td>
                      </tr>
                      <tr>
                        <td>Current Semester:</td>
                        <td><?php echo $semester?></td>
                      </tr>
                      <tr>
                        <td>Last CGPA:</td>
                        <td><?php echo $last_Cgpa['cgpa']?></td>
                      </tr>
                    </table>
                </div>
            </div>
            <div class="con_right">
            	<?php
					if ($level > 100){
						if ($semester == "first"){
							if($levelUpdate == '0'){
								include ("/content_pages/system_content/sub_pages/level_update.php");
							}else if ($levelUpdate == '1'){
								include ("/content_pages/system_content/sub_pages/tools.php");
							}	
						}else{
							include ("/content_pages/system_content/sub_pages/tools.php");
						}
					}else if(($level == 100)){
						if ($semester == "first"){
							if($levelUpdate == '0'){
								include ("/content_pages/system_content/sub_pages/level_update.php");
							}else if ($levelUpdate == '1'){
								include ("/content_pages/system_content/sub_pages/tools.php");
							}	
						}else{
							include ("/content_pages/system_content/sub_pages/tools.php");
						}
					}
					
				?>
            	
            </div>

        </div>
   </div>
   <div class="r_curve"></div>


</div>

<!--Content ends-->
<?php require("includes/gen_footer.php")?>