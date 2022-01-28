import "./Keyboard.css"

const Keyboard = ({ click }) => {
    const qwerty = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"]

    return (
      <div className={"kb"}>
          {
              qwerty.map((row, idx) => {
                  return (
                    <div key={`kbr-${idx}`} className={"kbr"}>
                        {[...row].map(a => <div key={a} className={"key bg-b"} onClick={_ => click(a)}>{a}</div>)}
                    </div>
                  )
              })
          }
      </div>
    )
}

export default Keyboard