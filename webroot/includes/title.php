<?php 
	$retri = new retrieve;
	$pageID = basename($_SERVER["REQUEST_URI"]);
	$page_properties = $retri->title($pageID);
	$_SESSION['page_label'] = $page_properties['label'];
	echo $page_properties['title']. " | Projection System";

?>