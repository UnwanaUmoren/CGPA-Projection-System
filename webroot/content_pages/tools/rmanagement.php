<?php 
	$ac_t = "";
	$tool_id = basename($_SERVER["REQUEST_URI"]);
	if ($tool_id == "viewprev"){
		$ac_t = "<a id='act_tool' href='http://www.projectionsystem.com/home/rmanagement/viewprev'><b>View previous semester</b></a>
<a href='http://www.projectionsystem.com/home/rmanagement/viewspecific'>View specific semester</a>";
	}else if ($tool_id == "viewspecific"){
		$ac_t = "<a href='http://www.projectionsystem.com/home/rmanagement/viewprev'><b>View previous semester</b></a>
<a id='act_tool' href='http://www.projectionsystem.com/home/rmanagement/viewspecific'>View specific semester</a>";
	}else{
		$ac_t = "<a href='http://www.projectionsystem.com/home/rmanagement/viewprev'><b>View previous semester</b></a>
<a href='http://www.projectionsystem.com/home/rmanagement/viewspecific'>View specific semester</a>";
		
	}
	echo $ac_t; 




?>

<!--<a href='http://www.projectionsystem.com/home/cmanagement/regcourses'>Register Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/addcourses'>Add Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/dropcourses'>Drop Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/viewregcourses'>View registered Courses</a>-->