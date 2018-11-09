// JavaScript Document
$(document).ready(function(){
	logbtn 	= $(".log .log_con .main_log_log .logg");
	a_con	= $(".rlog");
	a_link 	= $(".rlog .rlog_con .rmain_log_log .rlogg a");
	
	logControl();
	
		
	
	
	
	
	
	
	
	
	
})
function logControl(){
	logbtn.on("click", function(){
		a_con.toggle({
			effect		: "slide",
			duration	: 400,
			direction	: "up"
		});
	})
	a_link.on("click", function(){
		a_con.toggle({
			effect		: "slide",
			duration	: 400,
			direction	: "up"
		});
	})
	
}