<?php
	if (!isset($_GET['pid'])){
		header("location: http://www.projectionsystem.com/aboutus/aboutSystem");
	}else{
		$pageID = basename($_SERVER["REQUEST_URI"]);
		$Display = new displayCon;
		$_SESSION['page'] = $Display->page($pageID, ".php");
	}

?>