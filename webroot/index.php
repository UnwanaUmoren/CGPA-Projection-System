<?php session_start()?>
<?php require("log/dcon.php")?>
<?php require("includes/c_construct_rt.php")?>
<?php include("includes/session_check.php")?>
<?php require("includes/gen_header01.php")?>
<?php require("includes/owned_headers/indx.php")?>
<?php require("includes/gen_header02.php")?>

<!--Content Starts-->
<?php
	//require("includes/c_construct.php");
?>
<div class="a_load">
	<div class="loader"></div>
</div>
	<div class="rw1">
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
        <div class="sld1">
        
        </div>
    
    </div>
    
    <div class="rw2">
    	<div class="info">
        	<div class="main_info">
                <div class="info_id">
                	<a href="http://www.projectionsystem.com/home/cmanagement">
                    	<div class="m1_id"></div>
                    </a>
                </div>
                <div class="info_ttl">
                	<a href="http://www.projectionsystem.com/home/cmanagement">Course Management</a>
                </div>
                <div class="info_con">
                	<p>Enter here to manage your courses</p>
                </div>
            </div>
            
            <div class="main_info">
            	<div class="info_id">
                	<a href="http://www.projectionsystem.com/home/rmanagement">
                    	<div class="m2_id"></div>
                    </a>
                </div>
                <div class="info_ttl">
                	<a href="http://www.projectionsystem.com/home/rmanagement">Result Management</a>
                </div>
                <div class="info_con">
                	<p>Enter here to manage your results</p>
                </div>
            </div>
            <div class="main_info">
            	<div class="info_id">
                	<a href="http://www.projectionsystem.com/home/cgpaprojection">
                    	<div class="m3_id"></div>
                    </a>
                </div>
                <div class="info_ttl"><a href="http://www.projectionsystem.com/home/cgpaprojection">CGPA Projection</a></div>
                <div class="info_con">
                	<p>Enter here to use the CGPA projection system</p>
                </div>
            </div>
        </div>
    </div>
<!--Content ends-->
<?php require("includes/gen_footer.php")?>