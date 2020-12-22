const PORT = process.env.PORT || 3001;

const Connection = require("./connection.js");

const server = new Connection();
server.bind(PORT);

server.on('message', (msg, rinfo) => {
    console.log(`Received: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', (err) => {
    const address = server.address();
    console.log(`Server listening on ${address.address}:${address.port}`);
});