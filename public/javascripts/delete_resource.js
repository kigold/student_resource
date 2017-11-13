$(document).ready(function() {
    var currentUserId =  window.localStorage.getItem('userid');
    var authorId = $('#authorId')[0].value;
    var resourceId = $('#resourceId')[0].value;
    if (currentUserId != authorId) {
        //show save button
        $('#delete_item').hide();
        //show tinymce in editor mode
    }
    var mForm = $('#delete_item');
    mForm.click(function(){
        console.log("deleting");
        var mData = {};
        mData.id = resourceId;
        console.log(mData);
        sendData(mData);

    });
});

function sendData(D) {
    console.log('sending data...');
    console.log(D);
    $.ajax({
        url: "/resource/" + D.id,
        type: 'DELETE',
        //contentType: 'json',
        //processData: false,
        //data: Qs,
        data : D,
        success: function(R){
            alert('Resource Deleted')
            window.location = "/resource";
        },
        error:function(x,s,R){
            console.log(R);
            alert("Resource Failed to delete")
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