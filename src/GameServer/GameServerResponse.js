module.exports = {
            actionFailed: invoke('GameServer/Response/ActionFailed'),
                  attack: invoke('GameServer/Response/Attack'),
          attackCanceled: invoke('GameServer/Response/AttackCanceled'),
         autoAttackStart: invoke('GameServer/Response/AutoAttackStart'),
          changeMoveType: invoke('GameServer/Response/ChangeMoveType'),
          changeWaitType: invoke('GameServer/Response/ChangeWaitType'),
       charCreateSuccess: invoke('GameServer/Response/CharCreateSuccess'),
            charSelected: invoke('GameServer/Response/CharSelected'),
          charSelectInfo: invoke('GameServer/Response/CharSelectInfo'),
           charTemplates: invoke('GameServer/Response/CharTemplates'),
               createSay: invoke('GameServer/Response/CreateSay'),
               cryptInit: invoke('GameServer/Response/CryptInit'),
            deleteObject: invoke('GameServer/Response/DeleteObject'),
                     die: invoke('GameServer/Response/Die'),
                 getItem: invoke('GameServer/Response/GetItem'),
               inventory: invoke('GameServer/Response/Inventory'),
                logoutOk: invoke('GameServer/Response/LogoutOk'),
          moveToLocation: invoke('GameServer/Response/MoveToLocation'),
                 npcInfo: invoke('GameServer/Response/NpcInfo'),
               questList: invoke('GameServer/Response/QuestList'),
                 restart: invoke('GameServer/Response/Restart'),
                 showMap: invoke('GameServer/Response/ShowMap'),
            socialAction: invoke('GameServer/Response/SocialAction'),
               spawnItem: invoke('GameServer/Response/SpawnItem'),
            statusUpdate: invoke('GameServer/Response/StatusUpdate'),
    stopMoveWithLocation: invoke('GameServer/Response/StopMoveWithLocation'),
                 sunrise: invoke('GameServer/Response/Sunrise'),
           systemMessage: invoke('GameServer/Response/SystemMessage'),
          targetSelected: invoke('GameServer/Response/TargetSelected'),
        targetUnselected: invoke('GameServer/Response/TargetUnselected'),
                userInfo: invoke('GameServer/Response/UserInfo')
};
