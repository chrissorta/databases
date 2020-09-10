var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),
  $refresh: $('.refreshButton'),

  initialize: function () {
    this.$refresh.on('click', () => {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });

    //set clickhandler on username divs that calls
    this.$chats.on('click', '.username', (event) => {
      var userName = event.target.textContent.trim();
      console.log(userName);
      Friends.toggleStatus(userName);
      // MessagesView.$username.text

    });
  },

  render: function (data) {
    //get data from messages
    this.$chats.html('');
    //loop through data
    for (let i = 0; i < data.length; i++) {
      let currentData = $(MessageView.render(data[i]));
      //if data[i].username in friends obj
      console.log(Friends[data[i].username]);
      if (Friends[data[i].username]) {
        console.log('here');
        currentData.find(".username").addClass("friend");
      }
      //currentData.userName.addClass bold
      $(MessagesView.$chats).append(currentData);
    }
  },

  renderMessage: function (message) {
    var currentMessage = MessageView.render(message);
    $(MessagesView.$chats).prepend(currentMessage);
  }
  //for each message obj add to dom
  //save it in var messageview.render(data[i]);
  //created at , text, username
  //append to chats div


};