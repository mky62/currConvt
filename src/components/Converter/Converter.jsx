import React, { useState } from 'react'
import CurrencyInput from '../CurrencyInput'
import useCurrencyRates from "../../hooks/useCurrencyRates";
import { Convert } from "../../utils/convert";


function Converter() {

  const { rates } = useCurrencyRates();

  const [ amount , setAmount] = useState(1);
  const [from , setFrom] = useState('USD');
  const [to , setTo] = useState('INR');
  const [result , setResult] = useState(null);

  function handleConvert(){
    if (!rates) return;
    const value = Convert(amount, from , to , rates);
    setResult(value);  }


  return (
  
    <div className="flex justify-center mt-10">
  <div className="w-full max-w-md bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-[2px] rounded-2xl shadow-xl">

    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        💸 Currency Converter
      </h2>

      {/* Amount Input */}
      <div className="mb-4">
        <CurrencyInput
          amount={amount}
          onAmountChange={setAmount}
          selectedCurrency={from}
          onCurrencyChange={setFrom}
          currencies={rates ? Object.keys(rates) : []}
        />
      </div>

      {/* Result Input */}
      <div className="mb-6">
        <CurrencyInput
          amount={result || ""}
          readOnly
          selectedCurrency={to}
          onCurrencyChange={setTo}
          currencies={rates ? Object.keys(rates) : []}
        />
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition-all duration-200 active:scale-95"
      >
        Convert
      </button>

      
    </div>
  </div>
</div>


  )
}

export default Converter