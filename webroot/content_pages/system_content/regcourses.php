<?php
	
	$semester = $_SESSION['semester'];
	$f = $retrieve->check_failed_courses($user, $semester);
	global $portalStatus;
	global $reg_status;
	if ($portalStatus == "opened"){
		if ($f == 0){
			if ($reg_status == true){
				include ("/content_pages/system_content/sub_pages/cmgnt_suc_mess.php");			
			}else if($reg_status == false){
				include ("/content_pages/system_content/sub_pages/reg.php");	
			}	
		}else{
			if ($reg_status == true){
				include ("/content_pages/system_content/sub_pages/cmgnt_suc_mess.php");	
			}else if($reg_status == false){
				include ("/content_pages/system_content/sub_pages/reg_with_failed_courses.php");
			}
		}
	}else if ($portalStatus == "closed"){
		include ("/content_pages/system_content/sub_pages/portal_err.php");
	}
?>