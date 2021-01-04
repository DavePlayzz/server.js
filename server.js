const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Nzk0NjE0NzM0NzI0NjYxMjY4.X-9Yow.oeVX05s0l1ANYlOR9j5CTurus6c');
