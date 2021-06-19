let ServerPacket = invoke('ServerPacket');

function addShortcutOk(data) {
    let packet = new ServerPacket(17);

    packet
        .writeC(0x44)
        .writeD(data.type)
        .writeD(data.slot)
        .writeD(data.id)
        .writeD(data.unknown);

    return packet.buffer;
}

module.exports = addShortcutOk;
