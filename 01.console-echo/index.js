const path = require('path');
const { ConsoleAdapter } = require('./consoleAdapter');

const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });

const adapter = new ConsoleAdapter();

const { EchoBot } = require('./bot');
const bot = new EchoBot();

adapter.listen(async (context) => {
    bot.onTurn(context);
});

console.log('> Console EchoBot is online. I will repeat any message you send me!');
console.log('> Say "quit" to end.');
console.log(''); // Leave a blank line after instructions.
