//JavaScript Page for Graphic Village's Strength Campaign

$(document).ready(function(){
    console.log("Hello, world! The document is ready. Let's rock and roll!!!!!");
    
    $("#sub-btn").click(function(e){
        e.preventDefault();
        //console.log("If I uncomment the next line, this form will submit.");
        $("#strength-form").submit();
    });
    
});