<?php include ("../log/dcon.php")?>
<?php include("../includes/c_construct.php")?>
<?php 
if(isset($_POST['get_d'])){
	$retrieve2 = new retrieve;
	$fac = $_POST['get_d'];
	$dr = $retrieve2->department($fac);
	$snd = array();
	while($dt = $dr->fetch_assoc()){
		$pp = array(
			"d_name" => $dt["department_name"],
			"d_code" => $dt["code_of_department"],
		);
		array_push($snd, $pp);
	}
	$encd = json_encode(array("res"=>$snd));
	echo $encd;
}else{
	header("location: ../");
	
}

?>