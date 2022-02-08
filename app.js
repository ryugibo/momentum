const player = {
  name: "gibo",
  sayHello: function(otherPersonName) {
    console.log(this.name + ": " + "Hello! " + otherPersonName + " nice to meet you!");
  },
};

player.sayHello("lynn");
player.sayHello("nico");
