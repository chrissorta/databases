var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$button.on('click', () => {
      RoomsView.renderRoom($("#room").val());
      RoomsView.render($("#room").val());
      this.$select.val($("#room").val());
    });
    //handle select change and call roomsview.render
    this.$select.on('change', () => RoomsView.render(this.$select.val()));
  },

  render: function (room) {
    //fetch the data for most up to date
    App.startSpinner();
    //App.fetch(App.stopSpinner);
    App.stopSpinner();
    //underscore filter message data by roomname
    console.log(room);
    let filteredData;
    if (room === "All") {
      filteredData = Messages.data;
    } else {
      filteredData = _.filter(Messages.data, (message) => message.roomname === room);
    }
    //Messagesview.render with the filterdata
    MessagesView.render(filteredData);
  },

  renderRoom: function (roomName) {
    //create a new option element with template
    var roomObject = { roomName: roomName };
    var renderOption = _.template(`
    <option value="<%- roomName %>"><%- roomName %></option>
    `);
    //append it to $select
    this.$select.append(renderOption(roomObject));
    Rooms.add(roomName);
  }

};
