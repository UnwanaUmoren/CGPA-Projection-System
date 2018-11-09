</head>

<body>
<?php if (isset($_SESSION['luser']))include("includes/log.php")?>
<div class= "header">
	<div class = "main_header">
    	<div class = "h_l_c"></div>
        <div class = "h_con">
        	<div class = "logo">
            	<div class="main_l">
                </div>
            </div>
            <div class = "ttl">
            	<div class = "main_t"></div>
            </div>
            <div class="menu">
            	<ul>
                	<?php require("includes/menu.php")?>                    
                </ul>
            </div>
        </div>
        <div class = "h_r_c"></div>
    
    </div>
</div>
<div class= "con">