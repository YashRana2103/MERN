import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+[{]};:'\",<.>/?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <>
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
        <h1 className="text-2xl font-extrabold text-center mb-6 text-blue-400">
          Password Generator
        </h1>

        <div className="flex items-center space-x-4 mb-5">
          <input
            type="text"
            value={password}
            placeholder="Your generated password"
            className="flex-grow p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-200 shadow-inner"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg focus:outline-none transition-all shadow-md"
          >
            Copy
          </button>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Password Length:{" "}
            <span className="font-bold text-blue-400">{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="w-5 h-5 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
            />
            <label className="ml-3 text-sm text-gray-300">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="w-5 h-5 text-red-500 bg-gray-700 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
            />
            <label className="ml-3 text-sm text-gray-300">
              Include Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
