let ServerPacket = invoke('ServerPacket');

function charTemplates() {
    let packet = new ServerPacket(5);

    packet
        .writeC(0x17)
        .writeD(0x00);

    return packet.buffer;
}

module.exports = charTemplates;
