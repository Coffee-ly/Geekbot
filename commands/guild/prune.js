const { Command } = require('discord.js-commando');

module.exports = class PruneCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      aliases: ['delete-messages', 'bulk-delete', 'purge', 'clear'],
      description: 'Delete up to 99 recent messages.',
      group: 'guild',
      memberName: 'prune',
      guildOnly: true,
      userPermissions: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES'],
      args: [
        {
          key: 'deleteCount',
          prompt: 'How many messages do you want to delete?',
          type: 'integer',
          validate: deleteCount => deleteCount < 100 && deleteCount > 0
        }
      ]
    });
  }

  run(message, { deleteCount }) {
    message.channel
      .bulkDelete(deleteCount)
      .then(messages => message.say(`Deleted ${messages.size} messages`))
      .catch(e => {
        console.error(e);
        return message.say(
          ':x: Something went wrong when trying to delete messages!'
        );
      });
  }
};
