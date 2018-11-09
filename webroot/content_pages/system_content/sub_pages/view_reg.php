<link href="/styles/cmgnt/print.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/cmgnt/print.js"></script>
<?php
	global $retrie;
	global $insert;
	$update = new update;

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
	
?>
<div class="add_sec1">
	<div class="hdr">
    	<div class="con"><p>Registered courses</p></div>
    </div>
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
				<td width="205">SUM of current credit hour: </td>
                <td><font color="#00CC66"><b><?php echo $total_credit_hour ?></b></font></td>
              </tr>
              <tr>
                <td width="205"></td>
                <td></td>
              </tr>
              <tr>
                <td width="205"></td>
                <td></td>
              </tr>
            </table>
        </div>
        <div class="right">
        	<a href="http://www.projectionsystem.com/print" target="_blank"><div class="bt_con"><input type="button" name="reg_course" value = "Print"/></div></a>
        </div>
    </div>
</div>