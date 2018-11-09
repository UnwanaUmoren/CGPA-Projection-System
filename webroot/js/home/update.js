// JavaScript Document
$(document).ready(function(){
	updateButton = $(".con .main_con .m_con .con_2 .con_right .update .con .sel_level .con table tr td input[type='button']");
	SelValue = $(".con .main_con .m_con .con_2 .con_right .update .con .sel_level .con table tr td select");
	errCon = $(".con .main_con .m_con .con_2 .con_right .err");
	currentLevel = 	$(".con .main_con .m_con .con_2 .con_right #cLevel").val();
	reg = $(".con .main_con .m_con .con_2 .con_right #reg").val();
	
	
	
	
	validate();
});
function validate(){
	SelValue.on("change", function(){
		if (SelValue.val() == "Select level"){
			errCon.slideDown(600);
			errCon.find(".con").html("<p>Please select your new level</p>");
			SelValue.css({
				backgroundColor: "#ffc6c6",
				border: "1px solid #f00"
				
				})
			
		}else{
			errCon.slideUp(600);
			errCon.find(".con").html("");
			SelValue.css({
				backgroundColor: "#FFF",
				border: "1px solid #8edd88"
				
				})
			
			
		}
		
		
		
	});
	updateButton.on("click", function(){
		if (SelValue.val() == "Select level"){
			errCon.slideDown(600);
			errCon.find(".con").html("<p>Please select your new level</p>");
			SelValue.css({
				backgroundColor: "#ffc6c6",
				border: "1px solid #f00"
				
				})
			
		}else{
			errCon.slideUp(600);
			errCon.find(".con").html("");
			SelValue.css({
				backgroundColor: "#FFF",
				border: "1px solid #8edd88"
				
			})
			diff = SelValue.val() - currentLevel;
			if (diff > 100 ){
				errCon.slideDown(600);
				errCon.find(".con").html("<p>You cannot skip a level, please sellect the appropiate level</p>");
				SelValue.css({
					backgroundColor: "#ffc6c6",
					border: "1px solid #f00"
				
				})
				
			
			}else{
				errCon.slideUp(600);
				errCon.find(".con").html("");
				SelValue.css({
					backgroundColor: "#FFF",
					border: "1px solid #8edd88"
					
				})
				
				update_level();
				
			}
				
			
			
		}
		
		
		
		
	})
	
}
function update_level(){
	$.ajax({
    	url: '/proc/update_level.php',
		type: 'POST',
        data:
		{
			id		:" update_level ",
			level	: SelValue.val(),
			reg		: reg
		},
		dataType:"Json",
        success: function(data){
			if (data == 1){
				location.reload();
			}
		}

		           
	});	
}
