import React from "react";
import { Data } from "./components/data";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div>
      <header className="bg-indigo-600 py-6">
        <h1 className="text-white text-2xl font-semibold text-center font-serif">Product  List</h1>
      </header>
      <Data />
    </div>
  );
}

export default App;