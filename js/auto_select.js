var user_spec = {};


$(document).ready(function(){
    UserRef.orderByChild("email").equalTo("asdf@asdf.asdf").on("child_added", function(snapshot) {
        console.log("hey");
        console.log(snapshot.key);
        console.log(snapshot.val());
        console.log(snapshot.val().email);
        console.log(snapshot.val().top_size);
        user_spec["top_size"] = snapshot.val().top_size;
        user_spec["bottom_size"] = snapshot.val().bottom_size;
    });

    console.log("console.log");
    console.log($("#sku-selection .label").parent());
    // https://stackoverflow.com/questions/4532236/how-to-access-the-webpage-dom-rather-than-the-extension-page-dom
});
