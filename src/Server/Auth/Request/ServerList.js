let ServerResponse = invoke('Server/Auth/Response');
let ClientPacket   = invoke('Packet/Client');
let Config         = invoke('Config');
let Utils          = invoke('Utils');

function serverList(session, buffer) {
    let packet = new ClientPacket(buffer);

    packet
        .readD()  // Session Key (first)
        .readD(); // Session Key (last)

    consume(session, {
        sessionKey1: packet.data[0],
        sessionKey2: packet.data[1],
    });
}

function establishGameServerIPAddress(session) {
    let remoteAddr = session.socket.remoteAddress;
    let host = remoteAddr.split('.');

    switch (host[0]) {
        case '127': // Localhost
            return remoteAddr;

        case '192': // LAN
            return Utils.fetchIPv4Address();
    }

    // WAN / Internet
    fatalError('AuthServer:: unhandled WAN address');
    return '';
}

function consume(session, data) {
    if (Utils.matchSessionKeys(Config.client, data)) {
        session.dataSend(
            ServerResponse.serverList(Config.gameServer, establishGameServerIPAddress(session))
        );
    }
    else { // Session keys don't match
        session.dataSend(
            ServerResponse.loginFail(0x01)
        );
    }
}

module.exports = serverList;