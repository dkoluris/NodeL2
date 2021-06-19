let AuthServerResponse = invoke('AuthServer/AuthServerResponse');
let ClientPacket = invoke('ClientPacket');

function authorizeGG(session, buffer) {
    let packet = new ClientPacket(buffer);

    packet
        .readC()
        .readD()  // Session ID
        .readD()  // Data 1
        .readD()  // Data 2
        .readD()  // Data 3
        .readD(); // Data 4

    let data = {
        sessionId: packet.data[1]
    };

    session.sendData(
        AuthServerResponse.authorizeGG(data.sessionId)
    );
}

module.exports = authorizeGG;
