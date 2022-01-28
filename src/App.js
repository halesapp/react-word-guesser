import {useState, useEffect} from "react";

import './App.css';

import Keyboard from "./Keyboard.js";
import WordBox from "./WordBox";

const App = () => {
    const secretWord = "HELLO"
    const [guess, setGuess] = useState(Array(secretWord.length).fill(""))

    const click = (a) => {
        setGuess(currentGuess => {
            if (currentGuess.filter(a => a !== '').length === secretWord.length) return currentGuess

            let newGuess = [...currentGuess]
            newGuess[newGuess.indexOf('')] = a.toUpperCase()
            return newGuess
        })
    }
    const del = () => {
        setGuess(currentGuess => {
            // todo this is not correct - what if '' is in position 0?
            let firstSpace = currentGuess.indexOf('')
            if (firstSpace === 0) return currentGuess
            if (firstSpace === -1) firstSpace = secretWord.length

            let newGuess = [...currentGuess]
            newGuess[firstSpace - 1] = ''
            return newGuess
        })
    }

    useEffect(() => {
        window.addEventListener("keydown", evt => {
            if (evt.key === 'Backspace') del()
            if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(evt.key.toUpperCase()) + 1) click(evt.key.toUpperCase())
        })
    }, [])


    return (
      <div className={"App"}>
          <WordBox word={secretWord} guess={guess}/>
          <Keyboard click={click}/>
      </div>
    )
}

export default App