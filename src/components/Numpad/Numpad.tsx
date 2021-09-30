import { useEffect, useState, MouseEvent } from "react";
import "./Numpad.css";

interface iNumpad {
  inputValue: string;
  setInputValue: Function;
}

function Numpad({ inputValue, setInputValue }: iNumpad) {
  const [numpadNumber, setNumpadNumber] = useState<string[]>([]);

  useEffect(() => {
    console.log(numpadNumber);
    setInputValue(numpadNumber.join(""));
  }, [numpadNumber, setInputValue]);

  function handlerNumberButton(evt: MouseEvent<HTMLElement>) {
    setNumpadNumber(inputValue.split(""));
    setNumpadNumber((state) => {
      return [...state, evt.target.value];
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
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="1"
        >
          1
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="2"
        >
          2
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="3"
        >
          3
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="4"
        >
          4
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="5"
        >
          5
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="6"
        >
          6
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="7"
        >
          7
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="8"
        >
          8
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="9"
        >
          9
        </button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
        ></button>
      </li>
      <li className="numpad__item">
        <button
          type="button"
          onClick={handlerNumberButton}
          className="numpad__btn"
          value="0"
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
