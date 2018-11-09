<?php 
	session_start();
	if (isset($_SESSION["luser"])){
	 header("location: http://www.projectionsystem.com/home");
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CPS Login</title>
<link href="styles/log/content.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/shared/jquery.js"></script>
<script type="text/javascript" src="js/log/02.js"></script>
</head>

<body>
<div class="a_load">
	<div class="loader_con">
    	<div class="loader"></div>
    </div>
</div>
<div class="log_info"><p>Please Login to use the system tools</p></div>
    	<div class="frm">
        	<div class="main_frm">
            	<form>
                	<table border="0">
                      <tr>
                        <td colspan="2" id="err_con" ></td>
                      </tr>
                      <tr class="trr">
                        <td><label for="reg">REG :</label></td>
                        <td><input type="text" name="reg" id="reg"  placeholder="YY/FF/DD/XXX"/></td>
                      </tr>
                      <tr class="trr">
                        <td><label for="pass">Password :</label></td>
                        <td><input name="pass" type="password" id="pass" maxlength="14" /></td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td><input type="button" name="log" id="log" value="Login" /></td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                        	<div class="s_up">
                            	<a href="../signup">Sign Up</a>
                            </div>
                        
                        </td>
                      </tr>
                    </table>
            	</form>
            </div>
    	</div>
</body>
</html>
