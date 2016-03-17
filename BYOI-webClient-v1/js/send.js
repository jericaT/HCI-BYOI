$(document).ready(function() {
    //sends the current text in the message box to the node specified in the
    //recipient field.
    BYOI.sendMessage = function() {
        var contents = $("#msg").val();
        var recipient = $("#recipient").val();
        var message = {
            text: contents,
            from: +BYOI.myNode,
            to: +recipient,
            type: "MESSAGE",
            date: Date.now()
        };
        if (recipient == 0) { // BROADCAST
            $('#messageList').append("<div class=\"broadcast\">Broadcast Message: <span class=\"text\">"+contents+"</span></div>");
        } else {
            $('#messageList').append("<div class=\"sent\">Send To:<span class=\"node\">"+recipient+"</span> Message: <span class=\"text\">"+contents+"</span></div>");
        }
        $("#msg").val("");
        $("#recipient").val("");
        BYOI.connection.send(JSON.stringify(message));
        console.log(BYOI.connection);
	$("messageList").sortable("refresh");

    };
    //bind the button to function
    $('#imgSend').click(BYOI.sendMessage);
    
    //makes the send also happen on the EnterButton
    $('#msg').keypress(function(event){
      if(event.keyCode==13){
	BYOI.sendMessage();
      }
    });

});
