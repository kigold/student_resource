$(document).ready(function() {
    //load tinymce in edit mode if user is author
    /*tinymce.init({ mode:'exact',
    selector : 'textarea.editor',
    readonly : true
    });*/
    var currentUserId =  window.localStorage.getItem('userid');
    var authorId = $('#authorId')[0].value;
    var resourceId = $('#resourceId')[0].value;
    var title = $('#resourceTitle')[0].value;
    console.log(title);
    if (currentUserId != authorId) {
        //show save button
        $('#save_item').hide();
        //show tinymce in editor mode
    }
    var mForm = $('#save_item');
    mForm.click(function(){
        console.log("saving");
        var mData = {};
        var now = pgFormatDate(Date()).split(' ');
        mData.title = title;
        mData.content = $('#content')[0].value;
        mData.created = now[1] + '/' + now[2] + '/' + now[0];
        mData.id = resourceId;
        console.log(mData);
        sendData(mData);

    });
    $('#content').change(function(){
        console.log("changing");
    })
});

function sendData(D) {
    console.log('sending data...');
    console.log(D);
    $.ajax({
        url: "/updateResource/" + D.id,
        type: 'POST',
        //contentType: 'json',
        //processData: false,
        //data: Qs,
        data : D,
        success: function(R){
            alert('Resource Edited')
            window.location = "/resource";
        },
        error:function(x,s,R){
            console.log(R);
            alert("Resource Failed to Edit")
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