<?php session_start()?>
<?php require("log/dcon.php")?>
<?php require("includes/c_construct_rt.php")?>
<?php require("includes/log_check.php")?>
<?php require("includes/page_check.php")?>
<?php require("includes/gen_header01.php")?>
<?php require("includes/owned_headers/rmgnt.php")?>
<?php require("includes/gen_header02.php")?>
<!--Content Starts-->
<?php
	$retrie = new retrieve;
	$insert = new insert;
	$pass_link = $_SESSION['pass_link'];
	$fname = $_SESSION['fname'];
	$lname = $_SESSION['lname'];
	$user = $_SESSION['luser'];
	$level = $_SESSION['level'];
	$age = $_SESSION['age'];
	$reg_status = $_SESSION['reg_status'];	
	$page =  $_SESSION['page'];
	$semester = $_SESSION['semester'];
	$in_reg_list2 = $_SESSION['in_reg_list2'];
?>
<div class="m_con_left">
	<div class="user">
    	<div class="l_h">
        	<h2>Active user</h2>            
        </div>
        <div class="u_con">
        	<div class="passport"><?php echo "<img src='{$pass_link}' alt='{$lname}, {$fname}' width='96' height='126' />"?></div>
        	<div class="user_info">
            	<div class="info_con">
                	<div class="r_w"><font size="-2" color="#FFFFFF">Reg: </font><?php echo $user?></div>
                    <div class="r_w"><font size="-2" color="#FFFFFF">Level: </font><?php echo $level?></div>
                    <div class="r_w"><font size="-2" color="#FFFFFF">Age: </font><?php echo $age?></div>
                    <div class="r_w"></div>
                </div>
            </div>
        </div>

    </div>
	<div class="tp">
    	<div class="l_h">
        	<h2>System Mode</h2>            
        </div>
        <?php
		
			$ac_S = "";
			$sys_ids = explode("/", $_SERVER["REQUEST_URI"]);
			unset ($sys_ids[0]);
			$active_system = $sys_ids[2];
			if ($active_system == "cmanagement"){
				$ac_S = "Course Management";
			}else if ($active_system == "rmanagement"){
				$ac_S = "Result Management";
			}else if ($active_system == "cgpaprojection"){
				$ac_S = "CGPA Projection";
			}
			echo "<p>$ac_S</p>";        
		?>
    </div>
    <div class="bt">
    	<div class="l_h">
        	<h2>System Tools</h2>
        </div>
        
        <div class="l_con">
			<?php 
                $Display = new displayCon;
                $ids = explode("/", $_SERVER["REQUEST_URI"]);
				unset ($ids[0]);
				$toolId = $ids[2];
                $Display->tools($toolId, ".php");
            ?>
        </div>        
    </div>
</div>
<div class="m_con_right">
	<div class="r_h"><h2><?php include ("/includes/label.php")?></h2></div>
    <?php 
		$semester = $_SESSION['semester'];
		$session = $_SESSION['session'];
		$level = $_SESSION['level'];
		$deptName = $_SESSION['dept'];
		$deptCode = $_SESSION['dept_code'];
		$user = $_SESSION['luser'];
		
		//page display
		include($page);
	?>
</div>

<!--Content ends-->
<?php require("includes/gen_footer.php")?>