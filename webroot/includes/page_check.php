<?php

	$pageID = basename($_SERVER["REQUEST_URI"]);
	$Display = new displayCon;
	$_SESSION['page'] = $Display->page($pageID, ".php");

?>