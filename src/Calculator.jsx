import React, { useState } from 'react'

const Calculator = () => {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(true);
  const getValue = (e) => {
    setData(data.concat(e.target.value))
  }
  const calculation = () => {
    setData(eval(data).toString())
  }
  const clear = () => {
    setData(data.slice(0, data.length - 1))
  }
  const allClear = () => {
    setData("")
  }
  const getBracket = (e) => {
    const value = e.target.value;

    if (value === "()") {
      if (open) {
        setData((prev) => prev + "(");
      } else {
        setData((prev) => prev + ")");
      }
      setOpen(!open);
    } else {
      setData((prev) => prev + value);
    }
  };

  return (
    <>
      <div className="container">
        <input type="text" name='calculator' value={data} />

        <button onClick={allClear} value="AC">AC</button>
        <button onClick={getBracket} value="()">()</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={getValue} value="/">/</button>

        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*">*</button>

        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="-">-</button>

        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+">+</button>

        <button onClick={getValue} value="0">0</button>
        <button onClick={getValue} value=".">.</button>
        <button onClick={clear} value="x">x</button>
        <button onClick={calculation} value="=">=</button>

      </div>
    </>
  )
}

export default Calculator