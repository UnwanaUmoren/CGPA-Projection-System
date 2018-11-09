<?php 
	$semester = $_SESSION['semester'];
	$level = $_SESSION['level'];
?>
<div class="suc_con">
	<div class="con">
   
    	<p>You have successfuly registered your <?php echo $level?> level <?php echo strtolower($semester) ?> semester courses</p>
        <div class="bt"><div class="bt_con"><a href="http://www.projectionsystem.com/home/cmanagement/viewregcourses">View registered courses</a></div></div>
    </div>
</div>