$(document).ready(function() {
    //if token is in storage redirect away from login or signup
    var tokenCheck = window.localStorage.getItem('token');

    //toggle auth Button
    $('.auth').hide();

    if (tokenCheck){
        window.location = "/students";
    }
    
});

