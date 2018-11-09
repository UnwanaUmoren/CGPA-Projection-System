<script type="text/javascript" src="/js/cmgnt/add_with_failed.js"></script>
<?php
	global $retrie;
	global $insert;
	$update = new update;
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
	$reg_courses = $retrie->registered_courses($user, $semester, $level);
	$failedCourses = $result ->get_failed_courses($user, $semester);
	$regCourses = array();
?>
<div class="add_sec1">
	<div class="hdr">
    	<div class="con"><p>Registered courses</p></div>
    </div>
</div>

<div class="c_table_con">
        <table width="800" border="1px" cellpadding="0" cellspacing="0" id='main_c_table'>
            <caption><?php echo $deptName?> | <?php echo $session?> | <?php echo $level?> level | <?php echo $semester?> semester</caption>
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
            while ($g_courses = $reg_courses->fetch_assoc()){
                $ct = $g_courses['course_title'];
                $cc = $g_courses['course_code'];
                $ch = $g_courses['course_credit_hour'];
                $ctp = $g_courses['course_type'];
                $total_credit_hour = $total_credit_hour +$ch;
				$regCourses[$sn-1] = $cc;
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
                            echo "<td><input type='checkbox' checked='checked' disabled='disabled'/></td>";
                        };
                echo	"	
                     </tr>";
                $sn++;	
            }
          ?>
        </table>
        <?php echo "<input type='hidden' value='$semester'/>"?>
        <?php echo "<input type='hidden' value='$level' id='lvl'/>"?>
        <table width="800" border="1px" cellpadding="0" cellspacing="0" id="up"></table>
    
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
        	<div class="bt_con"><input type="button" name="reg_course" value = "Update"/></div>
        </div>
    </div>
</div>
<div class="add_sec1">
	<div class="hdr">
    	<div class="con"><p>Courses you can't add</p></div>
    </div>
</div>
<div class="c_table_con">
  <table width="800" border="1px" cellpadding="0" cellspacing="0" id='out_table'>
      <caption><?php echo "<font color='#FF0000'>".ucwords($semester) ." semester outstanding courses"?> semester</font></caption>
    <tr bgcolor="#333">
      <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
      <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
      <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
      <td width="80"><font color="#FFFFFF"><b>Credit hour</b></font></td>
      <td width="80"><font color="#FFFFFF"><b>Course type</b></font></td>
    </tr>
     <?php
            $snn = 1;
           // $f_credit_hour = 0;
			$f_in = 0;
            //general courses
            while ($fc = $failedCourses->fetch_assoc()){
                $ctt = $fc['course_title'];
                $ccc = $fc['course_code'];
                $chh = $fc['course_credit_hour'];
                $ctpp = $fc['course_type'];
				$f_Courses[$f_in] = $fc['course_code'];
				
				if (!in_array($ccc, $regCourses)){
					$f_in++;
                	//$f_credit_hour = $f_credit_hour +$chh;
					 echo "<tr>
                        <td>$snn</td>
                        <td>$ctt</td>
                        <td>$ccc</td>
                        <td>$chh</td>
                        <td>$ctpp</td>
                     </tr>";
               		 $snn++;	
				}
               
            }
			if ($f_in == 0){
				echo "<tr><td colspan='5'><center><b>None</b></center></td></tr>";
			}
          ?>
    
  </table>
</div>
<?php //var_dump($regCourses)?>
<div class="add_sec">
	<div class="hdr">
    	<div class="con"><p>Add course section</p></div>
    </div>
    <div class="add_con">
    	<div class="main_con">
        	<p>Please select the faculty / department  and level to display the available courses</p>
            <div class="pull_con">
            	<table width="800" border="0" id ="pldown">
                  <tr>
                    <td><label for="fac">Faculty:</label></td>
                    <td>
                    	<select id="fac">
                        	<option selected="selected">Faculty</option>
							<?php 
								$s = $retrie->faculty();
								while($sq = $s->fetch_assoc()){
									echo "<option value='".$sq['code_of_faculty']."'>".$sq['faculty_name']."</option>";	
								}  
							?>
                        </select>
                    </td>
                    <td width="390"></td>
                  </tr>
                  <tr>
                    <td><label for="dept">Department:</label></td>
                    <td>
                    	<select id="dept">
                        	<option>Department</option>
                        </select>
                    </td>
                    <td width="390"></td>
                  </tr>
                  <tr>
                    <td><label for="level">Level:</label></td>
                    <td>
                    	<select id="level">
                        	<option  selected="selected">Level</option>
                            <option dname='100'>100</option>
                            <option dname='200'>200</option>
                            <option dname='300'>300</option>
                            <option dname='400'>400</option>
                            <option dname='500'>500</option>
                            <option dname='600'>600</option>
                            <option dname='700'>700</option>
                        </select>
                    </td>
                    <td width="390"></td>
                  </tr>
                  <tr height="7"></tr>
                  <tr>
                    <td></td>
                    <td><input type="button" id="getC" value="Show courses"></td>
                    <td width="390"></td>
                  </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div class ="courses_con">
	<table width="800" border="1px" cellpadding="0" cellspacing="0">
        <caption></caption>
        <tr bgcolor="#333">
        <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
        <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
        <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
        <td width="80"><font color="#FFFFFF"><b>Credit hour</b></font></td>
        <td width="80"><font color="#FFFFFF"><b>Course type</b></font></td>
        <td width="50"><font color="#FFFFFF"><b>Select</b></font></td>
        </tr>
    </table>
    <table width="800" border="1px" cellpadding="0" cellspacing="0" id="c_con">
    </table>
    <table width="800" border="0px" cellpadding="0" cellspacing="0" id="bt">
    </table>
</div>
<div class ="error_sec">
	<div class="error_con"></div>
</div>