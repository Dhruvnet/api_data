import React from "react";
import { Data } from "./components/data";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div>
      <header className="bg-indigo-600 py-6">
        <h1 className="text-white text-2xl font-semibold text-center font-serif">Product List
        <span className="text-gray-300 text-sm ml-2">-By Dhruv Sheth</span></h1>
      </header>

      <Data />
    </div>
  );
}

export default App;