const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { invite } = require('../../config.json');

module.exports = class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'fandom',
      aliases: ['wiki', 'fand'],
      group: 'other',
      memberName: 'fandom',
      description: 'Official Undertale fandom (wiki)!'
    });
  }

  async run(message) {
    //provides the link with admin permissions
    const inviteURL = `https://undertale.fandom.com/`;

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
      .setTitle(this.client.user.username + ' : Official Undertale fandom!')
      .setColor('RANDOM')
      .setURL(inviteURL)
      .setThumbnail(this.client.user.displayAvatarURL())
      .setDescription(
        `Undertale is a role-playing game where you don't have to kill anyone! Undertale was created by Toby Fox and was released on September 15, 2015. The demo can be downloaded and played from the official site for free, and the full game can be bought on Steam.`
      )
      .setFooter(
        'Operated by ' + this.client.owners[0].username + ' since',
        this.client.owners[0].displayAvatarURL()
      )
      .setTimestamp(this.client.user.createdAt);

    message.say(embed);
  }
};
