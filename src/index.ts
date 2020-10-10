require('dotenv').config();
import Discord from 'discord.js';
import { randomJoke, searchJoke } from './getJoke';

const client = new Discord.Client();

const Token = process.env.TOKEN;
const prefix = '!dadjoke';

client.on('ready', () => {
  console.log('Discord bot started');
});

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + ' help')) {
  }

  if (message.content.startsWith(prefix + ' random_joke')) {
    message.channel.send(await randomJoke());
  } else {
    const term = message.content.replace(prefix, '').trim();

    if (!term.length || term === 'help') {
      message.channel.send('Commands: \n - !dadjoke random_joke \n - !dadjoke [search]');
      return;
    }
    message.channel.send(await searchJoke(term));
  }
});

client.login(Token);
