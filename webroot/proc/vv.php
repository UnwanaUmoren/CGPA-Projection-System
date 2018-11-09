<?php session_start()?>
<?php
if(isset($_FILES['tmp_pic'])) //check uploaded file
    {
		if (isset($_SESSION['tmp_pic'])){
			$pic = $_SESSION['tmp_pic'];
			unlink($pic);
			unset($_SESSION['tmp_pic']);
			
		}
        //get file details we need
        $file_tmp_name    = $_FILES['tmp_pic']['tmp_name'];
        $file_name        = $_FILES['tmp_pic']['name'];
        $file_size        = $_FILES['tmp_pic']['size'];
        $file_type        = $_FILES['tmp_pic']['type'];
        $file_error       = $_FILES['tmp_pic']['error'];
		

		$rn = rand(1,200);
		$rn2 = rand(1,500);
		$fpath = "../tmp/".$rn2."_sample_".$rn.".png";
		$rpath = "tmp/".$rn2."_sample_".$rn.".png";
		$r = move_uploaded_file($file_tmp_name, $fpath);
		if ($r){
			$_SESSION['tmp_pic'] = $fpath;
			echo $rpath;
			
		}else{
			die("file not uploaded");
			
		}
	}else{
		header("location: ../");
	
	}


?>