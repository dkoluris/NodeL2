let ServerPacket = invoke('ServerPacket');

function restart() {
    let packet = new ServerPacket(5);

    packet
        .writeC(0x5f)
        .writeD(1);

    return packet.buffer;
}

module.exports = restart;
