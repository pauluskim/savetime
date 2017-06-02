
$(document).ready(function(){
	$('.form-control').on('input', function() {
		var input=$(this);
		var is_name=input.val();
		if(is_name){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});

	$('#InputEmail').on('input', function() {
		var input=$(this);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(input.val());
		if(is_email){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});


	$("#submit").click(function(event){
		var form_data=$("#user_info").serializeArray();
		var error_free=true;
		for (var input in form_data){
			var element=$("#contact_"+form_data[input]['name']);
			var valid=element.hasClass("valid");
			if (!valid) error_free=false;
		}
		if (!error_free){
			event.preventDefault(); 
		}
		else{
			
			alert('No errors: Form will be submitted');
		}
	});

});