"use strict";
var moves;
(function (moves) {
    moves[moves["Rock"] = 0] = "Rock";
    moves[moves["Paper"] = 1] = "Paper";
    moves[moves["Scissors"] = 2] = "Scissors";
})(moves || (moves = {}));
function rps(guessOne, guessTwo) {
    let numbers = [1, 2, 3];
    numbers[Math.floor(Math.random() * numbers.length)];
    if (guessOne.move === guessTwo.move)
        return { move: guessOne.move };
    switch (guessOne.move) {
        case moves.Rock:
            if (guessTwo.move === moves.Paper)
                return guessTwo;
            break;
        case moves.Paper:
            if (guessTwo.move === moves.Scissors)
                return guessTwo;
            break;
        case moves.Scissors:
            if (guessTwo.move === moves.Rock)
                return guessTwo;
            break;
        default:
            return guessOne;
    }
    return guessOne;
}
