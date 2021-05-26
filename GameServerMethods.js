// User define
let ServerPacket = require('./ServerPacket');

class GameServerMethods {
    static cryptInit(xorKey) {
        let packet = new ServerPacket(12);

        packet
            .writeC(0x00)
            .writeC(0x01)
            .writeC(xorKey[0])
            .writeC(xorKey[1])
            .writeC(xorKey[2])
            .writeC(xorKey[3])
            .writeC(xorKey[4])
            .writeC(xorKey[5])
            .writeC(xorKey[6])
            .writeC(xorKey[7]);

        return packet.buffer;
    }

    static charSelectInfo(characters) {
        let packet = new ServerPacket(characters ? characters.length * 400 : 10);

        packet
            .writeC(0x1f);

        if (characters) {
            packet
                .writeD(characters.length);

            for (let i = 0; i < characters.length; i++) {
                packet
                    .writeS(characters[i].name)
                    .writeD(characters[i].id)
                    .writeS(characters[i].accountId)
                    .writeD(0x55555555)
                    .writeD(characters[i].clanId)
                    .writeD(0x00)
                    .writeD(characters[i].gender)
                    .writeD(characters[i].raceId)
                    .writeD(characters[i].classId)
                    .writeD(0x01)
                    .writeD(characters[i].x) // No effect ?
                    .writeD(characters[i].y) // No effect ?
                    .writeD(characters[i].z) // No effect ?
                    .writeF(characters[i].hp)
                    .writeF(characters[i].mp)
                    .writeD(characters[i].sp)
                    .writeD(characters[i].exp)
                    .writeD(characters[i].level)
                    .writeD(characters[i].karma)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(0x00)
                    .writeD(characters[i].hairStyle)
                    .writeD(characters[i].hairColor)
                    .writeD(characters[i].face)
                    .writeF(characters[i].maximumHp)
                    .writeF(characters[i].maximumMp)
                    .writeD(0x00);
            }
        }
        else {
            packet
                .writeD(0x00);
        }

        return packet.buffer;
    }

    static characterSelected(character) {
        let packet = new ServerPacket(230 + ServerPacket.strlen(character.name) + ServerPacket.strlen(character.title));

        packet
            .writeC(0x21)
            .writeS(character.name)
            .writeD(character.objectId)
            .writeS(character.title)
            .writeD(0x55555555)
            .writeD(character.clanId)
            .writeD(0x00)
            .writeD(character.gender)
            .writeD(character.raceId)
            .writeD(character.classId)
            .writeD(0x01)
            .writeD(character.x)
            .writeD(character.y)
            .writeD(character.z)
            .writeF(character.hp)
            .writeF(character.mp)
            .writeD(character.sp)
            .writeD(character.exp)
            .writeD(character.level)
            .writeD(0x00)
            .writeD(0x00)
            .writeD(0x00)
            .writeD(0x00)
            .writeD(0x00)
            .writeD(0x00)
            .writeD(0x00)
            .writeD(0x00);

        for (let i = 0; i < 30; i++) {
            packet
                .writeD(0x00);
        }

        packet
            .writeD(0x00); // In-game time

        return packet.buffer;
    }

    static charTemplates() {
        let packet = new ServerPacket(10);

        packet
            .writeC(0x23)
            .writeD(0x00);

        return packet.buffer;
    }

    static questList() {
        let packet = new ServerPacket(5);

        packet
            .writeC(0x98)
            .writeH(0x00)
            .writeH(0x00);

        return packet.buffer;
    }

    static userInfo() {
        //let packet = new ServerPacket(600);

        // packet
        //     .writeC(0x04)
        //     .writeD(character.getX())
        //     .writeD(character.getY())
        //     .writeD(character.getZ())
        //     .writeD(0x00) // getHeading
        //     .writeD(0x00) // getObjectId
        //     .writeS(character.getCharacterName())
        //     .writeD(character.getRaceId())
        //     .writeD(character.getGender())
        //     .writeD(character.getClassId())
        //     .writeD(character.getLevel())
        //     .writeD(character.getExp())
        //     .writeD(character.getStr())
        //     .writeD(character.getDex())
        //     .writeD(character.getCon())
        //     .writeD(character.getInt())
        //     .writeD(character.getWit())
        //     .writeD(character.getMen())
        //     .writeD(character.getMaximumHp())
        //     .writeD(character.getHp())
        //     .writeD(character.getMaximumMp())
        //     .writeD(character.getMp())
        //     .writeD(character.getSp())
        //     .writeD(0x00) // getLoad
        //     .writeD(character.getLoad()) // getMaximumLoad
        //     .writeD(0x28)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(0x00)
        //     .writeD(character.getPatk())
        //     .writeD(character.getPspd())
        //     .writeD(character.getPdef())
        //     .writeD(character.getEvasion())
        //     .writeD(character.getAccuracy())
        //     .writeD(character.getCritical())
        //     .writeD(character.getMatk())
        //     .writeD(character.getMspd())
        //     .writeD(character.getPspd())
        //     .writeD(character.getMdef())
        //     .writeD(0x00) // pvp flag 0 - non pvp, 0x 1 - pvp = violett name
        //     .writeD(0x00) // Karma
        //     .writeD(character.getMoveSpd()) // getRunSpeed
        //     .writeD(character.getMoveSpd()) // getWalkSpeed
        //     .writeD(0x32) // swimspeed
        //     .writeD(0x32) // swimspeed
        //     .writeD(character.getMoveSpd()) // getFloatingRunSpeed
        //     .writeD(character.getMoveSpd()) // getFloatingWalkSpeed
        //     .writeD(character.getMoveSpd()) // getFlyingRunSpeed
        //     .writeD(character.getMoveSpd()) // getFlyingWalkSpeed
        //     .writeF(1.1) // getMovementMultiplier
        //     .writeF(1.188) // getAttackSpeedMultiplier
        //     .writeF(9) // getCollisionRadius
        //     .writeF(23) // getCollisionHeight
        //     .writeD(character.getHairStyle())
        //     .writeD(character.getHairColor())
        //     .writeD(character.getFace())
        //     .writeD(0x00) // if GM - 0x01
        //     .writeS("test") // getTitle
        //     .writeD(character.getClanId()) // pledge id
        //     .writeD(character.getClanId()) // pledge crest id
        //     .writeD(0x00) // getAllyId - ally id
        //     .writeD(0x00) // ally crest id
        //     .writeD(0x00) // 0x60 ???
        //     .writeC(0x00)
        //     .writeC(0x00) // getPrivateStoreType
        //     .writeC(character.getCanCraft())
        //     .writeD(0x00) // getPkKills
        //     .writeD(0x00) // getPvpKills
        //     .writeH(0x00) // cubic count
        //     .writeC(0x00); //1-find party members

        let kaka = [
            0x04, 0x20, 0xeb, 0xfe, 0xff, 0x50, 0xed, 0x03, 0x00, 0xf8, 0xf3, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x70, 0x00, 0x00, 0x10, 0x41, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x28, 0x00, 0x00, 0x00, 0x1e, 0x00, 0x00, 0x00, 0x2b, 0x00, 0x00, 0x00, 0x15, 0x00, 0x00, 0x00, 0x0b, 0x00, 0x00, 0x00, 0x19, 0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x26, 0x00, 0x00, 0x00, 0x26, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x83, 0xb9, 0x00, 0x00, 0xec, 0x3f, 0x01, 0x00, 0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x4a, 0x01, 0x00, 0x00, 0x48, 0x00, 0x00, 0x00, 0x21, 0x00, 0x00, 0x00, 0x21, 0x00, 0x00, 0x00, 0x2c, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0xd5, 0x00, 0x00, 0x00, 0x4a, 0x01, 0x00, 0x00, 0x2f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x73, 0x00, 0x00, 0x00, 0x50, 0x00, 0x00, 0x00, 0x32, 0x00, 0x00, 0x00, 0x32, 0x00, 0x00, 0x00, 0x73, 0x00, 0x00, 0x00, 0x50, 0x00, 0x00, 0x00, 0x73, 0x00, 0x00, 0x00, 0x50, 0x00, 0x00, 0x00, 0x9a, 0x99, 0x99, 0x99, 0x99, 0x99, 0xf1, 0x3f, 0x35, 0x5e, 0xba, 0x49, 0x0c, 0x02, 0xf3, 0x3f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x37, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        ];

        console.log(kaka.length);
        return new Buffer.from(kaka);
        //return packet.buffer;
    }
}

module.exports = GameServerMethods;
