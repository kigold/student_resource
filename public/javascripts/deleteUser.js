$(document).ready(function() {
    var mBtn = $('#delete_user_btn');
    var mEmail = $('#emailField')[0].value;
    //hide or show delete btn
    if (mEmail != window.localStorage.getItem('email')){
        $('#delete_user_btn').hide();
    }
    mBtn.click(function(){
        console.log("Deleting user");
        delUser(mEmail);
    });
   
});

function delUser(email) {
    console.log('sending data...');;
    $.ajax({
        url: "/student/"+email,
        type: 'DELETE',
        //contentType: 'json',
        //processData: false,
        //data: Qs,
        success: function(R){
            console.log(R);
            var uEmail = window.localStorage.getItem('email');
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('userid');
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('email');
            alert(uEmail, " account has been deleted");
            window.location = "/";
        },
        error:function(x,s,R){
            console.log(R);
        },
    });    
     
}