import React, { useState } from 'react';

const Calculator = () => {
  const [data, setData] = useState('');
  const [open, setOpen] = useState(true);

  const getValue = (e) => {
    const value = e.target.value;
    if (value === '()') {
      setData((prev) => prev + (open ? '(' : ')'));
      setOpen(!open);
    } else {
      setData((prev) => prev + value);
    }
  };

  const calculate = () => {
    try {
      setData(eval(data).toString());
    } catch {
      setData('Error');
    }
  };

  const del = () => setData(data.slice(0, -1));
  const clear = () => setData('');
  const handleInputChange = (e) => setData(e.target.value);

  return (
    <div className="calc-container">
      <div className="calc-glass">
        <input
          type="text"
          value={data}
          onChange={handleInputChange}
          placeholder="0"
          className="calc-display"
        />
        <div className="calc-buttons">
          <button onClick={clear} className="btn gray">AC</button>
          <button onClick={del} className="btn gray">DEL</button>
          <button onClick={getValue} value="%" className="btn gray">%</button>
          <button onClick={getValue} value="/" className="btn operator">÷</button>

          <button onClick={getValue} value="7" className="btn">7</button>
          <button onClick={getValue} value="8" className="btn">8</button>
          <button onClick={getValue} value="9" className="btn">9</button>
          <button onClick={getValue} value="*" className="btn operator">×</button>

          <button onClick={getValue} value="4" className="btn">4</button>
          <button onClick={getValue} value="5" className="btn">5</button>
          <button onClick={getValue} value="6" className="btn">6</button>
          <button onClick={getValue} value="-" className="btn operator">−</button>

          <button onClick={getValue} value="1" className="btn">1</button>
          <button onClick={getValue} value="2" className="btn">2</button>
          <button onClick={getValue} value="3" className="btn">3</button>
          <button onClick={getValue} value="+" className="btn operator">+</button>

          <button onClick={getValue} value="()" className="btn">( )</button>
          <button onClick={getValue} value="0" className="btn">0</button>
          <button onClick={getValue} value="." className="btn">.</button>
          <button onClick={calculate} className="btn equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
