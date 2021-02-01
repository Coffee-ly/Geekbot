const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { invite } = require('../../config.json');

module.exports = class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'boss themes',
      aliases: ['bthemes','ubthemes'],
      group: 'themes',
      memberName: 'themes',
      description: 'Sends a link to all the boss themes in Undertale' 
    });
  }

  async run(message) {
    //provides the link with admin permissions
    const inviteURL = `https://www.youtube.com/watch?v=4Bz0pYhAoFg`;

    const guildCacheMap = this.client.guilds.cache;
    const guildCacheArray = Array.from(guildCacheMap, ([name, value]) => ({
      name,
      value
    }));
    let memberCount = 0;
    for (let i = 0; i < guildCacheArray.length; i++) {
      memberCount = memberCount + guildCacheArray[i].value.memberCount;
    }

    const embed = new MessageEmbed()
      .setTitle(this.client.user.username + ' : All Undertale themes')
      .setColor('#d17ef0')
      .setURL(inviteURL)
      .setThumbnail(this.client.user.displayAvatarURL())
      .setDescription(
        `[Ghost Fight (Napstablook)](https://www.youtube.com/watch?v=WKJxIYve4QA) - 00:00

        [Heartache (Toriel) (Extended)](https://www.youtube.com/watch?v=SDuGJTctN48) - 01:50

        [Dogsong (Greater Dog)](https://www.youtube.com/watch?v=ecls3_rYSNU) - 05:35

        [Bonetrousle (Papyrus)](https://www.youtube.com/watch?v=FezNgPThD3M) - 06:56

        [Dummy! (Mad Dummy)](https://www.youtube.com/watch?v=N3epEVMNJdY) - 08:59

        [Spear of Justice (Undyne)](https://www.youtube.com/watch?v=ZXt1rbs-ttM) - 13:56

        [Battle Against a True Hero (Undyne the Undying, GENOCIDE)](https://www.youtube.com/watch?v=iXMgZ51Neyw) - 17:52
        
        [Metal Crusher (Mettaton)](https://www.youtube.com/watch?v=gLTxZ2OrCDw) - 23:08

        [Spider Dance (Muffet)](https://www.youtube.com/watch?v=YZ3XjVVNagU) - 25:20
        
        [Death By Glamour (Mettaton EX)](https://www.youtube.com/watch?v=aMDFhjpMTEY) - 28:48
        
        [Power of 'NEO' (Mettaton NEO, GENOCIDE)](https://www.youtube.com/watch?v=NXZttwQgYjA) - 33:21
        
        [Wrong Enemy !? (So Sorry)](https://www.youtube.com/watch?v=gTCSQevpuOg) - 34:50
        
        [Amalgam (The Amalgamates, TRUE PACIFIST)](https://www.youtube.com/watch?v=qs_7AniDy8I) - 36:53
        
        [ASGORE (Asgore Dreemurr)](https://www.youtube.com/watch?v=zKLxc2NsNcg) - 39:40
        
        [Your Best Nightmare (Photoshop Flowey, Phase 1)](https://www.youtube.com/watch?v=TIRJG7huQis) - 44:55
        
        [Finale (Photoshop Flowey, Phase 2)](https://www.youtube.com/watch?v=gOG8PG0vt2Y) - 48:55
        
        [Hopes and Dreams (Asriel Dreemurr, Phase 1, TRUE PACIFIST)](https://www.youtube.com/watch?v=RWcIpMkIgsY) - 50:53
        
        [SAVE the World (Asriel Dreemurr, Phase 2, TRUE PACIFIST) ](https://www.youtube.com/watch?v=AS9g2Vu_q5w) - 53:53 
        
        [Megalovania (Sans, GENOCIDE)](https://www.youtube.com/watch?v=c5daGZ96QGU) - 55:48
       `
      )
      .setFooter(
        'Operated by ' + this.client.owners[0].username + ' since',
        this.client.owners[0].displayAvatarURL()
      )
      .setTimestamp(this.client.user.createdAt);

    message.say(embed);
  }
};
