<?php $retrie = new retrieve?>
<div class="passport">
	<div class="pass_con">
    	<div class="main_pass"></div>
    </div>
</div>
<div class="dump_ajax_loader">
	<div class="loader">
    </div>
</div>
<div class="main_con">
	<div class="ttl">
    	<div class="main_ttl">Sign up form for new user</div>
    </div>
    <div class="fm_con">
    	<div class="main_fm_con">
        	<div class="hnt"><p>Please fill in each and every field with the correct details for a successful registration</p></div>
            <div class="main_fm">
            	<form enctype="multipart/form-data">
                    <table border="0">
                      <tr>
                        <td><label for="fname">First Name:</label></td>
                        <td><input type="text" id="fname" name="fname" placeholder="First Name" maxlength="20"/></td>
                        <td id="e1">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="mname">Middle Name:</label></td>
                        <td><input name="mname" type="text" id ="mname" placeholder="Middle Name" maxlength="20"/></td>
                        <td id="e2">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="lname">Last Name:</label></td>
                        <td><input name="lname" type="text" id ="lname" placeholder="Last Name" maxlength="20"/></td>
                        <td id="e3">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="dob">Birth Date:</label></td>
                        <td class="s">
                            <select name="year" id="year">
                            	<option selected="selected">Year</option>
                                 <?php $retrie->year_generator()?>
                            </select>
                        	<select name="month" id ="month">
                            	<option selected="selected">Month</option>
                                <option value="1">January</option>
                                <option value="2">Febuary</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        	<select name="day" id="day">
                            	<option selected="selected">Day</option>
                                <?php $retrie->day_generator()?>
                            </select>
                        </td>
                        <td id="e4">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="pic">Passport:</label></td>
                        <td><input name="pic" type="file" id ="pic" /></td>
                        <td id="e5">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="level">Level:</label></td>
                        <td class="s">
                        	<select id="level" name="level">
                            	<option selected="selected">100</option>
                                <option>200</option>
                                <option>300</option>
                                <option>400</option>
                                <option>500</option>
                                <option>600</option>
                                <option>700</option>
                                <option>800</option>
                                <option>900</option>
                                <option>1000</option>
                            </select>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="reg">Registration Number:</label></td>
                        <td><input name="reg" type="text" id ="reg" placeholder="YY/FF/DD/XXXX"/></td>
                        <td id="e6">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="fac">Faculty:</label></td>
                        <td>
                        	<select name="fac" id="fac">
                              <option selected="selected">Faculty</option>
                              <?php 
							  	$s = $retrie->faculty();
								while($sq = $s->fetch_assoc()){
									echo "<option value='".$sq['code_of_faculty']."'>".$sq['faculty_name']."</option>";	
								}  
							  ?>
                        	</select>
                        </td>
                        <td id="e7">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="dep">Department:</label></td>
                        <td>
                        	<select name="dep" id="dep">
                              <option selected="selected">Department</option>
                        	</select>
                        </td>
                        <td id="e8">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="mode_of_entry">Mode Of Entry:</label></td>
                        <td class="s">
                        	<select name="moe" id="moe">
                              <option selected="selected">UTME</option>
                              <option>DE</option>
                        	</select>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="email">Email Address:</label></td>
                        <td><input name="email" type="text" id ="email" placeholder="youremailname@example.com"/></td>
                        <td id="e9">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="pass1">Password:</label></td>
                        <td><input name="pass1" type="password" id ="pass1" placeholder="Password" maxlength="20"/></td>
                        <td id="e10">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                        <td><label for="pass2">Repeat Password:</label></td>
                        <td><input name="pass2" type="password" id ="pass2" placeholder="Password Repeat" maxlength="20"/></td>
                        <td id="e11">&nbsp;</td>
                      </tr>
                      <tr class="sp"><td></td></tr>
                      <tr>
                      	<td></td>
                      	<td><input type="button" value="Submit" id="sub"/></td>
                      </tr>
                    </table>
				</form>
            
            </div>
        </div>
    
    
    
    </div>
   


</div>