const dgram = require('dgram');

var Connection = module.exports = Connection = () => {
    this.socket = dgram.createSocket({ type: 'udp4', reuseAddr: true });
};

Connection.prototype.bind = (port) => this.socket.bind(port);
Connection.prototype.connectTo = (addr, port, callback) => this.socket.connect(addr, port, callback);