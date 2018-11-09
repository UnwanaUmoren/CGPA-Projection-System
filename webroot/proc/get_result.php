<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php 
	if (isset($_POST['id']) && $_POST['id'] == "get_result"){
		$level = $_POST['level'];
		$semester = $_POST['semester'];
		$reg = $_POST['reg'];
		$currentSemester = $_POST['CurrentSemesetr'];
		$result = new result;
		$retrieve = new retrieve;
		$ready_check = $result->target_result_ready_status($reg, $semester, $level);
		if ($ready_check){
			$check = $retrieve->semester_course_reg_status_check($reg, $semester, $level);
			if ($check){
				$gr = $result->target_result($reg, $semester, $level);
				$count = $gr->num_rows;
				$ad = array();
				while($data = $gr->fetch_array() ){
					$na = array (
						"course_title" 			=> $data["course_title"],
						"course_code" 			=> $data["course_code"],
						"course_credit_hour" 	=> $data["course_credit_hour"],
						"course_type" 			=> $data["course_type"],
						"grade" 				=> $data["grade"]
					);
					array_push($ad, $na);
				}
				$gp_and_cgpa = $result->gp_and_cgpa($reg, $semester, $level);
				$col = $result->class_of_degree_tag($gp_and_cgpa['cgpa']);
				$na2 = array("col" => $col);
				
				array_push($ad, $gp_and_cgpa);
				array_push($ad, $na2);
				if ($count > 0){
					$encd = json_encode(array("res"=>$ad));
					echo $encd;
				}else if ($count == 0){
					echo 1;
					
				}
			}else{
				echo 1;
			}
			
			
		}else{
			echo 2;
			
		}

		
		
		
	}
?>