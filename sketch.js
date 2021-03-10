var canvas,playercount,gameState,database,form,players,game;

function setup(){

    database=firebase.database();

    canvas=createCanvas(1000,800);

    game=new GAME();
    game.get();
    game.start();

}

function draw(){
}


