        var motivate = ["https://youtu.be/CevxZvSJLk8", "https://youtu.be/co6WMzDOh1o", "https://youtu.be/IKqV7DB8Iwg", "https://youtu.be/G_Vzpjv_kR4", "https://youtu.be/XuRnNRHcN4A", "https://youtu.be/vx2u5uUu3DE", "https://youtu.be/btPJPFnesV4", "https://youtu.be/y6Sxv-sUYtM", "https://youtu.be/04854XqcfCY", "https://youtu.be/rmpQReqZfd0", "https://youtu.be/nfWlot6h_JM"];
        var reset = ["https://youtu.be/wX0aiMVvnvg", "https://youtu.be/fIHH5-HVS9o", "https://youtu.be/6i77T6KzYxM", "https://youtu.be/gbug3zTm3Ws", "https://youtu.be/taSLRLXDSiw", "https://youtu.be/MQEFmHsseaU", "https://youtu.be/Tgk_63b-Mrw", "https://youtu.be/4luDtkC3Oy0", "https://youtu.be/hfby7XwoBl0", "https://youtu.be/av85pHZcncE", "https://youtu.be/SULFiCh0Zsw", "https://youtu.be/dCyv5xKIqlw", "https://youtu.be/T_Mr2XfpADo", "https://youtu.be/QNpNwIJtpIs"];
        var randomReset = reset[Math.floor(Math.random() * reset.length)];
        var randomMotivate = motivate[Math.floor(Math.random() * motivate.length)];

module.exports = function(hero) {
    hero.hear(/Hey bot!/,function(res) {
        return res.send("helloooooo there!");
    });
    hero.respond(/padawan/, function(res) {
        return res.send("What is thy bidding my master?");
    });
//My cheat sheet to recall some basics not used often
    hero.respond(/what (.*)/, function(msg){
      var term;
      term = msg.match[1];
      console.log(term);
      switch (term) {
        case "is a library?":
          return msg.reply("A Library is: \n-Set of predefined functions that your code calls \n-Each call performs work and returns a result (and control to your code \n-Specific, well-defined operations \n-Example:jQuery)");
          break;
        case "is a framework?":
          return msg.reply("A Framework is: \n-Opionionated architecture for building software \n-Control-flow exists, you fill in with your code \n-Calls your code; is always in control \n-Examples: Angular and Ember");
          break;
        case "are the command line commands?":
          return msg.reply("Command : Description \nls : List the contents of the directory \ncd : Change directories \nmkdir : Make directory \nrmdir : Rmove empty directories \nrm : Remove files or directories \ntouch : Create an empty file \necho : Return a string \ncode : Open Microsoft Visual Studio Code \npwd : Print working directory \nsay : Make your computer talk \nopen : Open a file in default application \nman : Show the manual for a command \ncat : Show the contents of a file \nclear : Clear the terminal");
          break;
        case "is your favorite dance move?":
          return msg.reply("The robot, thought you knew!");
          break;
        case "is github?":
          return msg.reply("GitHub is a web app/platform that: \n-Facilitates the sharing and managing of code, making it easy for multiple engineers to collaborate on the same project \n-Hosts files on the web so you can share the finished product with other people");
          break;
        case "are the git commands?":
          return msg.reply("Command : Description \ngit init : Create new respository \ngit status : See the status of files in your repo \ngit log : Look at a list of commits \ngit add : Add files to the stage for committing \ngit commit : Create a snapshot of your project \ngit push : Push updates to GitHub \ngit pull : Pull updates from GitHub\n" + "https://files.slack.com/files-pri/T2SPF9F97-F2XDWD6CR/nicole_s_awesome_diagram_of_what_you_did_tonight_with_git_._null_");
          break;
        case "are data types?":
          return msg.reply("The current data types are: \n-Numbers \nStrings \nArrays \nBoolean");
          break;
        case "are some functions?":
          return msg.reply("functions include: \ntypeof() - Returns a string with the data type of the data you pass to it \nMath \n-math.pow(m,n) : Returns m to the power of n \n-math.sqrt(n) : Returns the square root of n \n-math.random() : Returns a random number between 0 (inclusive) and 1 (exclusive) \n-math.floor(n) : Returns largest integer less than or equal to n \n-math.ceil(n) : Returns smallest integer greater than or equal to n");
          break;
        case "is an array?":
          return msg.reply("An array is a collection of data that you can use efficiently \nArray Helper Methods \n-toString() : Returns a single string consisting of the array elements converted to strings and separated by commas \n-join() : Same as toString(), but allows you to pass a custom separator as an argument \n-pop() : Removes and returns the last item \n-push(item1, ..., itemN) : Adds one or more items to the end of the array \n-reverse() : Reverses the array \n-shift() : Removes and returns the first item \n-unshift(item1, ..., itemN) : Adds one or more tirms to the start of the array \nArray Iterator Methods \n-forEach() : Executes a provided function once per array element \n-every() : Tests whether all elements in the array pass the test implemented by the provided function \n-some() : Tests wheater some element in the array passes the text implemented by the provided function \n-filter() : Creates a new array with all elements that pass the test implemented by the provided function \n-map() : Creates a new array with the results of calling a provided function on every element in this array");
          break;
        case "are loops?":
          return msg.reply("while Statement \n-A loop statement that will run while a condition is true \n-Example: \nvar input = 0; \nwhile (input < 10) { \ninput++; \nconsole.log(input); \n}\ndo while Statement \n-A loop statement similar to while, but that ensures that the code block is executed at least once \n-Example: \nvar input = 0; \ndo { \ninput++; \nconsole.log(input); \n} while (input < 10); \nfor Statement \n-Example: \nvar fruits = [apple, oranges, bananas]; \nfor (var i = 0; i < fruits.length; i++) { \nconsole.log(i); \n}");
          break;
        default:
          return msg.reply("I don't know what " + term + " is. I believe I require an update!");
      }
    });
//Code to receive some random motivation, reset or take a break, or to feel accomplished
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
};