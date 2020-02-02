$(document).ready(function (){
    /*
     *  Sign Up => back Button Click
     */
    $("#back_btn").click(function (){
        $.post("/", { page_status : undefined }, function(returnData){
            location.reload();
        });
    });

    /*
     *  Sign Up Button Click
     */
    $("#signup_btn").click(function (){
        $.post("/signup", { page_status: "signup" },function(returnData){
            location.reload();
        });
    });

    /*
     *  Sign In Button Click
     */
    $("#signin_btn").click(function (){
        const email = $("#user_email").val();
        const pw = $("#user_pw").val();

        const chunk = { email, pw };

        $.post("/signin", chunk, function(returnData){
            alert(returnData.msg);

        });
    });
});