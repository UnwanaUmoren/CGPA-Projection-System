// JavaScript Document

$(document).ready(function(){
	dropButton = $(".con .m_con_right .courses_info .top .right .bt_con input[type='button']");
	tableRow = $(".con .m_con_right .c_table_con table tr");
	chour = $(".con .m_con_right .courses_info .top .left table tr:eq(2) td:eq(1)").text();
	erroCon = $(".con .m_con_right .d_error_con");
	grandChour=0;
	totalSelected = 0;
	sel = 0;
	err = 0;
	toDropCourses = [];
	validate();
	

})
function validate(){
	tableRow.each(function(indx){
		$(this).find("td:eq(5) input[type='checkbox']").on("click", function(){
			Rid  = $(this).attr("rid");
			currentChour = $(".con .m_con_right .c_table_con table tr:eq("+Rid+")").find("td:eq(3)").text();
			if ($(this).is(":checked")){
				totalSelected = parseInt(totalSelected)+parseInt(currentChour);
				grandChour = parseInt(chour) - parseInt(totalSelected);
				sel++
				//alert(grandChour);
				if (grandChour < 9){
					$(".con .m_con_right .courses_info .top .left table tr:eq(2) td:eq(1)").html("<font color='#F00'><b>"+grandChour+"</b></font");
				}else{
					$(".con .m_con_right .courses_info .top .left table tr:eq(2) td:eq(1)").html("<font color='#00CC66'><b>"+grandChour+"</b></font");
				}
				
				if (grandChour < 9){
					erroCon.slideDown(400);
					erroCon.find(".m_con").html("<p>Minimum allowed credit hour exceeded</p>");
					err = 1;
					
				}else{
					err = 0;
					
					erroCon.slideUp(400);
					erroCon.find(".m_con").html("");
					
				}
			}else if($(this).is(":not(:checked)")){
				totalSelected = parseInt(totalSelected)-parseInt(currentChour);
				grandChour = parseInt(chour) - parseInt(totalSelected);
				sel--
				//alert(grandChour);	
				if (grandChour < 9){
					$(".con .m_con_right .courses_info .top .left table tr:eq(2) td:eq(1)").html("<font color='#F00'><b>"+grandChour+"</b></font");
				}else{
					$(".con .m_con_right .courses_info .top .left table tr:eq(2) td:eq(1)").html("<font color='#00CC66'><b>"+grandChour+"</b></font");
				}if (grandChour < 9){
					erroCon.slideDown(400);
				}else{
					err = 0;
					erroCon.slideUp(400);
				}
			}		
		})
	
	})
	
	dropButton.on("click", function(){
		if (sel >0){
			if (err == 0){
				toDropCourses = [];
				tableRow.each(function(indx){
					if ($(this).find("td:eq(5) input[type='checkbox']").is(":checked")){
						rid = $(this).find("td:eq(5) input[type='checkbox']").attr("rid");
						cCode = $(".con .m_con_right .c_table_con table tr:eq("+rid+")").find("td:eq(2)").text();
						r = toDropCourses.length;
						if (toDropCourses.indexOf(cCode) == -1){
							toDropCourses[r] = cCode;
						}
						
						
					}
					
					
				})
				$.ajax(
				{
					url: '/proc/drop_course.php',
					type: 'POST',
					data:{
						id				:"drop_courses",
						toDropCourses	:toDropCourses
					},
					dataType:"Json",
					success: function(data){
						if (data == 1){
							location.reload();
						}

					
					}
				})				
			}else{

			}			
		}else{
			erroCon.slideDown(400);
			erroCon.find(".m_con").html("<p>No course selected</p>");
			err = 1;
		}
	})
}