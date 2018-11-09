<?php require("../includes/c_construct.php")?>
<?php require("../log/dcon.php")?>
<?php session_start()?>
<?php
	if(!$_POST["tsk"]){
		header("location: http://www.projectionsystem.com");	
	}
	$validate  = new validation;
	$retrieveLog = new retrieve; 
	if (isset($_POST['tsk'] ) && $_POST["tsk"] == "log_send"){
		$reg = strtoupper($_POST['d1']);
		$pass = $_POST['d2'];
		
		$status = $validate->enter($reg, $pass);	
		if ($status == 2){
			echo "User not found";
		}else if ($status == 4){
			echo "User password incorrect";
		}else if ($status == 3){
			$_SESSION["luser"] = $retrieveLog->logged_user($reg);
			$validate->send_log($reg);
			echo "3";
		}
		
	}
?>
