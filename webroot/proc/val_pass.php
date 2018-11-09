<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php
	if (isset($_POST['id']) && $_POST['id']== "c_pass"){
		$oldpass = $_POST['pass1'];
		$reg = $_POST['reg'];
		
		$check = "SELECT pass_w FROM student WHERE reg = '$reg' AND pass_w = '$oldpass'";
		$checkQ = $link->query($check);
		$num = $checkQ->num_rows;
		if ($num == 1){
			//password_correct
			echo 1;
		}else if ($num == 0){
			//password_wrong
			echo 0;
		}
		
	}




?>