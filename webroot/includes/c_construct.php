<?php 
function setClass($class){
	    include ('../classes/' . $class . '_class.php');
}
spl_autoload_register('setClass');
?>