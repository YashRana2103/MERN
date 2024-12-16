import React, { useState, useId } from "react";
import { use } from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <label
              htmlFor={id}
              className="text-sm text-gray-600 dark:text-gray-300 font-medium"
            >
              {label}
            </label>
            <input
              id={id}
              type="number"
              className="block w-full bg-transparent text-2xl font-semibold outline-none dark:text-white"
              placeholder="Amount"
              disabled={amountDisabled}
              value={amount}
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
          <select
            className="bg-transparent dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg px-2 py-1 text-gray-700 dark:text-gray-200"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
