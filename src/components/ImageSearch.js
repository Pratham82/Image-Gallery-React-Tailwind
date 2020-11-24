import React, { useState } from 'react'

const ImageSearch = ({ setText }) => {
  const [searchText, setSearchText] = useState('')
  const onSubmit = e => {
    e.preventDefault()
    setText(searchText)
  }
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            onChange={e => setSearchText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-indigo-500 text-m text-white border-1  py-3 px-4 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
export default ImageSearch
