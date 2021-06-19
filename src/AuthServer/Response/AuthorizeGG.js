let ServerPacket = invoke('ServerPacket');

function authorizeGG(sessionId) {
    let packet = new ServerPacket(12);

    packet
        .writeC(0x0b)
        .writeD(sessionId);

    return packet.buffer;
}

module.exports = authorizeGG;
