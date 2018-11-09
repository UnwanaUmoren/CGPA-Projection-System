<?php
class retrieve{
	public
		function logged_user($reg){
			global $link;
			$s = "SELECT reg FROM student WHERE reg = '$reg' LIMIT 1";
			$sq = $link->query($s);
			$r = $sq->fetch_assoc();
			return strtoupper($r["reg"]);
		}
		function full_details($reg){
			global $link;
			$s = "SELECT s.*, ll.old  FROM student s
			JOIN last_log ll
			WHERE s.reg = '$reg' AND ll.reg = '$reg'";	
			return $link->query($s);			
		}
		function reverse_24($hour){
			$new_hour=0;
			switch ($hour) {
				case 0:
					$new_hour = 12;
				break;
				case 23:
					$new_hour=11;
				break;
				case 22:
					$new_hour=10;
				break;
				case 21:
					$new_hour=9;
				break;
				case 20:
					$new_hour=8;
				break;
				case 19:
					$new_hour=7;
				break;
				case 18:
					$new_hour=6;
				break;
				case 17:
					$new_hour=5;
				break;
				case 16:
					$new_hour=4;
				break;
				case 15:
					$new_hour=3;
				break;
				case 14:
					$new_hour=2;
				break;
				case 13:
					$new_hour=1;
				break;
				case 12:
					$new_hour=12;
				break;
			}

			return $new_hour;
		}
		
		
		function set_AM_PM($hour){
			$active = "";
			if ($hour>=12){
				$active="PM";
			}else if ($hour==0 | $hour<12){
				$active="AM";
			}
			return $active;	
		}
		function day_generator(){
			for ($x=1; $x<32; $x++){
				echo "<option>{$x}</option>";
			}
			
			
		}
		function year_generator(){
			for ($x=1907; $x<=idate("Y",time()); $x++){
				echo "<option>{$x}</option>";
			}
			
			
		}
		function faculty(){
				global $link;
				$lq = "SELECT faculty_name, code_of_faculty FROM faculty";
				return  $link->query($lq);
				
		}
		function department($faculty){
				global $link;
				$dq = "SELECT department_name, code_of_department FROM department WHERE faculty = '$faculty'";
				return $link->query($dq);	
		}
		function fac_name($code){
			global $link;
			$dd = "SELECT faculty_name FROM faculty WHERE code_of_faculty = '$code' LIMIT 1";
			$n = $link->query($dd);
			return $n['faculty_name'];
			
		}
		function dep_name($code){
			global $link;
			$dd = "SELECT department_name FROM department WHERE code_of_department = '$code' LIMIT 1";
			$n = $link->query($dd);
			$r = $n->fetch_assoc();
			return $r['department_name'];
			
		}
		function dateSuffix($date){
			$suffix = "";
			if ($date == 1 || $date == 21 || $date == 31){
				$suffix = "st";
			}else if ($date == 2 || $date == 22){
				$suffix = "nd";
			}else if ($date == 3 || $date == 23){
				$suffix = "rd";
			}else{
				$suffix = "th";
			}
			return $suffix;	
		}
		function session(){
			$session = "";
			global $link;
			$q = "SELECT session FROM school_session LIMIT 1";
			$rq = $link->query($q);
			$frq = $rq->fetch_assoc();
			$session = $frq['session'];
			return $session;
			
		}
		function semester(){
			$semester = "";
			global $link;
			$q = "SELECT semester FROM school_session LIMIT 1";
			$rq = $link->query($q);
			$frq = $rq->fetch_assoc();
			$semester = $frq['semester'];
			return $semester;
			
		}
		function gen_dept_shared($level, $departmental_code, $semester){
			global $link;
			if ($semester == "second"){
				$g_d_s_query = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type`, `child_course` FROM `second_semester_courses` WHERE `department` = '$departmental_code'and `level`= '$level' and gen ='0'
				UNION SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type`, `child_course` FROM `second_semester_courses` WHERE `level`= '$level' and gen ='1'
				UNION SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type`, `child_course` FROM `second_semester_courses` WHERE `shared_dept` LIKE '%$departmental_code%' and `level`= '$level' and gen ='0'" ;
				
				
			}else if($semester == "first"){
				$g_d_s_query = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type`, `child_course` FROM `first_semester_courses` WHERE `department` = '$departmental_code'and `level`= '$level' and gen ='0'
				UNION SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type`, `child_course` FROM `first_semester_courses` WHERE `level`= '$level' and gen ='1'
				UNION SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type`, `child_course` FROM `first_semester_courses` WHERE `shared_dept` LIKE '%$departmental_code%' and `level`= '$level' and gen ='0'" ;
				
			}
			
			return $link->query($g_d_s_query);
		}
		function reg_status($semester, $reg){
			global $link;
			if (strtolower($semester) == "first"){
				$st_query = "SELECT reg FROM course_reg_status WHERE reg = '$reg' AND first_status = '1' LIMIT 1";
				
			}else if (strtolower($semester) == "second"){
				$st_query = "SELECT reg FROM course_reg_status WHERE reg = '$reg' AND second_status = '1' LIMIT 1";
			}
			$st_query_run = $link->query($st_query);
			$status = $st_query_run->num_rows;
			if ($status == 1){
				return true;
			}else{
				return false;
				
			}
			
			
			
		}
		function reg_status_check($reg, $semester, $level){
			global $link;		
			if ($level == 100 && $semester = "second"){
				$st_query = "SELECT reg_number FROM first_semester_reg_courses WHERE reg_number = '$reg' AND level = '$level' LIMIT 1";
			}else if ($level > 100)	{
				if ($semester == 'first'){
					$prevlevel = $level - 100;
					$st_query = "SELECT reg_number FROM second_semester_reg_courses WHERE reg_number = '$reg' AND level = '$prevlevel' LIMIT 1";
				}else if ($semester == 'second'){
					$st_query = "SELECT reg_number FROM second_semester_reg_courses WHERE reg_number = '$reg' AND level = '$level' LIMIT 1";
				}				
			}
			$st_query_run = $link->query($st_query);
			$status = $st_query_run->num_rows;
			if ($status == 1){
				return true;
			}else{
				return false;
				
			}
			
			
			
		}
		function reg_status_check2($reg, $semester, $level){
			global $link;
			
			if ($level == 100 && $semester = "second"){
				$st_query = "SELECT reg_number FROM first_semester_reg_courses WHERE reg_number = '$reg' AND level = '$level' LIMIT 1";
			}else if ($level > 100)	{
				if ($semester == 'first'){
					$prevlevel = $level - 100;
					$st_query = "SELECT reg_number FROM second_semester_reg_courses WHERE reg_number = '$reg' AND level = '$prevlevel' LIMIT 1";
				}else if ($semester == 'second'){
					$st_query = "SELECT reg_number FROM first_semester_reg_courses WHERE reg_number = '$reg' AND level = '$level' LIMIT 1";
				}				
			}
			$st_query_run = $link->query($st_query);
			$status = $st_query_run->num_rows;
			if ($status == 1){
				return true;
			}else{
				return false;
				
			}
			
			
			
		}
		function semester_course_reg_status_check($reg, $semester, $level){
			global $link;		
			if ($semester = "second"){
				$st_query = "SELECT reg_number FROM first_semester_reg_courses WHERE reg_number = '$reg' AND level = '$level' LIMIT 1";
			}elseif ($semester == 'first'){
				$st_query = "SELECT reg_number FROM second_semester_reg_courses WHERE reg_number = '$reg' AND level = '$level' LIMIT 1";				
			}
			$st_query_run = $link->query($st_query);
			$status = $st_query_run->num_rows;
			if ($status == 1){
				return true;
			}else{
				return false;
				
			}
			
			
			
		}
		function registered_courses($reg, $semester, $level){
			global $link;
			$semester = strtolower($semester);
			if ($semester == "first"){
				$r_q = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type` FROM `first_semester_courses` WHERE course_code IN (SELECT course_code FROM first_semester_reg_courses WHERE reg_number = '$reg' AND level ='$level')";
			}else if($semester == "second"){
				$r_q = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type` FROM `second_semester_courses` WHERE course_code IN (SELECT course_code FROM second_semester_reg_courses WHERE reg_number = '$reg' AND level ='$level')";
			}
			$r_q_query = $link->query($r_q);
			return $r_q_query;
		}
		function to_add_courses($facultyCode, $departmentCode, $level, $semester){
			global $link;
			$semester = strtolower($semester);
			if ($semester == "first"){
				$r_qw = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type` FROM `first_semester_courses` WHERE faculty = '$facultyCode' AND department = '$departmentCode' AND level ='$level'";
			}else if($semester == "second"){
				$r_qw = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type` FROM `second_semester_courses` WHERE faculty = '$facultyCode' AND department = '$departmentCode' AND level ='$level'";
			}
			return $link->query($r_qw);
			
		}
		function test(){
			echo "test 101";
		}
		function portalStatus(){
			global $link;
			$p = "SELECT status FROM portal_status LIMIT 1";
			$pq = $link->query($p);
			$tb = $pq->fetch_assoc();
			return $tb['status'];
		}
		function check_failed_courses($reg, $semester){
			global $link;
			if ($semester == "first"){
				$s = "SELECT COUNT(*) AS v FROM first_semester_outstanding WHERE reg_number = '$reg'";
				$pq = $link->query($s);
				$tb = $pq->fetch_assoc();
				return $tb['v'];
			}else if($semester == "second"){
				$s = "SELECT COUNT(*) AS v FROM second_semester_outstanding WHERE reg_number = '$reg'";
				$pq = $link->query($s);
				$tb = $pq->fetch_assoc();
				return $tb['v'];
			}
			
		}
		function update_status($reg){
			global $link;
			$t = "SELECT COUNT(*) FROM student WHERE reg = '$reg' AND level_update = '1'";
			$tq  = $link->query($t);
			$ctr = $tq->num_rows;
			return $ctr;
		}
		function title($pageID){
			global $link;
			$t = "SELECT title, page_label FROM page_properties WHERE pageID = '$pageID' LIMIT 1";
			$tq  = $link->query($t);
			$page_properties = array ();
			$g = $tq->fetch_assoc();
			$page_properties['title'] = $g["title"];
			$page_properties['label'] = $g["page_label"];
			return $page_properties;
		}

}








?>