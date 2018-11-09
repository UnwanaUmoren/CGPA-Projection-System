<?php session_start()?>
<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php
$user = $_SESSION['luser'];
$level = $level = $_SESSION['level'];
$semester = strtolower($_SESSION['semester']);
$insert = new insert;
if(isset($_POST['id']) && $_POST['id'] == "add_courses"){
	$courses = $_POST['newCourses'];
	$s = count($courses);
		for ($i=0; $i<$s ;$i++){
			$c_code =  $_POST['newCourses'][$i];
			$insert->reg_course($user, $level, $semester, $c_code);
		}
		$_SESSION['addOK'] = 1;
		echo 1;
}else{
	header("location: ../");
	
}

?>