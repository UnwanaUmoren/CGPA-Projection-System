<?php
$semester = $_SESSION['semester'];
$f = $retrieve->check_failed_courses($user, $semester);
global $portalStatus;
global $reg_status;
if ($portalStatus == "opened"){
	if ($f == 0){
		if ($reg_status == true){
		  if (isset($_SESSION['dropOK'])){
			  include ("/content_pages/system_content/sub_pages/drop_suc_mess.php");
		  }else{
			  include ("/content_pages/system_content/sub_pages/drop.php");	
		  }				
		}else if($reg_status == false){
			include ("/content_pages/system_content/sub_pages/add_error.php");
		}	
	}else{
		if ($reg_status == true){
		  if (isset($_SESSION['dropOK'])){
			  include ("/content_pages/system_content/sub_pages/drop_suc_mess.php");
		  }else{
			  include ("/content_pages/system_content/sub_pages/drop_with_failed.php");	
		  }				
		}else if($reg_status == false){
			include ("/content_pages/system_content/sub_pages/add_error.php");
		}	
	}
}else if ($portalStatus == "closed"){
	include ("/content_pages/system_content/sub_pages/portal_err.php");
}
?>