<link href="/styles/cmgnt/reg_with_failed.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/rmgnt/reg_failed.js"></script>
<?php
	//require("log/dcon.php");
	global $retrie;
	global $insert;
	$result = new result;
	$f_Courses = array();	
	$semester = $_SESSION['semester'];
	$session = $_SESSION['session'];
	$level = $_SESSION['level'];
	$deptName = $_SESSION['dept'];
	$deptCode = $_SESSION['dept_code'];
	$user = $_SESSION['luser'];
	// retrieve all required courses


	$gen_dept_shared = $retrie->gen_dept_shared($level, $deptCode, $semester);	
	$gen_dept_shared2 = $retrie->gen_dept_shared($level, $deptCode, $semester);	

	$failedCourses = $result ->get_failed_courses($user, $semester);
	
?>
<div class="f_courses">
	<div class="m_top">
    	<p>You have <?php echo " ".$f." ".$semester ." semester outstanding courses. " ?> These courses  will be included automatically during registration process</p>
    </div>
    <div class="bt">
    	<table width="800" border="1px" cellpadding="0" cellspacing="0">
          <caption><?php echo ucwords($semester) ." semester outstanding courses" ?></caption>
            <tr bgcolor="#333">
            <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
            <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Credit hour</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Course type</b></font></td>
            <td width="50"><font color="#FFFFFF"><b>Select</b></font></td>
          </tr>
          <?php
            $snn = 1;
            $f_credit_hour = 0;
			$f_in = 0;
            //general courses
            while ($fc = $failedCourses->fetch_assoc()){
                $ctt = $fc['course_title'];
                $ccc = $fc['course_code'];
                $chh = $fc['course_credit_hour'];
                $ctpp = $fc['course_type'];
				$f_Courses[$f_in] = $fc['course_code'];
				$f_in++;
                $f_credit_hour = $f_credit_hour +$chh;
                echo "<tr>
                        <td>$snn</td>
                        <td>$ctt</td>
                        <td>$ccc</td>
                        <td>$chh</td>
                        <td>$ctpp</td>
                        <td>
							<input type='checkbox' checked='checked' disabled='disabled'/>
							<input type='hidden' value = '$ccc' />
						</td>
                     </tr>";
                $snn++;	
            }
          ?>
    	</table>
    </div>

</div>
<div id="courses_info">
	<div class="top">
    	<div class="left">
        	<table  border="0">
              <tr>
                <td width="205">SUM of current credit hour: </td>
                <td><font color="#00CC66"><b><?php echo "<font color='#FF0000'><b>".$f_credit_hour."</b></font>"; ?></b></font></td>
              </tr>
              <tr>
                <td width="320">Number of <?php echo $semester ?> semester outstanding courses: </td>
                <td><font color="#00CC66"><b><?php echo "<font color='#FF0000'><b>".$f."</b></font>" ?></b></font></td>
              </tr>
            </table>
        </div>
    </div>
</div>
<div class="f_courses2">
    <div class="bt">
    	<table width="800" border="1px" cellpadding="0" cellspacing="0">
          <caption id ="cp">EXCLUDED COURSES FOR THIS SEMESTER</caption>
            <tr bgcolor="#333">
            <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
            <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Credit hour</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Course type</b></font></td>
          </tr>
          <?php
            $s2 = 1;
            $f_credit_hour2 = 0;

            while ($fcc = $gen_dept_shared2->fetch_assoc()){
                $ct2 = $fcc['course_title'];
                $cc2 = $fcc['course_code'];
                $ch2 = $fcc['course_credit_hour'];
                $ctp2 = $fcc['course_type'];
				$ChildCourse2 = $fcc['child_course'];
				if (in_array($ChildCourse2, $f_Courses)){
					echo "<tr>
							<td>$s2</td>
							<td>$ct2</td>
							<td>$cc2</td>
							<td>$ch2</td>
							<td>$ctp2</td>
						 </tr>";
					$s2++;
				}
            }
          ?>
    	</table>
    </div>

</div>
<hr/>
<div class="hint2">
	<div class="hint_con">
    	<div class="left">Current Session: <font style="color:#8edd88"><?php echo $session?></font></div>
        <div class="mid">Current Level: <font style="color:#8edd88"><?php echo $level?></font></div>
        <div class="right">Current Semester: <font style="color:#8edd88"><?php echo $semester?> semester</font></div>
    </div>
</div>
<div class="info">
	<p>The default courses for <?php echo $level?> level <?php echo $semester?> in <?php echo $deptName?> department excluding parent courses for failed courses are shown below     
    </p>
</div>
<input type='hidden' value='<?php echo $semester ?>' id ='sem'/>
<input type='hidden' value='<?php echo $user ?>' id ='rg'/>
<input type='hidden' value='<?php echo $level ?>' id ='level2'/>
<div class="c_table_con">
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
           // $total_credit_hour = 0;
            //general courses
            while ($g_courses = $gen_dept_shared->fetch_assoc()){
                $ct = $g_courses['course_title'];
                $cc = $g_courses['course_code'];
                $ch = $g_courses['course_credit_hour'];
                $ctp = $g_courses['course_type'];
				$ChildCourse = $g_courses['child_course'];
               // $total_credit_hour = $total_credit_hour +$ch;
			   if (!in_array($ChildCourse, $f_Courses)){
				   echo "<tr id='$sn'>
                        <td>$sn</td>
                        <td>$ct</td>
                        <td>$cc</td>
                        <td>$ch</td>
                        <td>$ctp</td>
                        <td><input type='checkbox' value = '$cc' rid = '$sn'/></td>
                     </tr>";
                	$sn++;	
			   }
                
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
                <td>
                	<font color="#00CC66">
                    	<b>
							<?php
								if ($f_credit_hour >= 9){
									echo "0 + "."<font color='#FF0000'><b>".$f_credit_hour."</b></font>"." = ". $f_credit_hour;
								}else if ($f_credit_hour < 9){
									echo "0 + "."<font color='#FF0000'><b>".$f_credit_hour."</b></font>"." = ". "<font color='#FF0000'><b>".$f_credit_hour."</b></font>";
								}
								
							
							?>
                        </b></font>
                </td>
              </tr>
            </table>
        </div>
        <div class="right">
        	<div class="bt_con"><input type="button" name="reg_course" value = "Register"/></div>
        </div>
    </div>
</div>
<div class="err_con">
	<div class="m_con"></div>
</div>