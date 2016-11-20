module.exports = function(hero) {
    hero.hear(/Hey bot!/,function(res) {
        return res.send("helloooooo there!");
    });
    hero.respond(/padawan/, function(res) {
        return res.send("What is thy bidding my master?");
    });
    hero.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
      var name;
      name = msg.match[1];
      if (name == "Hubot"){
        return msg.send("You're not Hubot--I'm Hubot!");
      } else {
        return msg.reply("Nice to meet you, " + name + "!");
      }
      });
    hero.respond(/what is your favorite (.*)/, function(msg){
      var fav;
      fav = msg.match[1];
      console.log(fav);
      switch (fav) {
        case "food":
          return msg.reply("I'm a robot--I don't eat food!");
          break;
        case "band":
          return msg.reply("It's gotta be Daft Punk!");
          break;
        case "programming language":
          return msg.reply("Javascript, of course!");
          break;
        case "dance move":
          return msg.reply("The robot, thought you knew!");
          break;
        default:
          return msg.reply("I don't have a favorite " + fav + ". What's yours?");
      }
    });
};