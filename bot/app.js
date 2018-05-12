var ps = require('psbot');

//Name of the bot.
ps.name = 'botname';
//Password. can be blank.
ps.pass = 'botpass';
//Rooms for the bot to join.
ps.rooms = ['rooms','goe','here'];
//server and port. port is usually 8000
ps.server = 'sim.smogon.com:8000';
//in commands like '!data gengar', '!' is the symbol.
ps.symbol = 'symbolgoeshere';

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
