// authenticates you with the API standard library (stdlib.com)
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let data = context.params.response;

if (data.supporter_name !== undefined) {
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: process.env.DONATION_FLOW_CHANNEL,
    // The message content pre-embed delivered in Discord
    content: `**New Coffees From: ${data.supporter_name}**`,
    tts: false,
    embeds: [
      {
        type: 'rich',
        // The title of the embed delivered to Discord
        title: `${data.supporter_name} bought ${data.number_of_coffees} coffees! 💰`,
        // The description (content) of the embed delivered in Discord
        description: `${data.supporter_name} just bought ${data.number_of_coffees} coffees at $${data.total_amount}`,
        color: 0x3ec300,
      },
    ],
  });
}
if (data.supporter_name === undefined) {
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: process.env.DONATION_FLOW_CHANNEL,
    // The message content pre-embed delivered in Discord
    content: `**New Coffees from BMC User**`,
    tts: false,
    embeds: [
      {
        type: 'rich',
        // The title of the embed delivered to Discord
        title: `BMC User bought ${data.number_of_coffees} coffees! 💰`,
        // The description (content) of the embed delivered in Discord
        description: `BMC User just bought ${data.number_of_coffees} coffees at $${data.total_amount}`,
        color: 0x3ec300,
      },
    ],
  });
}
console.log(data);
