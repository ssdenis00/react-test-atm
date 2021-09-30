import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { iObjectWithKeys } from "../../types/types";
import Banknotes from "../Banknotes/Banknotes";
import Numpad from "../Numpad/Numpad";
import "./App.css";

interface iResultArray {
  [key: number]: object;
  nominal: string;
  banknotes: string;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [resultAtm, setResultAtm] = useState<iResultArray[]>([]);
  const [limits, setLimits] = useState<iObjectWithKeys>({
    "5000": "100",
    "2000": "400",
    "1000": "1000",
    "500": "3000",
    "200": "5000",
    "100": "8000",
    "50": "10000",
  });
  const [cash, setCash] = useState(0);
  const [resultBanknotesWindowState, setResultBanknotesWindowState] =
    useState(false);

  useEffect(() => {
    let amount = 0;
    for (let key in limits) {
      const keyInt = parseInt(key);
      if (limits) {
        amount = amount + keyInt * parseInt(limits[keyInt]);
      }
    }
    setCash(amount);
  }, [limits]);

  function iWantToGet(
    ammountRequired: number,
    limits: iObjectWithKeys
  ): iObjectWithKeys | undefined {
    const collect = (
      amount: number,
      nominals: number[]
    ): iObjectWithKeys | undefined => {
      if (amount === 0) return {};

      if (!nominals.length) return;

      let currentNominal: number = nominals[0];
      let avaiableNotes: number = parseInt(limits[currentNominal]);
      let notesNeeded = Math.floor(amount / currentNominal);
      let numberOfNotes = Math.min(avaiableNotes, notesNeeded);

      for (let i = numberOfNotes; i >= 0; i--) {
        let result = collect(amount - i * currentNominal, nominals.slice(1));

        if (result) {
          return i ? { [currentNominal]: i, ...result } : result;
        }
      }
    };

    let nominals = Object.keys(limits)
      .map(Number)
      .sort((a, b) => b - a);

    return collect(ammountRequired, nominals);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (cash < parseInt(inputValue)) {
      alert("недостаточно средств");
    } else if (parseInt(inputValue) % 50 !== 0) {
      alert("сумма должна быть кратна 50");
    } else if (!parseInt(inputValue)) {
      alert("ввести можно только числа");
    } else {
      renderResultAtm(iWantToGet(parseInt(inputValue), limits));
      changeLimits(iWantToGet(parseInt(inputValue), limits));
      setInputValue("");
    }
  }

  function renderResultAtm(result: iObjectWithKeys | undefined): void {
    setResultAtm([]);
    for (let key in result) {
      setResultAtm((state) => {
        return [...state, { nominal: key, banknotes: result[key] }];
      });
    }
  }

  function changeLimits(result: iObjectWithKeys | undefined) {
    let cloneLimits = JSON.parse(JSON.stringify(limits));

    if (result !== undefined) {
      for (let key in cloneLimits) {
        const keyInt = parseInt(key);
        if (result[keyInt]) {
          cloneLimits[keyInt] = cloneLimits[keyInt] - parseInt(result[keyInt]);
        }
      }
    }
    setLimits(cloneLimits);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    setInputValue(evt.target.value);
  }

  function handleResultBanknotesButton() {
    setResultBanknotesWindowState((state) => {
      return !state;
    });
  }

  function handlePresetButton(value: string) {
    switch (value) {
      case "1":
        setLimits({
          "5000": "100",
          "2000": "400",
          "1000": "1000",
          "500": "3000",
          "200": "5000",
          "100": "8000",
          "50": "10000",
        });
        break;
      case "2":
        setLimits({
          "5000": "476",
          "2000": "345",
          "1000": "6741",
          "500": "4362",
          "200": "234",
          "100": "1643",
          "50": "3450",
        });
        break;
      case "3":
        setLimits({
          "5000": "234",
          "2000": "678",
          "1000": "845",
          "500": "2451",
          "200": "9654",
          "100": "2345",
          "50": "234",
        });
        break;
      case "4":
        setLimits({
          "5000": "546",
          "2000": "562",
          "1000": "2543",
          "500": "4365",
          "200": "2154",
          "100": "124",
          "50": "342",
        });
        break;
      case "5":
        setLimits({
          "5000": "2732",
          "2000": "347",
          "1000": "479",
          "500": "7556",
          "200": "3296",
          "100": "1257",
          "50": "3854",
        });
        break;
      case "6":
        setLimits({
          "5000": "73",
          "2000": "147",
          "1000": "279",
          "500": "356",
          "200": "696",
          "100": "857",
          "50": "854",
        });
        break;
    }
  }

  return (
    <div className="App">
      <ul className="presets">
        <li className="presets__item">
          <button
            type="button"
            onClick={() => {
              handlePresetButton("1");
            }}
            className="presets__btn"
            value="1"
          >
            Вариант 1
          </button>
        </li>
        <li className="presets__item">
          <button
            type="button"
            onClick={() => {
              handlePresetButton("2");
            }}
            className="presets__btn"
            value="2"
          >
            Вариант 2
          </button>
        </li>
        <li className="presets__item">
          <button
            type="button"
            onClick={() => {
              handlePresetButton("3");
            }}
            className="presets__btn"
            value="3"
          >
            Вариант 3
          </button>
        </li>
        <li className="presets__item">
          <button
            type="button"
            onClick={() => {
              handlePresetButton("4");
            }}
            className="presets__btn"
            value="4"
          >
            Вариант 4
          </button>
        </li>
        <li className="presets__item">
          <button
            type="button"
            onClick={() => {
              handlePresetButton("5");
            }}
            className="presets__btn"
            value="5"
          >
            Вариант 5
          </button>
        </li>
        <li className="presets__item">
          <button
            type="button"
            onClick={() => {
              handlePresetButton("6");
            }}
            className="presets__btn"
            value="6"
          >
            Вариант 6
          </button>
        </li>
      </ul>
      <form
        className="form"
        action="./"
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <input
          type="number"
          className="form__input"
          value={inputValue || ""}
          onChange={handleInputChange}
        />
        <button className="form__btn" type="submit">
          выдать
        </button>
      </form>

      <div className="result">
        <div className="result__values">
          {resultAtm.map((item, i) => (
            <p className="result__value" key={i}>
              {"Купюры номиналом " +
                item.nominal +
                ": " +
                item.banknotes +
                "шт, "}
            </p>
          ))}

          <p className="result__value">Остаток: {cash}</p>
        </div>
        <div className="result__banknotes">
          <button
            type="button"
            onClick={handleResultBanknotesButton}
            aria-label="Открыть остаток банкнот"
            className="result__banknotes-btn"
          ></button>
        </div>
        <Banknotes state={resultBanknotesWindowState} limits={limits} />
      </div>
      <Numpad inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default App;
