<?php  
	global $reg_status;
	global $level;
	global $semester;
	// = $_SESSION['reg_status'];
?>
<?php
		if ($reg_status == true){
				include ("/content_pages/system_content/sub_pages/project.php");		
			}else if($reg_status == false){
				include ("/content_pages/system_content/sub_pages/add_error.php");	
		}

	
?>