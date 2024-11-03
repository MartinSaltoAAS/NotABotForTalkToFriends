enum moves {
    Rock,
    Paper,
    Scissors
}
interface guess {
    move: number
}

function rps(guessOne: guess, guessTwo: guess): guess {
    let numbers = [1, 2, 3]
    numbers[Math.floor(Math.random() * numbers.length)]

    if (guessOne.move === guessTwo.move) return { move: guessOne.move }

    switch (guessOne.move) {
        case moves.Rock:
          if (guessTwo.move === moves.Paper) return guessTwo
          break
        case moves.Paper:
          if (guessTwo.move === moves.Scissors) return guessTwo
          break
        case moves.Scissors:
          if (guessTwo.move === moves.Rock) return guessTwo
          break
        default:
          return guessOne
    }

    return guessOne
}