(function () {

    // Javascript given
    var choices = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
    var index = Math.floor((Math.random() * 9));
    var computer = choices[index];
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors');

    rock.addEventListener('click', function () {
        play('rock');
    });

    paper.addEventListener('click', function () {
        play('paper');
    });

    scissors.addEventListener('click', function () {
        play('scissors');
    });

    function showResult(result) {
        alert(result);
    }
    // End of javascript given


    function play(user) {
        var result

        console.log(computer, user);

// It a tie   
        if (computer === user) {
            result = "It is a Tie";
        }
// Computer wins
        else if (computer === "rock" && user === "scissors") {
            result = "You Lose! Computer's ROCK beats your SCISSORS";
        }
        else if (computer === "paper" && user === "rock") {
            result = "You Lose! Computer's PAPER beats your ROCK";
        }
        else if (computer === "scissors" && user === "paper") {
            result = "You Lose! Computer's SCISSORS beats your PAPER";
        }
// Player wins
        else if (computer === "paper" && user === "scissors") {
            result = "Winner Winner Chicken Dinner! SCISSORS beats PAPER";
        }
        else if (computer === "scissors" && user === "rock") {
            result = "Winner Winner Chicken Dinner! ROCK beats SCISSORS";
        }
        else if (computer === "rock" && user === "paper") {
            result = "Winner Winner Chicken Dinner! PAPER beats ROCK";
        }

// Results and reload
        showResult(result);
        location.reload();
    }

})();
