import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000000")
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)
  const [option, setOption]= useState("left")
  const [fonts, setFont]= useState("Arial")
  const styles = {
    color: color,
    fontSize: fontSize + "px",
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    textAlign: option,
    fontFamily: fonts,
  };
  return (
    <div className="App">
      <textarea value={text} onInput={({ target }) => setText(target.value)}></textarea>
      <fieldset>
        <legend>Font size</legend>
        <input type="range"
          min="10"
          max="100"
          value={fontSize}
          onInput={({ target }) => setFontSize(target.value)}  /> {fontSize}px
      </fieldset>

      <fieldset>
        <legend>Color</legend>
        <input type="color"
          value={color}
          onInput={({ target }) => setColor(target.value)}  /> {color}
      </fieldset>

      <fieldset style={{display: "flex", flexDirection: "column" }}>
            <legend>Style</legend>
            <div>
                <input type="checkbox"
                    value={bold}
                    onChange={({ target }) => setBold(target.checked)}  /> <label style={{fontWeight:"bold"}}>Bold</label>
            </div>
            <div>
                <input type="checkbox"
                    value={italic}
                    onChange={({ target }) => setItalic(target.checked)}  /> <label style={{fontStyle:"italic"}}>italic</label>
            </div>
            <div>
                <input type="checkbox"
                    value={underline}
                    onChange={({ target }) => setUnderline(target.checked)}  /> <label style={{textDecoration:"underline"}}>Underline</label>
            </div>
      </fieldset>
      <fieldset>
        <legend>Text align</legend>
        <select  onChange={({ target }) => setOption(target.value)}>
            <option>left</option>
            <option>center</option>
            <option>right</option>
            <option>justify</option>
        </select>
        </fieldset>
        <fieldset style={{display: "flex", flexDirection: "column" }}> 
            <legend>Fonts style</legend>
            <div>
                <input value={"Helvetica"} name="font" onChange={({ target }) => setFont(target.value)} type="radio"/> <label style={{fontFamily:"Helvetica"}}>Helvetica</label>
            </div>
            <div>
                <input value={"Impact"} name="font" onChange={({ target }) => setFont(target.value)} type="radio"/> <label style={{fontFamily:"Impact"}}>Impact</label>
            </div>
            <div>
                <input value={"Times New Roman"} name="font" onChange={({ target }) => setFont(target.value)} type="radio"/> <label style={{fontFamily:"Times New Roman"}}>Times New Roman</label>
            </div>
            <div>
                <input value={"Franklin Gothic Medium"} name="font" onChange={({ target }) => setFont(target.value)} type="radio"/> <label style={{fontFamily:"Franklin Gothic Medium"}}>Franklin Gothic Medium</label>
            </div>
        </fieldset>
      <div style={styles}>{text}</div>
    </div>
  );
}
export default App;