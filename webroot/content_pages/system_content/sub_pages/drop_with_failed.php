<link href="/styles/cmgnt/dropcourse.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/cmgnt/drop.js"></script>
<?php
	global $retrie;
	global $insert;
	$update = new update;
	$result = new result;
	$semester = strtolower($_SESSION['semester']);
	$session = $_SESSION['session'];
	$level = $_SESSION['level'];
	$deptName = $_SESSION['dept'];
	$deptCode = $_SESSION['dept_code'];
	$user = $_SESSION['luser'];
	$prohibitedCourses = array();
	$reg_courses = $retrie->registered_courses($user, $semester, $level);
	$failedCourses = $result ->get_failed_courses($user, $semester);
	
?>


 <?php
	$f_in = 0;
    while ($fc = $failedCourses->fetch_assoc()){
	    $ccc = $fc['course_code'];
		$prohibitedCourses[$f_in] = $fc['course_code'];
		$f_in++;
    }
 ?>
<div class="add_sec1">
	<div class="hdr">
    	<div class="con"><p>Registered courses</p></div>
    </div>
    <p>Select the courses to drop and click the drop button</p>
</div>
<div class='d_error_con'>
	<div class="m_con"></div>
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
                echo "<tr>
                        <td>$sn</td>
                        <td>$ct</td>
                        <td>$cc</td>
                        <td>$ch</td>
                        <td>$ctp</td>";
						if (in_array($cc, $prohibitedCourses)){
							echo "<td><input type='checkbox' rid='$sn' disabled = 'disabled'/></td>";
						}else{
							echo	"<td><input type='checkbox' rid='$sn'/></td>";
						}
           		//
                echo	"	
                     </tr>";
                $sn++;	
            }
          ?>
        </table>
        <?php echo "<input type='hidden' value='$semester'/>"?>    
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
        	<div class="bt_con"><input type="button" name="reg_course" value = "Drop"/></div>
        </div>
    </div>
</div>