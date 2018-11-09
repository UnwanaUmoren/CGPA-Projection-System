<?php session_start()?>
<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php
$user = $_SESSION['luser'];
$semester = strtolower($_SESSION['semester']);
$drop = new drop;
if(isset($_POST['id']) && $_POST['id'] == "drop_courses"){
	$toDropcourses = $_POST['toDropCourses'];
	$c_code = "";
	$c_code .= implode("', '", $toDropcourses);
	$drop->drop_course($user, $semester, $c_code);
	$_SESSION['dropOK'] = 1;
	echo 1;
}else{
	header("location: ../");
	
}

?>