<link href="/styles/rmgnt/vspc.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/rmgnt/vspc.js"></script>
<?php
	//global $retrie;
	//global $insert;
	//$result = new result;

	//session variables
	$level = $_SESSION['level'];
	$semester = $_SESSION['semester'];
	$user = $_SESSION['luser'];
	echo "<input type='hidden' value='$level' id ='lvl'/>";
	echo "<input type='hidden' value='$semester' id ='smtr'/>";
	echo "<input type='hidden' value='$user' id ='reg'/>";
	//$_SESSION['dept']= $department_name;
	//$_SESSION['dept_code'] = $department;
	//$_SESSION['pass_link'] = $pass_link;
	
	//$_SESSION['session'];
	
/*	$semester = strtolower($_SESSION['semester']);
	$session = $_SESSION['session'];
	$level = $_SESSION['level'];
	$deptName = $_SESSION['dept'];
	$deptCode = $_SESSION['dept_code'];
	$user = $_SESSION['luser'];
	$reg_courses = $result->semester_result($user, $semester, $level);
	$summary = $result->last_gp_and_cgpa($user, $semester, $level);*/

?>
<div class="add_sec1">
	<div class="hdr">
    	<div class="con"><p>Specified semester result view</p></div>
    </div>
    <p>Select your target level and semester to view result</p>
</div>
<div class='d_error_con'>
	<div class="m_con"></div>
</div>
<div class='frm_con'>
	<div class="m_con">
    	<table width="500" border="0">
          <tr>
            <td><label for="level">Level:</label></td>
            <td width="180">
            	<select id="level">
                	<option selected = "selected">Level</option>
                    <option>100</option>
                    <option>200</option>
                    <option>300</option>
                    <option>400</option>
                    <option>500</option>
                    <option>600</option>
                    <option>700</option>
                    <option>800</option>
                    <option>900</option>
                </select>
            </td>
            <td>
            	<div class="err1"></div>
            </td>
          </tr>
          <tr>
            <td><label for="semester">Semester:</label></td>
            <td width="180">
            	<select id="semester">
                	<option selected = "selected">Semester</option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                </select>
            </td>
            <td>
            	<div class="err2"></div>
            </td>
          </tr>
          <tr height="15">
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><input type="button" value="Show Result"/></td>
          </tr>
        </table>
    </div>
</div>
<hr/>
<div class="c_table_con">
        <table width="800" border="1px" cellpadding="0" cellspacing="0" id='main_c_table'>
          <caption><?php //echo //$pLevel?> level | <?php //echo //$newS?> semester result</caption>
          <tr bgcolor="#333">
            <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
            <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Grade</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Credit hour</b></font></td>
            <td width="80"><font color="#FFFFFF"><b>Course type</b></font></td>
          </tr>
        </table>
        <table width="800" border="1px" cellpadding="0" cellspacing="0" id='main_r_table' >
        </table>   
</div>
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
                <td></td>
              </tr>
              <tr>
                <td width="288" class="lb">Cumilative Grade Point Average (CGPA):</td>
                <td></td>
              </tr>
              <tr>
                <td width="288" class="lb">Class of level:</td>
                <td width="288" ></td>
              </tr>
            </table>
        </div>
        <div class="right">
        </div>
    </div>
</div>