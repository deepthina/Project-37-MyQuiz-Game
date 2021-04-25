class Player{
    constructor(){
        this.index=0;
        this.name=null;
        this.answer=null;
    }

    getCount(){
        var playerCountRef= database.ref('contestantCount');
        playerCountRef.on("value", (data)=>{contestantCount=data.val();})
    }

    updateCount(count){
        database.ref('/').update({contestantCount:count});
    }

    update(name, answer){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({name:name,answer:answer});
    }

    static getPlayerInfo(){
        var playerInfoRef= database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers=data.val();

            console.log(allPlayers)
        })
    }



}