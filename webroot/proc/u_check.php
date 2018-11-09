<?php require("../includes/c_construct.php")?>
<?php require("../log/dcon.php")?>
<?php session_start()?>
<?php
	if(!$_POST["chk_usr"]){
		header("location: ../");	
	}
	$reg = $_POST["chk_usr"];
	$validate  = new validation;
	$status = $validate->user_exist($reg);
	echo $status;
	






?>