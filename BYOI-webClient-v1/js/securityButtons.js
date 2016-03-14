$(document).ready(function(){
  $('#secButtons').hide();

  $(function() {
    var img_state = true;
    $('#imgSec').click(function(){
      $('#secButtons').toggle("fast");
        if(img_state) {
            $("#imgSec").attr('src',"images/images/securityhighlighted.png");
        } else {
            $("#imgSec").attr('src',"images/images/security.png");
        }
        img_state = !img_state;
    });
  });

});
