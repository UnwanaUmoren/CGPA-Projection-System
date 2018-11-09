<?php $retrieve = new retrieve?>
<?php
	$st_all = $retrieve->full_details($user);
	$det = $st_all->fetch_assoc();
	

	
	$fname = $det['fname']; 
	$mname = $det['mname'];
	$lname = $det['lname'];
	$level = $det['level'];
	$pass_link = $det['passport_url'];
	$email = $det['email'];
	$semester = $_SESSION['semester'];	
		
	$levelUpdate = $det['level_update'];

?>
<input type="hidden" id="cLevel" value="<?php echo $level?>">
<div class="passport">
	<div class="pass_con">
    	<div class="main_pass">
        	<img src="<?php echo $pass_link ?>" width='96' height='126'/>
        </div>
    </div>
    <div class="resetBtCon">
    	<div class="mainBt">
       		<input type="button" value="Reset"/>
        </div>
    </div>
</div>
<input type="hidden" value="<?php echo $user ?>" id="ActUser"/>
<div class="dump_ajax_loader">
	<div class="loader">
    </div>
</div>
<div class="main_con">
	<div class="ttl">
    	<div class="main_ttl">Edit Profile</div>
    </div>
    <div class="fm_con">
    	<div class="main_fm_con">
        	<div class="hnt"><p>Please fill in each and every field with the correct details for a successful registration</p></div>
            <div class="main_fm">
            	<form enctype="multipart/form-data">
                    <table border="0">
                      <tr>
                        <td><label for="fname">First Name:</label></td>
                        <td><input type="text" id="fname" name="fname" placeholder="First Name" maxlength="20" Value = "<?php echo $fname ?>"/></td>
                        <td id="e1">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="mname">Middle Name:</label></td>
                        <td><input name="mname" type="text" id ="mname" placeholder="Middle Name" maxlength="20" Value = "<?php echo $mname ?>"/></td>
                        <td id="e2">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="lname">Last Name:</label></td>
                        <td><input name="lname" type="text" id ="lname" placeholder="Last Name" maxlength="20" Value = "<?php echo $lname ?>"/></td>
                        <td id="e3">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="pic">Passport:</label></td>
                        <td><input name="pic" type="file" id ="pic" /></td>
                        <td id="e4">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <?php
					  	if ($level > 100){
							if ($semester == "first"){
								if($levelUpdate == '0'){
									echo " <tr>
									<td><label for='level'>Level:</label></td>
									<td class='s'>
										<select id='level' name='level'>";
											
												for ($x=$level+100; $x<700; $x += 100){
													echo "<option>$x</option>";
												};	
									echo "</select>
											</td>
											<td id='e5'>&nbsp;</td>
										  </tr>
										 <tr class='sp'><td></td></tr>";
								}	
							}
						}else if(($level == 100)){
							if ($semester == "first"){
								if($levelUpdate == '0'){
									echo " <tr>
									<td><label for='level'>Level:</label></td>
									<td class='s'>
										<select id='level' name='level'>";
											
												for ($x=$level+100; $x<700; $x += 100){
													echo "<option>$x</option>";
												};
											
									echo "</select>
											</td>
											<td id='e5'>&nbsp;</td>
										  </tr>
										 <tr class='sp'><td></td></tr>";
										}	
							}
						}

                      ?>
                      <tr>
                        <td><label for="email">Email Address:</label></td>
                        <td><input name="email" type="text" id ="email" placeholder="youremailname@example.com" value="<?php echo $email ?>"/></td>
                        <td id="e6">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="pass1">Old Password:</label></td>
                        <td><input name="pass1" type="password" id ="pass1" placeholder="Old Password" maxlength="20"/></td>
                        <td id="e7">&nbsp;</td>
                      </tr>
                       <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="pass1">New Password:</label></td>
                        <td><input name="pass1" type="password" id ="pass2" placeholder="New Password" maxlength="20"/></td>
                        <td id="e8">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="pass2">Repeat New Password:</label></td>
                        <td><input name="pass2" type="password" id ="pass3" placeholder="New Password Repeat" maxlength="20"/></td>
                        <td id="e9">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                      	<td></td>
                      	<td><input type="button" value="Update" id="sub"/></td>
                      </tr>
                    </table>
				</form>
            </div>
        </div>
    </div>
</div>