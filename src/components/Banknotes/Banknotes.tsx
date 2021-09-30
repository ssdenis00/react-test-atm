import Banknote from "../Banknote/Banknote";
import { iObjectWithKeys } from "../../types/types";
import "./Banknotes.css";

interface iBanknotes {
  state: boolean;
  limits: iObjectWithKeys;
}

function Banknotes({ state, limits }: iBanknotes) {
  const getBanknotesContent = (banknotes: iObjectWithKeys) => {
    let content = [];

    for (let key in banknotes) {
      let keyInt = parseInt(key);
      content.push(
        <Banknote banknoteKey={keyInt} banknote={banknotes[keyInt]} key={key} />
      );
    }

    return content;
  };

  return (
    <ul className={`banknotes ${state ? "banknotes_active" : ""}`}>
      {getBanknotesContent(limits)}
    </ul>
  );
}

export default Banknotes;
