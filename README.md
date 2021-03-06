# NodeL2
Classic L2 server emulator in NodeJS  
You are welcome to join us on [L2Web Discord](https://discord.com/invite/nxsWZe84ZX) for discussing **Lineage2 Development** with **Web Technologies**.

## Prerequisites
* Install [NodeJS 14+](https://nodejs.org/en/), [MariaDB 16+](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.6.8)
* For convenience, also install [MS Visual Studio Code](https://code.visualstudio.com/download), and [TablePlus](https://tableplus.com/download)
* All of the above tools are compatible with **Windows**, **Linux**, and **macOS**
* Use **Powershell** for **Windows**, and **Terminal** for the rest.

## Setup
* Fix **USER**, and **PASS** in `/database` scripts, and run `.\/database/db-install.bat` for **Windows**, or `/database/db-install.sh` for **Linux** and **macOS**
* Fix **Database password**, and **Protocol version** in `config/config.ini`
* Run `npm install -i`

## Run
* Launch `npm run node` for **NodeJS** <= 16, or `npm run node17+` for newer **NodeJS** >= 17 versions.

## Credits
Main source of inspiration is <a href="https://github.com/lineage2js/lineage2js">lineage2js</a>, please support it!

## License
Open-source under [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).
