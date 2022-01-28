import {useState} from "react";

import './App.css';

import Keyboard from "./Keyboard";
import WordBox from "./WordBox";

const App = () => {
    const secretWord = "MOUTH"

    // const a1z26 = (letter = null, num = null) => {
    //     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     if (letter !== null) return String(alphabet.indexOf(letter) + 1)
    //     if (num !== null) return alphabet[num]
    // }

    const [guess, setGuess] = useState({
          1: Array(secretWord.length).fill(""),
          2: Array(secretWord.length).fill(""),
          3: Array(secretWord.length).fill(""),
          4: Array(secretWord.length).fill(""),
          5: Array(secretWord.length).fill(""),
      })
    const [showSolution, setShowSolution] = useState(Array(5).fill(false))
    const [num, setNum] = useState(1)

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
            setShowSolution(current => {
                let newSolution = [...current]
                newSolution[currentNum - 1] = true
                return newSolution
            })
            return currentNum + 1
        })
    }

    return (
      <div className={"App"}>
          <h1>Wordle</h1>
          <WordBox word={secretWord} guess={guess["1"]} solve={showSolution[0]}/>
          <WordBox word={secretWord} guess={guess["2"]} solve={showSolution[1]}/>
          <WordBox word={secretWord} guess={guess["3"]} solve={showSolution[2]}/>
          <WordBox word={secretWord} guess={guess["4"]} solve={showSolution[3]}/>
          <WordBox word={secretWord} guess={guess["5"]} solve={showSolution[4]}/>
          <Keyboard click={click} del={del} submit={submit} num={num}/>
      </div>
    )
}

export default App