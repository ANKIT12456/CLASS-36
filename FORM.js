class FORM{

    constructor(){

    }

    display(){
        var input=createInput("ENTER YOUR NAME");
        var button=createButton("CLICK HERE");
        var greeting=createElement("h2");
        input.position(500,400);
        button.position(500,600);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playercount=playercount+1;
            players.updatecount(playercount);
            players.updatename(name);
            greeting.html("HELLO,"+name);
            greeting.position(500,400);


        })  
    }

}