<?php //require("/log/dcon.php")?>
<?php
class insert{
	public
		function insert_new_user($fname, $mname, $lname, $dob, $passport, $level, $reg, $fac, $dep, $moe, $email, $pass){
			global $link;
			$ins = "INSERT INTO student SET
				fname = '$fname',
				mname = '$mname',
				lname = '$lname',
				dob = '$dob',
				passport_url = '$passport',
				level = '$level',
				reg	= '$reg',
				faculty = '$fac',
				department = '$dep',
				mode_of_entry = '$moe',
				email = '$email',
				pass_w = '$pass',
				level_update = '1'";
			$insq = $link->query($ins);
			if ($insq){
				return true;
			}
			
			
		}
		function reg_parse($reg){
			$parsed = str_replace("/", "", $reg);
			return $parsed;
		}
		function reg_course($reg, $level, $semester, $c_code){
			global $link;
			if ($semester == "first"){
				$in_q = "INSERT INTO first_semester_reg_courses SET
				reg_number = '$reg',
				course_code = '$c_code',
				level = '$level'";
				
			}else if ($semester == "second"){
				$in_q = "INSERT INTO second_semester_reg_courses SET
				reg_number = '$reg',
				course_code = '$c_code',
				level = '$level'";
			}
			$insq = $link->query($in_q);
			if ($insq){
				return true;
			}else{
				return false;
				
			}
		}
		function reg_course_status_set($reg, $semester){
			global $link;
			if ($semester == "First"){
				$in_qc = "INSERT INTO course_reg_status SET
				reg = '$reg',
				first_status = '1',
				second_status = '0'";
				
			}else if ($semester == "Second"){
				$in_qc = "INSERT INTO course_reg_status SET
				reg = '$reg',
				first_status = '0',
				second_status = '1'";
			}
			$insqc = $link->query($in_qc);
			if ($insqc){
				return true;
			}
		}
		function out_course($reg, $semester, $c_code){
			global $link;
			if ($semester == "first"){
				$in_q = "INSERT INTO first_semester_outstanding SET
				reg_number = '$reg',
				course_code = '$c_code'";
				
			}else if ($semester == "second"){
				$in_q = "INSERT INTO second_semester_outstanding SET
				reg_number = '$reg',
				course_code = '$c_code'";
			}
			$insq = $link->query($in_q);
			if ($insq){
				return true;
			}else{
				return false;
				
			}
		}
		
}