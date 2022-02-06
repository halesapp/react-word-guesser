import "./WordBox.css"

const WordBox = ({guess, solve, checkGuess}) => {
    let checkGuessClasses = solve ? checkGuess(guess) : Array(guess.length).fill("")
    return (
      <div className={"wbr"}>
          {guess.map((a, idx) => <div key={`g${idx}`} className={`wb ${checkGuessClasses[idx]}`}>{a ? a : ""}</div>)}
      </div>
    )
}
export default WordBox