let ServerPacket = invoke('ServerPacket');

function logoutOk() {
    let packet = new ServerPacket(1);

    packet
        .writeC(0x7e);

    return packet.buffer;
}

module.exports = logoutOk;
