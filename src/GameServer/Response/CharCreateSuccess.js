let ServerPacket = invoke('ServerPacket');

function charCreateSuccess() {
    let packet = new ServerPacket(5);

    packet
        .writeC(0x19)
        .writeD(0x01);

    return packet.buffer;
}

module.exports = charCreateSuccess;
