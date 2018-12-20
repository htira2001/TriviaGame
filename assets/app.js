// Creating and appending the start button //
$(document).ready(function () {

 // Creating the on-click event for the start button which will lead to the 1st question once clicked //

    $("body").on('click', '.start-button', function (event) {
        //event.preventDefault(); 
        console.log("button clicked")
        loadQuestions();

    });

    $("body").on('click', '.reset-button', function (event) {
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
    });


    $("body").on('click', '.answer-button', function (event) {
        console.log("answer button clicked" + $(this).text())

        var selected = $(this).text(); //this is the button the user pushed

        if (questionNumber < 10) {

            if (selected === questionArray[questionNumber].answer) {
                wins++;
                youWin();
                clearInterval(clock);
                // loadQuestions();
            } else {
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

        console.log("wins=" + wins + "losses=" + losses);

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
        gameQuestions = "<p class='text-center timer-p'>Time Remaining: <span class='timerBox'>" + timer + "</span></p>" + "<p class='text-center'>Time is up!  The correct answer was: " + questionArray[questionNumber].answer + "</p>";
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
        gameQuestions = "<p class='text-center timer-p'>Time Remaining: <span class='timerBox'>" + timer + "</span></p>" + "<p class='text-center'>You are wrong! The correct answer is: " + questionArray[questionNumber].answer + "</p>";
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
   


    var questionNumber = 0;
    var questionArray = [{
            question: "where michael jordan is born?",
            options: ['a. new york', 'b. georgia', 'c. california', 'd. alabama'],
            answer: "a. new york"

        },
        {
            question: "who is the king of pop",
            options: ["a. tom cruise", "b. elton john", "c. maria carrey", "d. michael jackson"],
            answer: "d. michael jackson"

        },
        {
            question: "in what continent is tunisia?",
            options: ['a. north america', 'b. south america', 'c. africa', 'd. europe'],
            answer: "c. africa"

        },
        {
            question: "where is the Colosseum ?",
            options: ['a. rome', 'b. sardinia', 'c. venice', 'd. milan'],
            answer: "a. rome"

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
            question: "what's the number one sports in south africa?",
            options: ['a. volley-ball', 'b. rugby', 'c. soccer', 'd. hockey'],
            answer: "b. rugby"

        },
        {
            question: "where's the most beautiful beaches in the world?",
            options: ['a. mexico', 'b. france', 'c. maldive', 'd. barbedos'],
            answer: "c. maldive"

        },
        {
            question: "what's the top cruise in the world?",
            options: ['a. Queen elizabeth', 'b. caravan', 'c. norwegian', 'd. royal carribean'],
            answer: "a. Queen elizabeth"

        },
        {
            question: "What is the main ingredient in the Harrissa (north african spices)?",
            options: ['a. peper', 'b. soda', 'c. water', 'd. espresso'],
            answer: "a. peper"

        }

    ];

    // Dynamically loading the questions to the main game play area for user to play //

    var gameQuestions;

    function loadQuestions() {

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