<?php
						$menu1 = "";
						$menu2 = "";
						$menu3 = "";
						$active_ids = explode("/", $_SERVER["REQUEST_URI"]);
						$active_ids2 = explode("/", $_SERVER["REQUEST_URI"]);
						unset ($active_ids[0]);
						$active_page = $active_ids[2];
						$active_page2 = $active_ids2[1];
						$lngth = count($active_ids2);
						if($lngth == 2 && $active_page2  == "" ){
							$menu1 = "<li><a id = 'active' href='http://www.projectionsystem.com'>Home</a><font>|</font></li>";
						}else{
							$menu1 = "<li><a href='http://www.projectionsystem.com'>Home</a><font>|</font></li>";
														
						}
						
						if ($active_page == "cmanagement" ){
							$menu2 = "<li><a id = 'active' href='http://www.projectionsystem.com/home/cmanagement'>Course Management</a><font>|</font></li>
                    <li><a href='http://www.projectionsystem.com/home/rmanagement'>Result Management</a><font>|</font></li>
                    <li><a href='http://www.projectionsystem.com/home/cgpaprojection'>CGPA Projection</a><font>|</font></li>";
							
						}else if ($active_page == "rmanagement"){
							$menu2 =  "<li><a href='http://www.projectionsystem.com/home/cmanagement'>Course Management</a><font>|</font></li>
                    <li><a  id = 'active' href='http://www.projectionsystem.com/home/rmanagement'>Result Management</a><font>|</font></li>
                    <li><a href='http://www.projectionsystem.com/home/cgpaprojection'>CGPA Projection</a><font>|</font></li>";
						}else if ($active_page == "cgpaprojection"){
							$menu2 = "<li><a href='http://www.projectionsystem.com/home/cmanagement'>Course Management</a><font>|</font></li>
                    <li><a href='http://www.projectionsystem.com/home/rmanagement'>Result Management</a><font>|</font></li>
                    <li><a  id = 'active' href='http://www.projectionsystem.com/home/cgpaprojection'>CGPA Projection</a><font>|</font></li>";
						}else{
							$menu2 = "<li><a href='http://www.projectionsystem.com/home/cmanagement'>Course Management</a><font>|</font></li>
                    <li><a href='http://www.projectionsystem.com/home/rmanagement'>Result Management</a><font>|</font></li>
                    <li><a href='http://www.projectionsystem.com/home/cgpaprojection'>CGPA Projection</a><font>|</font></li>";
							
						}
						if($lngth == 2 && $active_ids2[1] == "aboutus"){
							$menu3 = "<li><a id = 'active' href='http://www.projectionsystem.com/aboutus'>About Us</a><font></font></li>";						
						}else{
							$menu3 = "<li><a href='http://www.projectionsystem.com/aboutus'>About Us</a></li>";										
						}
						echo $menu1.$menu2.$menu3;
					
					?>