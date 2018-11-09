<?php session_start()?>
<?php
if(isset($_FILES['tmp_pic'])) //check uploaded file
    {
        //get file details we need
        $file_tmp_name    = $_FILES['tmp_pic']['tmp_name'];
        $file_size        = $_FILES['tmp_pic']['size'];
		$image_prop = getimagesize($file_tmp_name);
		if ($image_prop['mime']!= "image/jpeg"){
			echo "1";
		}else if ($image_prop['mime'] == "image/jpeg"){
			if ($image_prop['0']>0 && $image_prop['1'] >0){
				$allowed_size = (1024*30);//30kilobye  == 30720bytes
				$allowed_height = 126;
				$allowed_height = 96;
				if ($file_size > $allowed_size){
					echo "3";	
				}else if($file_size < $allowed_size){
					$get_con = file_get_contents($file_tmp_name);
					$con_encod = base64_encode($get_con);
					echo "<img src='data:".$image_prop['mime'].";base64,{$con_encod}' width=96 height=126 />";
				}
			}else{
				echo "2";	
			}			
		}
	}else{
		header("location: ../");
	
	}


?>