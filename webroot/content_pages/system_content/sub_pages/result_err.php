<div class="suc_con">
	<div class="con">
   	<?php
    	if ($level == 100 && strtolower($semester)== "first"){
			echo "<p>Sorry but level {$level} students can only check their results in second semester</p>";
		}else{
			if (strtolower($semester)== "first"){
				$newLevel = $level - 100;
				echo "
				<p>Your result for {$newLevel} level second semester may be ready but not released yet.</p>
				<p>You will have to try again when your result is released.</p>";
			}else if (strtolower($semester)== "second"){
				echo "
				<p>Your result for {$level} level first semester may be ready but not released yet.</p>
				<p>You will have to try again when your result is released.</p>";
				
			}
		}
		
	?>
    </div>
</div>