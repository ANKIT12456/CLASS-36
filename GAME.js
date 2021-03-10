class GAME{

    constructor(){

    }

    get(){
       var gameStateref=database.ref('gameState');
       gameStateref.on("value",function(data){
           gameState=data.val();
       })
    }

    update(state){
       database.ref('/').update({
           gameState:state
       })
    }

    start(){
        //if(gameState==0){
            players=new PLAYER();
            players.getcount();
            form=new FORM();
            form.display();
       // }
    }
}