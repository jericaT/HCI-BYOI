$(document).ready(function(){
  $('#imgDelete').hide();

  var numberOfSelections=0;
  
  //events for when a message is selected:
  $("#messageList").selectable({ selecting : function(event, ui) {
    //var img_state = true;
    numberOfSelections=numberOfSelections+1;
    if(numberOfSelections>=1){
      $('#imgDelete').show();
    }
    }
  });
    
    //events for when a message is unselected:
    $("#messageList").selectable({ unselecting : function(event, ui) {
    //var img_state = true;
    numberOfSelections=numberOfSelections-1;
    if(numberOfSelections<=0){
      $('#imgDelete').hide();
    }
    }
  });

});

