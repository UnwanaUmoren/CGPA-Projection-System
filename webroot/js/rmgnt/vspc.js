// JavaScript Document
$(document).ready(function(){
	count = 0;
	captionCon = $(".con .m_con_right .c_table_con table caption");
	failedCoursesTable = $(".con .m_con_right .c_table_con #main_r_table tr");
	failedCoursesCon = $(".con .m_con_right .courses_info .top .left table").find("tr:eq(0) td:eq(1)");
	GPCon = $(".con .m_con_right .courses_info .top .left table").find("tr:eq(1) td:eq(1)");
	CGPA = $(".con .m_con_right .courses_info .top .left table").find("tr:eq(2) td:eq(1)");
	COL = $(".con .m_con_right .courses_info .top .left table").find("tr:eq(3) td:eq(1)");
	result_table =$(".con .m_con_right .c_table_con");
	main_result_table = $(".con .m_con_right .c_table_con #main_r_table");
	
	level = $(".con .m_con_right .frm_con .m_con table #level");
	semester = $(".con .m_con_right .frm_con .m_con table #semester");
	cousreInfoTable = $(".con .m_con_right .courses_info");
	currentSemester = $(".con .m_con_right #smtr").val();
	genErrCon = $(".con .m_con_right .d_error_con");
	currentLevel =  $(".con .m_con_right #lvl").val();
	reg =  $(".con .m_con_right #reg").val();
	err = 1;
	
	hrz = $(".con .m_con_right hr");
	e1 =$(".con .m_con_right .frm_con .m_con table tr td .err1");
	button = $(".con .m_con_right .frm_con .m_con table input[type='button']");
	e2 =$(".con .m_con_right .frm_con .m_con table tr td .err2");
	//e1.show("slide", {direction: "left"}, 850);
	//hrz.show();
	//cousreInfoTable.slideDown(500);
	
	validate();
	failedCount();
	
})
function validate(){
	
	level.on("change", function(){
		genErrCon.slideUp(500);
		genErrCon.find(".m_con").html("");
		if (level.val() == "Level"){
			level.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
			e1.html("Please select target level");
			err = 1;
			e1.show("slide", {direction: "left"}, 400);		
		}else if (level.val() > currentLevel){
			level.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
			e1.html("Target level must be less or equal to your current level");
			err = 1;
			e1.show("slide", {direction: "left"}, 400);		
		}else{
			level.css({borderColor: "#0a5825", backgroundColor: " #CDF0CA", color: "#063"});
			e1.html("");
			err = 0;
			e1.hide("slide", {direction: "left"}, 700);
		}
		
		
		
	})
	semester.on("change", function(){
		genErrCon.slideUp(500);
		genErrCon.find(".m_con").html("");
		if (semester.val() == "Semester"){
			semester.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
			e2.html("Please select target semester");
			err = 1;
			e2.show("slide", {direction: "left"}, 400);
			
		}else if(level.val() == currentLevel && semester.val() == currentSemester){
			semester.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
			e2.html("Sorry, but result for on going semester cannot be checked");
			err = 1;
			e2.show("slide", {direction: "left"}, 400);		
		}else if (level.val() == currentLevel && currentSemester != "second" && semester.val() == "second" ){
			semester.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
			e2.html("You are not yet in the semester selected");
			err = 1;
			e2.show("slide", {direction: "left"}, 400);	
					
		}else{
			semester.css({borderColor: "#0a5825", backgroundColor: " #CDF0CA", color: "#063"});
			e2.html("");
			err = 0;
			e2.hide("slide", {direction: "left"}, 700);
		}
		
		
		
	})
	
	button.on("click", function(){
		genErrCon.slideUp(500);
		genErrCon.find(".m_con").html("");
		if (level.val() == "Level"){
			level.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
			e1.html("Please select target level");
			err = 1;
			e1.show("slide", {direction: "left"}, 400);
			
		}
		if (semester.val() == "Semester"){
			semester.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
			e2.html("Please select target semester");
			err = 1;
			e2.show("slide", {direction: "left"}, 400);
			
		}
		if (level.val() != "Level" && semester.val() != "Semester"){
			if (level.val() <= currentLevel){
				level.css({borderColor: "#0a5825", backgroundColor: " #CDF0CA", color: "#063"});
					e1.html("");
					err = 0;
					e1.hide("slide", {direction: "left"}, 700);
				if (level.val() != "Level" && semester.val() != "Semester"){
					if (level.val() == currentLevel && semester.val() == currentSemester){
						semester.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
						e2.html("Sorry, but result for on going semester cannot be checked");
						err = 1;
						e2.show("slide", {direction: "left"}, 400);		
					}else if (level.val() == currentLevel && currentSemester != "second" && semester.val() == "second" ){
						semester.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
						e2.html("You are not yet in the semester selected");
						err = 1;
						e2.show("slide", {direction: "left"}, 400);	
					
					}else{
						semester.css({borderColor: "#0a5825", backgroundColor: " #CDF0CA", color: "#063"});
						e2.html("");
						err = 0;
						e2.hide("slide", {direction: "left"}, 700);
						
					}
	
				}
			
			}else{
				level.css({borderColor: "red", backgroundColor: " #FFC6C6", color: "red"});
				e1.html("Target level must be less or equal to your current level");
				err = 1;
				e1.show("slide", {direction: "left"}, 400);		
				
			}
			
			
			
		}
			
			
			
				
		if (err == 0){
			get_result();
		}
		
		
		
		
	})
	
}
function failedCount(){
	failedCoursesTable = $(".con .m_con_right .c_table_con #main_r_table tr");
	count = 0;
	failedCoursesTable.each(function() {
		grade = $(this).find("td:eq(3)").text();
		
		if(grade == 'F'){
			count++;
		};
    });
	
	if (count == 0){
		failedCoursesCon.html("<font color='#009933'><b>No failed courses</b></font>");
	}else if (count == 1){
		failedCoursesCon.html("<font color='#FF0000'><b>"+count +" failed course</b></font>");
	}else if (count > 1){
		failedCoursesCon.html("<font color='#FF0000'><b>"+count +" failed courses</b></font>");
	}
	
	
	
}

function get_result(){
	$.ajax({
    	url: '/proc/get_result.php',
		type: 'POST',
        data:
		{
			id		:"get_result",
			semester: semester.val(),
			level	: level.val(),
			reg		: reg,
	 CurrentSemesetr: currentSemester
		},
		dataType:"Json",
        success: function(data){
			if (data ==1){
				genErrCon.slideDown(500);
				genErrCon.find(".m_con").html("<p>Sorry result not found</p>");
			}else if (data == 2){
				genErrCon.slideDown(500);
				genErrCon.find(".m_con").html("<p>Sorry result not ready</p>");
			}else{
				genErrCon.slideUp(500);
				genErrCon.find(".m_con").html("");
				main_result_table.empty();
				result_table.slideDown(600);
				newtag = "";
				n =1;
				gp = 0.00;
				cgpa = 0.00;
				col="";
				main_result_table.empty();
				$.each(data.res, function(){
					//manipulate data
					if (this['course_title'] != undefined){
						newtag += "<tr id='"+n+"'>";
						newtag += "<td width='30'>"+n+"</td>";
						newtag += "<td width='340'>"+this['course_title']+"</td>";
						newtag += "<td width='90'>"+this['course_code']+"</td>";
						if (this['grade']=='F'){
							newtag += "<td width='90'><font color='#FF0000'>"+this['grade']+"</font></td>";
						}else{
							newtag += "<td width='90'>"+this['grade']+"</td>";
						}
						
						newtag += "<td width='80'>"+this['course_credit_hour']+"</td>";
						newtag += "<td width='80'>"+this['course_type']+"</td>";
						newtag += "</tr>";
						
						n++;
						
					}
					if(this['gp'] != undefined){
						gp = this['gp'];
					}
					if(this['cgpa'] != undefined){
						cgpa = this['cgpa'];
					}
					if(this['col'] != undefined){
						col = this['col'];
					}
					
					
				})
				main_result_table.append(newtag);
				cousreInfoTable.show();
				failedCount();
				captionCon.empty;
				captionCon.html(level.val()+ " level | " + semester.val() +" semester");
				CGPA.html("<font color='#009933'><b>"+cgpa+"</b></font>");
				GPCon.html("<font color='#009933'><b>"+gp+"</b></font>");
				COL.html("<font color='#009933'><b>"+col+"</b></font>");
			}
			
				

        }     
	});	
}