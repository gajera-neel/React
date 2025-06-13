import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addvalue = () => {
    if (counter >= 20) {
      alert("maximum limit reached")
    } else {
      setCounter(counter + 1)
    }
  }

  const decreaseValue = () => {
    if (counter <= 0) {
      alert("minimum limit reached")
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100">
      <div className="bg-white/80 rounded-2xl shadow-2xl p-8 w-full max-w-xs flex flex-col items-center border border-blue-200">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 tracking-wide drop-shadow">Counter</h1>
        <h2 className="text-lg mb-6 text-gray-700">Value is <span className="font-bold text-pink-600">{counter}</span></h2>
        <div className="flex gap-4 mb-2">
          <button
            onClick={addvalue}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
          >
            Increase
          </button>
          <button
            onClick={decreaseValue}
            className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
          >
            Decrease
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4">Min: 0 &nbsp;|&nbsp; Max: 20</p>
      </div>
    </div>
  )
}

export default App