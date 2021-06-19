let ServerPacket = invoke('ServerPacket');

function targetSelected(targetId) {
    let packet = new ServerPacket(7);

    packet
        .writeC(0xa6)
        .writeD(targetId)
        .writeH(0x00); // Mob color based on level difference

    return packet.buffer;
}

module.exports = targetSelected;
