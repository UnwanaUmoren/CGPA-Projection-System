
<?php
	global $in_reg_list2;
	$result = new result;
	$result_status = $result->last_semester_result_isReady($user, $semester, $level);
	if ($in_reg_list2 == true ){
		if ($result_status == false){
			include ("/content_pages/system_content/sub_pages/result_err.php");		
		}else if ($result_status == true){
			include ("/content_pages/system_content/sub_pages/view_prev.php");
		}	
	}else if ($in_reg_list2 == false){
		if ($semester == "first" && $level == 100){
			include ("/content_pages/system_content/sub_pages/result_err.php");		
		}else{
			include ("/content_pages/system_content/sub_pages/result_err2.php");
		}
		
	}
	
	


?>