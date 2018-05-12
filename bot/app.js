var ps = require('psbot');

//Name of the bot.
ps.name = 'Frogadier_Bot';
//Password. can be blank.
ps.pass = 'qwerty';
//Rooms for the bot to join.
ps.rooms = ['groupchat-sentimentality-nfe'];
//server and port. port is usually 8000
ps.server = 'sim.smogon.com:8000';
//in commands like '!data gengar', '!' is the symbol.
ps.symbol = '.';

/* commands. the parameters are
 * args, room, user
 * user has a prototype called userid(), which returns
 * the name of the user without spaces and with only numbers and letters.
*/

ps.commands = {
  hello: function(args, room, user) {
    if (user.userid() === 'yourname') {
      return "Hello World.";
    }
  }
}
ps.connect();
