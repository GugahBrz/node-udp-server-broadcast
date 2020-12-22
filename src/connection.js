const dgram = require('dgram');

// TODO: ES6, peers, broadcast new connections

var Connection = module.exports = function Connection() {
    this.socket = dgram.createSocket({ type: 'udp4', reuseAddr: true });

    this.socket.on('error', (err) => {
        console.log(`Server error:\n${err.stack}`);
        this.socket.close();
    });

    return this.socket;
};

Connection.prototype.bind = (port) => this.socket.bind(port);
Connection.prototype.connect = (addr, port, callback) => this.socket.connect(addr, port, callback);