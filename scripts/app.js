module.exports = function(hero) {
    hero.hear(/Hey bot!/,function(res) {
        return res.send("helloooooo there!");
    });
    hero.respond(/What's your favorite color?/, function(res) {
        return res.send("I'm a robot--I only see ones and zeros!");
    });
 /*
 bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
   var name;
   name = msg.match[1];
   if (name == "Hubot"){
     return msg.send("You're not Hubot--I'm Hubot!");
   } else {
     return msg.reply("Nice to meet you, " + name + "!");
   }
 });
*/
};