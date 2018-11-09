<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>
<?php include("log/dcon.php")?>
<body>
	<?php
		$menu = "";
						$active_ids = explode("/", "http://www.projectionsystem.com");
						//unset ($active_ids[0]);
						$active_page = $active_ids[2];
						$lngth = count($active_ids);
						if ($lngth == 3 && $active_page == "www.projectionsystem.com"){
							echo "jjjj";
							
							
						}else if ($active_page == "cmanagement"){
							$menu = "Course Management";
						}else if ($active_page == "rmanagement"){
							$menu = "Result Management";
						}else if ($active_page == "cgpaprojection"){
							$menu = "Result Management";
						}
						print_r($active_ids);
	
	?>
    <?php
		$b = "SELECT grade_point FROM result_summary WHERE level < 200 AND reg_number = '11/ee/ff/124'";
						$sqq =$link->query($b);
						$tg = 0.000;
						while($R = $sqq->fetch_assoc()){
							$tg = $tg + $R['grade_point'];
							
						}
						echo $tg;
    
		
	
	?>
                                <?php
								include ("test2.php");							?>
</body>
</html>