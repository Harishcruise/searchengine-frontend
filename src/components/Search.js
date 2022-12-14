import React from 'react'
import './Search.css'
function Search() {
  return (
        <div className='searchContainer'>
      <div className='searchDiv'>
        <div className='inputDiv'>
          <input className='inputClass' placeholder='Search'/>
        </div>
        <div className='lineDiv'> </div> 
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-search searchSvg" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" id="mainIconPathAttribute" fill="#737373"></path> </svg>
      </div>
    </div>
  )
}

export default Search