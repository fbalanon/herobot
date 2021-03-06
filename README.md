# My Slackbot 

My slackbot is a chat bot built on the [Hubot][hubot] framework. It was
initially generated by [generator-hubot][generator-hubot], and configured to be
deployed on [Heroku][heroku] to get you up and running as quick as possible.

This README is intended to document and review what I've done. 

To install and set up Hubot, follow the instructions in the following url:
https://github.com/svodnik/sfjs5/blob/master/05-slackbot-lab/1-slack-bot-install-guide.md

Once installation and set up is complete, copy the "app.js" file within the scripts folder and place it in your own.

#Hello
The first part of the code is a basic "hear" and "respond" for hubot. I use it to ensure the bot is active and responsive.

Hear
Hear means that the bot will listen for specific words and should respond in the chat room, if active. If you type in "Hey bot!" in the chat, the bot should respond with "helloooooo there!" 

        hero.hear(/Hey bot!/,function(res) {
        return res.send("helloooooo there!");
        });

Respond
Respond is when the bot is directly messaged or "tagged" with specific words and will respond. If you "tag" the bot or directly message it with "padawan" it should respond with "What is thy bidding my master?"

        hero.respond(/padawan/, function(res) {
        return res.send("What is thy bidding my master?");
        });

When given this assignment to create the bot in Slack, I took a day to really think how could I leverage the bot for me and how could I actually assist me while in slack. Especially while in slack because I'm only on it while I'm coding or in class.

#Mood
The next code is for my well being, especially when I've been coding for a while, just getting started, or just completed. I used "respond" for the bot look respond to "I'm" then key words. It uses conditional if and else if to respond to the mood I'm in. 

If "I'm tired" the bot will return with a random youtube link to a song. I created an array with links to the 12 motivational songs in the following article, to jump start your day: 

https://www.roberthalf.com/officeteam/blog/12-great-motivational-songs-to-start-your-workday

If "I'm going crazy" the bot will return with a random youtube link to a movie trailer, from an array I created, for upcoming movies or movies I'm interested in seeing, but haven't had a chance to see yet. I decided movie trailers because sometimes I need a quick break to take my mind off of things, movie trailers do just that, I am especially excited about the upcoming movie "Rogue One"

To randomize both arrays, I used the array[math.floor(math.random() * array.length)];
        
        var motivate = [];
        var reset = [];
        var randomReset = reset[Math.floor(Math.random() * reset.length)];
        var randomMotivate = motivate[Math.floor(Math.random() * motivate.length)];


If "I'm done" the bot will respond with "Congratulations" and with the youtube link for the "Party Rock Anthem" song to feel accomplished.

        hero.respond(/I'm (.*)/, function(res) {
        var mood = res.match[1]
        if (mood === "tired") {
          return res.send("listen to some music for motivation! \n" + randomMotivate);
        } else if (mood === "going crazy"){
          return res.send("take a break \n" + randomReset);
        } else if (mood === "done"){
          return res.send("Congratulations \n" + "https://youtu.be/pIOOwhmkoLo");
        } else {
          return res.send("Sorry, I can't help you, phone a friend!");
        }
        });

#Tips
The last code is to assist me during class and while I'm doing homework. It is to provide me with tips and/or reminders of functionality or code.

I used respond with the switch statement for the bot to respond to "what" and then specific questions, or cases, such as "are the command line commands?" or "are the git commands?" and the bot will respond with notes and/or examples from the lecture slides.

    hero.respond(/what (.*)/, function(msg){
      var term;
      term = msg.match[1];
      console.log(term);
      switch (term) {
        case "is your favorite dance move?":
          return msg.reply("The robot, thought you knew!");
          break;
        default:
          return msg.reply("I don't know what " + term + " is. I believe I require an update!");
      }
    });

#Unsolved
The only concern I have is the code for mood when it is suppose to randomize the response from an array ("I'm tired" and "I'm going crazy"). The code works when I test it locally, however, when I try directly with my bot in slack, all other codes work except for "I'm tired" and "I'm going crazy" - it doesn't respond at all.
