let ServerPacket = invoke('ServerPacket');

function sunrise() {
    let packet = new ServerPacket(1);

    packet
        .writeC(0x1c);

    return packet.buffer;
}

module.exports = sunrise;
