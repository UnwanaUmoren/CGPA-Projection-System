<?php session_start()?>
<?php require("log/dcon.php")?>
<?php require("includes/c_construct_rt.php")?>
<?php require("includes/gen_header01.php")?>
<?php require("includes/owned_headers/signup.php")?>
<?php require("includes/gen_header02.php")?>
<!--Content Starts-->

<?php 
	if (isset($_SESSION['regOk']) && $_SESSION['regOk'] == "true"){
		include ("content_pages/sign_up/succ_mess.php");	
	}else{
		if (isset($_SESSION["luser"])){
				unset($_SESSION["luser"]);
				header ("location: http://www.projectionsystem.com/signup");
		}
		
		include ("content_pages/sign_up/reg_form.php");	
	}
?>

<!--Content ends-->
<?php require("includes/gen_footer.php")?>