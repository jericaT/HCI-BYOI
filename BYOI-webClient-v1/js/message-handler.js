$(document).ready(function() {
    //allows the selection of the messages in the list
    //and copies the last selection to the message box
    $(document).on(
        'click',
        '#messageList div',
        function(){
            $(this).toggleClass('selected');
	    $('#messageList').toggleClass('sortable');
	    $('#messageList').sortable();
            $('#msg').val($(this).find('.text').html());
        }
    );

    //delete the selected messagess
    BYOI.deleteMessages = function(){
       $('#messageList .selected').remove();
    };
    
    
    
    //bind the button to function
    $('#deleteButton').click(BYOI.deleteMessages);
 
});
