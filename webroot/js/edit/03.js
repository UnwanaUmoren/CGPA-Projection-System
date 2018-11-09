// JavaScript Document
$(document).ready(function(){
	e1 = e2 =e3 =e4=e5=e6=e7=e8 =e9 ="";
	p1 = p2 = p1next = p2next = p3next = finale = 0;
	fnameSet = mnameSet = lnameSet = passportSet = emailSet = passwordSet = levelSet =0;
	fname = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='fname']");
	mname = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='mname']");
	lname = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='lname']");



	level = $(".con .main_con .main_fm_con .main_fm form table tr td select[id='level']");
	pic = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='pic']");


	email = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='email']");
	pass1 = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='pass1']");//old password
	pass2 = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='pass2']");//new password
	pass3 = $(".con .main_con .main_fm_con .main_fm form table tr td input[id='pass3']");//repeat password

	pic_con = $(".con .passport .pass_con .main_pass");
	currentLevel = 	$(".con  #cLevel").val();
	
	reg = $(".con  #ActUser").val();
	
	//error con
	e1_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e1"); //fname
	e2_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e2"); //mnane
	e3_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e3"); //last_name
	e4_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e4"); //passport
	e5_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e5"); //level
	e6_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e6"); //email

	e7_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e7");//old_pass1
	e8_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e8");//new_pass1
	e9_con = $(".con .main_con .fm_con .main_fm_con .main_fm form table tr #e9");//new_pass2
	button = $(".con .main_con .main_fm_con .main_fm form table tr td input[type='button']");
	aloader = $(".con .dump_ajax_loader .loader");
	picReset = $(".con .passport .resetBtCon .mainBt input[type = 'button']");
	
	oldDetails = [];
	toSend = [];
	sendInitial();
	form_validate();
	val_passport();
	val_level();

});
function send_all(){
	  all_data = new FormData();

	  all_data.append("tsk", "update");
	  all_data.append("reg", reg);
	  if (email.val() != oldDetails['email'] && emailSet == 1){
		  all_data.append("email", email.val());
	  }
	  if (lname.val() != oldDetails['lname'] && lnameSet == 1){
		  all_data.append("lname", lname.val());
	  }
	  if (fname.val() != oldDetails['fname'] && fnameSet == 1){
		  all_data.append("fname", fname.val());
	  }
	  if (mname.val() != oldDetails['mname'] && mnameSet == 1){
		  all_data.append("mname", mname.val());
	  }
	  if (pic_con.find("img").attr("src") != oldDetails.img && passportSet == 1){
		  all_data.append("passport", pic[0].files[0]);
	  }
	  if (levelSet == 1){
		  all_data.append("level", level.val());
	  }
	  if (passwordSet == 1){
		  all_data.append("pass2", pass2.val());
	  }
	  $.ajax({
			url: '/proc/update_user.php',
			data: all_data,
			processData: false,
			contentType: false,
			type: 'POST',
			success: function(response){
				if (response == 1){
					aloader.hide();
					location.reload(true);
				}
			}     
		  });	
		
		
}
function validate_text(txt){
		reg_filter = /[^A-Za-z]/;
		if (reg_filter.test(txt)){
			return 1;
		}else{
			return 0;
		}
		
		
}
function password_validate(pass){
			pass_filter = /[^A-Za-z0-9()-+!]/;
			if (pass_filter.test(pass)){
				return 1;
			}else{
				return 0;
			}
}
function form_validate(){
	var fdata = new FormData();
	
	function val_fname(){
		//first name
		if (fname.val() == oldDetails['fname']){
			fnameSet =0;
			fe = validate_text(fname.val());
			fname.css("border", "1px solid 	#8edd88");
			e1 = "";
			e1_con.html("");
		}else if (fname.val() != oldDetails['fname']){
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
					toSend.fname = 	fname.val();
					fnameSet =1;
				}
	
			}
		}
	
	}
	function val_mname(){
		//middle name
		if (mname.val() == oldDetails['mname']){
			mnameSet = 0;
			mname.css("border", "1px solid 	#8edd88");
			e2 = "";
			e2_con.html("");
		}else if (mname.val() != oldDetails['mname']){
			  if (!lname.val()){
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
					  toSend.mname = mname.val();
					  mnameSet = 1;
				  }
	  
			  }
				
		}
		
		
	}
	
	function val_lname(){
		//last name
		if (lname.val() == oldDetails['lname']){
			lnameSet = 0;
			lname.css("border", "1px solid 	#8edd88");
			e3 = "";
			e3_con.html("");
		}else if(lname.val() != oldDetails['lname']){
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
					toSend.lname = lname.val();
					lnameSet = 1;
				}
	
			}
		}
	}
	function val_email(){
		//Email
		if (email.val() == oldDetails['email']){
			emailSet =0;
			email.css("border", "1px solid #8edd88");
			e6 = "";
			e6_con.html("");
		}else if(email.val() != oldDetails['email']){
			if (!email.val()){
			email.css("border", "1px solid #F00");
			e6 = "Please provide your email address";
			e6_con.html("<p>"+e6+"</p>");
			
			}else if(email.val()){
			user_email = email.val();
			email_filter = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
				if(email_filter.test(user_email)){
					email.css("border", "1px solid #8edd88");
					e6 = "";
					e6_con.html("");
					toSend.email = email.val();
					emailSet = 1;
				}else{
					email.css("border", "1px solid #F00");
					e6 = "Invalid email address";
					e6_con.html("<p>"+e6+"</p>");
				}
			
			}
		}
		
		
		
	}

	function val_pass1 (){
		//password 1
		if (pass1.val()){
			passwordSet = 1;
			if ((pass1.val()).length<=5){
				pass1.css("border", "1px solid #F00");
				e7 = "Password must be at least 6 characters";
				e7_con.html("<p>"+e7+"</p>");
				
			}else if ((pass1.val()).length>=6){
				if (password_validate(pass1.val())){
					pass1.css("border", "1px solid #F00");
					e7 = "Illegal symbol included, Please use valid symbol, they are : ()-+!";
					e7_con.html("<p>"+e7+"</p>");
					
				}else{
					pass1.css("border", "1px solid #8edd88");
					e7 = "";
					e7_con.html("");
					p1next = 1;
					p1 = 1;
					
				}
			}

			
		}else{
			pass1.css("border", "1px solid #8edd88");
			e7 = "";
			e7_con.html("");
					
			
		}
		
	}

	function image_preview(){
		pd = new FormData();
		pd.append("tmp_pic", pic[0].files[0]);
		$.ajax({
              url: '/proc/img_preview.php',
              data: pd,
              processData: false,
              contentType: false,
              type: 'POST',
              success: function(response){
					if (response == 1){
						pic.css("border", "1px solid #F00");
						e4 = "Selected file not valid, only .jpg type is allowed"
						e4_con.html("<p>"+e4+"</p>");
						
					}else if (response == 2){
						pic.css("border", "1px solid #F00");
						e4 = "Selected image is corrupt"
						e4_con.html("<p>"+e4+"</p>");
					}else if(response == 3){
						pic.css("border", "1px solid #F00");
						e4 = "Image size must be less than 31Kb"
						e4_con.html("<p>"+e4+"</p>");	
					}else{
						pic.css("border", "1px solid #8edd88");
						e4 = "";
						e4_con.html("");
						pic_con.css("backgroundImage", "none");
						pic_con.html(response);		
						passportSet = 1;				
					}

              }     
			});	
	}

	fname.on("keydown",val_fname);
	fname.on("keyup",val_fname);
	
	
	mname.on("keydown",val_mname);
	mname.on("keyup",val_mname);
	
	lname.on("keydown",val_lname);
	lname.on("keyup",val_lname);
	

	
	
	email.on("focusout",val_email);
	
	pass1.on("focusout",val_pass1);
	level.on("change", val_level);
	
	//pass2.on("focusout",val_pass2);
	
	button.on("click", function(){
		//fisrt name
		val_fname();	
		//middle name
		val_mname();
		//last name
		val_lname();

		//email
		val_email();
		//password 1
		
		/*val_pass1();
		//password2
		val_pass2();*/
		//pass2_and_pass3_check();
		
		if (passwordSet == 1)
		{
			if (e1=="" && e2== "" && e3== "" && e4== "" && e5== "" && e6== ""){
				pass2_and_pass3_check();
				aloader.show();
				
			}else{
				alert("Resolve error");
			}
		
		}else{
			if (e1=="" && e2== "" && e3== "" && e4== "" && e5== "" && e6== "" && e7=="" && e8== "" && e9== ""){
				if ((parseInt(fnameSet) + parseInt(mnameSet) + parseInt(lnameSet) + parseInt(passportSet) + parseInt(emailSet) + parseInt(passwordSet) + parseInt(levelSet )) == 0){
					alert("No changes Made");
				}else{
					aloader.show();
					send_all();
				}
			
			}		
			
			
		}
		
			
	});
	pic.on("change", image_preview);
		
	picReset.on("click", function(){
		pic_con.find("img").attr("src", oldDetails.img);
		passportSet = 0;
		
	});
	//pass2_and_pass3_check();
	
	
	
}
function val_passport (){
	  if (pic_con.find("img").attr("src") == oldDetails.img){
		  passportSet = 0;
		  
	  }else{
		  passportSet = 1;
	  }
}
function val_level(){
	diff = level.val() - currentLevel;
	if (diff > 100 ){
		e5 = "You cannot skip a level";
		level.css({
			backgroundColor: "#ffc6c6",
			border: "1px solid #f00"
		})
		e5_con.html("<p>"+e5+"</p>");
	}else{
		levelSet = 1;
		level.css({
			backgroundColor: "#FFFFFF",
			border: "1px solid #8edd88"
		})
		e5 = "";
		e5_con.html("");
	}

	
	level.on("change", function(){
		if(level.val() != currentLevel){
			diff = level.val() - currentLevel;
			if (diff > 100 ){
				e5 = "You cannot skip a level";
				level.css({
					backgroundColor: "#ffc6c6",
					border: "1px solid #f00"
				
				})
				e5_con.html("<p>"+e5+"</p>");
			}else{
				levelSet = 1;
				level.css({
					backgroundColor: "#FFFFFF",
					border: "1px solid #8edd88"
				
				})
				e5 = "";
				e5_con.html("");
			}
				
			
		}
		
		
		
	});
}
function sendInitial(){
	oldDetails.fname = fname.val();
	oldDetails.mname = mname.val();
	oldDetails.lname = lname.val();
	oldDetails.img = pic_con.find("img").attr("src");
	oldDetails.email = email.val();	
}
function pass2_and_pass3_check(){
	  if (pass1.val()=="" && (pass2.val() == "") && (pass3.val() == "")){
		   passwordSet =0;
	  }
	  if ((pass1.val()=="" && pass2.val() != "") || (pass1.val()=="" && pass3.val() != "")){
		  passwordSet =1;
		  pass1.css("border", "1px solid #F00");
		  e7 = "Provide old password first";
		  e7_con.html("<p>"+e7+"</p>");
		  
	  }else if (pass1.val() != "" && (pass2.val() == "") && (pass3.val() == "")){
		  passwordSet = 1;
		  if ((pass1.val()).length<=5){
			  	p1next = 0;
				pass1.css("border", "1px solid #F00");
				e7 = "Password must be at least 6 characters";
				e7_con.html("<p>"+e7+"</p>");
				
		  }else if ((pass1.val()).length>=6){
			  if (password_validate(pass1.val())){
				  p1next = 0;
				  pass1.css("border", "1px solid #F00");
				  e7 = "Illegal symbol included, Please use valid symbol, they are : ()-+!";
				  e7_con.html("<p>"+e7+"</p>");
				  
			  }else{
				  pass1.css("border", "1px solid #8edd88");
				  e7 = "";
				  e7_con.html("");
				  p1next = 1;
				  p1 = 1;
				  
			  }
		  }		  
	  }
//_____________pass2 check__________________//
 if (p1 == 1 && passwordSet == 1 && p1next ==1){
	passwordSet = 1;
	if (pass2.val() != ""){
		if ((pass2.val()).length<=5){
			p2next = 0;
			pass2.css("border", "1px solid #F00");
			e8 = "Password must be at least 6 characters";
			e8_con.html("<p>"+e8+"</p>");
				
		}else if ((pass2.val()).length>=6){
			if (password_validate(pass2.val())){
				p2next = 0;
				pass2.css("border", "1px solid #F00");
				e8 = "Illegal symbol included, Please use valid symbol, they are : ()-+!";
				e8_con.html("<p>"+e8+"</p>");
				
			}else{
				pass2.css("border", "1px solid #8edd88");
				e8 = "";
				e8_con.html("");
				p2next = 1;
				p2 = 1;
				
			}
		}		
		
	}else if (pass2.val() == ""){
		passwordSet =1;
		pass2.css("border", "1px solid #F00");
		e8 = "Type in new password first";
		e8_con.html("<p>"+e8+"</p>");
	}
  }else{
	  pass2.css("border", "1px solid #8edd88");
	  e8 = "";
	  e8_con.html(""); 
	  
  }
//_____________pass3 check__________________//
 if (p2 == 1 && passwordSet == 1 && p2next ==1){
	if (pass3.val() != ""){
		if ((pass3.val()).length<=5){
			p3next = 0;
			pass3.css("border", "1px solid #F00");
			e9 = "Password must be at least 6 characters";
			e9_con.html("<p>"+e9+"</p>");
				
		}else if ((pass3.val()).length>=6){
			if (password_validate(pass2.val())){
				p2next = 0;
				pass2.css("border", "1px solid #F00");
				e9 = "Illegal symbol included, Please use valid symbol, they are : ()-+!";
				e9_con.html("<p>"+e9+"</p>");
				
			}else{
				pass3.css("border", "1px solid #8edd88");
				e9 = "";
				e9_con.html("");
				p3next = 1;
				p3 = 1;
				
			}
		}		
		
	}else if (pass3.val() == ""){
		passwordSet =1;
		pass3.css("border", "1px solid #F00");
		e9 = "Repeat new password first";
		e9_con.html("<p>"+e9+"</p>");
	}
  }else{
	  pass3.css("border", "1px solid #8edd88");
	  e9 = "";
	  e9_con.html(""); 
	  
  }
  if(p3next ==1 && p3 ==1 ){
	  if (pass2.val() != pass3.val()){
		pass3.css("border", "1px solid #F00");
		pass2.css("border", "1px solid #F00");
		e9 = "Repeated password is different from new password";
		e9_con.html("<p>"+e9+"</p>");
		e8 = "New password is different from Repeated password";
		e8_con.html("<p>"+e8+"</p>");
	  }else if (pass2.val() == pass3.val()){
	    pass3.css("border", "1px solid #8edd88");
		pass2.css("border", "1px solid #8edd88");
		e9 = "";
		e9_con.html("");
		e8 = "";
		e8_con.html("");
		val_password();
		
	  }
  }
		
}
function val_password(){
	$.ajax({
              url: '/proc/val_pass.php',
              data:{
				  id: "c_pass",
			   pass1: pass1.val(),
				 reg: reg
				  
			  },
              type: 'POST',
			  dataType:"Json",
              success: function(response){
				  if (response == 1){
					  pass1.css("border", "1px solid #8edd88");
					  e7 = "";
					  finale = 1;
					  e7_con.html("");
					  send_all();
							  
				  }else if(response == 0){
					  aloader.hide();
					  pass1.css("border", "1px solid #F00");
					  e7 = "Old password incorrect";
					  e7_con.html("<p>"+e7+"</p>");
				  }
				 
              }     
	});	
	
	
}
	
