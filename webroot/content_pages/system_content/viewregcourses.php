<?php
  global $reg_status;

	

 //= $_SESSION['reg_status'];?>

<?php 
	if ($reg_status == true){
		include ("/content_pages/system_content/sub_pages/view_reg.php");	
	}else if($reg_status == false){
		include ("/content_pages/system_content/sub_pages/add_error.php");	
	}

?>