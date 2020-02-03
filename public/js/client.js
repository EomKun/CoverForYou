$(document).ready(function (){
    ////////////////////////////////////////////////////////////////////////
    // Logined page
    ////////////////////////////////////////////////////////////////////////
    /*
     *  Sign out Button Click
     */
    $("#signout_btn").click(function (){
        $.get('/signout', function(returnData){
            location.reload();
        });
    });

    /*
     *  Sign out Button Click
     */
    $("#myinfo_btn").click(function (){
        $.post('/user_info', { page_status : "user_info"}, function(returnData){
            location.reload();
        });
    });

    ////////////////////////////////////////////////////////////////////////
    // sign up
    ////////////////////////////////////////////////////////////////////////
    /*
     *  Sign Up => back Button Click
     */
    $("#back_btn").click(function (){
        $.post("/", { page_status : undefined }, function(returnData){
            location.reload();
        });
    });

    /*
     *  register Button Click
     */
    $("#register_btn").click(function (){
        const email = $("#signup_email").val();
        const pw = $("#signup_pw").val();
        const name = $("#signup_name").val();

        const chunk = {
            page_status: undefined,
            email, pw, name
        };

        $.post("/signup", chunk, function(returnData){
            if(returnData.msg){
                alert(returnData.msg);

                $("#signup_email").val("");
                $("#signup_pw").val("");
                $("#signup_name").val("");
            } else{
                alert(`가입이 완료되었습니다`);
                location.reload();
            }
        });
    });

    ////////////////////////////////////////////////////////////////////////
    // sign in
    ////////////////////////////////////////////////////////////////////////
    /*
     *  Sign Up Button Click
     */
    $("#signup_btn").click(function (){
        $.post("/", { page_status: "signup" },function(returnData){
            location.reload();
        });
    });

    /*
     *  Sign In Button Click
     */
    $("#signin_btn").click(function (){
        const email = $("#signin_email").val();
        const pw = $("#signin_pw").val();

        const chunk = { email, pw };

        $.get("/signin", chunk, function(returnData){
            if(returnData.msg){
                alert(returnData.msg);

                $("#signin_email").val("");
                $("#signin_pw").val("");
            } else{
                alert(`로그인 완료`);
                location.reload();
            }   
        });
    });
});