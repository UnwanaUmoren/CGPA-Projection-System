// JavaScript Document
$(document).ready(function(){
	Check_Button = $(".con .m_con_right .cp_con .cgpa_con .m_con table input[type='button']#evalute");
	Combine_Button = $(".con .m_con_right .cp_con .cgpa_con .m_con table input[type='button']#combine");		
	cgpa_con = $(".con .m_con_right .cp_con .cgpa_con .m_con table input[type='text']");	
	msgCon = $(".con .m_con_right .cp_con .err_succ_con .main_con");
	msgConCON = $(".con .m_con_right .cp_con .err_succ_con");
	Hrule = $(".con .m_con_right hr");
	VirtualTableRow = $(".con .m_con_right .tb_con .m_con table tr");
	QPointSum = $(".con .m_con_right #TQPoint").val();
	ChourSum = $(".con .m_con_right #TCreditHour").val();
	Table_Info_con = $(".con .m_con_right .v_table_con .m_con");
	maxCon = $(".con .m_con_right .max .right #show");
	level = $(".con .m_con_right #level").val();
	semester = $(".con .m_con_right #semester").val();
	combineStatus = 0;
	one = "";
	zdif = 0;
	//setDiff = 0.08;
	setDiff = 0.3;
	virtualGrade = [];
	checked = 0;
	enableCheck = 0;
	TotalChour = ChourSum;
	VirtualQualityPoint = QPointSum;
	VirtualCGPA = 0.00;
	NewVirtualCGPA = 0.00;
	NewVirtualQualityPoint = 0;
	validate();
	compute();
	range = 0.00;
	vv=1.880111990;
});
function validate(){
	
	cgpa_con.on("keyup", function(){
		len = cgpa_con.val().length;
		
		if(len > 2){
			if (floatCheck(cgpa_con.val())){
				conf = 0;
				Combine_Button.val("Show courses combination");
				msgConCON.slideUp(600);
				Hrule.css("background-color", "#666");
				
			}else{
				combineStatus = 0;
				msgConCON.slideUp(10);
				msgCon.html("<p class='err'>Invalid CGPA value format</p>");
				msgConCON.slideDown(600);
				Hrule.css("background-color", "#FF0606");
			}
		}
		
	});
	Check_Button.on("click", function(){
		if (cgpa_con.val() != ""){
			cgpa = cgpa_con.val();
			if (floatCheck(cgpa)){
				if (cgpa > VirtualCGPA){
					combineStatus = 0;
					msgConCON.slideUp(10);
					msgCon.html("<p class='err'>Your target CGPA is not possible for this semester</p>");
					msgConCON.slideDown(600);
					Hrule.css("background-color", "#FF0606");
					
				}else if ((cgpa <= VirtualCGPA)){
					conf = 1;
					combineStatus =1;
					msgConCON.slideUp(10);
					msgCon.html("<p class='suc'>Your target CGPA is possible for this semester</p>");
					msgConCON.slideDown(600);
					Hrule.css("background-color", "#0A0");
				}
				
				
				
			}else{
				combineStatus = 0;
				msgConCON.slideUp(10);
				msgCon.html("<p class='err'>Invalid CGPA value format</p>");
				msgConCON.slideDown(600);
				Hrule.css("background-color", "#FF0606");
			}
		}else{
			combineStatus = 0;
			msgConCON.slideUp(10);
			msgCon.html("<p class='err'>Please provide your target CGPA first</p>");
			msgConCON.slideDown(600);
			Hrule.css("background-color", "#FF0606");
		}
		
	});
	Combine_Button.on("click", function(){
		if (cgpa_con.val() != ""){
			if (conf == 1){
				if(combineStatus == 1){
					if (level == 100 && semester == "first"){
						cgpa = parseFloat(cgpa_con.val());
						
						function cmp (){
							if (level == 100 && semester == "first"){
								NewVirtualQualityPoint = 0;
							}else{
								NewVirtualQualityPoint = QPointSum;
							}
							
							NewVirtualCGPA = 0;
							VirtualTableRow.each(function(indx){	
								if ($(this).find("td:eq(0)").text() != "S/N"){
									currentH = $(this).find("td:eq(4)").text();
									if(VirtualCGPA >= 4.5){
										grade = rand_4_5();
									}else if (VirtualCGPA >= 4.0){
										grade = rand_4_0();
									}else if (VirtualCGPA >= 3.5){
										grade = rand_3_5();
									}else if (VirtualCGPA >= 3.0){
										grade = rand_3_0();
									}else if (VirtualCGPA >= 2.5){
										grade = rand_2_5();
									}else if (VirtualCGPA >= 2.0){
										grade = rand_2_0();
									}else if (VirtualCGPA >= 1.5){
										grade = rand_1_5();
									}else if (VirtualCGPA >= 1.0){
										grade = rand_1_0();
									}else{
										grade = rand_0_0();
									}
									gradeLabel = Gradelabel(grade);
									tmpQP = parseInt(currentH) * parseInt(grade);
									NewVirtualQualityPoint = parseInt(NewVirtualQualityPoint) + parseInt(tmpQP);
									virtualGrade[indx-1] = gradeLabel;
								}
				
								
							});	
						}
			
					}else {
						cgpa = parseFloat(cgpa_con.val());
						function cmp (){
							NewVirtualQualityPoint = QPointSum;
							NewVirtualCGPA = 0;
							VirtualTableRow.each(function(indx){	
								if ($(this).find("td:eq(0)").text() != "S/N"){
									currentH = $(this).find("td:eq(4)").text();
									if(VirtualCGPA >= 4.5){
										grade = rand_4_5();
									}else if (VirtualCGPA >= 4.0){
										grade = rand_4_0();
									}else if (VirtualCGPA >= 3.5){
										grade = rand_3_5();
									}else if (VirtualCGPA >= 3.0){
										grade = rand_3_0();
									}else if (VirtualCGPA >= 2.5){
										grade = rand_2_5();
									}else if (VirtualCGPA >= 2.0){
										grade = rand_2_0();
									}else if (VirtualCGPA >= 1.5){
										grade = rand_1_5();
									}else if (VirtualCGPA >= 1.0){
										grade = rand_1_0();
									}else{
										grade = rand_0_0();
									}
									gradeLabel = Gradelabel(grade);
									tmpQP = parseInt(currentH) * parseInt(grade);
									NewVirtualQualityPoint = parseInt(NewVirtualQualityPoint) + parseInt(tmpQP);
									virtualGrade[indx-1] = gradeLabel;
								}
				
				
							});			
			
						}
					}
				
				}
				if (level == 100 && semester == "first"){
					if(combineStatus == 1){
						cmp();
						NewVirtualCGPA = parseInt(NewVirtualQualityPoint)/parseInt(TotalChour);
						diff = (cgpa) - NewVirtualCGPA;
						if(zdif == 1){
							cmp();
							NewVirtualCGPA = parseInt(NewVirtualQualityPoint)/parseInt(TotalChour);
							diff = (cgpa) - NewVirtualCGPA;
						}else if (zdif == 0){
							while(NewVirtualCGPA > (cgpa) || diff < 0  || diff > setDiff){
							//while(NewVirtualCGPA > (cgpa)){
								cmp();
								NewVirtualCGPA = parseInt(NewVirtualQualityPoint)/parseInt(TotalChour);
								diff = (cgpa) - NewVirtualCGPA;
							}
							
						}
						/*alert(TotalChour);
						alert(one);
						alert(range);
						alert(diff);*/
	
						$(this).val("ReCombine");
						//Dislpaying grades
						VirtualTableRow.each(function(indx){
							if ($(this).find("td:eq(0)").text() != "S/N"){
								currentGrade = virtualGrade[indx-1];
								$(this).find("td:eq(3)").html("<b><font color='8edd88'>"+currentGrade+"</font></b>");
							}
						})
						
						
						Table_Info_con.empty();
						if (NewVirtualCGPA > cgpa){
							Table_Info_con.html("<p>The combination below gives a CGPA of <b><font color='#0a0'>"+NewVirtualCGPA+"</font></b> which is greater than your target <b><font color='#ff0606'>"+cgpa+"</font></b></p>");
						}else if (NewVirtualCGPA < cgpa){
							Table_Info_con.html("<p>The combination below gives a CGPA of "+NewVirtualCGPA+" which is less than your target "+cgpa+"</p>");
						}else if (NewVirtualCGPA == cgpa){
							Table_Info_con.html("<p>The combination below gives a CGPA of "+NewVirtualCGPA+" which is equal to your target "+cgpa+"</p>");
						}
					
					}else{
						  msgConCON.slideUp(10);
						  msgCon.html("<p class='err'>Please provide your target CGPA first</p>");
						  msgConCON.slideDown(600);
						  Hrule.css("background-color", "#FF0606");
					}
				}else{
					if(combineStatus == 1){
						cmp();
						NewVirtualCGPA = parseInt(NewVirtualQualityPoint)/parseInt(TotalChour);
						diff = (cgpa) - NewVirtualCGPA;
						if(zdif == 1){
							cmp();
							NewVirtualCGPA = parseInt(NewVirtualQualityPoint)/parseInt(TotalChour);
							diff = (cgpa) - NewVirtualCGPA;
						}else if (zdif == 0){
							while(NewVirtualCGPA > (cgpa) || diff < 0  || diff > setDiff){
							//while(NewVirtualCGPA > (cgpa)){
								cmp();
								NewVirtualCGPA = parseInt(NewVirtualQualityPoint)/parseInt(TotalChour);
								diff = (cgpa) - NewVirtualCGPA;
							}
							
						}
						
	
						alert(one);
						alert(range);
						alert(diff);
	
						$(this).val("ReCombine");
						//Dislpaying grades
						VirtualTableRow.each(function(indx){
							if ($(this).find("td:eq(0)").text() != "S/N"){
								currentGrade = virtualGrade[indx-1];
								$(this).find("td:eq(3)").html("<b><font color='8edd88'>"+currentGrade+"</font></b>");
							}
						})
						
						
						Table_Info_con.empty();
						if (NewVirtualCGPA > cgpa){
							Table_Info_con.html("<p>The combination below gives a CGPA of <b><font color='#0a0'>"+NewVirtualCGPA+"</font></b> which is greater than your target <b><font color='#ff0606'>"+cgpa+"</font></b></p>");
						}else if (NewVirtualCGPA < cgpa){
							Table_Info_con.html("<p>The combination below gives a CGPA of "+NewVirtualCGPA+" which is less than your target "+cgpa+"</p>");
						}else if (NewVirtualCGPA == cgpa){
							Table_Info_con.html("<p>The combination below gives a CGPA of "+NewVirtualCGPA+" which is equal to your target "+cgpa+"</p>");
						}
					
					}else{
						  msgConCON.slideUp(10);
						  msgCon.html("<p class='err'>Please provide your target CGPA first</p>");
						  msgConCON.slideDown(600);
						  Hrule.css("background-color", "#FF0606");
					}
						
				}
					
			
				////////////___________________end___________________/////////////////////
					
			}else{
				  combineStatus = 0;
				  msgConCON.slideUp(10);
				  msgCon.html("<p class='err'>Please check for possibilities first</p>");
				  msgConCON.slideDown(600);
				  Hrule.css("background-color", "#FF0606");
					
			}

	
					
				
		}else{
			combineStatus = 0;
			msgConCON.slideUp(10);
			msgCon.html("<p class='err'>Please provide your target CGPA first</p>");
			msgConCON.slideDown(600);
			Hrule.css("background-color", "#FF0606");
			
		}
			
			
				
				
			
			

		
		
		
	});
	
	
}
function floatCheck(num){
	reg_filter = /^[0-9]\.[0-9]{1,2}$/;
	if (reg_filter.test(num)){
		return 1;
	}else{
		return 0;
	}
	
}
function zeroDiff(num){
	if (num < 0.09 || num == 0){
		return 1;
		
	}else{
		return 0;	
	}
	
}
function compute(){
	if (level == 100 && semester == "first"){
		TotalChour =0;
		VirtualQualityPoint = 0;
		VirtualTableRow.each(function(indx){
		currentChour = $(this).find("td:eq(4)").text();
		
		if(currentChour != "Credit hour"){
			
			TotalChour = parseInt(TotalChour) + parseInt(currentChour);
			mul = 5*parseInt(currentChour);
			VirtualQualityPoint = parseInt(VirtualQualityPoint) + parseInt(mul);
		}		
		});
		VirtualCGPA = parseInt(VirtualQualityPoint)/parseInt(TotalChour);
		maxCon.val(VirtualCGPA+".00");	
		
	}else{
		VirtualTableRow.each(function(indx){
		currentChour = $(this).find("td:eq(4)").text();
		if(currentChour != "Credit hour"){
			TotalChour = parseInt(TotalChour) + parseInt(currentChour);
			mul = 5*parseInt(currentChour);
			VirtualQualityPoint = parseInt(VirtualQualityPoint) + parseInt(mul);
		}		
		});
		VirtualCGPA = parseInt(VirtualQualityPoint)/parseInt(TotalChour);
		maxCon.val(VirtualCGPA);	
	}
	
	
}

function rand_4_5(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	if (zeroStat){
		one = "5";
		return 5;
	}else if(!zeroStat){

	if (range >= 1.5){
		one = "1.5";
		return 1;
	}else if (range >= 1.14){
			one ="1.14";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		//loop stoped
		}else if (range >= 1.11 ){
			one ="1.1111";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		}else if (range >= 1.1 ){
			v = Math.random();
			one = "1.1";
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 5;
			}
		//loop stoped
		}else if (range >= 1.06 ){
			one = "1.06";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 2;
				}
			}else if(v <= 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 1.03 ){
			one = "1.03";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else{
				return 2;
			}
		//loop stoped
		}else if (range >= 1.0 ){
			one = "1.0";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 5;
			}
		//loop stoped
		}else if (range >= 0.9 ){
			one = "0.9";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range > 0.8 ){
			one = "0.8";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 4;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.7 ){
			one = "0.7";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.6 ){
			one = "0.6";
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.5 ){
			one = "0.5";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.4 ){
			one = "0.4";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 1;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.3 ){
			one = "0.3";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 5;
				}else{
					return 4;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.2 ){
			one = "0.2";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.1 ){
			one = "0.1";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 2;
			}
		//loop stopped
		}else if (range >= 0.08 ){
			one = "0.08";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.05 ){
			one = "0.05";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 1;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.01 ){
			one = "0.01";
			range = range;
			v = Math.random();
			if(v < 0.2 ){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
			
		}
		
		
	}
	

}
function rand_4_0(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	if (zeroStat){
		one = "5";
		return 5;
	}else if(!zeroStat){

	if (range >= 1.5){
		one = "1.5";
		return 1;
	}else if (range >= 1.14){
			one ="1.14";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		//loop stoped
		}else if (range >= 1.11 ){
			one ="1.1111";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		}else if (range >= 1.1 ){
			v = Math.random();
			one = "1.1";
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 5;
			}
		//loop stoped
		}else if (range >= 1.06 ){
			one = "1.06";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 2;
				}
			}else if(v <= 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 1.03 ){
			one = "1.03";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else{
				return 2;
			}
		//loop stoped
		}else if (range >= 1.0 ){
			one = "1.0";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 5;
			}
		//loop stoped
		}else if (range >= 0.9 ){
			one = "0.9";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range > 0.8 ){
			one = "0.8";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 4;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.7 ){
			one = "0.7";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.6 ){
			one = "0.6";
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.5 ){
			one = "0.5";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.4 ){
			one = "0.4";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 1;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.3 ){
			one = "0.3";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 5;
				}else{
					return 4;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.2 ){
			one = "0.2";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.1 ){
			one = "0.1";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 2;
			}
		//loop stopped
		}else if (range >= 0.08 ){
			one = "0.08";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.05 ){
			one = "0.05";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 1;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.01 ){
			one = "0.01";
			range = range;
			v = Math.random();
			if(v < 0.2 ){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 5;

				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
			
		}
		
		
	}
	

}
function rand_3_5(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	if (zeroStat){
		zdif = 1;
		one = "5";
		return 5;
	}else if(!zeroStat){
		zdif = 0;
		
		if (range >= 1.5){
			one = "1.5";
			return 1;
		}else if (range >= 1.14){
			one ="1.14";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		//loop stoped
		}else if (range >= 1.11 ){
			one ="1.1111";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		}else if (range >= 1.1 ){
			v = Math.random();
			one = "1.1";
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 5;
			}
		//loop stoped
		}else if (range >= 1.06 ){
			one = "1.06";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 2;
				}
			}else if(v <= 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 1.03 ){
			one = "1.03";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else{
				return 2;
			}
		//loop stoped
		}else if (range >= 1.0 ){
			one = "1.0";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 1;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 5;
			}
		//loop stoped
		}else if (range >= 0.9 ){
			one = "0.9";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range > 0.8 ){
			one = "0.8";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 4;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.7 ){
			one = "0.7";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.6 ){
			one = "0.6";
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.5 ){
			one = "0.5";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.4 ){
			one = "0.4";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 1;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.3 ){
			one = "0.3";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 5;
				}else{
					return 4;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.2 ){
			one = "0.2";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 1;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.1 ){
			one = "0.1";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 2;
			}
		//loop stopped
		}else if (range >= 0.08 ){
			one = "0.08";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.05 ){
			one = "0.05";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 1;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range >= 0.01 ){
			one = "0.01";
			range = range;
			v = Math.random();
			if(v < 0.2 ){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
			
		}
		
		
	}
	

}
	
function rand_3_0(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	if (zeroStat){
		one = "5";
		return 5;
	}else if(!zeroStat){

	if (range >= 1.14 ){
		return 1;	
		//loop stoped
	}else if (range >= 1.11 ){
		one ="1.11";
		v = Math.random();
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 2;
		}else if(v < 0.4){
			return 2;
		}else if(v < 0.5){
			return 1;
		}else if(v < 0.6){
			return 1;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 1;
			}else{
				return 2;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else{
				return 1;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 5;
			}else{
				return 1;
			}
		}else{
			return 2;
		}
	}else if (range >= 1.1 ){
		v = Math.random();
		one = "1.1";
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 2;
		}else if(v < 0.4){
			return 2;
		}else if(v < 0.5){
			return 1;
		}else if(v < 0.6){
			return 2;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else{
				return 2;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else{
				return 1;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 1;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else{
				return 3;
			}
		}else{
			return 5;
		}
	//loop stoped
	}else if (range >= 1.06 ){
		one = "1.06";
		v = Math.random();
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 2;
		}else if(v < 0.4){
			return 3;
		}else if(v < 0.5){
			return 1;
		}else if(v < 0.6){
			return 1;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 1;
			}else{
				return 2;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else{
				return 2;
			}
		}else if(v <= 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else{
				return 5;
			}
		}else{
			return 1;
		}
	//loop stopped
	}else if (range >= 1.03 ){
		one = "1.03";
		v = Math.random();
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 2;
		}else if(v < 0.4){
			return 3;
		}else if(v < 0.5){
			return 2;
		}else if(v < 0.6){
			return 2;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 1;
			}else{
				return 2;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 3;
			}else{
				return 2;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else{
				return 5;
			}
		}else{
			return 2;
		}
	//loop stoped
	}else if (range >= 1.0 ){
		one = "1.0";
		v = Math.random();
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 2;
		}else if(v < 0.4){
			return 3;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 2;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 1;
			}else{
				return 2;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 3;
			}
		}else{
			return 5;
		}
	//loop stoped
	}else if (range >= 0.9 ){
		one = "0.9";
		v = Math.random();
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 4;
		}else if(v < 0.4){
			return 3;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 1;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 3;
			}
		}else{
			return 4;
		}
	//loop stopped
	}else if (range > 0.8 ){
		one = "0.8";
		v = Math.random();
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 2;
		}else if(v < 0.4){
			return 4;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 3;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 4;
			}
		}else{
			return 5;
		}
	//loop stopped
	}else if (range >= 0.7 ){
		one = "0.7";
		v = Math.random();
		if(v < 0.2){
			return 1;
		}else if(v < 0.3){
			return 2;
		}else if(v < 0.4){
			return 3;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 1;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 3;
			}
		}else{
			return 4;
		}
	//loop stopped
	}else if (range >= 0.6 ){
		one = "0.6";
		v = Math.random();
		if(v < 0.2){
			return 2;
		}else if(v < 0.3){
			return 5;
		}else if(v < 0.4){
			return 4;
		}else if(v < 0.5){
			return 5;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else{
			return 4;
		}
	//loop stopped
	}else if (range >= 0.5 ){
		one = "0.5";
		v = Math.random();
		if(v < 0.2){
			return 4;
		}else if(v < 0.3){
			return 3;
		}else if(v < 0.4){
			return 5;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else{
			return 4;
		}
	//loop stopped
	}else if (range >= 0.4 ){
		one = "0.4";
		v = Math.random();
		if(v < 0.2){
			return 4;
		}else if(v < 0.3){
			return 3;
		}else if(v < 0.4){
			return 4;
		}else if(v < 0.5){
			return 5;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 1;
			}else{
				return 5;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 1;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else{
			return 5;
		}
	//loop stopped
	}else if (range >= 0.3 ){
		one = "0.3";
		v = Math.random();
		if(v < 0.2){
			return 5;
		}else if(v < 0.3){
			return 5;
		}else if(v < 0.4){
			return 4;
		}else if(v < 0.5){
			return 5;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 1;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 5;
			}else{
				return 4;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else{
			return 3;
		}
	//loop stopped
	}else if (range >= 0.2 ){
		one = "0.2";
		v = Math.random();
		if(v < 0.2){
			return 5;
		}else if(v < 0.3){
			return 5;
		}else if(v < 0.4){
			return 4;
		}else if(v < 0.5){
			return 5;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 1;
			}
		}else{
			return 5;
		}
	//loop stopped
	}else if (range >= 0.1 ){
		one = "0.1";
		v = Math.random();
		if(v < 0.2){
			return 3;
		}else if(v < 0.3){
			return 3;
		}else if(v < 0.4){
			return 4;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else{
				return 5;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else{
				return 1;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 2;
			}else{
				return 3;
			}
		}else{
			return 2;
		}
	//loop stopped
	}else if (range >= 0.08 ){
		one = "0.08";
		v = Math.random();
		if(v < 0.2){
			return 3;
		}else if(v < 0.3){
			return 5;
		}else if(v < 0.4){
			return 5;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 3;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 2;
			}else{
				return 3;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else{
			return 1;
		}
	//loop stopped
	}else if (range >= 0.05 ){
		one = "0.05";
		v = Math.random();
		if(v < 0.2){
			return 5;
		}else if(v < 0.3){
			return 5;
		}else if(v < 0.4){
			return 5;
		}else if(v < 0.5){
			return 4;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else{
				return 3;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 2;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 1;
			}else{
				return 3;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else{
			return 5;
		}
	//loop stopped
	}else if (range >= 0.01 ){
		one = "0.01";
		range = range;
		v = Math.random();
		if(v < 0.2 ){
			return 5;
		}else if(v < 0.3){
			return 5;
		}else if(v < 0.4){
			return 5;
		}else if(v < 0.5){
			return 5;
		}else if(v < 0.6){
			return 5;
		}else if(v < 0.7){
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.8){
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 5;
			}
		}else if(v < 0.9){
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 5;
			}else if(v < 0.6){
				return 5;
			}else{
				return 2;
			}
		}else{
			return 1;
		}
			
	}
		
		
	}
	

}
function rand_2_5(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	if (zeroStat){
		one ="zeroStat";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 4;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 3;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 5;
			}
		
		}
		else if (range >= 0.54 ){
			one = "0.54";
				return 1;
		}else if (range >= 0.90 ){
			one = "0.90";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 1;
			}else if(v < 0.4){
				return 1;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		}else if (range >= 0.80 ){
			one = "0.80";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 1;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		}else if (range >= 0.77 ){
			one = "0.77";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 3;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		}else if (range >= 0.54 ){
			one = "0.54";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 3;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.45 ){
			one = "0.45";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 3;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 3;
				}else{
					return 4;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.5 ){
			one = "0.5";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 3;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.45 ){
			one = "0.45";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 3;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 3;
				}else{
					return 4;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		}else if (range >= 0.4 ){
			one = "0.4";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 3;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 4;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.3 ){
			one = "0.3";
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 4;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 4;
				}
			}else{
				return 3;
			}		//loop stopped
		}else if (range >= 0.2 ){
			one = "0.2";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 4;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 4;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.1 ){
			one = "0.1";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.08 ){
			one = "0.08";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.05 ){
			one = "0.05";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.01 ){
			one = "0.01";
			range = range;
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
			
		}	

}
function rand_2_0(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	if (zeroStat){
		one ="zeroStat";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 4;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 3;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 2;
			}
		
	}else if (range >= 0.54 ){
			one = "0.54";
			return 1;
		//loop stopped
		}else if (range >= 0.5 ){
			one = "0.5";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 1;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.45 ){
			one = "0.45";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 3;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		}else if (range >= 0.4 ){
			one = "0.4";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 3;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 4;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.3 ){
			one = "0.3";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 4;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else{
				return 3;
			}		//loop stopped
		}else if (range >= 0.2 ){
			one = "0.2";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.1 ){
			one = "0.1";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 2;
			}
		//loop stopped
		}else if (range >= 0.08 ){
			one = "0.08";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.05 ){
			one = "0.05";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 3;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.01 ){
			one = "0.01";
			range = range;
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
			
		}	

}
function rand_1_5(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	if (zeroStat){
		one ="zeroStat";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 4;
				}else{
					return 1;
				}
			}else{
				return 2;
			}
		
	}else if (range >= 0.54 ){
			one = "0.54";
			return 1;
		//loop stopped
		}else if (range >= 0.5 ){
			one = "0.5";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 1;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 1;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.45 ){
			one = "0.45";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 2;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 3;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		}else if (range >= 0.4 ){
			one = "0.4";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 3;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 4;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.3 ){
			one = "0.3";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 4;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else{
				return 3;
			}		//loop stopped
		}else if (range >= 0.2 ){
			one = "0.2";
			v = Math.random();
			if(v < 0.2){
				return 1;
			}else if(v < 0.3){
				return 2;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 3;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 2;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else{
				return 3;
			}
		//loop stopped
		}else if (range >= 0.1 ){
			one = "0.1";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 3;
			}else if(v < 0.4){
				return 2;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 1;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 1;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 5;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else{
				return 2;
			}
		//loop stopped
		}else if (range >= 0.08 ){
			one = "0.08";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 5;
			}else if(v < 0.4){
				return 5;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 1;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 5;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 3;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 2;
				}else{
					return 3;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 5;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 2;
				}
			}else{
				return 1;
			}
		//loop stopped
		}else if (range >= 0.05 ){
			one = "0.05";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 3;
				}else if(v < 0.6){
					return 3;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
		//loop stopped
		}else if (range >= 0.01 ){
			one = "0.01";
			range = range;
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 3;
			}else if(v < 0.5){
				return 2;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 3;
				}else if(v < 0.4){
					return 2;
				}else if(v < 0.5){
					return 1;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 2;
				}else if(v < 0.4){
					return 1;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 3;
				}else{
					return 5;
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 2;
				}else if(v < 0.3){
					return 1;
				}else if(v < 0.4){
					return 3;
				}else if(v < 0.5){
					return 2;
				}else if(v < 0.6){
					return 4;
				}else{
					return 5;
				}
			}else{
				return 4;
			}
			
		}	

}



function Gradelabel (value){
	if (value == 1){
		return "E";
	}else if(value == 2){
		return "D";
	}else if(value == 3){
		return "C";
	}else if(value == 4){
		return "B";
	}else if(value == 5){
		return "A";
	}
	
}