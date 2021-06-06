let ServerPacket = invoke('ServerPacket');

function moveToPawn(player, targetId, radius) {
    let packet = new ServerPacket(25);

    packet
        .writeC(0x75)
        .writeD(player.id)
        .writeD(targetId)
        .writeD(1) // Distance
        .writeD(player.x)
        .writeD(player.y)
        .writeD(player.z);

    return packet.buffer;
}

module.exports = moveToPawn;