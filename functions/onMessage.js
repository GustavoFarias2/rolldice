const randomBetween = require('./randomBetween');

const messages = require('../messages');

const diceNumbers = ['1000', '100', '20', '12', '10', '8', '6', '4'];

module.exports = (msg) => {
  try {
    if (msg.author.username !== 'Rolldice') {
      if (msg.content.includes('rd')) {
        const [, param] = msg.content.split('rd ');

        if (param) {
          if (diceNumbers.includes(param)) {
            const random = randomBetween(1, Number(param));

            msg.reply(String(random));
          } else {
            msg.reply(messages.available);
          }
        } else {
          msg.reply(messages.example);
        }
      }
    }
  } catch (error) {
    msg.reply(messages.error);

    console.log(error);
  }
};
