// JavaScript Document
$(document).ready(function(){
	count = 0;
	//failedCoursesTable = $(".con .m_con_right .c_table_con table tr");
	failedCoursesCon = $(".con .m_con_right .courses_info .top .left table").find("tr:eq(0) td:eq(1)");
	
	
	failedCount();
	
	
	
	
})
function failedCount(){
	failedCoursesTable = $(".con .m_con_right .c_table_con table tr");
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