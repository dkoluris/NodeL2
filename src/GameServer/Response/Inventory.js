let ServerPacket = invoke('ServerPacket');

function inventory(items) {
    let packet = new ServerPacket(5 + (28 * items.length));

    packet
        .writeC(0x1b)
        .writeH(0x01)
        .writeH(items.length); // Items amount

    for (item of items) {
        packet
            .writeH(item.type1)
            .writeD(item.id)
            .writeD(item.itemId)
            .writeD(0x01) // How many
            .writeH(item.type2)
            .writeH(0xff)
            .writeH(item.isEquipped)
            .writeD(item.bodyPartId)
            .writeH(0x00) // Enchant level
            .writeH(0x00);
    }

    return packet.buffer;
}

module.exports = inventory;
