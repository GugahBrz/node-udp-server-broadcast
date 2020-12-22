const SERVER_ADDR = 'localhost';
const SERVER_PORT = 3001;

const dgram = require('dgram');
const client = dgram.createSocket({ type: 'udp4', reuseAddr: true });

client.on('error', (err) => client.close());

const message = Buffer.from('Some message.');
client.connect(SERVER_PORT, SERVER_ADDR, () => {
    client.send(message, () => client.close());
});