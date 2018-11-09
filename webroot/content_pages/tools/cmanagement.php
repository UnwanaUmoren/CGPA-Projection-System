<?php 
	$ac_t = "";
	$tool_id = basename($_SERVER["REQUEST_URI"]);
	if ($tool_id == "regcourses"){
		$ac_t = "<a id='act_tool' href='http://www.projectionsystem.com/home/cmanagement/regcourses'><b>Register Courses</b></a>
<a href='http://www.projectionsystem.com/home/cmanagement/addcourses'>Add Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/dropcourses'>Drop Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/viewregcourses'>View registered Courses</a>";
	}else if ($tool_id == "addcourses"){
		$ac_t = "<a href='http://www.projectionsystem.com/home/cmanagement/regcourses'>Register Courses</a>
<a id='act_tool' href='http://www.projectionsystem.com/home/cmanagement/addcourses'><b>Add Courses</b></a>
<a href='http://www.projectionsystem.com/home/cmanagement/dropcourses'>Drop Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/viewregcourses'>View registered Courses</a>";
	}else if ($tool_id == "dropcourses"){
		$ac_t = "<a href='http://www.projectionsystem.com/home/cmanagement/regcourses'>Register Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/addcourses'>Add Courses</a>
<a id='act_tool' href='http://www.projectionsystem.com/home/cmanagement/dropcourses'><b>Drop Courses</b></a>
<a href='http://www.projectionsystem.com/home/cmanagement/viewregcourses'>View registered Courses</a>";
	}else if ($tool_id == "viewregcourses"){
		$ac_t = "<a href='http://www.projectionsystem.com/home/cmanagement/regcourses'>Register Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/addcourses'>Add Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/dropcourses'>Drop Courses</a>
<a id='act_tool' href='http://www.projectionsystem.com/home/cmanagement/viewregcourses'><b>View registered Courses</b></a>";
	}else{
		$ac_t = "<a href='http://www.projectionsystem.com/home/cmanagement/regcourses'>Register Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/addcourses'>Add Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/dropcourses'>Drop Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/viewregcourses'>View registered Courses</a>";
		
	}
	echo $ac_t; 




?>

<!--<a href='http://www.projectionsystem.com/home/cmanagement/regcourses'>Register Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/addcourses'>Add Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/dropcourses'>Drop Courses</a>
<a href='http://www.projectionsystem.com/home/cmanagement/viewregcourses'>View registered Courses</a>-->