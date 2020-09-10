//extract the data we want from whatever message is being passed
//var username = data.username

var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><% if (typeof(username) !== "undefined" ) { %> <%- username %> <% } %></div>
        <div><% if (typeof(text) !== "undefined" ) { %> <%- text %> <% } %> <% if (typeof(createdAt) !== "undefined" ) { %> <%- createdAt %> <% } %></div>
      </div>
    `)

};

// <% if (typeof(date) !== "undefined") { %>
//   <span class="date"><%= date %></span>
// <% } %>