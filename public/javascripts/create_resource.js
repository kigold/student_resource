$(document).ready(function() {
    //TODO write script that is to check if user is auth then redirect to login page if not
    //window.location = "/students";
    console.log("Login form loaded");
    var mForm = $('#create_resource_form');
    mForm.submit(function (e) {
        e.preventDefault();
        console.log("Prevented default");
        var author =  window.localStorage.getItem('userid');
        var mData = {};
        var now = pgFormatDate(Date()).split(' ');
        mData.title = mForm[0]['title'].value;
        mData.content = mForm[0]['content'].value;
        mData.created = now[1] + '/' + now[2] + '/' + now[0];
        mData.author = author;
        console.log(mData);
        sendData(mData);
    });
});

function sendData(D) {
    console.log('sending data...');
    console.log(D);
    $.ajax({
        url: "/createResource",
        type: 'POST',
        //contentType: 'json',
        //processData: false,
        //data: Qs,
        data : D,
        success: function(R){
            alert('Resource Created')
            window.location = "/resource";
        },
        error:function(x,s,R){
            console.log(R);
            alert("Resource Failed to create")
        },
    });    
     
}

// Convert Javascript date to Pg YYYY MM DD HH MI SS

function pgFormatDate(date) {
    /* Via http://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date */
    function zeroPad(d) {
      return ("0" + d).slice(-2)
    }
  
    var parsed = new Date(date)
  
    return [parsed.getUTCFullYear(), zeroPad(parsed.getMonth() + 1), zeroPad(parsed.getDate()), zeroPad(parsed.getHours()), zeroPad(parsed.getMinutes()), zeroPad(parsed.getSeconds())].join(" ");
  }