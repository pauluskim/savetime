function writeUserData(user_data) {
    var input_form = {};
    $(user_data).each(function(i, field){
        input_form[field.name] = field.value;
    });
    UserRef.push(input_form);
}

$(document).ready(function(){
	$('.form-control').on('input', function() {
		var input=$(this);
		var is_name=input.val();
		if(is_name){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});

	$('#user_info_email').on('input', function() {
		var input=$(this);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(input.val());
		if(is_email){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});


	$("#submit").click(function(event){
		var form_data=$("#user_info").serializeArray();
        console.log(form_data);
        console.log(form_data[0].name);
        console.log(form_data.name);
        console.log(form_data.name);
		var error_free=true;
		for (var input in form_data){
			var element=$("#user_info_"+form_data[input]['name']);
            console.log(element);
			var valid=element.hasClass("valid");
            console.log(valid);
			if (!valid) error_free=false;
		}
		if (!error_free){
			event.preventDefault(); 
            console.log("error");
		}
		else{
			event.preventDefault(); 
            console.log("no error");
            writeUserData(form_data);
		}
	});

});

