<?php 
	$ac_t = "";
	$tool_id = basename($_SERVER["REQUEST_URI"]);
	if ($tool_id == "project"){
		$ac_t = "<a id='act_tool' href='http://www.projectionsystem.com/home/cgpaprojection/project'><b>Projection</b></a>";
	}else{
		$ac_t = "<a href='http://www.projectionsystem.com/home/cgpaprojection/project'><b>Projection</b></a>";	
	}
	echo $ac_t; 




?>