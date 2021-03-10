class PLAYER{
    constructor(){

    }

    getcount(){
        var playercountref=database.ref('playerCount');
        playercountref.on("value",function(data){
            playercount=data.val();
        })
     }
 
     updatecount(count){
        database.ref('/').update({
            playerCount:count
        })
     }

     updatename(name){
         var playername="player"+playercount;

         database.ref(playername).set({
             Name:name
         })
     }
}