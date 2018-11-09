<?php //require("../log/dcon.php")?>
<?php
class drop{
	public
		function drop_course($reg, $semester, $cCode){
			global $link;
			if ($semester=="first"){
				$ins = "DELETE FROM first_semester_reg_courses WHERE course_code IN ('$cCode') AND reg_number = '$reg'";	
			}else {
				$ins = "DELETE FROM second_semester_reg_courses WHERE course_code IN ('$cCode') AND reg_number = '$reg'";
			}
			$st_query_run2 = $link->query($ins);			
		}
		
}