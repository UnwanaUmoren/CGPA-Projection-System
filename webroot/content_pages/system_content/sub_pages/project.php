<script type="text/javascript" src="/js/cgpa_p/project.js"></script>
<?php 
	$r = $result->CH_and_QP_sum($user, $semester, $level);
	$reg_courses = $retrie->registered_courses($user, $semester, $level);
?>
<input type="hidden" id="TQPoint" value="<?php echo $r['qualitative_point']?>"/>
<input type="hidden" id="TCreditHour" value="<?php echo $r['credit_hour']?>"/>
<input type="hidden" id="semester" value="<?php echo $semester?>"/>
<input type="hidden" id="level" value="<?php echo $level?>"/>
<div class="max">
	<div class="left"></div>
    <div class="right">
    	<h2>MAX <font color="#8edd88">CGPA</font> :</h2>
        <input type="text" id="show" value="" readonly maxlength="4" max="4"/>
    </div>
</div>
<div class="cp_con">
	<p>What CGPA would you like to have this semester?</p>
    <div class="cgpa_con">
    	<div class="m_con">
        	<table width="620" border="0">
              <tr>
                <td><label for="cgpa">Target CPGA:</label></td>
                <td><input placeholder="X.YZ" type="text" id ="cgpa" maxlength="4"/></td>
                <td><input type="button" id ="evalute" Value="Check Possibility"/></td>
                <td width="7"></td>
                <td><input type="button" id ="combine" Value="Show courses combination"/></td>
              </tr>
            </table>
        </div>
    </div>
    <div class="err_succ_con">
    	<div class="main_con"></div>
    </div>
</div>
<hr/>
<div class="v_table_con">
	<div class="m_con">
    	<p>No combination generated yet</p>
    </div>
</div>
<div class="tb_con">
	<div class="m_con">
    	 <table width="760" border="1px" cellpadding="0" cellspacing="0" id='main_c_table'>
          <caption><b>Virtual Result </b> [<i><?php echo $deptName?> | <?php echo $session?> | <?php echo $level?> level | <?php echo $semester?> semester]</i></caption>
          <tr bgcolor="#333">
            <td width="30"><font color="#FFFFFF"><b>S/N</b></font></td>
            <td width="340"><font color="#FFFFFF"><b>Course title</b></font></td>
            <td width="90"><font color="#FFFFFF"><b>Course code</b></font></td>
            <td width="50"><font color="#FFFFFF"><b>Grade</b></font></td>
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
						<td><b><font color='8edd88'>?</font></b></td>
                        <td>$ch</td>
                        <td>$ctp</td>";
                echo	"	
                     </tr>";
                $sn++;	
            }
          ?>
        </table>   
    </div>
</div>