<?php session_start()?>
<?php require("log/dcon.php")?>
<?php require("includes/c_construct_rt.php")?>
<?php require("includes/log_check.php")?>
<?php require("includes/gen_header01.php")?>
<?php require("includes/owned_headers/edit.php")?>
<?php require("includes/gen_header02.php")?>
<!--Content Starts-->

<?php 
	if (isset($_SESSION['updateOK']) && $_SESSION['updateOK'] == "true"){
		include ("content_pages/edit_p/succ_mess.php");	
	}else{		
		include ("content_pages/edit_p/edit_form.php");	
	}
?>

<!--Content ends-->
<?php require("includes/gen_footer.php")?>