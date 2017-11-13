$(document).ready(function() {
    //if token is in storage redirect to students
    //window.location = "/students";
    console.log("Login form loaded");
    console.log(window.localStorage.getItem('name'));
    var mForm = $('#login_form');
    mForm.submit(function (e) {
        e.preventDefault();
        console.log("Prevented default");
        //count questions from number of forms
        var mData = {};
        mData.email = mForm[0]['email'].value;
        mData.password = mForm[0]['password'].value;
        console.log(mData);
        sendData(mData);
    });
});

function sendData(D) {
    console.log('sending data...');
    console.log(D);
    $.ajax({
        url: "/auth/login",
        type: 'POST',
        //contentType: 'json',
        //processData: false,
        //data: Qs,
        data : D,
        success: function(R){
            console.log(R.data[0]);
            //save token is local storage
            window.localStorage.setItem('token', R.token);
            window.localStorage.setItem('userid', R.data[0].id);
            window.localStorage.setItem('name', R.data[0].name);
            window.localStorage.setItem('email', R.data[0].email);
            //location.reload();
            window.location = "/students";
        },
        error:function(x,s,R){
            console.log(R);
        },
    });    
     
}