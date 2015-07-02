$(document).ready(function() {

  var bodyField = $('textarea');

  var renderMessage = function (id, body) {
    var html = '<li data-message-id="' + id + '">' + body + '<i>x</i></li>';
    return html;
  };

  var addMessage = function (id, body) {
    var html = renderMessage(id, body);
    $('ul').prepend(html);
  };

  var isPresent = function (string) {
    return string.trim().length > 0;
  };

  var refreshMessages = function () {
    $.get('/messages', function (data) {
      $('ul').html('');

      for (var i = 0; i < data.length; i += 1) {
        var msg = data[i];
        addMessage(msg.id, msg.body);
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

  // setInterval(refreshMessages, 2000);

  $(document).on('click', 'i', function() {
    var listItem = $(this).parent();

    listItem.slideUp();

    var id = listItem.data('message-id');

    $.ajax({
      url: '/messages/' + id,
      method: 'DELETE'
    });

  });


  // TODO: Submit when the enter key is pressed.


});