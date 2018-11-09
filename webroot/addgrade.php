<?php require("log/dcon.php")?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Add grade</title>
<style>
body {
	margin:0px;
	
}
h1{
	text-align: justify;
	width:300px;
	height:40px;
	margin-bottom: auto;
	margin-right: auto;
	margin-top: 100px;
	margin-left: auto;
	font-family:"Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;
	color:#333;
	size:20px;
	
	
}
.con{
	background-color: #CCC;
	width: 300px;
	height: 200px;
	margin-bottom: auto;
	margin-right: auto;
	margin-top: 10px;
	margin-left: auto;
	border-radius: 10px;
	padding-top:10px;
}
.con .t_con{
	width: 250px;
	height: 180px;

	margin-right: auto;
	margin-left: auto;

}
.con .t_con table tr td input[type='text']{
	width: 130px;
	height: 21px;

}
.con .t_con table tr td input[type='submit']{
	width: 140px;
	height: 25px;

}
.con .t_con table tr td label{
	float:right;
	color: #0A5825;
	font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif;
	font-size:14px;
}
.o_put{
	width: 300px;
	height: 60px;
	margin-bottom: auto;
	margin-right: auto;
	margin-top: 10px;
	margin-left: auto;
}
.o_put p{
	width: 300px;
	height: 60px;
	line-height:60px;
}




</style>
</head>
<body>
<h1><span style="color:#8edd88">Add</span> grades</h1>
<div class="con">
	<div class="t_con">
    	<form method="post" action="">
            <table width="250" border="0">
              <tr>
                <td><label for="reg">Reg:</label></td>
                <td><input type="text" id="reg" name="reg" value="<?php if (isset($_POST['reg'])) echo $_POST['reg'] ?>"></td>
              </tr>
              <tr>
                <td><label for="level">level:</label></td>
                <td><input type="text" id="level" name="level" value="<?php if (isset($_POST['level'])) echo $_POST['level'] ?>"></td>
              </tr>
              <tr>
                <td><label for="semester">Semester:</label></td>
                <td>
                	<select id="semester" name="semester">
                    	<option value="first">First</option>
                    	<option value="second">Second</option>
                	</select>
                </td>
              </tr>
              <tr>
                <td><label for="c_code">Course code:</label></td>
                <td><input type="text" id="c_code" name="c_code" value="<?php if (isset($_POST['c_code'])) echo $_POST['c_code'] ?>"></td>
              </tr>
              <tr>
                <td><label for ="grade">Grade:</label></td>
                <td>
                  <select name="grade" id="select" width = '100px'>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Add grade" name="ad"></td>
              </tr>
            </table>
		</form>

    </div>
</div>
<div class="o_put">
	<?php 
        if (isset($_POST['ad'])){
			$grade = $_POST['grade'];
			$semester = strtolower($_POST['semester']);
			$level = $_POST['level'];
			$reg = strtoupper($_POST['reg']);
			$c_code = strtoupper($_POST['c_code']);
			
			if ($semester == "first"){
				$s = "UPDATE first_semester_reg_courses SET
					grade = '$grade' WHERE reg_number = '$reg' AND course_code = '$c_code' AND level = '$level'";
				
			}else if  ($semester == "second"){
				$s = "UPDATE second_semester_reg_courses SET
					grade = '$grade' WHERE reg_number = '$reg' AND course_code = '$c_code' AND level = '$level'";
				
			}
			
			$sq = $link->query($s);
			if ($sq){
				echo "<p>Grade added successfully</p>";
			}
			
           
            
        }
    ?>

</div>

</body>
</html>