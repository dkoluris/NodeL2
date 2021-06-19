module.exports = {
       authorizeGG: invoke('AuthServer/Request/AuthorizeGG'),
    authorizeLogin: invoke('AuthServer/Request/AuthorizeLogin'),
         gameLogin: invoke('AuthServer/Request/GameLogin'),
        serverList: invoke('AuthServer/Request/ServerList')
};
