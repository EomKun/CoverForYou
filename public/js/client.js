$(document).ready(function (){
    /*
     *  Sign Up Button Click
     */
    $("#signup_btn").click(function (){
        alert("sign Up!")
    });

    /*
     *  Sign In Button Click
     */
    $("#signin_btn").click(function (){
        const email = $("#user_email").val();
        const pw = $("#user_pw").val();

        alert(`${email} : ${pw}`);
    });
});