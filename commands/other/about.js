const { Command } = require('discord.js-commando');

module.exports = class WhoMadeMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'about',
      aliases: ['botinfo', 'whomademe', 'bot-maker', 'bot-creator'],
      memberName: 'about',
      group: 'other',
      description: "Learn about the bot and it's creator!"
    });
  }

  run(message) {
    message.say(
      'Made by Coffee.#2006, Georgie the pogger guys (khloe is a noob), This bot is not completely created by Coffee.#0226. Some of the codes have been taken from different sources from github/stackoverflow.'
    );
  }
};
