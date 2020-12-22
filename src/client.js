const SERVER_ADDR = 'localhost';
const SERVER_PORT = 3001;

const Connection = require("./connection.js");
const client = new Connection();

const message = Buffer.from('Some message.');
client.connect(SERVER_PORT, SERVER_ADDR, () => {
    client.send(message, () => client.close());
});