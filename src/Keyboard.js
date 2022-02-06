import "./Keyboard.css"

const DeleteSVG = () => {
    return (
      <svg fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           viewBox="0 0 24 24"
           height="1em"
           width="1em">
          <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2zM18 9l-6 6M12 9l6 6"/>
      </svg>
    )
}

const Keyboard = ({click, submit, del, num, guessedLetters}) => {
    const qwerty = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]
    return (
      <div className={"kb"}>
          <div className={"kbr"}>
              <div className={"key key-wide noguess"} onClick={_ => submit()}>ENTER</div>
              <div className={"key key-wide noguess"} onClick={_ => del(num)}><DeleteSVG/></div>
          </div>
          {
              qwerty.map((row, idx) => {
                  return (
                    <div key={`kbr-${idx}`} className={"kbr"}>
                        {[...row].map(a => <div key={a} className={`key ${guessedLetters[a]}`} onClick={_ => click(a, num)}>{a}</div>)}
                    </div>
                  )
              })
          }
      </div>
    )
}

export default Keyboard