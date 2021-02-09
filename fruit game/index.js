//click on start/reset button 
    
    //yes  //reload the page
    //no // show the heart box ,button for button text reset game, //1 a random fruits and, after the genrate the random fruites we add 2.the set interval for random timing of the fruits, fruits down byone second and do in the loops
    //if fruits to low 
     //not to low then repeat no two 
     //if  two low 
     //ask question if we have any trial left
     //yes
     //new random fruit with one heart by going repeart to number one
     //no 
     //then show the reset button and restart the game by reloading the page
     //slice the fruits
     //then play the sound
     var playing=false;
     var score;
     var trialleft;
     var fruits=['apple','bana','cherry','grapes','orange','papaya','pin','starwbarry','watermelon'];
     var step;
     var action;
     $(function(){
         $('#start_reset').click(function(){
            //check if we are playing
            if(playing==true){
                //reload the page
                location.reload();
            }
            else{
                //if we are not playing 
                playing=true; //play initialize
             //first score is 0
             score=0;
             $('#value').html(score);//to set the score 0
             //show the score board
             $('#score').css("visibility", "visible");
             //show the trial left
             $('#life').show();
             trialleft=3;
            addheart();
            //to hide the div after all heart loose
            $('#game_over').hide();

            //change button text to reset game
            $('#start').html("reset game");

            //start function to generate the random fruits
            randomfruits();
            
            }
         });

         //slice the sruits
        $('#fruits').mouseover(function(){
            score++;
            $('#value').html(score);
            console.log(score);//update score
    
    //play the music to cut the fruits
    $('#slicesound')[0].play();

    //stop fruits moving down and hide it 
    clearInterval(action);

    //slice frutis
    $('#fruits').hide("explode", 500);

    //send the new fruits
    setTimeout(randomfruits,500); 

        });
     
//add the  fruits
     function addheart(){
         $('#trial').empty();
        for(var i=0;i<trialleft;i++){
             $('#trial').append( "<img src='images/heart.png'>");      
         }
     }

     
     function randomfruits(){
        $("#fruits").show();
        choosefruits();
        $('#fruits').css({'left': 1+Math.round(Math.random()*550),'top':-50}); 
        
        //genrate the random speed 
        step= 1 + Math.round(Math.random()*5);
        //down fruits by one 1 second
         action=setInterval(function(){
         $('#fruits').css('top',$('#fruits').position().top  + step)
         //if speed is too slow
         if($('#fruits').position().top > $('#game_screen').height()){
            //hceck if have any trial game
             if (trialleft > 1) {
                 $("#fruits").show();
                
                 choosefruits();
                 $('#fruits').css({ 'left': 1 + Math.round(Math.random() * 550), 'top': -50 });

                 //genrate the random speed
                 step = 1 + Math.round(Math.random() * 5);

                 //reduce no of trial 
                 trialleft--;
                 

                 //populate heart left
                 addheart();
                 
                

            }
            //we have no trial left
            else  {
                
                playing=false;

                //showing the start game
                $('#start').html("Start game");
               //show the game over message
               $('#game_over').show();
               //show the text over it
               $('#game_over').html("<p>game over</p><p>your score is "+ score +"</p>") ;
               stopaction(); 
            }
         }
        
        
        
        },10);
        
     }

     //random fruits
     function choosefruits(){{
         $('#fruits').attr('src','images/' + fruits[Math.floor(Math.random()*8)] +'.png');
     }};
     //stop droppnig fruits
         function stopaction() {
             clearInterval(action);
             $('#life').hide();

         }
    });