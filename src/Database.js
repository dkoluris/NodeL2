const SQL = require('like-sql'), builder = new SQL();

let conn;

const Database = {
    init: (callback) => {
        const { database } = invoke('Config');

        require('mariadb').createConnection({
            host     : database.hostname,
            port     : database.port,
            user     : database.user,
            password : database.password,
            database : database.name

        }).then((instance) => {
            console.info('DB:: connected');
            conn = instance;
            callback();

        }).catch(error => {
            infoFail('DB:: failed(%d) -> %s', error.errno, error.text);
        });
    },

    execute: (sql) => {
        return conn.query(sql[0], sql[1]);
    },

    // Creates a new User Account in the Database with provided credentials
    createAccount: (username, password) => {
        return Database.execute(
            builder.insert('accounts', {
                username: username,
                password: password
            })
        );
    },

    // Gets the Password from a provided Username account
    fetchUserPassword: (username) => {
        return Database.execute(
            builder.selectOne('accounts', ['password'], 'username = ?', username)
        );
    },

    // Check if provided name is taken
    fetchCharacterWithName: (name) => {
        return Database.execute(
            builder.selectOne('characters', ['id'], 'name = ?', name)
        );
    },

    // Gets the Characters defined on a user's account
    fetchCharacters: (username) => {
        return Database.execute(
            builder.select('characters', ['*'], 'username = ?', username)
        );
    },

    // Gets the Base Stats for a specific Class ID
    fetchClassInformation: (classId) => {
        const path = process.cwd() + '/data/Classes';

        return new Promise((success, fail) => {
            require('fs').readdir(path, (error, files) => {
                const result = files.find(text =>
                    text.includes('[' + classId + ']')
                );

                return result ? success(require(path + '/' + result)) : fail();
            });
        });
    },

    createCharacter(username, data, classInfo) {
        return Database.execute(
            builder.insert('characters', {
                 username: username,
                     name: data.name,
                     race: data.race,
                  classId: data.classId,
                    maxHp: classInfo.stats.maxHp,
                    maxMp: classInfo.stats.maxMp,
                      sex: data.sex,
                     face: data.face,
                     hair: data.hair,
                hairColor: data.hairColor,
                        x: 43648, // TODO: Depends on race and class
                        y: 40352, // TODO: Depends on race and class
                        z:-3430   // TODO: Depends on race and class
            })
        );
    }
};

module.exports = Database;
