<?php //require("../log/dcon.php")?>
<?php
	class validation {
		public
			function enter($reg, $pass){
				global $link;
				$u_found = 0;
				$s = "SELECT reg FROM student WHERE reg = '$reg'";
				$sq = $link->query($s);
				$sqr = $sq->num_rows;
				$s2 = "SELECT reg FROM student WHERE reg = '$reg' AND pass_w = '$pass'";
				$sq2 = $link->query($s2);
				$sqr2 = $sq2->num_rows;
				if ($sqr == 1){
					$u_found = 1; //found user
					
				}else if ($sqr == 0){
					return 2; //no user found
				}
				
				if ($u_found == 1 && $sqr2 == 1){
					return 3; //password and username matched
				}	
				else if ($u_found == 1 && $sqr2 == 0){
					return 4; // passord incorrect for user
				}			
			}
			function send_log($reg){
				global $link;
				$current = time();
				$d = "SELECT reg FROM last_log WHERE reg = '$reg'";
				$dp = $link->query($d);
				if ($dp){
					$dpe = $dp->num_rows;
					if ($dpe == 0){
						$in = "INSERT INTO last_log SET
							new = '$current', 
							old = '$current',
							reg = '$reg'";
						$inq = $link->query($in);
					}
					if ($dpe == 1){
						$lq = "UPDATE last_log SET
	old=(SELECT new FROM (SELECT new FROM last_log WHERE reg='$reg') AS m WHERE reg='$reg'), 
	new = '$current' WHERE reg='$reg'";
						$sq = $link->query($lq);
					
					}
					
					
					
				}
				
				
				
			}
			function user_exist($reg){
				global $link;
				$u_found = 0;
				$s = "SELECT reg FROM student WHERE reg = '$reg'";
				$sq = $link->query($s);
				$sqr = $sq->num_rows;
				if ($sqr == 1){
					$u_found = 1; //found user
				}else{
					$u_found = 0; //user not found
				}
				return $u_found;
				
			}
			
	}
?>