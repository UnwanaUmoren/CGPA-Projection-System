// JavaScript Document
$(document).ready(function(){
	regButton = $(".con .m_con_right .courses_info .top .right .bt_con input[type='button']");
	outSandingCoursesTable = $(".con .m_con_right .f_courses .bt table tr");
	ExcludedCoursesTable = $(".con .m_con_right .f_courses2 .bt table tr");
	ErrorCon = $(".con .m_con_right .err_con");
	semester2 = $(".con .m_con_right #sem").val();
	reg = $(".con .m_con_right #rg").val();
	level = $(".con .m_con_right #level2").val();
	failedCoursesPlusReg = [];
	ExcludedCourses = [];
	toRegCourses = [];
	toOUT = [];
	nextRegInclude = 0;
	nextOutInclude = 0;
	TOTAL = 0;
	regCourseCount = 0;
	totalFailedChour = $(".con .m_con_right #courses_info .top .left table tr:eq(0) td:eq(1)").text();
	coursesTableRow = $(".con .m_con_right .c_table_con table tr");
	//coursesTableRowChkbox = $(".con .m_con_right .c_table_con table tr");
	GrandChour = 0;
	GrandChourCON = $(".con .m_con_right .courses_info .top .left table tr:eq(2) td:eq(1)");
	validate();
	computeAll();
	
	
})

function validate(){
	regButton.on("click", function(){
		TOTAL = GrandChour + parseInt(totalFailedChour);
		if (TOTAL >= 9 && TOTAL <= 24){
			nextRegInclude = failedCoursesPlusReg.length;
			while(toRegCourses.length > 0){
				toRegCourses.pop();
			};
			nextOutInclude = ExcludedCourses.length;
			while(toOUT.length > 0){
				toOUT.pop();
			};
			coursesTableRow.each(function(indx){
				if ($(this).find("td:eq(5) input[type='checkbox']").is(":checked")){
						cCode =  $(this).find("td:eq(2)").text();
						//insert Into reg_plus failed array
						for (x=0 ; x < nextRegInclude; x++){
							toRegCourses[x] = failedCoursesPlusReg[x];
						}
						l = toRegCourses.length;					
						toRegCourses[l] = cCode;
	
					}else if($(this).find("td:eq(5) input[type='checkbox']").is(":not(:checked)")){
						cCode =  $(this).find("td:eq(2)").text();
						for (y=0 ; y < nextOutInclude; y++){
							toOUT[y] = ExcludedCourses[y];
						}
						l2 = toOUT.length;					
						toOUT[l2] = cCode;
					};
				
				
				
			})
			//Ajax call section
			register();	
		}else if (TOTAL < 9){
			GrandChourCON.html("<font color='#00CC66'><b>"+GrandChour+" + "+"<font color='#FF0000'><b>"+totalFailedChour+"</b></font> = <font color='#FF0000'><b>"+TOTAL+"</b></font>");
			ErrorCon.slideDown(600);
			ErrorCon.find(".m_con").html("<p>You have exceeded the minimum sum of allowed credit hour</p>");
		}else{
			GrandChourCON.html("<font color='#00CC66'><b>"+GrandChour+" + "+"<font color='#FF0000'><b>"+totalFailedChour+"</b></font> = "+TOTAL);
			ErrorCon.slideUp(600);
			ErrorCon.find(".m_con").empty();
		}
		
		
		
		
		
		
	})

	coursesTableRow.each(function(indx){
		//currentChour = $(this).find("td:eq(3)").text();
		$(this).find("td:eq(5) input[type='checkbox']").on("click", function(){
			
			if ($(this).is(":checked")){
				rid = $(this).attr("rid");
				actRow = $(".con .m_con_right .c_table_con table #"+rid).find("td:eq(3)").text();
				GrandChourCON.empty();
				GrandChour += parseInt(actRow);
				TOTAL = GrandChour + parseInt(totalFailedChour);
				regCourseCount++;
				if (TOTAL > 24){
					GrandChourCON.html("<font color='#00CC66'><b>"+GrandChour+" + "+"<font color='#FF0000'><b>"+totalFailedChour+" = </b></font><font color='#FF0000'><b>"+TOTAL+"</b></font>");
					ErrorCon.slideDown(600);
					ErrorCon.find(".m_con").html("<p>You have exceeded the maximum sum of allowed credit hour</p>");
					
				}else if (TOTAL < 9){
					GrandChourCON.html("<font color='#00CC66'><b>"+GrandChour+" + "+"<font color='#FF0000'><b>"+totalFailedChour+"</b></font> = <font color='#FF0000'><b>"+TOTAL+"</b></font>");
					ErrorCon.slideDown(600);
					ErrorCon.find(".m_con").html("<p>You have exceeded the minimum sum of allowed credit hour</p>");
				}else{
					GrandChourCON.html("<font color='#00CC66'><b>"+GrandChour+" + "+"<font color='#FF0000'><b>"+totalFailedChour+"</b></font> = "+TOTAL);
					ErrorCon.slideUp(600);
					ErrorCon.find(".m_con").empty();
					
				}
				
			}
			if ($(this).is(":not(:checked)")){
				rid = $(this).attr("rid");
				actRow = $(".con .m_con_right .c_table_con table #"+rid).find("td:eq(3)").text();
				GrandChourCON.empty();
				GrandChour -= parseInt(actRow);
				regCourseCount--;
				TOTAL = GrandChour + parseInt(totalFailedChour);
				if (TOTAL < 9){
					GrandChourCON.html("<font color='#00CC66'><b>"+GrandChour+" + "+"<font color='#FF0000'><b>"+totalFailedChour+"</b></font> = <font color='#FF0000'><b>"+TOTAL+"</b></font>");
					ErrorCon.slideDown(600);
					ErrorCon.find(".m_con").html("<p>You have exceeded the minimum sum of allowed credit hour</p>");
				}else{
					GrandChourCON.html("<font color='#00CC66'><b>"+GrandChour+" + "+"<font color='#FF0000'><b>"+totalFailedChour+"</b></font> = "+TOTAL);
					ErrorCon.slideUp(600);
					ErrorCon.find(".m_con").empty();
				}
				
			}
			
			
			
		});
		
		
	})
	
}

function computeAll(){
	//failedCourses;
	outSandingCoursesTable.each(function(indx){
		SNColumn = $(".con .m_con_right .f_courses .bt table").find("tr:eq("+indx+") td:eq(0)").text();
		
		if (SNColumn > 0){
			cCode = $(this).find("td:eq(2)").text();
			failedCoursesPlusReg[indx-1] = cCode;
		}
		
		
		
	})
	
	
	//Excluded courses
	ExcludedCoursesTable.each(function (indx){
		SNColumn = $(".con .m_con_right .f_courses2 .bt table").find("tr:eq("+indx+") td:eq(0)").text();
		
		if (SNColumn > 0){
			cCode = $(this).find("td:eq(2)").text();
			ExcludedCourses[indx-1] = cCode;
		}	
		
		
	});	
	nextOutInclude = ExcludedCourses.length;
}
function register(){
	$.ajax({
    	url: '/proc/reg_failed.php',
		type: 'POST',
        data:
		{
			id		:" r_f ",
			semester: semester2,
			level	: level,
			reg		: reg,
		  regCourses: toRegCourses,
		  OutCourses: toOUT
		},
		dataType:"Json",
        success: function(data){
			if (data ==1){
				location.reload();
			}
		}
			
				

             
	});	
	
	
	
}