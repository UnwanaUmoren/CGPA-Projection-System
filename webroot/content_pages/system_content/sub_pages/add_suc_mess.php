<?php 
	$semester = $_SESSION['semester'];
	$level = $_SESSION['level'];
	if (isset($_SESSION['addOK'])){
		unset($_SESSION['addOK']);
	}
?>
<div class="suc_con">
	<div class="con">
    	<p>Add course operation successful</p>
        <div class="bt"><div class="bt_con2"><a href="http://www.projectionsystem.com/home/cmanagement/viewregcourses">View updated registered courses</a></div></div>
    </div>
</div>