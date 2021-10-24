import React, { useState } from 'react'

import { history } from '../redux'

import Head from './head'

const Main = () => {
  const [text, setText] = useState('')

  const onClick = () => {
    history.push(`/${text}`)
  }

  return (
    <div className="flex items-center justify-center">
      <Head title="Hello" />
      <div className="flex flex-col items-center justify-center bg-indigo-400 text-black font-bold rounded-lg border shadow-2xl p-10">
        <div className="flex flex-col mt-2">
          <p className="text-green-200">Enter the username</p>
          <input
            className="rounded"
            type="text"
            id="input-field"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div>
          <button
            className="mt-5 rounded-lg border shadow-lg p-2 text-white"
            type="button"
            id="search-button"
            onClick={onClick}
          >
            Send!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
