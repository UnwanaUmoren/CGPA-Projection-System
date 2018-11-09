<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php 
if(isset($_POST['id']) && $_POST['id'] == "get_courses"){
	$retrieve2 = new retrieve;
	$facCode = $_POST['facCode'];
	$deptCode = $_POST['deptCode'];
	$level = $_POST['level'];
	$semester = $_POST['semester'];
	$dr = $retrieve2->to_add_courses($facCode, $deptCode, $level, $semester);
	$num = $dr->num_rows;
	if($num == 0){
		echo 1;
	}else if ($num >=1 ){
		$snd = array();
		while($dt = $dr->fetch_assoc()){
		$pp = array(
			"c_title" => $dt["course_title"],
			"c_code" => $dt["course_code"],
			"c_c_hour" => $dt["course_credit_hour"],
			"c_type" => $dt["course_type"]
		);
		array_push($snd, $pp);
	}
	$encd = json_encode(array("res"=>$snd));
	echo $encd;
		
	}
	
}else{
	header("location: ../");
	
}

?>