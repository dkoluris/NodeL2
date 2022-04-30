let Blowfish       = invoke('Cipher/Blowfish');
let Opcodes        = invoke('AuthServer/Opcodes');
let ServerResponse = invoke('AuthServer/Response');

class Session {
    constructor(socket) {
        this.socket = socket;

        // First handshake with client
        this.dataSend(
            ServerResponse.initLS(invoke('Config').authServer.protocol), false
        );
    }

    dataSend(data, encrypt = true) {
        let header = Buffer.alloc(2);
        header.writeInt16LE(data.byteLength + 2);
        this.socket.write(Buffer.concat([header, encrypt ? Blowfish.encrypt(data) : data]));
    }

    dataReceive(data) {
        let decryptedPacket = Blowfish.decrypt(Buffer.from(data).slice(2));
        Opcodes.table[decryptedPacket[0]](this, decryptedPacket);
    }
}

module.exports = Session;
