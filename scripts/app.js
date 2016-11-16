bot.hear(/Hello!/,function(res) {
    return res.send("helloooooo there!");
});
bot.respond(/What's your favorite color?/, function(res) {
    return res.send("I'm a robot--I only see ones and zeros!");
});