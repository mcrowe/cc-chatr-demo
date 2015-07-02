$(document).ready(function() {

  var bodyField = $('textarea');

  var addMessage = function (body) {
    $('ul').prepend('<li>' + body + '</li>');
  };

  var isPresent = function (string) {
    return string.trim().length > 0;
  };

  var loadMessages = function () {
    $.get('/messages', function (data) {
      for (var i = 0; i < data.length; i += 1) {
        var msg = data[i];
        addMessage(msg.body);
      }
    });
  };

  $('form').submit(function(event) {
    event.preventDefault();
    var body = bodyField.val();

    bodyField.focus();

    if (isPresent(body)) {
      bodyField.val('');
      addMessage(body);
    }

  });

  loadMessages();

  // TODO: Submit when the enter key is pressed.


});