$(document).ready(function() {
    //sign out
    $('#btn_signout').click(function(e) {
        window.localStorage.removeItem('name');
        window.localStorage.removeItem('userid');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('email');
        window.location = "/auth/login";
    });

    
});
