// JavaScript Document
$(document).ready(function() {
	log_validate();
	
   
});
function A_send(){
	reg = $(".con .rw1 .frm .main_frm form table .trr td #reg");
	pass = $(".con .rw1 .frm .main_frm form table .trr td #pass");
	var err_con = $(".con .rw1 .frm .main_frm form table tr #err_con");
	loader = $(".con .a_load");
	var e3 = "";
	reg_val = reg.val();
	pass_val = pass.val();
	$.ajax(
		{
			url		: "../proc/log.php",
			type		: "POST",
			dataType	: "text",
			data		: {
				d1	: reg_val,//gets reg num
				d2	: pass_val,//gets password
				tsk	: "log_send"	//submit button id			
			},
			success	: function(data)
					 {
						 e3 = data;
						 if (data != 3){
							 
							 err_con.html("<div class='err_con'>"+e3+"</div>"); 
							 loader.hide();
						 }else if (data == 3){
							 loader.hide();
							 location.assign("../home");
							 
							 
						 }

					 }
		}
	)
}

function reg_validate(reg_num){
			reg_filter = /^[0-9]{2}\/[A-Za-z]{2}\/[A-Za-z]{2}\/[0-9]*$/;
			if (reg_filter.test(reg_num)){
				return 1;
			}else{
				return 0;
			}
		}
function log_validate(){
	var e1 = "";
	var e2 = "";
	reg = $(".con .rw1 .frm .main_frm form table .trr td #reg");
	pass = $(".con .rw1 .frm .main_frm form table .trr td #pass");
	button = $(".con .rw1 .frm .main_frm form table tr td #log");
	var err_con = $(".con .rw1 .frm .main_frm form table tr #err_con");
	loader = $(".con .a_load");
	button.on("click", function(){
		reg_val = reg.val();
		pass_val = pass.val();	
		if (reg_val == ""){
			e1 = "Please provide your reg number first";
			err_con.html("<div class='err_con'>"+e1+"</div>");
		}else if (!reg_validate(reg_val)){		
			e1 = "Invalid reg number pattern";
			err_con.html("<div class='err_con'>"+e1+"</div>");
		}else if (reg_validate(reg_val)){
			e1 = "";
			err_con.html("");
		}
		if ( e1 == "" && pass_val == "" ){
			e2 = "Please provide your password";
			err_con.html("<div class='err_con'>"+e2+"</div>");
		}else if (e1== "" && pass_val != ""){
			//Ajax section
			loader.show();
			A_send();
			//alert("cccccccc");
			
		}
		
	})
}