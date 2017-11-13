$(document).ready(function() {
    //
    $('.ui.dropdown')
    .dropdown();
    console.log("Regform loaded");
    var mForm = $('#reg_form');
    mForm.submit(function (e) {
        e.preventDefault();
        console.log("Prevented default");
        //count questions from number of forms
        var mData = {};
        mData.name = mForm[0]['name'].value;
        mData.email = mForm[0]['email'].value;
        mData.password = mForm[0]['password'].value;
        mData.re_password = mForm[0]['re_password'].value;
        mData.dob =  mForm[0]['dob'].value;
        mData.occupation =  mForm[0]['occupation'].value;
        mData.gender =  mForm[0]['gender'].value;
        console.log(mData);
        if (mData.re_password === mData.password){
            sendData(mData);
        }
        else{
            alert("Password Miss Match")
        }
        
    });
});

function sendData(D) {
    console.log('sending data...');
    console.log(D);
    $.ajax({
        url: "/createStudent",
        type: 'POST',
        //contentType: 'json',
        //processData: false,
        //data: Qs,
        data : D,
        success: function(R){
            console.log(R);
            alert("Signed up Successfuly, you can now login");
            //location.reload();
            window.location = "/auth/login";
        },
        error:function(x,s,R){
            console.log("d");
            console.log(R);
        },
    });    
     
}