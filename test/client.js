const SERVER_ADDR = 'localhost';
const SERVER_PORT = 3001;

const dgram = require('dgram');
const buffer = require('buffer');
const client = dgram.createSocket({ type: 'udp4', reuseAddr: true });

client.on('error', (err) => client.close());

const message = Buffer.from('Some message.');
client.send(message, SERVER_PORT, SERVER_ADDR, (err) => {
    console.log('Message sent.');
    client.close();
});