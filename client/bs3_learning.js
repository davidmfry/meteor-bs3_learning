if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to bs3_learning.";
  };
  Template.menu.logo_image = function ()
  {
    return "/images/your-logo-here.png"
  }  

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
