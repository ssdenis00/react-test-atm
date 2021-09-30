import "./Banknote.css";

interface iBanknote {
  banknote: string | undefined;
  banknoteKey: number;
}

function Banknote({ banknote, banknoteKey }: iBanknote) {
  return (
    <li className="banknotes__item">
      <h2 className="banknotes__title">Купюр номиналом {banknoteKey}:</h2>
      <p className="banknotes__value">{banknote} шт.</p>
    </li>
  );
}

export default Banknote;
