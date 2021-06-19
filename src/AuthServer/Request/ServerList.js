let AuthServerResponse = invoke('AuthServer/AuthServerResponse');
let ClientPacket = invoke('ClientPacket');
let Config = invoke('Config');
let Utils = invoke('Utils');

function serverList(session, buffer) {
    let packet = new ClientPacket(buffer);

    packet
        .readC()
        .readD()  // Session Key (first)
        .readD(); // Session Key (last)

    let data = {
        sessionKey: [
            packet.data[1],
            packet.data[2],
        ]
    };

    //console.log(data)

    if (data.sessionKey.isEqualTo(Config.sessionKey)) {
        session.sendData(
            AuthServerResponse.serverList(Config.gameServer.host, Config.gameServer.port)
        );
    }
}

module.exports = serverList;
