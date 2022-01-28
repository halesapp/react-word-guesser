import "./WordBox.css"

const WordBox = ({word, guess, solve}) => {
    return (
      <div className={"wbr"}>
          {guess.map((a, idx) => {
              const classes = ['wb']
              if (solve) {
                  if (word[idx] === a) classes.push('bg-g')
                  else if (word.indexOf(a) + 1) classes.push('bg-y')
                  else classes.push('bg-b')
              }
              return <div key={`g${idx}`} className={classes.join(' ')}>{a ? a : ""}</div>
          })}
      </div>
    )
}
export default WordBox