import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import SwapButton from "./components/SwapButton";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.log(options);

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(1));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 p-8 rounded-xl shadow-2xl w-[400px] backdrop-blur-sm">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />

          <SwapButton onSwap={swap} />

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled={true}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 px-4 rounded-lg mt-6 hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors font-medium"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
