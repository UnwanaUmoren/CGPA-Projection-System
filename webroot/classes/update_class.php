<?php // require("/log/dcon.php")?>
<?php
class update{
	public
	
		function updateLevel($reg, $level){
			global $link;
			$s = "UPDATE `student` SET 
				level = '$level',
				level_update = '1' WHERE reg= '$reg'";
			$sq  = $link->query($s);
			if ($sq){
				return 1;
			}
			
		}
		function UnsetLevel($reg, $level){
			global $link;
			$e = "SELECT COUNT(*) vv FROM student WHERE reg= '$reg' AND level_update = '1'";
			$eq = $link->query($e);
			$c = $eq->num_rows;
			if ($c == 1){
				$s = "UPDATE `student` SET 
				level_update = '0' WHERE reg= '$reg'";
				$sq  = $link->query($s);
				if ($sq){
					return 1;
				}
			}
			
			
		}
		function updateUser($reg, $taskName, $taskValue){
			global $link;
			if ($taskName == "pass2"){
				$t = "UPDATE `student` SET
				pass_W = '$taskValue' WHERE reg = '$reg'";
				$tq = $link->query($t);
			}else if ($taskName == "fname"){
				$t = "UPDATE `student` SET
				fname = '$taskValue' WHERE reg = '$reg'";
				$tq = $link->query($t);
			}else if ($taskName == "lname"){
				$t = "UPDATE `student` SET
				lname = '$taskValue' WHERE reg = '$reg'";
				$tq = $link->query($t);
			}else if ($taskName == "mname"){
				$t = "UPDATE `student` SET
				mname = '$taskValue' WHERE reg = '$reg'";
				$tq = $link->query($t);
			}else if ($taskName == "level"){
				$t = "UPDATE `student` SET 
				level = '$taskValue',
				level_update = '1' WHERE reg = '$reg'";
				$tq = $link->query($t);
			}
		}
		
}