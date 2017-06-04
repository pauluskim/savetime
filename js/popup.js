function writeUserData(user_data) {
    var input_form = {};
    $(user_data).each(function(i, field){
        input_form[field.name] = field.value;
    });
    UserRef.push(input_form);
}

//popup 스크립트에서 gilt.com 페이지 자바스크립트 로딩에 접근하는 문제를 해결해야함.
chrome.browserAction.onClicked.addListener(function(tab) {
console.log("clicked");
    chrome.tabs.executeScript(tab.id, {
        file: "content_script.js"
    }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
});
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
		var error_free=true;
		for (var input in form_data){
			var element=$("#user_info_"+form_data[input]['name']);
			var valid=element.hasClass("valid");
			if (!valid) error_free=false;
		}
		if (!error_free){
            alert("input field is not valid.");
			event.preventDefault(); 
		}
		else{
			event.preventDefault(); 
            writeUserData(form_data);
		}
	});

});

