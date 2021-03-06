exports.commands = [
	"mixer",
	"chuckNorris",
	//"watchtogether",
	"ping",
	"rip",
	"warp",
	"die",
	"attack",
	"features",
	"count"
]

//a collection of simple self contained commands with no dependencies beyond request

exports.mixer = {
	usage: "<stream>",
	description: "checks if the given Mixer stream is online",
	process: function(bot,msg,suffix){
		require("request")("https://mixer.com/api/v1/channels/"+suffix,
		function(err,res,body){
			var data = JSON.parse(body);
			if(data && data.online){
				msg.channel.send( suffix
					+" is online"
					+"\n"+data.thumbnail.url)
			}else{
				msg.channel.send( suffix+" is offline")
			}
		});
	}
}

exports.chuckNorris = {
	usage: "<joke>",
	description: "gives a random Chuck Norris joke",
	process: function(bot, msg, suffix) {
		require("request")("http://api.icndb.com/jokes/random",
		function(err, res, body) {
			var data = JSON.parse(body);
			if (data && data.value && data.value.joke) {
			msg.channel.send(data.value.joke)
			}
		});
	}
}

/*exports.watchtogether = {
	usage: "[video url (Youtube, Vimeo)",
	description: "Generate a watch2gether room with your video to watch with your friends!",
	process: function(bot,msg,suffix){
		var watch2getherUrl = "https://www.watch2gether.com/go#";
		msg.channel.send(
			"watch2gether link").then(function(){
				msg.channel.send(watch2getherUrl + suffix)
		})
	}
}*/

    exports.ping = {
        description: "responds pong, useful for checking if bot is alive",
        process: function(bot, msg, suffix) {
            msg.channel.sendMessage( "pong!");
            if(suffix){
                msg.author.sendMessage( "+ping takes no arguments!");
            }
	    if (msg.channel.id == "300808172371836928") { // This ID belongs to a channel in a random server. If you say +ping in that channel, it responds as below.
		msg.channel.sendMessage("The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.");
            }
	}
    }

    exports.rip = {
        description: "Rests something in pepperoni",
        process: function(bot, msg, suffix) {
	    var riparoo = "";
		if(suffix){
                riparoo = suffix;
		riparoo = riparoo.replace('my', msg.author + '\'s');
		} else {
		riparoo = msg.author;
            	};
	    var restArray = ['riparoony', 'riparoo', 'rest', 'rip', 'reset', 'remember', 'ripadoodle', 'restaroony', 'resta', 'ring', 'resurrect', 'respawn'];
	    var peaceArray = ['peace', 'pepperoni', 'pepperoncini', 'pizza', 'pieces', 'prezzies', 'potatoes', 'pasta', 'pastaroni', 'poop', 'pokemon', 'pie'];
		var randRest = Math.floor(Math.random() * restArray.length); var rrip = restArray[randRest];
		var randPeace = Math.floor(Math.random() * peaceArray.length); var prip = peaceArray[randPeace];
		
            msg.channel.send( rrip + " in " + prip + ", " + riparoo).then((message => msg.delete(1000)));
        }
    }
    exports.die = {
        description: "Murders a target",
        process: function(bot, msg, suffix) {
	    var riparoo = "";
		if(suffix){
                riparoo = suffix;
		riparoo = riparoo.replace('my', msg.author + '\'s');
		} else {
		riparoo = msg.author.name;
            	};
	    if (suffix) {var kmsg = 
		['In their feverish assault on '+riparoo+', '+msg.author+' committed suicide.', 
		 riparoo+' caused a lot of suffering. '+msg.author+' took justice into their own hands.', 
		 'In their feverish assault on '+riparoo+', '+msg.author+' was captured by the police.',
		 msg.author+' attacked '+riparoo+'. '+msg.author+' won the resulting quarrel.',
		 msg.author+' attacked '+riparoo+'. '+riparoo+' won the resulting quarrel.',
		 msg.author+' killed '+riparoo+'.',
		 msg.author+' caused major damage to '+riparoo+'.',
		 riparoo+' caused major damage to '+msg.author+'.'];
		var monger = Math.floor(Math.random() * kmsg.length); var message = kmsg[monger];
		
            msg.channel.send(message).then((ff => msg.delete(1000)));}
        else {var kmsg = 
		[msg.author+' could not resist the urge to call for help.',
		 'With suicidal intent, '+msg.author+' grabbed a knife and resisted the urge to live.',
		 'With suicidal intent, '+msg.author+' grabbed a knife and could not resist the urge to live!',
		 msg.author+' has the big not feel so good.',
		 msg.author+' tried to commit toaster bath.',
		 msg.author+' tried to commit lamp sink.',
		 msg.author+' died at their own hands.'];
		var monger = Math.floor(Math.random() * kmsg.length); var message = kmsg[monger];
		
            msg.channel.send(message).then((ff => msg.delete(1000)));}
        }
    }
    
    exports.attack = {
        description: "Attacks a target",
        process: function(bot, msg, suffix) {
	    var riparoo = "";
		if(suffix){
                riparoo = suffix;
		riparoo = riparoo.replace('my', msg.author + '\'s');
		} else {
		riparoo = msg.author.name;
            	};
	    var kmsg = 
		['In their feverish assault on '+riparoo+', '+msg.author+' was not very effective.', 
		 riparoo+' caused a lot of suffering to '+msg.author+'.', 
		 'In their aggravated assault on '+riparoo+', '+msg.author+' was captured by the police.',
		 msg.author+' attacked '+riparoo+'. '+msg.author+' held '+riparoo+' against a wall.',
		 msg.author+' attacked '+riparoo+'. '+riparoo+' held one of '+msg.author+'\'s ribs above their head.',
		 msg.author+' attacked '+riparoo+'.',
		 msg.author+' caused major damage to '+riparoo+'.',
		 riparoo+' deflected '+msg.author+'\'s attack.'];
		var monger = Math.floor(Math.random() * kmsg.length); var message = kmsg[monger];
		
            msg.channel.send(message).then((ff => msg.delete(1000)));
            if (msg.channel.name.startsWith('tmp')) {
				msg.channel.fetchMessages()
					.then(function(messages){
						let ee = messages.filter(function(message){
								return (message.content.includes(msg.author + ' attacked')
								|| message.content.includes(msg.author + ' caused a lot of suffering')
								|| message.content.includes(msg.author + ' caused major damage')
								|| message.content.includes(msg.author + ' was not very effective'))});
						if (ee.size > 19) msg.channel.send(msg.author+' wins the fight!')})
        	}
        }
    }

   exports.warp = {
	   description: "Opens a temporary wormhole to another channel or literally repeats what you said",
	   process: function(bot, msg, suffix) {
		   msg.channel.sendMessage(suffix).then((message => message.delete(10000)));
		   msg.delete(100);
	   }
   }

   exports.features = {
        description: "Lists features and commands.",
        process: function(bot, msg, suffix) {
            msg.channel.sendMessage( "FEATURES:\n +rip (content): Rests some content in pepperoni.\nThis feature is still being worked on. Check back later.");
	    if (msg.channel.id == "301360041473081346") { // LOGIC: If the ID of the channel belongs to #trick-room of BlakiniLive, send the message.
		msg.channel.sendMessage("The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.");
            }
	}
    }
exports.count = {
	   description: "counts",
	   process: function(bot, msg, suffix) {
		   if (msg.channel.id == "528702192715300865") msg.channel.sendMessage(Math.floor(Math.random() * 7900) + " eggs found");
		   else msg.channel.sendMessage(Math.floor(Math.random() * 1776));
	   }
   }
