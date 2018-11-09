// JavaScript Document
$(document).ready(function(){
	e1 = e2 =e3 =e4=e5=e6=e7=e8 =e9 =e10 =e11 = e12 ="";
	fname = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='fname']");
	mname = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='mname']");
	lname = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='lname']");
	month = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='month']");
	day = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='day']");
	year = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='year']");
	bdate = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr .s");
	level = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='level']");
	pic = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='pic']");
	reg = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='reg']");
	faculty = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='fac']");
	department = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='dep']");
	MOE = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='moe']");
	email = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='email']");
	pass1 = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='pass1']");
	pass2 = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='pass2']");
	pic_con = $(".con .passport .pass_con .main_pass");
	//error con
	e1_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e1");
	e2_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e2");
	e3_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e3");
	e4_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e4");
	e5_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e5");//passport
	e6_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e6");
	e7_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e7");//faculty
	e8_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e8");//faculty
	e9_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e9");//email
	e10_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e10");//pass1
	e11_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e11");//pass2
	button = $(".con .main_con .main_fm_con .main_fm form table tr td input[type='button']");
	aloader = $(".con .dump_ajax_loader .loader");
	
	form_validate();

});



function validate_text(txt){
		reg_filter = /[^A-Za-z]/;
		if (reg_filter.test(txt)){
			return 1;
		}else{
			return 0;
		}
		
		
}
function reg_validate(reg_num){
			reg_filter = /^[0-9]{2}\/[A-Za-z]{2}\/[A-Za-z]{2}\/[0-9]+$/;
			if (reg_filter.test(reg_num)){
				return 1;
			}else{
				return 0;
			}
}
function password_validate(pass){
			pass_filter = /[^A-Za-z0-9()-+!]$/;
			if (pass_filter.test(pass)){
				return 1;
			}else{
				return 0;
			}
}

function get_dept(fac){
	$.ajax({
    	url: 'proc/get_dept.php',
		type: 'POST',
        data:{get_d :fac},
		dataType:"Json",
        success: function(data){
			department.empty();
			department.append("<option>Department</option>")
			$.each(data.res, function(){
				//manipulate data
				department.append("<option value='"+this['d_code']+"'>"+this['d_name']+"</option>")
				
			})

        }     
	});	
	
	
	
}
function user_exist(){
	if (!reg.val()){
			reg.css("border", "1px solid #F00");
			e6 = "Please provide your registration number";
			e6_con.html("<p>"+e6+"</p>");
			
		}else if(reg.val()){
			rt = reg_validate(reg.val());
			if (rt){
				$.ajax({
					url: 'proc/u_check.php',
					type: 'POST',
					data:{chk_usr :reg.val()},
					dataType:"Json",
					success: function(data){
						if (data == 0){
							e6 =""
							reg.css("border", "1px solid #8edd88");
							e6_con.html("");
							
						}else if(data == 1){
							e6 ="User already exist"
							reg.css("border", "1px solid #F00");
							e6_con.html("<p>"+e6+"</p>");
							
						}

        		}     
				});		
			}else{
				reg.css("border", "1px solid #F00");
				e6 = "Invalid registration number";
				e6_con.html("<p>"+e6+"</p>");				
			}			
		}	
}
	
function form_validate(){
	var fdata = new FormData();
	
	function val_fname(){
		//first name
		if (!fname.val()){
			fname.css("border", "1px solid #F00");
			e1 = "Please provide your first name";
			e1_con.html("<p>"+e1+"</p>");
		}else if (fname.val()){
			
			fe = validate_text(fname.val());
			if (fe){
				fname.css("border", "1px solid #F00");
				e1 = "Only Alphabets are allowed";
				e1_con.html("<p>"+e1+"</p>");		
			}else{
				fname.css("border", "1px solid 	#8edd88");
				e1 = "";
				e1_con.html("");	
			}
	
		}
	
	}
	function val_mname(){
		//middle name
		if (!mname.val()){
			mname.css("border", "1px solid #F00");
			e2 = "Please provide your middle name";
			e2_con.html("<p>"+e2+"</p>");
		}else if (mname.val()){	
			me = validate_text(mname.val());
			if (me){
				mname.css("border", "1px solid #F00");
				e2 = "Only Alphabets are allowed";
				e2_con.html("<p>"+e2+"</p>");
				
			}else{
				mname.css("border", "1px solid 	#8edd88");
				e2 = "";
				e2_con.html("");	
			}
	
		}
		
		
	}
	
	function val_lname(){
		//last name
		if (!lname.val()){
			lname.css("border", "1px solid #F00");
			e3 = "Please provide your last name";
			e3_con.html("<p>"+e3+"</p>");
		}else if (lname.val()){
			le = validate_text(lname.val());
			if (le){
				lname.css("border", "1px solid #F00");
				e3 = "Only Alphabets are allowed";
				e3_con.html("<p>"+e3+"</p>");
				
			}else{
				lname.css("border", "1px solid 	#8edd88");
				e3 = "";
				e3_con.html("");	
			}
	
		}
		
	}
	function val_dob(){
		//Birth date
		if (year.val()=="Year" && month.val()=="Month" && day.val()=="Day"){
			year.css("border", "1px solid #F00");
			month.css("border", "1px solid #F00");
			day.css("border", "1px solid #F00");
			e4 = "Please set your birth date";
			e4_con.html("<p>"+e4+"</p>");
			
		}else if (year.val()!="Year" && month.val()=="Month" && day.val()=="Day"){
			year.css("border", "1px solid #8edd88");
			month.css("border", "1px solid #F00");
			day.css("border", "1px solid #F00");
			e4 = "Please set your birth month and day";
			e4_con.html("<p>"+e4+"</p>");
			
			
		}else if (year.val()!="Year" && month.val()!="Month" && day.val()=="Day"){
			year.css("border", "1px solid #8edd88");
			month.css("border", "1px solid #8edd88");
			day.css("border", "1px solid #F00");
			e4 = "Please set your birth day";
			e4_con.html("<p>"+e4+"</p>");	
		}else if (year.val()=="Year" && month.val()=="Month" && day.val()!="Day"){
			year.css("border", "1px solid #F00");
			month.css("border", "1px solid #F00");
			day.css("border", "1px solid #8edd88");
			e4 = "Please set your birth year and month";
			e4_con.html("<p>"+e4+"</p>");
		}else if (year.val()=="Year" && month.val()!="Month" && day.val()!="Day"){
			year.css("border", "1px solid #F00");
			month.css("border", "1px solid #8edd88");
			day.css("border", "1px solid #8edd88");
			e4 = "Please set your birth year";
			e4_con.html("<p>"+e4+"</p>");
		}else if (year.val()=="Year" && month.val()!="Month" && day.val()=="Day"){
			year.css("border", "1px solid #F00");
			month.css("border", "1px solid #8edd88");
			day.css("border", "1px solid #F00");
			e4 = "Please set your birth year and day";
			e4_con.html("<p>"+e4+"</p>");		
		}else if (year.val()!="Year" && month.val()=="Month" && day.val()!="Day"){
			year.css("border", "1px solid #8edd88");
			month.css("border", "1px solid #F00");
			day.css("border", "1px solid #8edd88");
			e4 = "Please set your birth month";
			e4_con.html("<p>"+e4+"</p>");
		}else if (year.val()!="Year" && month.val()!="Month" && day.val()!="Day"){
			m = month.val();
			d = day.val();
			var ytest = (year.val())%4;
			if ((m == 4 || m == 6 || m == 9 || m == 11) && d>30 ){
				year.css("border", "1px solid #8edd88");
				month.css("border", "1px solid #8edd88");
				day.css("border", "1px solid #F00");
				e4 = "Invalid birth day";
				e4_con.html("<p>"+e4+"</p>");
			}else if(ytest == 0 && m == 2 && d >29){
				year.css("border", "1px solid #8edd88");
				month.css("border", "1px solid #8edd88");
				day.css("border", "1px solid #F00");
				e4 = "Invalid birth day (Leap year selected)";
				e4_con.html("<p>"+e4+"</p>");
			}else if(ytest != 0 && m == 2 && d >28){
				year.css("border", "1px solid #8edd88");
				month.css("border", "1px solid #8edd88");
				day.css("border", "1px solid #F00");
				e4 = "Invalid birth day (Lean year selected)";
				e4_con.html("<p>"+e4+"</p>");
			}else{
				year.css("border", "1px solid #8edd88");
				month.css("border", "1px solid #8edd88");
				day.css("border", "1px solid #8edd88");
				e4 = "";
				e4_con.html("");	
			}

		}
		
	}
	function val_email(){
		//Email
		if (!email.val()){
			email.css("border", "1px solid #F00");
			e9 = "Please provide your email address";
			e9_con.html("<p>"+e9+"</p>");
			
		}else if(email.val()){
			user_email = email.val();
			email_filter = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
			if(email_filter.test(user_email)){
				email.css("border", "1px solid #8edd88");
				e9 = "";
				e9_con.html("");
			}else{
				email.css("border", "1px solid #F00");
				e9 = "Invalid email address";
				e9_con.html("<p>"+e9+"</p>");
			}
			
		}
		
		
		
	}
	function val_faculty(){
		//faculty
		if (faculty.val()=="Faculty"){
			faculty.css("border", "1px solid #F00");
			e7 = "Please select your faculty";
			e7_con.html("<p>"+e7+"</p>");
			
		}else{
			faculty.css("border", "1px solid #8edd88");
			e7 = "";
			e7_con.html("");
		}	
	}
	function val_department(){
		//Department
		if (department.val()=="Department"){
			department.css("border", "1px solid #F00");
			e8 = "Please select your department";
			e8_con.html("<p>"+e8+"</p>");
			
		}else{
			department.css("border", "1px solid #8edd88");
			e8 = "";
			e8_con.html("");
		}
		
	}
	function val_pass1 (){
		//password 1
		if (!pass1.val()){
			pass1.css("border", "1px solid #F00");
			e10 = "Please input password";
			e10_con.html("<p>"+e10+"</p>");
			
		}else if (pass1.val()){
			if ((pass1.val()).length<=5){
				pass1.css("border", "1px solid #F00");
				e10 = "Password must be at least 6 characters";
				e10_con.html("<p>"+e10+"</p>");
				
			}else if ((pass1.val()).length>=5){
				if (password_validate(pass1.val())){
					pass1.css("border", "1px solid #F00");
					e10 = "Illegal symbol included, Please use valid symbol, they are : ()-+!";
					e10_con.html("<p>"+e10+"</p>");
					
				}else{
					pass1.css("border", "1px solid #8edd88");
					e10 = "";
					e10_con.html("");
					
				}
			}

			
		}
		
	}
	function val_pass2(){
		//password2
		if (!pass1.val() && !pass2.val()){
			pass2.css("border", "1px solid #F00");
			e11 = "Please input password in password field first";
			e11_con.html("<p>"+e11+"</p>");
			
		}else if (e10 !=""){
			pass2.css("border", "1px solid #F00");
			e11 = "Resolve issue in password field first";
			e11_con.html("<p>"+e11+"</p>");
			
			
		}else if(pass1.val() && e10 ==""){
			if (!pass2.val()){
				pass2.css("border", "1px solid #F00");
				e11 = "Please repeat password";
				e11_con.html("<p>"+e11+"</p>");
				
			}else if(pass2.val()){
				if (pass2.val() != pass1.val()){
					pass2.css("border", "1px solid #F00");
					e11 = "Password does not match";
					e11_con.html("<p>"+e11+"</p>");
					
				}else if (pass2.val() == pass1.val()){
					pass2.css("border", "1px solid #8edd88");
					e11 = "";
					e11_con.html("");
					
				}
			}
		}
		
	}
	function image_preview(){
		pd = new FormData();
		pd.append("tmp_pic", pic[0].files[0]);
		$.ajax({
              url: 'proc/img_preview.php',
              data: pd,
              processData: false,
              contentType: false,
              type: 'POST',
              success: function(response){
					if (response == 1){
						pic.css("border", "1px solid #F00");
						e5 = "Selected file not valid, only .jpg type is allowed"
						e5_con.html("<p>"+e5+"</p>");
						
					}else if (response == 2){
						pic.css("border", "1px solid #F00");
						e5 = "Selected image is corrupt"
						e5_con.html("<p>"+e5+"</p>");
					}else if(response == 3){
						pic.css("border", "1px solid #F00");
						e5 = "Image size must be less than 31Kb"
						e5_con.html("<p>"+e5+"</p>");	
					}else{
						pic.css("border", "1px solid #8edd88");
						e5 = "";
						e5_con.html("");
						pic_con.html("");
						pic_con.css("background-image", "none");
						pic_con.html(response);						
					}

              }     
			});	
	}
	function send_all(){
		all_data = new FormData();

		all_data.append("tsk", "dump");
		all_data.append("fname", fname.val());
		all_data.append("mname", mname.val());
		all_data.append("lname", lname.val());
		all_data.append("year", year.val());
		all_data.append("month", month.val());
		all_data.append("day", day.val());
		all_data.append("passport", pic[0].files[0]);
		all_data.append("level", level.val());
		all_data.append("reg", reg.val());
		all_data.append("fac", faculty.val());
		all_data.append("dep", department.val());
		all_data.append("moe", MOE.val());
		all_data.append("email", email.val());
		all_data.append("pass", pass1.val());
		
		$.ajax({
              url: 'proc/new_user.php',
              data: all_data,
              processData: false,
              contentType: false,
              type: 'POST',
              success: function(response){
				  aloader.hide();
				  location.reload(true);
              }     
			});	
		
		
	}
	fname.on("keydown",val_fname);
	fname.on("keyup",val_fname);
	
	
	mname.on("keydown",val_mname);
	mname.on("keyup",val_mname);
	
	lname.on("keydown",val_lname);
	lname.on("keyup",val_lname);
	
	year.on("change",val_dob);
	month.on("change",val_dob);
	day.on("change",val_dob);
	
	reg.on("focusout",user_exist);
	
	email.on("focusout",val_email);
	
	pass1.on("focusout",val_pass1);
	
	pass2.on("focusout",val_pass2);
	
	button.on("click", function(){
		//fisrt name
		val_fname();	
		//middle name
		val_mname();
		//last name
		val_lname();
		//DOB
		val_dob();		
		//Passport
		if (!pic.val()){
			pic.css("border", "1px solid #F00");
			e5 = "Please browse and select your passport";
			e5_con.html("<p>"+e5+"</p>");
		}else{
			pic.css("border", "1px solid #8edd88");
			e5 = "";
			e5_con.html("");
			
		}
		//registration number
		user_exist();
		//email
		val_email();
		//faculty
		val_faculty();
		// Department
		val_department();
		//password 1
		val_pass1();
		//password2
		val_pass2();
		
		if (e1=="" && e2== "" && e3== "" && e4== "" && e5== "" && e6== "" && e7=="" && e8== "" && e9== "" && e10== "" &&e11== "" && e12==""){
			aloader.show();
			send_all();
			
		}			
	});
	pic.on("change", image_preview);
	
	faculty.on("change", function(){
		if (faculty.val() != "Faculty"){
			faculty.css("border", "1px solid #8edd88");
			e7 = "";
			e7_con.html("");
			get_dept(faculty.val());
		}
		
		
		
		
		
		});
	department.on("change", function(){
		if (department.val() != "Department"){
			department.css("border", "1px solid #8edd88");
			e8 = "";
			e8_con.html("");
		}

		});
		
	
	
	
	
	
}
	
