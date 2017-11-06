$(document).ready(function() {
    //protect pages that require auth
    //if token is in storage if not redirect to login
    var tokenCheck = window.localStorage.getItem('token');
    
    //toggle auth Button
    $('.noAuth').hide();

    if (!tokenCheck){
        window.location = "/auth/login";
    }
    
});

