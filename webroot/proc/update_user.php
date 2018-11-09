<?php session_start()?>
<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php
	if (isset($_POST['tsk']) && $_POST['tsk']== "update"){
		$update = new update;
		$insert = new insert;
		$reg = $_POST['reg'];
		$toSend = array();
		if (isset($_POST['pass2'])){
			$toSend['pass2'] = $_POST['pass2'];
		}
		if (isset($_POST['email'])){
			$toSend['email'] = $_POST['email'];
		}
		if (isset($_POST['lname'])){
			$toSend['lname'] = $_POST['lname'];
		}
		if (isset($_POST['mname'])){
			$toSend['mname'] = $_POST['mname'];
		}
		if (isset($_POST['fname'])){
			$toSend['fname'] = $_POST['fname'];
		}
		if (isset($_FILES['passport']['tmp_name'])){
			$toSend['passport'] = $_FILES['passport']['tmp_name'];
		}
		if (isset($_POST['level'])){
			$toSend['level'] = $_POST['level'];
		}
		
		$length = count($toSend);
		
		for ($x= 0; $x<$length; $x++){
			if (isset($_POST['pass2'])){
				$update->updateUser($reg, "pass2", $_POST['pass2']);
				unset ($_POST['pass2']);
			}
			if (isset($_POST['email'])){
				$update->updateUser($reg, "email", $_POST['email']);
				unset ($_POST['email']);
			}
			if (isset($_POST['lname'])){
				$update->updateUser($reg, "lname", $_POST['lname']);
				unset ($_POST['lname']);
			}
			if (isset($_POST['fname'])){
				$update->updateUser($reg, "fname", $_POST['fname']);
				unset ($_POST['fname']);
			}
			if (isset($_POST['mname'])){
				$update->updateUser($reg, "mname", $_POST['mname']);
				unset ($_POST['mname']);
			}
			if (isset($_FILES['passport']['tmp_name'])){
				$passport = $_FILES['passport']['tmp_name'];
				$reg_parse = strtoupper($insert->reg_parse($reg));
				$passport_path = "../passport/{$reg_parse}_pass.jpg";
				if (file_exists($passport_path)){
					unlink($passport_path);
				}
				$upload = move_uploaded_file($passport, $passport_path);
				
				unset ($_FILES['passport']['tmp_name']);
			}
			if (isset($_POST['level'])){
				$update->updateUser($reg, "level", $_POST['level']);
				unset ($_POST['level']);
			}
		}
		$_SESSION['updateOK'] = "true";
		echo 1;
		
	}




?>