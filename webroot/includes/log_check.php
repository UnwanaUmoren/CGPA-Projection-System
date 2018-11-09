<?php 
if (isset($_SESSION['luser'])){
	$user = $_SESSION['luser'];
	$retrieve = new retrieve;
	$ruser = $retrieve->logged_user($user);
	if ($user == $ruser){	
	}else if ($user != $ruser){
		header ("location: http://www.projectionsystem.com/login");	
	}
}else{
	header("location:  http://www.projectionsystem.com/login");	
}
?>