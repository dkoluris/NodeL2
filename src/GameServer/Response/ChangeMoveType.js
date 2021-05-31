let ServerPacket = invoke('ServerPacket');

function changeMoveType(player) {
    let packet = new ServerPacket(9);

    packet
        .writeC(0x3e)
        .writeD(player.id)
        .writeD(player.isRunning);

    return packet.buffer;
}

module.exports = changeMoveType;
