<?php session_start()?>
<?php include("log/dcon.php")?>
<?php
	if ($_GET['p']){
		$logStatus = mysqli_real_escape_string($link, htmlentities($_GET['p']));
		if ($logStatus == 1){
			if (isset($_SESSION["luser"])){
				unset($_SESSION["luser"]);
				//header("location: http://www.projectionsystem.com");	
			}
			if (isset($_SESSION['addOK'])){
				unset($_SESSION['addOK']);
				//header("location: http://www.projectionsystem.com/home/cmanagement/addcourses");	
			}
			if (isset($_SESSION['dropOK'])){
				unset($_SESSION['dropOK']);
				//header("location: http://www.projectionsystem.com");
			}
			if (isset($_SESSION['reg_status'])){
				
				unset($_SESSION['reg_status']);
			}
			if (isset($_SESSION['semester'])){
				unset($_SESSION['semester']);
				
			}
			header("location: http://www.projectionsystem.com");	
		}else if ($logStatus == 2){
			if (isset($_SESSION['addOK'])){
				unset($_SESSION['addOK']);
				header("location: http://www.projectionsystem.com/home/cmanagement/addcourses");	
			}
		
		}else if ($logStatus == 3){
			if (isset($_SESSION['dropOK'])){
				unset($_SESSION['dropOK']);
				header("location: http://www.projectionsystem.com/home/cmanagement/dropcourses");	
			}
		}else{
			header("location: http://www.projectionsystem.com");
		}
		
	}





?>