import { useState, useEffect } from 'react'
import { InputBox } from './component'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const option = [from, ...Object.keys(currencyInfo)].filter(
    (v, i, arr) => arr.indexOf(v) === i
  )

  // Swap currencies and values using temp variables
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  // Convert function (no hooks inside)
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
    }
  }

  
  useEffect(() => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
    }
  }, [from, to, amount, currencyInfo])

  return (
    <div className='w-full h-screen flex items-center justify-center bg-cover bg-no-repeat' style={{backgroundImage : `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
      <div className='w-full max-w-md mx-auto border border-gray-60 bg-white/30 p-5 rounded-lg shadow-lg backdrop-blur-sm'>
        <form
          onSubmit={e => {
            e.preventDefault();
            convert();
          }}
        >
          <div className='w-full mb-1'> 
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={option}
              onCurrencyChange={currency => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={value => setAmount(value)}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
              type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className='w-full mt-1 mb-4'>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={option}
              onCurrencyChange={currency => setTo(currency)}
              selectCurrency={to}
              amountDisabled={true}
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700 transition-colors duration-200'
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App