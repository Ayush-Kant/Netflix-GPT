import React from 'react'
import { useSelector } from 'react-redux'
import languageConstants from '../utils/LanguageConstants'

const GptSearchBar = () => {
  const currentLang = useSelector((store) => store.config.lang)

  const handleInput = (e) => {
    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
  }

  return (
    <div className='flex justify-center pt-[10%]'>
      <form className='w-8/12 bg-black rounded-xl p-4 flex items-end gap-3 items-center'>

        <textarea
          rows='1'
          onInput={handleInput}
          placeholder={languageConstants[currentLang].gptSearchPlaceholder}
          className='flex-1 p-3 rounded-lg resize-none overflow-hidden outline-none max-h-40'
        />

        <button
          type='submit'
          className='bg-red-700 text-white px-6 w-2/12 h-12 rounded-lg flex-shrink-0'
        >
          {languageConstants[currentLang].search}
        </button>

      </form>
    </div>
  )
}

export default GptSearchBar