// import React from 'react'


// function CurrencyInput({
//     amount,
//     onAmountChange,
//     selectedCurrency,
//     onCurrencyChange,
//     currencies = [],
//     readOnly = false,
// }) {

//    return (
//     <div style={{ marginBottom: "10px" }}>
//         <input 
//           type="number"
//           value={amount}
//           onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
//           readOnly={readOnly}
//         />

//         <select
//           value={selectedCurrency}
//           onChange={(e) => onCurrencyChange(e.target.value)}
//         >
//           {currencies.map((c) => (
//             <option key={c} value={c}>{c}</option>
//           ))}
//         </select>
//     </div>
//    );
// }


// export default CurrencyInput

import React from "react";

import FLAGS from "../components/flags";

export default function CurrencyInput({
  amount,
  onAmountChange,
  selectedCurrency,
  onCurrencyChange,
  currencies = [],
  readOnly = false,
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Amount input */}
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        readOnly={readOnly}
        className="flex-1 border border-gray-300 rounded-xl px-4 py-3 shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />

      {/* currency menu */}
      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      >
        {currencies.map((c) => (
          <option key={c} value={c}>
            {FLAGS[c] ? FLAGS[c] + " " : ""}{c}
          </option>
        ))}
      </select>
    </div>
  );
}


