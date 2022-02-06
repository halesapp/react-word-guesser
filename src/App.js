import {useState} from "react";

import './App.css';

import Keyboard from "./Keyboard";
import WordBox from "./WordBox";

const App = () => {
    const secretWord = "MOUTH"
    const allLeters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let letterState = {}
    allLeters.forEach(a => letterState[a] = "noguess")
    // const a1z26 = (letter = null, num = null) => {
    //     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     if (letter !== null) return String(alphabet.indexOf(letter) + 1)
    //     if (num !== null) return alphabet[num]
    // }

    const numGuesses = 6
    const [guess, setGuess] = useState(Array(numGuesses).fill(Array(secretWord.length).fill("")))
    const [guessedLetters, setGuessedLetters] = useState(letterState)
    const [showSolution, setShowSolution] = useState(Array(5).fill(false))
    const [num, setNum] = useState(0)

    const checkValidGuess = (guess) => {
        return guess.every(a => a !== "")
    }
    const checkGuess = (guess) => {
        return guess.map((letter, idx) => {
            if (secretWord[idx] === letter) return 'correct'
            else if (secretWord.indexOf(letter) + 1) return 'pos'
            else return 'wrong'
        })
    }
    const click = (a, b) => {
        setGuess(currentGuess => {
            let newGuess = JSON.parse(JSON.stringify(currentGuess))
            if (currentGuess[b].filter(a => a !== '').length === currentGuess[b].length) return currentGuess
            newGuess[b][newGuess[b].indexOf('')] = a.toUpperCase()
            return newGuess
        })
    }
    const del = (a) => {
        setGuess(currentGuess => {
            let firstSpace = currentGuess[a].indexOf('')
            if (firstSpace === 0) return currentGuess
            if (firstSpace === -1) firstSpace = currentGuess[a].length
            let newGuess = JSON.parse(JSON.stringify(currentGuess))
            newGuess[a][firstSpace - 1] = ''
            return newGuess
        })
    }
    const submit = () => {
        setNum(currentNum => {
            if (!checkValidGuess(guess[currentNum])) return currentNum

            setGuessedLetters(currentGuess => {
                let newGuess = JSON.parse(JSON.stringify(currentGuess))
                guess[currentNum].forEach((letter, idx) => {
                    if (secretWord[idx] === letter) {
                        newGuess[letter] = 'correct'
                    } else if (secretWord.indexOf(letter) + 1) {
                        newGuess[letter] = secretWord[letter] === 'correct' ? 'correct' : 'pos'
                    } else {
                        newGuess[letter] = 'wrong'
                    }
                })
                return newGuess
            })

            setShowSolution(current => {
                let newSolution = [...current]
                newSolution[currentNum] = true
                return newSolution
            })
            return currentNum + 1
        })
    }

    return (
      <div className={"App"}>
          <h1>Wordle</h1>
          {[...Array(numGuesses).keys()]
            .map(number => <WordBox key={number} word={secretWord} guess={guess[number]} solve={showSolution[number]} checkGuess={checkGuess}/>)}
          <Keyboard click={click} del={del} submit={submit} num={num} guessedLetters={guessedLetters}/>
      </div>
    )
}

export default App