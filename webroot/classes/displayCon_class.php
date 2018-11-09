<?php //require("log/dcon.php")?>
<?php
	class displayCon {
		public
			function tools ($pageID, $ext){
				$path = "content_pages/tools/";
				$allTools = scandir($path,0);
				unset ($allTools[0], $allTools[1] );
				if (in_array($pageID.$ext, $allTools)){
					include ($path.$pageID.$ext);
				}
			}
			function page ($pageID, $ext){
				$path = "content_pages/system_content/";
				$pages = scandir($path,0);
				unset ($allTools[0], $allTools[1] );
				if (in_array($pageID.$ext, $pages)){
					return $path.$pageID.$ext;
				}else{
					header ("location: http://www.projectionsystem.com/e404");
					
				}
				
			}
	}
	
?>