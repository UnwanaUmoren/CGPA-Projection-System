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
	combineStatus = 0;
	one = "";
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
					
				}else{
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
					cgpa = parseFloat(cgpa_con.val());
					function cmp (){
						NewVirtualQualityPoint = QPointSum;
						NewVirtualCGPA = 0;
						VirtualTableRow.each(function(indx){	
							if ($(this).find("td:eq(0)").text() != "S/N"){
								currentH = $(this).find("td:eq(4)").text();
								grade = rand();
			
								gradeLabel = Gradelabel(grade);
								tmpQP = parseInt(currentH) * parseInt(grade);
								NewVirtualQualityPoint = parseInt(NewVirtualQualityPoint) + parseInt(tmpQP);
								virtualGrade[indx-1] = gradeLabel;
								//alert(grade + " = " + gradeLabel + " " + currentH);
							
							}
			
			
						});			
					}
				
				}
		
				if(combineStatus == 1){
					cmp();
					NewVirtualCGPA = parseInt(NewVirtualQualityPoint)/parseInt(TotalChour);
					diff = NewVirtualCGPA - (cgpa);
					//scan until the range 0 ~ 0.8
					/*if ((diff > 0 && diff < 0.8)){
						alert(" if "+ diff);
					}
						alert(diff);*/
					/*while(1){
						//alert(diff);
						if (!(diff > 0 && diff < 0.8)){
							
							cmp();
						}else{
						}
						
					}*/
					//alert(NewVirtualCGPA);
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
						Table_Info_con.html("<p>The combination below gives a CGPA of "+NewVirtualCGPA+" which is equal to your target "+cgpa+"</p>");
					}
				
				}else{
					msgConCON.slideUp(10);
					msgCon.html("<p class='err'>Please provide your target CGPA first</p>");
					msgConCON.slideDown(600);
					Hrule.css("background-color", "#FF0606");
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
	reg_filter = /^0\.00[0-9]*$/;
	if (reg_filter.test(num)){
		return 1;
	}else{
		return 0;
	}
	
}
function compute(){
	
	VirtualTableRow.each(function(indx){
		currentChour = $(this).find("td:eq(4)").text();
		if(currentChour != "Credit hour"){
			TotalChour = parseInt(TotalChour) + parseInt(currentChour);
			mul = 5*parseInt(currentChour);
			VirtualQualityPoint = parseInt(VirtualQualityPoint) + parseInt(mul);
		}		
	});
	VirtualCGPA = parseInt(VirtualQualityPoint)/parseInt(TotalChour);	
}
function rand(){
	cgpa = parseFloat(cgpa_con.val());
	range = VirtualCGPA - cgpa;
	zeroStat = zeroDiff(range);
	
	if (zeroStat){
		return 5;
	}else if(!zeroStat){
		if (range > 1.6 ){
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 1.5 ){
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 1.4 ){
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 1.3 ){
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 1.2 ){
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 1.1 ){
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 1.0 ){
			alert(one);
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 0.9 ){
			one = "0.9";
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 0.8 ){
			one = "0.8";
			v = Math.random();
			if(v < 0.2){
				return 5;
			}else if(v < 0.3){
				return 1;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		}else if (range > 0.7 ){
			one = "0.7";
			v = Math.random();
			if(v < 0.2){
				return 5;
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
					return 3;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		//loop stopped
		}else if (range > 0.6 ){
			one = "0.6";
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		//loop stopped
		}else if (range > 0.5 ){
			one = "0.5";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 5;
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
					return 5
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
					return 4;
				}else{
					return 4
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
					return 5
				}
			}else{
				return 5
			}
		//loop stopped
		}else if (range > 0.4 ){
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
					return 5;
				}else{
					return 5
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
					return 5
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
					return 5
				}
			}else{
				return 5
			}
		//loop stopped
		}else if (range > 0.3 ){
			one = "0.3";
			v = Math.random();
			if(v < 0.2){
				return 3;
			}else if(v < 0.3){
				return 4;
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
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 3;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5
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
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5
				}
			}else{
				return 5
			}
		//loop stopped
		}else if (range > 0.2 ){
			v = Math.random();
			if(v < 0.2){
				return 4;
			}else if(v < 0.3){
				return 4;
			}else if(v < 0.4){
				return 4;
			}else if(v < 0.5){
				return 4;
			}else if(v < 0.6){
				return 5;
			}else if(v < 0.7){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5
				}
			}else if(v < 0.8){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5
				}
			}else if(v < 0.9){
				v = Math.random();
				if(v < 0.2){
					return 4;
				}else if(v < 0.3){
					return 4;
				}else if(v < 0.4){
					return 4;
				}else if(v < 0.5){
					return 4;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5
				}
			}else{
				return 5
			}
		//loop stopped
		}else if (range > 0.1 ){
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
					return 5;
				}else{
					return 5
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
					return 5;
				}else{
					return 5
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
					return 5;
				}else{
					return 5
				}
			}else{
				return 5
			}
		//loop stopped
		}else if (range > 0.05 ){
			v = Math.random();
			if(v < 0.2){
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
					return 4;
				}else if(v < 0.5){
					return 5;
				}else if(v < 0.6){
					return 5;
				}else{
					return 5;
				}
			}else{
				return 5;
			}
		//loop stopped
		}else if (range > 0.01 ){
			return 5;
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