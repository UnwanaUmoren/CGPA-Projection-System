<link href="/styles/rmgnt/vp.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/rmgnt/rmgnt.js"></script>
<?php
	//global $retrie;
	//global $insert;
	$result = new result;

	//session variables
/*	$_SESSION['level']= $level;
	$_SESSION['dept']= $department_name;
	$_SESSION['dept_code'] = $department;
	$_SESSION['pass_link'] = $pass_link;
	$_SESSION['semester'];
	$_SESSION['session'];*/
	
	$semester = strtolower($_SESSION['semester']);
	$session = $_SESSION['session'];
	$level = $_SESSION['level'];
	$deptName = $_SESSION['dept'];
	$deptCode = $_SESSION['dept_code'];
	$user = $_SESSION['luser'];
	$reg_courses = $result->semester_result($user, $semester, $level);
	$summary = $result->last_gp_and_cgpa($user, $semester, $level);

?>
<div class="add_sec1">
	<div class="hdr">
    	<div class="con"><p>Last semester's result</p></div>
    </div>
</div>
<div class='d_error_con'>
	<div class="m_con"></div>
</div>
<div class="c_table_con">
		<?php
			if ($level > 100){
				if ($semester == "first"){
					$pLevel = $level - 100;
					$newS = "second";
				}else if ($semester == "second"){
					$newS = "first";
					$pLevel = $level;
				}
				
				
			}else if ($level == 100){
				if ($semester == "first"){

				}else if ($semester == "second"){
					$newS = "first";
					$pLevel = $level;
				}
				
				
			}
        
		
		?>

        <table width="800" border="1px" cellpadding="0" cellspacing="0" id='main_c_table'>
            <caption><?php echo $pLevel?> level | <?php echo $newS?> semester result</caption>
          <tr bgcolor="#333">
            <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
            <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Grade</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Credit hour</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Course type</b></font></td>
          </tr>
          <?php
            $sn = 1;
            $total_credit_hour = 0;
            //general courses
            while ($g_courses = $reg_courses->fetch_assoc()){
                $ct = $g_courses['course_title'];
                $cc = $g_courses['course_code'];
                $ch = $g_courses['course_credit_hour'];
                $ctp = $g_courses['course_type'];
				$grade = $g_courses['grade'];
				if ($g_courses['grade'] == 'F'){
					$grade = "<font color='#FF0000'>$grade</font>";
				}else{
					$grade = $g_courses['grade'];
				}
                $total_credit_hour = $total_credit_hour +$ch;
                echo "<tr>
                        <td>$sn</td>
                        <td>$ct</td>
                        <td>$cc</td>
						<td>$grade</td>
                        <td>$ch</td>
                        <td>$ctp</td>";
                echo	"	
                     </tr>";
                $sn++;	
            }
          ?>
        </table>   
</div>
<hr/>
<div class="courses_info">
	<div class="top">
    	<div class="left">
        	<table  border="0">
              <tr>
				<td width="288" class="lb">Number of failed courses:</td>
                <td></td>
              </tr>
              <tr>
                <td width="288" class="lb">Grade Point (GP):</td>
                <td><?php echo "<font color='#009933'><b>".$summary['gp']."</b></font>"?></td>
              </tr>
              <tr>
                <td width="288" class="lb">Cumilative Grade Point Average (CGPA):</td>
                <td><?php echo "<font color='#009933'><b>".$summary['cgpa']."</b></font>"?></td>
              </tr>
              <tr>
                <td width="288" class="lb">Class of level:</td>
                <td width="288" ><?php echo $result->class_of_degree_tag($summary['cgpa'])?></td>
              </tr>
            </table>
        </div>
        <div class="right">
        </div>
    </div>
</div>