<?php session_start()?>
<?php require("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php $insert = new insert?>
<?php 
	if (isset($_POST['tsk']) && $_POST['tsk'] == "dump"){
		$fname = ucwords(mysqli_real_escape_string($link, htmlentities($_POST['fname'])));
		$mname = ucwords(mysqli_real_escape_string($link, htmlentities($_POST['mname'])));
		$lname = ucwords(mysqli_real_escape_string($link, htmlentities($_POST['lname'])));
		$year = $_POST['year'];
		$month = $_POST['month'];
		$day = $_POST['day'];
		$passport = $_FILES['passport']['tmp_name'];
		$level = $_POST['level'];
		$reg = strtoupper(mysqli_real_escape_string($link, htmlentities($_POST['reg'])));
		$fac = $_POST['fac'];
		$dep = $_POST['dep'];
		$moe = $_POST['moe'];
		$email = strtolower(mysqli_real_escape_string($link, htmlentities($_POST['email'])));
		$pass = mysqli_real_escape_string($link, htmlentities($_POST['pass']));
		
		
		$reg_parse = strtoupper($insert->reg_parse($reg));
		$full_date_of_birth = $year."-".$month."-".$day;
		$passport_path = "../passport/{$reg_parse}_pass.jpg";
		$passport_pathr= "/passport/{$reg_parse}_pass.jpg";
		$ins = $insert->insert_new_user($fname, $mname, $lname, $full_date_of_birth,$passport_pathr, $level, $reg, $fac, $dep, $moe, $email, $pass);
		if ($ins){
			move_uploaded_file($passport, $passport_path);
			$_SESSION['regOk'] = "true";
		}else{
			echo $reg_parse;
			
		}
		
		
	}else{
		header("location: http://www.projectionsystem.com");
	
	}




?>