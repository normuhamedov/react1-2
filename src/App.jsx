import React, { useState } from 'react'

export default function App() {
  const [inputText, setInputText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }
  const cleanText = () => {
    setInputText("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 max-w-96">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text here..."
          className="w-full px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <h3 className="mt-4 text-2xl font-semibold text-center break-words text-purple-600 max-w-50">
          {inputText || 'Your text will appear here '}
        </h3>
        <button className=' bg-red-500 py-2 px-5 text-white rounded-[20px] mt-10 shadow-2xl border-none hover:bg-red-900  hover:text-red-500' onClick={cleanText}>Clean</button>
      </div>
    </div>
  )
}