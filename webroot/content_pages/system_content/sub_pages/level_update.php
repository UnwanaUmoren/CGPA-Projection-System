<script type="text/javascript" src="/js/home/update.js"></script>
<div class="update">
	<input type="hidden" id="cLevel" value="<?php echo $level?>">
    <input type="hidden" id="reg" value="<?php echo $user?>">
    <div class="con">
    	<p>Welcome to new session, please update your level</p>
        <div class="sel_level">
        	<div class="con">
            	<table width="200" border="0" cellpadding="0" cellspacing="0">
                  <tr height="50">
                    <td width="120">
                        <select>
                        	<option selected="selected">Select level</option>
                            <?php
	
								for ($x=$level+100; $x<700; $x += 100){
									echo "<option>$x</option>";
								};
							?>
                        </select>
                    </td>
                    <td>
                    	<input type="button" value="Update" id="update">
                    </td>
                  </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="err">
	<div class="con"></div>
</div>