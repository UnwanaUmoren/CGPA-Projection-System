<?php
	//require("log/dcon.php");
	global $retrie;
	global $insert;
	//$update = new update;

	//session variables
/*	$_SESSION['level']= $level;
	$_SESSION['dept']= $department_name;
	$_SESSION['dept_code'] = $department;
	$_SESSION['pass_link'] = $pass_link;
	$_SESSION['semester'];
	$_SESSION['session'];*/
	
	$semester = $_SESSION['semester'];
	$session = $_SESSION['session'];
	$level = $_SESSION['level'];
	$deptName = $_SESSION['dept'];
	$deptCode = $_SESSION['dept_code'];
	$user = $_SESSION['luser'];
	// retrieve all required courses
	if ($level ==100){
		$gen_dept_shared = $retrie->gen_dept_shared($level, $deptCode, $semester);	
	}else if ($level > 100){
		$gen_dept_shared = $retrie->gen_dept_shared($level, $deptCode, $semester);	
	}
	
?>

<div class="hint2">
	<div class="hint_con">
    	<div class="left">Current Session: <font style="color:#8edd88"><?php echo $session?></font></div>
        <div class="mid">Current Level: <font style="color:#8edd88"><?php echo $level?></font></div>
        <div class="right">Current Semester: <font style="color:#8edd88"><?php echo $semester?> semester</font></div>
    </div>
</div>
<div class="info">
	<p>The default courses for <?php echo $level?> level <?php echo $semester?> in <?php echo $deptName?> department are shown below     
    </p>
</div>
<div class="c_table_con">
	<form method="post" action="">
        <table width="800" border="1px" cellpadding="0" cellspacing="0">
            <caption><?php echo $deptName?> | <?php echo $session?> | <?php echo $level?> | <?php echo $semester?> semester</caption>
          <tr bgcolor="#333">
            <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
            <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Credit hour</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Course type</b></font></td>
            <td width="50"><font color="#FFFFFF"><b>Select</b></font></td>
          </tr>
          <?php
            $sn = 1;
            $total_credit_hour = 0;
            //general courses
            while ($g_courses = $gen_dept_shared->fetch_assoc()){
                $ct = $g_courses['course_title'];
                $cc = $g_courses['course_code'];
                $ch = $g_courses['course_credit_hour'];
                $ctp = $g_courses['course_type'];
                $total_credit_hour = $total_credit_hour +$ch;
                echo "<tr>
                        <td>$sn</td>
                        <td>$ct</td>
                        <td>$cc</td>
                        <td>$ch</td>
                        <td>$ctp</td>
                        ";
                        
                        if ($ctp == "E"){
                            
                            echo "<td><input type='checkbox' name='course_code[]' value = '$cc'/></td>";
                        }else{
                            echo "<td>
								<input type='checkbox' checked='checked' disabled='disabled'/>
								<input type='hidden' name='course_code[]' value = '$cc' />
								</td>";
                        };
                echo	"	
                     </tr>";
                $sn++;	
            }
          ?>
        </table>
    
</div>
<div class="courses_info">
	<div class="top">
    	<div class="left">
        	<table  border="0">
              <tr>
                <td width="205">Maximum SUM of credit hour: </td>
                <td><font color="#00CC66"><b>24</b></font></td>
              </tr>
              <tr>
                <td width="205">Minimum SUM of credit hour: </td>
                <td><font color="#00CC66"><b>9</b></font></td>
              </tr>
              <tr>
                <td width="205">SUM of current credit hour: </td>
                <td><font color="#00CC66"><b><?php echo $total_credit_hour ?></b></font></td>
              </tr>
            </table>
        </div>
        <div class="right">
        	<div class="bt_con"><input type="submit" name="reg_course" value = "Register"/></div>
        </div>
       </form>
    </div>
</div>
<?php
	if (isset($_POST['reg_course'])){
		$s = count($_POST['course_code']);
		for ($i=0; $i<$s ;$i++){
			$c_code =  $_POST['course_code'][$i];
			$snd = $insert->reg_course($user, $level, strtolower($semester), $c_code);
		}
		$_SESSION['reg_status'] = true;
		echo "<script type='text/javascript'>location.reload()</script>";
		
	}else{
		
	}
	

?>