<?php session_start()?>
<?php require("log/dcon.php")?>
<?php require("includes/c_construct_rt.php")?>
<?php require("includes/ab_page_check.php")?>
<?php require("includes/gen_header01.php")?>
<?php require("includes/owned_headers/aboutus.php")?>
<?php require("includes/gen_header02.php")?>
<!--Content Starts-->
<div class="aCon">
    <div class="tab">
    	<div class="mtabs">
        	<?php
            	$pageID = basename($_SERVER["REQUEST_URI"]);
				$link = "";
				if ($pageID == "aboutSystem"){
					$link = "<a href='/aboutus/aboutSystem' id='tact'><div>About system</div></a>
							<a href='/aboutus/aboutDevelopers'><div>System developers</div></a>";
				}else if ($pageID == "aboutDevelopers"){
					$link = "<a href='/aboutus/aboutSystem'><div>About system</div></a>
							<a href='/aboutus/aboutDevelopers' id='tact'><div>System developers</div></a>";
				}else{
					$link = "<a href='/aboutus/aboutSystem'><div>About system</div></a>
							<a href='/aboutus/aboutDevelopers'><div>System developers</div></a>";
				}
				echo $link;
			
			?>

        
        </div>
    </div>
    <div class="mpage">
		<?php
			$page =  $_SESSION['page'];
        	include($page); 
		
		
		?>
    
    </div>
</div>
<!--Content ends-->
<?php require("includes/gen_footer.php")?>