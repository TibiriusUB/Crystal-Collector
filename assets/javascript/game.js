
    $(document).ready(function() {
        // Use the JQuery API to create each <div>, name them one by one , and manuely craft them. Use tricks 
        //     from the Fridge magnet, and calculator excersizes to make the crystal buttons, and CSS the style
        //     into place useing the demo video as a guide. you can do this, it will be fun! :) 
        
        // NOTES;Skiping the JQuery CSS, keeping to a sheet, and building the rest with JQuery. This is fun, 
        //but not pratical for the field for almost any circumstance beyond absurd automation!
         
        var RanTar
        var Scorecount = 0
        var wins = 0
        var losses = 0
        var gamestart = false
        var GEMS = ["rosequartz","amethyst","ruby","sapphire"];
        
        var START = $("<div></div>").addClass("START");
        $("body").append(START);
        var title = $("<div>Crystal Collector!</div>").addClass("title");
        $(".START").append(title);
        var inst = $("<div></div>").addClass("inst").html("<p>You will be given a random number at the start of the game.</p><br><p>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score</p><br><p>You will win the game if your total score matches the random number. You will lose the game if your score goes above the number.</p><br><p>Each time the game starts, the game will change the value of the crystals.</p>");
        $(".START").append(inst);
        var scoreBoard = $("<div></div>").addClass("scoreBoard");
        $(".START").append(scoreBoard);
        var tarDisp = $("<div></div>").addClass("tarDisp").html("<p>Target Number:<p><br><h1>");
        $(".scoreBoard").append(tarDisp);
        var score = $("<div></div>").addClass("score").html("<h2>Click</h2><br><h3>to</h3><br><h4>start!</h4>");
        $(".scoreBoard").append(score);
        var GEMBox = $("<div></div>").addClass("GEMBox");
        $(".START").append(GEMBox);
        for (var i = 0; i < GEMS.length; i++) {
            var GEMBtns = $("<button/>",{id:GEMS[i]});
            GEMBtns.addClass("GEMBtns").attr("gemval",0)
            $(".GEMBox").append(GEMBtns);
        }
        var total = $("<div></div>").addClass("total");
        $(".START").append(total);
        var toDisp = $("<div></div>").addClass("toDisp").text("Your total score is:");
        $(".total").append(toDisp);
        var sumtotal = $("<div></div>").addClass("sumtotal").html("<h5>");
        $(".total").append(sumtotal);
        $( ".GEMBtns" ).each(function( index ) {
            console.log( index + ": " + (this.id)) ;
        });
        $("body").click(function(){
            if (!gamestart) {
                gamestart=true
                $("h2").text(" ");
                $("h3").text("Wins: "+wins);
                $("h4").text("Losses: "+losses);
                $("h5").text("0")
                RanTar = Math.floor((Math.random() * 100) + 19);
                $("h1").text(RanTar)
                $(".GEMBtns").each(function(index){
                    (this.gemval) = Math.floor((Math.random() * 12) + 1);
                    console.log( index + ": " + (this.gemval))}); 
            }else{
                $(".GEMBtns").off("click");
                $(".GEMBtns").on ( "click", function() {
                Scorecount=(this.gemval+Scorecount);
                console.log(Scorecount);      
                $("h5").text(Scorecount);
                if (Scorecount === RanTar){
                    winner(function(){});
                    gamestart = false;
                    Scorecount = 0
                    $("h3").text("Wins: "+wins);
                    $("h2").text("You Win!");
                    $("h5").text("Click to play again!");
                }else if (Scorecount > RanTar){
                    looser(function(){});
                    gamestart = false;
                    Scorecount = 0
                    $("h3").text("Losses: "+losses);
                    $("h2").text("You Lost.");
                    $("h5").text("Click to play again!");
                }; 
            });  
            };
        });
        function winner(){
            return (wins++)
        };
        function looser(){
            return (losses++)
        };
    });