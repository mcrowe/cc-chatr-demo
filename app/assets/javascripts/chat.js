$(document).ready(function() {

  var bodyField = $('textarea');

  var addMessage = function (body) {
    $('ul').prepend('<li>' + body + '</li>');
  };

  var isPresent = function (string) {
    return string.trim().length > 0;
  };

  var refreshMessages = function () {
    $.get('/messages', function (data) {
      $('ul').html('');

      for (var i = 0; i < data.length; i += 1) {
        var msg = data[i];
        addMessage(msg.body);
      }
    });
  };

  var saveMessage = function (body) {
    $.post('/messages', {body: body}, refreshMessages);
  };

  $('form').submit(function(event) {
    event.preventDefault();
    var body = bodyField.val();

    bodyField.focus();

    if (isPresent(body)) {
      bodyField.val('');
      saveMessage(body);
    }

  });

  refreshMessages();

  setInterval(refreshMessages, 2000);

  // TODO: Submit when the enter key is pressed.


});