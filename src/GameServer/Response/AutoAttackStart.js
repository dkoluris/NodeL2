let ServerPacket = invoke('ServerPacket');

function autoAttackStart(id) {
    let packet = new ServerPacket(5);

    packet
        .writeC(0x2b)
        .writeD(id);

    return packet.buffer;
}

module.exports = autoAttackStart;
