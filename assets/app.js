// Creating and appending the start button //
$(document).ready(function() {

    function startScreen () {
        startScreen = "<h1 class ='text-center'>Welcome to World Food Trivia!</h1><br></br><p class='text-center main-button-container'><a class='btn btn-danger btn-lg btn-block start-button' href='#' role='button'>Start the Quiz!</a></p>";
        
        $(".titleAndStart").html(startScreen);
     }
    
    startScreen();
    
    // Creating the on-click event for the start button which will lead to the 1st question once clicked //
    
    $("body").on('click','.start-button',function(event) {
        //event.preventDefault(); 
        console.log("button clicked")
        loadQuestions(); 
    
    });
    
    $("body").on('click','.reset-button',function(event) {
        //event.preventDefault(); 
        console.log("button clicked")
        questionNumber = 0;
        correctTotal = 0;
        incorrectTotal = 0;
        noAnswerTotal = 0; 
        timer = 30;
        wins = 0;
        losses = 0;
        noAnswer = 0; 
        startScreen(); 
    });
    
    
    $("body").on('click','.answer-button',function(event) {
        console.log("answer button clicked" + $(this).text())
    
        var selected = $(this).text();  //this is the button the user pushed
    
        if (questionNumber < 10) {
    
            if( selected === questionArray[questionNumber].answer ) {
                wins++;
                youWin();
                clearInterval(clock);
               // loadQuestions();
            }
            else {
                losses++;
                youLose();
                clearInterval(clock);
                //loadQuestions();
            }
            // questionNumber++;
        }
        if (questionNumber == 9) {
            finalScreen();
            //resetGame();
        }
    
        console.log( "wins=" + wins + "losses=" +losses);
    
    });
    
    
    // 30 second timer: starts at 30 seconds; counts down by 1 second; if it gets to zero then clear it out, if above zero then display that time. //
    
    var timerBox;
    var timer = 30; 
    var clock;
    var wins = 0;
    var losses = 0;
    var noAnswerTotal = 0; 
    var correctTotal = 0;
    var incorrectTotal = 0;
    
    
    function finalScreen() {
        gameQuestions = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Great, you finished!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTotal + "</p>" + "<p>Wrong Answers: " + incorrectTotal + "</p>" + "<p>Unanswered: " + noAnswerTotal + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-danger btn-lg btn-block reset-button' href='#' role='button'>Let's play again!</p>";
        $(".titleAndStart").html(gameQuestions);
    };
    
    function wait() {
        if (questionNumber < 9) {
    
          questionNumber++;
         
          loadQuestions();
        
          timer = 30;
            
          //answerClock();
        
        }
    //	else {
    //		finalScreen();
    //	}
    }
    
    function timeIsUp() {
        noAnswerTotal++;
        gameQuestions= "<p class='text-center timer-p'>Time Remaining: <span class='timerBox'>" + timer + "</span></p>" + "<p class='text-center'>Time is up!  The correct answer was: " + questionArray[questionNumber].answer + "</p>";
        $(".titleAndStart").html(gameQuestions);
        clearInterval(clock);
        setTimeout(wait, 4000);  
    }
    
    function youWin() {
        correctTotal++;
        gameQuestions = "<p class='text-center timer-p'>Time Remaining: <span class='timerBox'>" + timer + "</span></p>" + "<p class='text-center'>You are correct! The answer is: " + questionArray[questionNumber].answer + "</p>";
        $(".titleAndStart").html(gameQuestions);
        console.log("youWin");
        setTimeout(wait, 4000); 
        console.log("youwin After"); 
    }
    
    function youLose() {
        //console.log("youLose");
        incorrectTotal++;
        gameQuestions = "<p class='text-center timer-p'>Time Remaining: <span class='timerBox'>" + timer + "</span></p>" + "<p class='text-center'>You are wrong! The correct answer is: "+ questionArray[questionNumber].answer + "</p>";
        $(".titleAndStart").html(gameQuestions);
        setTimeout(wait, 4000); 
    }
    
    function resetGame() {
        finalScreen();
    }
        
    function answerClock() {
        clock = setInterval(thirtySeconds, 1000);
    }
        function thirtySeconds() {
            
            if (timer === 0) {
              
                clearInterval(clock);
                
                timeIsUp();
            }
            
            if (timer > 0) {
                timer--;
            }
            $(".timerBox").html(timer);
        }
    //}
    
    
    var questionNumber = 0;
    var questionArray = [
        { 
            question: "What is the most popular spice in the world?",
            options: ['a. pepper', 'b. cloves', 'c. paprika', 'd. thyme'],
            answer: "a. pepper"
            
        },
        {
            question: "The Cajun holy trinity of cooking consists of what three vegetables?",
            options: ["a. tomatoes, corn, bell peppers", "b. bell peppers, carrots, celery", "c. celery, onions, bell peppers", "d. onions, tomatoes, corn"],
            answer: "c. celery, onions, bell peppers"
            
        },
        {
            question: "Sriracha is a type of hot sauce named after a city located in which country?",
            options: ['a. Japan', 'b. Mexico', 'c. Italy', 'd. Thailand'],
            answer: "d. Thailand"
            
        },
        {
            question: "Malbec, Sangiovese, and Syrah are all a type of what?",
            options: ['a. cheese', 'b. fruit', 'c. wine', 'd. coffee'],
            answer: "c. wine"
            
        },
        {
            question: "Sushi is a type of cuisine that originated in which country?",
            options: ['a. China', 'b. Korea', 'c. Japan', 'd. Malaysia'],
            answer: "c. Japan"
            
        },
        {
            question: "The first Starbucks was established in 1971 in which U.S. city?",
            options: ['a. New York', 'b. Seattle', 'c. Miami', 'd. Atlanta'],
            answer: "b. Seattle"
            
        },
        {
            question: "A tandoor is a type of what?",
            options: ['a. oven', 'b. bread', 'c. fruit', 'd. coffee'],
            answer: "a. oven"
               
        },
        {
            question: "Kopi luwak is a very expensive type of what?",
            options: ['a. coffee', 'b. beer', 'c. cake', 'd. vegetable'],
            answer: "a. coffee"
            
        },
        {
            question: "Bubble tea originate in which country?",
            options: ['a. Korea', 'b. Spain', 'c. Antartica', 'd. Vietnam'],
            answer: "d. Vietnam"
            
        },
        {
            question: "What is the main ingredient in the Harrissa (north african spices)?",
            options: ['a. peper', 'b. soda', 'c. water', 'd. espresso'],
            answer: "a. peper"
            
        }
        
    ];
    
    // Dynamically loading the questions to the main game play area for user to play //
    
    var gameQuestions;
    
    function loadQuestions () {
    
       timer = 30;
       clearInterval(clock);
       gameQuestions = "<p class = 'text-center timerBox-p'>Time Remaining: <span class='timerBox'>30</span></p>" +
       "<p class='text-center'>" + questionArray[questionNumber].question + "</p>" +
       
       "<p class='text-center main-button-container'><a class='btn btn-default btn-md btn-block answer-button' href='#' role='button'>" + questionArray[questionNumber].options[0] + "</a></p>" +
       "<p class='text-center main-button-container'><a class='btn btn-default btn-md btn-block answer-button' href='#' role='button'>" + questionArray[questionNumber].options[1] + "</a></p>" +
       "<p class='text-center main-button-container'><a class='btn btn-default btn-md btn-block answer-button' href='#' role='button'>" + questionArray[questionNumber].options[2] + "</a></p>" +
       "<p class='text-center main-button-container'><a class='btn btn-default btn-md btn-block answer-button' href='#' role='button'>" + questionArray[questionNumber].options[3] + "</a></p>"
    
       $(".titleAndStart").html(gameQuestions);
       answerClock(); // calling the function 
    
    }
    
    });