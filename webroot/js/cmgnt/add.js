// JavaScript Document

$(document).ready(function(){
	s1=s2=s3="";
	chour = $(".con .m_con_right .courses_info .top .left table").find("tr:eq(2) td:eq(1)").text();
	buttonUpdate = $(".con .m_con_right .courses_info .top .right .bt_con input[type='button']");
	table  = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table");
	faculty = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr td #fac");
	department = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr td #dept");
	level = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr td #level");
	buttonShowCourses = $(".con .m_con_right .add_sec .add_con .main_con .pull_con #pldown tr td input[type='button']");
	
	facErrorCon = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr:eq(0) td:eq(2)");
	deptErrorCon = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr:eq(1) td:eq(2)");
	levelErrorCon = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr:eq(2) td:eq(2)");
	
	coursesCon = $(".con .m_con_right .courses_con");
	coursesConTable = $(".con .m_con_right .courses_con #c_con");
	table_button = $(".con .m_con_right .courses_con #bt");
	
	///////
	semester = $(".con .m_con_right .c_table_con input[type='hidden']").attr("value");
	coursesConCaption = $(".con .m_con_right .courses_con caption");


	//reg = $(".con .m_con_right .c_table_con #reg").attr("value");
	
	upTable = $(".con .m_con_right .c_table_con #up");
	
	upCoursesCode = [];
	RegCourses = [];
	courseAddErrorCon = $(".con .m_con_right .error_sec .error_con");
	courseAddErrorSec = $(".con .m_con_right .error_sec");
	//chourDefault = parseInt(chour);
	
	RegCoursesTable = $(".con div.m_con_right div.c_table_con table#main_c_table");
	
	coursesArray();
	validate();
	scan_row();
	lockUpTable();
	update();
})
function coursesArray(){
	RegCoursesTable.find("tr").each(function(indx){
		if (indx != 0){
			cCode = $(this).find("td:eq(2)").text();
			RegCourses[indx-1]	= cCode;
		}
	})	
}
function validate(){
	faculty.on("change", function(){
		if (faculty.val() != "Faculty"){
			faculty.css("border", "1px solid #8edd88");
			facErrorCon.html("");
			get_dept(faculty.val());
			s1 = "OK";
		}	
	});
	department.on("change", function(){
		if (department.val() != "Department"){
			//v = department.find("option:selected").attr("dname");
			department.css("border", "1px solid #8edd88");
			deptErrorCon.html("");
			s2 = "OK";
			//alert(v);
		}	
	});
	level.on("change", function(){
		lvl = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr:eq(2) td:eq(1) #level").find("option:selected").attr("dname");
			currentLevel = $(".con .m_con_right .c_table_con #lvl").attr("value");
		if (level.val() != "Level"){
			if (parseInt(lvl) > parseInt(currentLevel)){
				level.css("border", "1px solid #F00");
				levelErrorCon.html("<p>Invalid level selected</p>");
				s3 = "";
			}else{
				level.css("border", "1px solid #8edd88");
				levelErrorCon.html("");
				s3 = "OK";
				
			}

		}	
	});	
	
	buttonShowCourses.on("click", function(){
		///faculty
		if(faculty.val() == "Faculty"){
			faculty.css("border", "1px solid #F00");
			facErrorCon.html("<p>Please select course faculty</p>");
			s1 = "";
		}else{
			faculty.css("border", "1px solid #8edd88");
			facErrorCon.html("");
			s1 = "OK";
		}
		
		/////dept
		if (department.val() == "Department"){
			department.css("border", "1px solid #F00");
			deptErrorCon.html("<p>Please select course department</p>");
			s2 = "";
		}else{
			department.css("border", "1px solid #8edd88");
			deptErrorCon.html("");
			s2 = "OK";
		}
		
		//level
		if (level.val() == "Level"){
			level.css("border", "1px solid #F00");
			levelErrorCon.html("<p>Please select course level</p>");
			s3 = "";
		}else if (parseInt(lvl) > parseInt(currentLevel)){
				level.css("border", "1px solid #F00");
				levelErrorCon.html("<p>Invalid level selected</p>");
				s3 = "";
		}else{
			level.css("border", "1px solid #8edd88");
			levelErrorCon.html("");
			s3 = "OK";
		}
		
		if(s1== "OK" && s2== "OK" && s3== "OK"){
			get_courses(faculty.val(), department.val(), level.val(), semester);
		}		
	})
	
		
}

function scan_row(){
	err = "";
	totalSel = 0;
	// chour = chourDefault;
	 grandTotal= parseInt(chour);
	//rowSelected
	
/////////////////////////////________Checkbox__________//////////////////////////////
	coursesConTable.on("click", "input[type='checkbox']",function(event){
		if (upCoursesCode.length==0){
			riD = $(this).attr("rid")-1;
			cCode = $(".con .m_con_right .courses_con #c_con tr:eq("+riD+") td:eq(2)").html();
			if (RegCourses.indexOf(cCode) != -1){
				event.preventDefault();
				alert("Course already registered");
			}else if (RegCourses.indexOf(cCode) == -1){
				$(this).toggleClass("sel");
				Rid = $(this).attr("rid")-1;
				
				thour = coursesConTable.find("tr:eq("+Rid+") td:eq(3)").text();
				totalCHour = parseInt(thour)+parseInt(chour);
				if ($(this).attr("class") == "sel"){
					grandTotal = parseInt(grandTotal) + parseInt(thour);
					chour = grandTotal;
					totalSel++;
					if (grandTotal>24){
						table_button.find("#gt").html("<font color='#F90000'><b>"+grandTotal+"</b></font>");
						err = "Maximum allowed credit hour exceeded";
						table_button.find("#err_con").html("<font color='#F90000'><b>"+err+"</b></font>");
						
					}else{
						table_button.find("#gt").html("<font color='#00CC66'><b>"+grandTotal+"</b></font>");
						err = "";
						table_button.find("#err_con").html(err);
					}
					
				}else if ($(this).attr("class") == ""){
					grandTotal = parseInt(grandTotal) - parseInt(thour);
					chour = grandTotal;
					totalSel--;
					if (grandTotal>24){
						table_button.find("#gt").html("<font color='#F90000'><b>"+grandTotal+"</b></font>");
						err = "Maximum allowed credit hour exceeded";
						table_button.find("#err_con").html("<font color='#F90000'><b>"+err+"</b></font>")
					}else{
						table_button.find("#gt").html("<font color='#00CC66'><b>"+grandTotal+"</b></font>");
						err = "";
						table_button.find("#err_con").html(err);
					}		
				}	
				
			}	
		/////////if added 	
		}else if(upCoursesCode.length > 0){
			riD = $(this).attr("rid")-1;
			cCode = $(".con .m_con_right .courses_con #c_con tr:eq("+riD+") td:eq(2)").html();
			if (RegCourses.indexOf(cCode) != -1){
				event.preventDefault();
				alert("Course already registered");
			}else if (RegCourses.indexOf(cCode) == -1){
							riD = $(this).attr("rid")-1;
			cCode = $(".con .m_con_right .courses_con #c_con tr:eq("+riD+") td:eq(2)").html();
			if (upCoursesCode.indexOf(cCode) != -1){// found duplicate
				event.preventDefault();
				alert("Course already added to live table");
			}else if(upCoursesCode.indexOf(cCode) == -1){
				$(this).toggleClass("sel");
				Rid = $(this).attr("rid")-1;
			
				thour = coursesConTable.find("tr:eq("+Rid+") td:eq(3)").text();
				totalCHour = parseInt(thour)+parseInt(chour);
				if ($(this).attr("class") == "sel"){
					grandTotal = parseInt(grandTotal) + parseInt(thour);
					chour = grandTotal;
					totalSel++;
					if (grandTotal>24){
						table_button.find("#gt").html("<font color='#F90000'><b>"+grandTotal+"</b></font>");
						err = "Maximum allowed credit hour exceeded";
						table_button.find("#err_con").html("<font color='#F90000'><b>"+err+"</b></font>");
						
					}else{
						table_button.find("#gt").html("<font color='#00CC66'><b>"+grandTotal+"</b></font>");
						err = "";
						table_button.find("#err_con").html(err);
					}
					
				}else if ($(this).attr("class") == ""){
					grandTotal = parseInt(grandTotal) - parseInt(thour);
					chour = grandTotal;
					totalSel--;
					if (grandTotal>24){
						table_button.find("#gt").html("<font color='#F90000'><b>"+grandTotal+"</b></font>");
						err = "Maximum allowed credit hour exceeded";
						table_button.find("#err_con").html("<font color='#F90000'><b>"+err+"</b></font>")
					}else{
						table_button.find("#gt").html("<font color='#00CC66'><b>"+grandTotal+"</b></font>");
						err = "";
						table_button.find("#err_con").html(err);
					}		
				}
					
			}
			
				
		}

	}
		
		
});

/////////////////////////////________end of Checkbox__________//////////////////////////////


	//add button
	table_button.on("click","input[type='button']",function(){
		//if (upCoursesCode.length==0){
			if (totalSel > 0 && err == ""){
				coursesConTableRow = $(".con .m_con_right .courses_con #c_con tr");
				coursesConTableRow.each(function(indx){
				cCode = $(this).find("td:eq(2)").text();
				if($(this).find("td input[type='checkbox']").is(":checked")){
					c = $(this).find("td input[type='checkbox']").attr("rid");
					upCoursesCode[indx] = cCode;
					$(".con .m_con_right .courses_con #c_con").find("#"+c).clone().appendTo(upTable);
				}	
			});
			coursesCon.slideUp(400);
			$(".con .m_con_right .courses_info .top .left table").find("tr:eq(2) td:eq(1)").html("<font color='#00CC66'><b>"+chour+"</b></font>");
			
			}else if (err != ""){
			
			}else{
				err = "No course selected";
				table_button.find("#err_con").html("<font color='#DFDF00'><b>"+err+"</b></font>");
			}
			
			
		//}

		
	})
	
}
function get_dept(fac){
	$.ajax({
    	url: '/proc/get_dept.php',
		type: 'POST',
        data:{get_d :fac},
		dataType:"Json",
        success: function(data){
			department.empty();
			department.append("<option>Department</option>")
			$.each(data.res, function(){
				//manipulate data
				department.append("<option value='"  +this['d_code']+"'"+  " dname= '"+this['d_name']+"'>"+this['d_name']+"</option>")	
			})
        }     
	});		
}
function get_courses(faculty, department, level, semester){
	$.ajax({
    	url: '/proc/get_courses.php',
		type: 'POST',
        data:{
			id		:"get_courses",
					deptCode: department,
	facCode	:faculty,
			level	: level,
			semester: semester
		},
		dataType:"Json",
        success: function(data){
			
			newtag = "";
			newtag2 = "";
			table_button.empty();
			n =1;
			err= "";
			if (data == 1){
				coursesConTable.empty();
				coursesCon.slideUp(600);
				courseAddErrorSec.slideDown(400);
				err = "<p>No course found in your selection</p>";
				courseAddErrorCon.html(err);
								
			}else{
				dName =  $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr:eq(1) td:eq(1) #dept").find("option:selected").attr("dname");
	lvl = $(".con .m_con_right .add_sec .add_con .main_con .pull_con table tr:eq(2) td:eq(1) #level").find("option:selected").attr("dname");
	coursesConCaptionTXT = dName+" | "+lvl+ " level | "+semester+" semester courses";	
				
				$.each(data.res, function(){
				//manipulate data
				courseAddErrorCon.empty();
				courseAddErrorSec.slideUp(200);
				coursesCon.slideDown(400);
				coursesConTable.empty();
				newtag += "<tr id='"+n+"'>";
				newtag += "<td width='30'>*</td>";
				newtag += "<td width='340'>"+this['c_title']+"</td>";
				newtag += "<td width='90'>"+this['c_code']+"</td>";
				newtag += "<td width='80'>"+this['c_c_hour']+"</td>";
				newtag += "<td width='80'>"+this['c_type']+"</td>";
				newtag += "<td width='50'><input class = '' rid = '"+n+"'type='checkbox' name='course_code[]' value = '"+this['c_code']+"'/></td>";
				newtag += "</tr>";
				coursesConTable.append(newtag);
				n++;
				})
				newtag2 += "<tr height='35'>";
				newtag2 += "<td width='112'>Total credit hour:</td>";
				newtag2 += "<td width='20' id='gt'><font color='#00CC66'><b>"+chour+"</b></font></td>";
				newtag2 += "<td id='err_con'></td>";
				newtag2 += "<td width='150'><input type='button' value ='Add'/></td>";
				newtag2 += "</tr>";
				coursesConCaption.html(coursesConCaptionTXT);
				table_button.append(newtag2);
				
			}
        }     
	});		
}
function lockUpTable(){
	upTable = $(".con .m_con_right .c_table_con #up");
	upTable.on("click", "tr td input[type='checkbox']", function(event){
		event.preventDefault();
	})
}
function update(){
	buttonUpdate.on("click",function (){
		upTableRows = $(".con .m_con_right .c_table_con #up tr")
		newCourses = [];
		if (upTableRows.length == 0){
			
		}else {
			upTableRows.each(function(indx){
				newCourses[indx] = $(this).find("td:eq(2)").text();	
			})
			
			$.ajax(
			{
				url: '/proc/add_course.php',
				type: 'POST',
				data:{
					id			:"add_courses",
					newCourses	:newCourses
				},
				dataType:"Json",
				success: function(data){
					if (data == 1){
							location.reload();
					}
					
				}
			})
			
		}
		
		
	});
	
}