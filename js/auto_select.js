var user_spec = {};
/*
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        //file: "content_script.js"
          code: 'console.log("hello world")'
    }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
});
*/
$(document).ready(function(){
    UserRef.orderByChild("email").equalTo("asdf@asdf.asdf").on("child_added", function(snapshot) {
        user_spec["top_size"] = snapshot.val().top_size;
        user_spec["bottom_size"] = snapshot.val().bottom_size;
    });

    // https://stackoverflow.com/questions/4532236/how-to-access-the-webpage-dom-rather-than-the-extension-page-dom
    /*
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response);
      });
    });
    */
});
