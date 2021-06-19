let fs = require('fs');
let ini = require('ini');

class Config {
    static defaults = ini.parse(
        fs.readFileSync('./Config.ini', 'utf-8')
    );

    static loginServer = {
        host: this.defaults.AuthServer.Hostname || '127.0.0.1',
        port: parseInt(this.defaults.AuthServer.Port) || 2106
    };

    static gameServer = {
        host: this.defaults.GameServer.Hostname || '127.0.0.1',
        port: parseInt(this.defaults.GameServer.Port) || 7777
    };

    static database = {
        host: this.defaults.Database.Hostname || '127.0.0.1',
        port: parseInt(this.defaults.Database.Port) || 3306,
        user: this.defaults.Database.User || 'root',
        password: this.defaults.Database.Password || '',
        name: this.defaults.Database.Name || 'nodel2'
    }

    static protocolVersion = 485;

    //static blowfishKey = '[;\'.]94-31==-%&@!^+]\u0000';
    static blowfishKey = '_;5.]94-31==-%xT!^[$\u0000';

    static xorKey = [
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ];

    static sessionKey = [
        0x55555555,
        0x44444444,
    ];
}

module.exports = Config;
