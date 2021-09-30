import { useEffect, useState } from "react";
import "./Numpad.css";

interface iNumpad {
  inputValue: string;
  setInputValue: Function;
}

function Numpad({ inputValue, setInputValue }: iNumpad) {
  const [numpadNumber, setNumpadNumber] = useState<string[]>([]);

  useEffect(() => {
    setInputValue(numpadNumber.join(""));
  }, [numpadNumber, setInputValue]);

  function handlerNumberButton(value: string) {
    setNumpadNumber(inputValue.split(""));
    setNumpadNumber((state) => {
      return [...state, value];
    });
  }

  function handlerDeleteButton() {
    setNumpadNumber(inputValue.split(""));
    setNumpadNumber((state) => {
      return state.slice(0, -1);
    });
  }

  return (
    <ul className="numpad">
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("1");
          }}
          className="numpad__btn"
        >
          1
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("2");
          }}
          className="numpad__btn"
        >
          2
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("3");
          }}
          className="numpad__btn"
        >
          3
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("4");
          }}
          className="numpad__btn"
        >
          4
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("5");
          }}
          className="numpad__btn"
        >
          5
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("6");
          }}
          className="numpad__btn"
        >
          6
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("7");
          }}
          className="numpad__btn"
        >
          7
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("8");
          }}
          className="numpad__btn"
        >
          8
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("9");
          }}
          className="numpad__btn"
        >
          9
        </button>
      </li>
      <li className="numpad__item">
        <button type="button" className="numpad__btn" disabled={true}></button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={() => {
            handlerNumberButton("0");
          }}
          className="numpad__btn"
        >
          0
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerDeleteButton}
          className="numpad__btn"
        >
          &#8617;
        </button>
      </li>
    </ul>
  );
}

export default Numpad;
