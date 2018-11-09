<?php
class result{
	public
		function last_semester_result_isReady($reg, $semester, $level){
			global $link;
			if ($level == 100){
				if (strtolower($semester)== "first"){
				}else if(strtolower($semester)== "second"){
					$rc = "SELECT ready FROM result_summary WHERE level = '$level' AND ready = 1 AND reg_number = '$reg' AND semester = 'first'";
					$rc_query = $link->query($rc);
					$status = $rc_query->num_rows;
					if ($status == 1){
						return true;
					}else{
						return false;
					}
				}
				
			}else if($level > 100){
				if (strtolower($semester)== "first"){
					$target_level = $level - 100;
					$rc = "SELECT ready FROM result_summary WHERE level = '$target_level' AND ready = 1 AND reg_number = '$reg' AND semester = 'second'";
				}else if(strtolower($semester)== "second"){
					$rc = "SELECT ready FROM result_summary WHERE level = '$level' AND ready = 1 AND reg_number = '$reg' AND semester = 'first'";
				}
				$rc_query = $link->query($rc);
				$status = $rc_query->num_rows;
				if ($status == 1){
					return true;
				}else{
					return false;
				}
				
				
			}
		}
			
			function semester_result($user, $semester, $level){
				global $link;
				if ($semester == "second"){
					$g_d_s_query = "SELECT fs.course_title, fs.course_code, fs.course_credit_hour, fs.course_type, frc.grade FROM first_semester_courses fs

INNER JOIN first_semester_reg_courses frc ON  fs.course_code = frc.course_code WHERE frc.reg_number = '$user' AND frc.level = '$level'";
				}else if($semester == "first"){
					if ($level > 100){
						$preLevel =$level -100;
						$g_d_s_query = "SELECT fs.course_title, fs.course_code, fs.course_credit_hour, fs.course_type, frc.grade FROM second_semester_courses fs

INNER JOIN second_semester_reg_courses frc ON  fs.course_code = frc.course_code WHERE frc.reg_number = '$user' AND frc.level = '$preLevel'";
						
					}
					
				}
				
				return $link->query($g_d_s_query);
					
			}
			function last_gp_and_cgpa($reg, $semester, $level){
				global $link;
				$g_and_c = array ();
				if ($level == 100){
					if ($semester == "second"){
						$s = "SELECT grade_point FROM result_summary WHERE level = '$level' AND reg_number = '$reg' AND semester = 'first' LIMIT 1";
						$sq =$link->query($s);
						$sqq =$sq->fetch_assoc();
						$g_and_c['gp'] = $sqq['grade_point'];
						$g_and_c['cgpa'] = "----";
						return $g_and_c;	
					}			
				}else if ($level > 100){
					if ($semester == "first"){
						$newLevel = $level-100;
						$s = "SELECT grade_point FROM result_summary WHERE level = '$newLevel' AND reg_number = '$reg' AND semester = 'second' LIMIT 1";
						$sq =$link->query($s);
						$sqq =$sq->fetch_assoc();
						$g_and_c['gp'] = $sqq['grade_point'];
						
						//All QPs and All CHs
						$ss= "SELECT qualitative_point, credit_hour FROM result_summary WHERE level < '$level' AND reg_number = '$reg'";
						$sqq =$link->query($ss);
						$tg = 0;
						$tch =0;
						while($R = $sqq->fetch_assoc()){
							$tg = $tg + $R['qualitative_point'];
							$tch = $tch + $R['credit_hour'];
						}
						$CGPA = 0.000;
						$CGPA = $tg/$tch;
						$g_and_c['cgpa'] = $CGPA;
						return $g_and_c;
					}
					if ($semester == "second"){
						//$newLevel = $level-100;
						$s = "SELECT grade_point FROM result_summary WHERE level = '$level' AND reg_number = '$reg' AND semester = 'first' LIMIT 1";
						$sq =$link->query($s);
						$sqq =$sq->fetch_assoc();
						$g_and_c['gp'] = $sqq['grade_point'];
						
						//All QPs and All CHs
						$ss= "SELECT qualitative_point, credit_hour FROM result_summary WHERE level < '$level' AND reg_number = '$reg'
								UNION SELECT qualitative_point, credit_hour FROM result_summary WHERE level = '$level' AND reg_number = '$reg' AND semester = 'first'";
						$sqq =$link->query($ss);
						$tg = 0;
						$tch =0;
						while($R = $sqq->fetch_assoc()){
							$tg = $tg + $R['qualitative_point'];
							$tch = $tch + $R['credit_hour'];
						}
						$CGPA = 0.000;
						$CGPA = $tg/$tch;
						$g_and_c['cgpa'] = $CGPA;
						return $g_and_c;
					}
				}
			}
			
			function class_of_degree_tag($value){
				$tag = "";
				if ($value < 1.00){
					$tag = "<font color='#FF0000'><b>Fail</b></font>";
				}else if ($value >= 1.00 AND $value < 1.50){
					$tag = "<font color='#FF0'><b>Pass</b></font>";
				}else if ($value >= 1.50 AND $value < 2.40){
					$tag = "<font color='#009933'><b>3<sup>rd</sup> Class (Hons.) Degree</b></font>";
				}else if ($value >= 2.40 AND $value < 3.50){
					$tag = "<font color='#009933'><b>2<sup>nd</sup> Class lower (Hons.) Degree</b></font>";
				}else if ($value >= 3.50 AND $value < 4.50){
					$tag = "<font color='#009933'><b>2<sup>nd</sup> Class upper (Hons.) Degree</b></font>";
				}else if ($value >= 4.50 AND $value <= 5.00){
					$tag = "<font color='#009933'><b>1<sup>st</sup> Class (Hons.) Degree</b></font>";
				}
				if($value == "----"){
					$tag = "<font color='#009933'><b>----</b></font>";
					
				}
				return $tag;
			}
			function target_result($user, $semester, $level){
				global $link;
				
				if ($semester == "first"){
					$g_d_s_query = "SELECT fs.course_title, fs.course_code, fs.course_credit_hour, fs.course_type, frc.grade FROM first_semester_courses fs
INNER JOIN first_semester_reg_courses frc ON  fs.course_code = frc.course_code WHERE frc.reg_number = '$user' AND frc.level = '$level'";
					return $link->query($g_d_s_query);	
					
				}else if($semester == "second"){
					$g_d_s_query = "SELECT fs.course_title, fs.course_code, fs.course_credit_hour, fs.course_type, frc.grade FROM second_semester_courses fs
INNER JOIN second_semester_reg_courses frc ON  fs.course_code = frc.course_code WHERE frc.reg_number = '$user' AND frc.level = '$level'";
					return $link->query($g_d_s_query);	
					
				}
					
					
			}
			
			function gp_and_cgpa($reg, $semester, $level){
				global $link;
				if ($level == 100 && $semester == "first"){
					$s = "SELECT grade_point FROM result_summary WHERE level = '$level' AND reg_number = '$reg' AND semester = 'first' LIMIT 1";
					$sq =$link->query($s);
					$sqq =$sq->fetch_assoc();
					$g_and_c['gp'] = $sqq['grade_point'];
					$g_and_c['cgpa'] = "----";
					return $g_and_c;	
				}else{
					$g_and_c = array ();
					$s = "SELECT grade_point FROM result_summary WHERE level = '$level' AND reg_number = '$reg' AND semester = '$semester'";
					$sq =$link->query($s);
					$sqq =$sq->fetch_assoc();
					
					$g_and_c['gp'] = $sqq['grade_point'];
					
					if ($semester == "first"){
						$ss= "SELECT qualitative_point, credit_hour FROM result_summary WHERE level < '$level' AND reg_number = '$reg'
								UNION SELECT qualitative_point, credit_hour FROM result_summary WHERE level = '$level' AND reg_number = '$reg' AND semester = '$semester'";
						$sqq =$link->query($ss);
						$tg = 0;
						$tch =0;
						while($R = $sqq->fetch_assoc()){
							$tg = $tg + $R['qualitative_point'];
							$tch = $tch + $R['credit_hour'];
						}
						$CGPA = 0.000;
						$CGPA = $tg/$tch;
						$g_and_c['cgpa'] = $CGPA;
						return $g_and_c;
					}else{
						
						//All QPs and All CHs
						$ss= "SELECT qualitative_point, credit_hour FROM result_summary WHERE level <= '$level' AND reg_number = '$reg'";
						$sqq =$link->query($ss);
						$tg = 0;
						$tch =0;
						while($R = $sqq->fetch_assoc()){
							$tg = $tg + $R['qualitative_point'];
							$tch = $tch + $R['credit_hour'];
						}
						$CGPA = 0.000;
						$CGPA = $tg/$tch;
						$g_and_c['cgpa'] = $CGPA;
						return $g_and_c;
					
					}
				}
			}
			function target_result_ready_status($reg, $semester, $level){
				global $link;
				if (strtolower($semester)== "first"){
					$rc = "SELECT ready FROM result_summary WHERE level = '$level' AND ready = 1 AND reg_number = '$reg' AND semester = 'first'";
					$rc_query = $link->query($rc);
					$status = $rc_query->num_rows;
					if ($status == 1){
						return true;
					}else{
						return false;
					}
				}else if(strtolower($semester)== "second"){
					$rc = "SELECT ready FROM result_summary WHERE level = '$level' AND ready = 1 AND reg_number = '$reg' AND semester = 'second'";
					$rc_query = $link->query($rc);
					$status = $rc_query->num_rows;
					if ($status == 1){
						return true;
					}else{
						return false;
					}
				}
			}
			function get_failed_courses($reg, $semester){
				global $link;
				if ($semester == "first"){
					$r = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type` FROM `first_semester_courses` WHERE `course_code` IN (SELECT course_code FROM first_semester_outstanding WHERE reg_number = '$reg')";
				}else if($semester == "second"){
					$r = "SELECT `course_title`, `course_code`, `course_credit_hour`, `course_type` FROM `second_semester_courses` WHERE `course_code` IN (SELECT course_code FROM second_semester_outstanding WHERE reg_number = '$reg')";
				}
				$rq = $link->query($r);
				return $rq;
				
			}
			function CH_and_QP_sum($reg, $semester, $level){
				global $link;
				if ($level == 100 && $semester == "first"){
				}else{
					$g_and_c = array ();
					//grade_point
					if ($semester == "first"){
						$ss= "SELECT qualitative_point, credit_hour FROM result_summary WHERE level < '$level' AND reg_number = '$reg'
								UNION SELECT qualitative_point, credit_hour FROM result_summary WHERE level = '$level' AND reg_number = '$reg' AND semester = '$semester'";
						$sqq =$link->query($ss);
						$qualitative_point = 0;
						$credit_hour =0;
						while($R = $sqq->fetch_assoc()){
							$qualitative_point = $qualitative_point + $R['qualitative_point'];
							$credit_hour = $credit_hour + $R['credit_hour'];
						}
						

						$g_and_c['qualitative_point'] = $qualitative_point;
						$g_and_c['credit_hour'] = $credit_hour;
						return $g_and_c;
					}else{
						
						//All QPs and All CHs
						$ss= "SELECT qualitative_point, credit_hour FROM result_summary WHERE level <= '$level' AND reg_number = '$reg'";
						$sqq =$link->query($ss);
						$qualitative_point = 0;
						$credit_hour =0;
						while($R = $sqq->fetch_assoc()){
							$qualitative_point = $qualitative_point + $R['qualitative_point'];
							$credit_hour = $credit_hour + $R['credit_hour'];
						}
						$g_and_c['qualitative_point'] = $qualitative_point;
						$g_and_c['credit_hour'] = $credit_hour;
						return $g_and_c;
					
					}
				}
			}
			
				
		
			
}
?>