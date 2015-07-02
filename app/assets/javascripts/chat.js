$(document).ready(function() {

  var bodyField = $('textarea');

  var addMessage = function (body) {
    $('ul').prepend('<li>' + body + '</li>');
  };

  var isPresent = function (string) {
    return string.trim().length > 0;
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

});