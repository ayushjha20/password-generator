import React, { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*";

    let pass = "";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="flex flex-col items-center justify-center size-full bg-gray-800 text-white">
      <h1 className="text-4xl font-bold p-8">Password Generator</h1>
      <div className="w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-6">
        <input
          type="text"
          value={password}
          className="w-full py-2 px-4 rounded bg-gray-600 text-white focus:outline-none mb-4"
          placeholder="Password"
          readOnly
        />
        <button className="text-white bg-gray-600 hover:bg-green-600 m-8">Copy</button>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="length" className="text-sm">
            Length: {length}
          </label>
          <input
            type="range"
            id="length"
            min={6}
            max={25}
            value={length}
            className="w-full mx-4"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setNumberAllowed(!numberAllowed)}
            className={`px-4 py-2 rounded-md ${
              numberAllowed ? "bg-green-600" : "bg-gray-600"
            } hover:bg-green-700 focus:outline-none`}
          >
            {numberAllowed ? "Numbers Allowed" : "Allow Numbers"}
          </button>
          <button
            onClick={() => setCharacterAllowed(!characterAllowed)}
            className={`px-4 py-2 rounded-md ${
              characterAllowed ? "bg-green-600" : "bg-gray-600"
            } hover:bg-green-700 focus:outline-none`}
          >
            {characterAllowed ? "Characters Allowed" : "Allow Characters"}
          </button>
        </div>
        <button
          onClick={generatePassword}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
