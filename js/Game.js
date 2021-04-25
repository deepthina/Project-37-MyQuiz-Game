class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data)=>{
            gameState= data.val();
        })
    }

    update(state){
        database.ref('/').update({gameState:state});
    }

    start(){

        if(gameState===0){
        form = new Form();
        form.display();

        player = new Player();
        player.getCount();
    
        }

        
    }

    play(){

        background("lightblue");
        form.hide();
        Player.getPlayerInfo();


        if(allPlayers!==undefined){

            var y=250;

            fill("brown");
            textSize(20);
            text("*Note: Contestant who answered corrected are highlighted in green",130,230);

            for( var plr in allPlayers){
                var correctAns ="2";
                if(correctAns===allPlayers[plr].answer)
                fill("green");

                else
                fill("red");

                y+=20;

                textSize(15);
                text(allPlayers[plr].name+":"+allPlayers[plr].answer,200,y);
            }
        }
        
    }
}