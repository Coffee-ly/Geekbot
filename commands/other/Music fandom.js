const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { invite } = require('../../config.json');

module.exports = class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'music wiki',
      aliases: ['mwiki', 'um'],
      group: 'other',
      memberName: 'music',
      description: 'Official Undertale Music wiki!'
    });
  }

  async run(message) {
    //provides the link with admin permissions
    const inviteURL = `https://undertale.fandom.com/wiki/Category:Music`;

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
      .setTitle(this.client.user.username + ' : Official Undertale Music wiki!')
      .setColor('RANDOM')
      .setURL(inviteURL)
      .setThumbnail(this.client.user.displayAvatarURL())
      .setDescription(
        `There are a total of 101 tracks in the Undertale Soundtrack, with tracks 78-101 considered "hidden" tracks that are not visible before purchasing the album`
      )
      .setFooter(
        'Operated by ' + this.client.owners[0].username + ' since',
        this.client.owners[0].displayAvatarURL()
      )
      .setTimestamp(this.client.user.createdAt);

    message.say(embed);
  }
};
