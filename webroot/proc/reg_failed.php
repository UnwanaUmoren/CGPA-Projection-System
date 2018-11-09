<?php session_start()?>
<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php
	if (isset($_POST['id']) && $_POST['id'] == " r_f "){
		$insert = new insert;
		$st = 0;
		$reg = $_POST['reg'];
		$semester = $_POST['semester'];
		$level = $_POST['level'];
		$semester = $_POST['semester'];
		$toRegCourses = $_POST['regCourses'];
		$OutCourses = $_POST['OutCourses'];
		
		//send all ToReg courses to database
		$s = count($_POST['regCourses']);
		if ($s != 0){
			for ($i=0; $i<$s ;$i++){
				$c_code =  $_POST['regCourses'][$i];
				$snd = $insert->reg_course($reg, $level, strtolower($semester), $c_code);
			}
			if ($snd){
				$_SESSION['reg_status'] = true;
				$st = 1;
			}else{
				$st = 0;
				if (isset($_SESSION['reg_status'])){
					unset($_SESSION['reg_status']);
				}
			}
			
		}
		
		
		//send all OUT courses to database
		$s2 = count($_POST['OutCourses']);
		if ($s2 != 0){
			for ($y=0; $y<$s2 ;$y++){
			$c_code =  $_POST['OutCourses'][$y];
			$snd2 = $insert->out_course($reg, strtolower($semester), $c_code);
			}
			if ($snd2){
				$_SESSION['reg_status'] = true;
				$st = 1;
			}else{
				$st = 0;
				if (isset($_SESSION['reg_status'])){
					unset($_SESSION['reg_status']);
				}
			}
			if ($st ==1){
				echo 1;
			}
			//$_SESSION['reg_status'] = true;
		}else if ($s2 == 0){
			echo 1;
		}
		
		
		
	}
 
?>