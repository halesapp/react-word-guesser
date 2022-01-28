import "./WordBox.css"

// const WordBox = ({ letter, show }) => {
//     return (
//       <div className={"wb"}>
//           {show}
//       </div>
//     )
// }
const WordBox = ({word, guess}) => {
    return (
      <div className={"wbr"}>
          {guess.map((a, idx) => {
              const classes = `wb${word[idx] === a ? " bg-g" : ""}`
              return <div key={`g${idx}`} className={classes}>{a ? a : ""}</div>
          })}
      </div>
    )
}
export default WordBox