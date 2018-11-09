<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php
	if (isset($_POST['id']) && $_POST['id'] == " update_level "){
		$level = $_POST['level'];
		$reg = $_POST['reg'];
		$update = new update;
		
		
		$updatLevel = $update->updateLevel($reg, $level);
		//echo $updatLevel;
	}
	
	


?>