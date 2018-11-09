<?php
	if (isset($_SESSION['regOk']) && $_SESSION['regOk'] == "true"){
		unset($_SESSION['regOk']);
	}
?>