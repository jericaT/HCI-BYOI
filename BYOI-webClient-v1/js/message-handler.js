$(document).ready(function () {
    //allows the selection of the messages in the list
    //and copies the last selection to the message box
    $(document).on(
        'click',
        '#messageList div',
        function () {
            $(this).toggleClass('selected');
            //$('#messageList').toggleClass('sortable');
            //$('#messageList').sortable();
            $('#msg').val($(this).find('.text').html());
        }
    );

    //delete the selected messagess
    BYOI.deleteMessages = function () {
        $('#messageList.selected').remove();
    };

    //bind the button to function
    $('#imgDel').click(BYOI.deleteMessages);



    // Code from 
    // http://stackoverflow.com/questions/23818131/dynamically-expand-height-of-input-type-text-based-on-number-of-characters-typ
    // --------------------------------------------------------------------------------
    //it should have the same font and text with the textarea and should be hidden
    var span = $('<span>').css('display', 'inline-block')
        .css('word-break', 'break-all')
        .appendTo('body').css('visibility', 'hidden');

    function initSpan(textarea) {
        span.text(textarea.text())
            .width(textarea.width())
            .css('font', textarea.css('font'));
    }
    $('textarea').on({
        input: function () {
            var text = $(this).val();
            span.text(text);
            $(this).height(text ? span.height() : '32px');
        },
        focus: function () {
            initSpan($(this));
        },
        keypress: function (e) {
            //cancel the Enter keystroke, otherwise a new line will be created
            //This ensures the correct behavior when user types Enter 
            //into an input field
            if (e.which == 13) e.preventDefault();
        }
    });
    // Referenced Code End
    // --------------------------------------------------------------------------------

});