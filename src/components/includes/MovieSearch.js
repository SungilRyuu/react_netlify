import React, {useRef} from 'react'

function MovieSearch({onSearch}) {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value)
    }
    const onClick = () => {
        // console.log("onClick")
        handleSearch();
    }
    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            handleSearch();
        }
    }
  return (
      <div className="movie__search">
          <input 
            ref={inputRef}
            type="search" 
            placeholder='검색해 주세요!'
            onKeyPress={onKeyPress}
            />
          <button 
            type='submit'
            onClick={onClick}
            >검색</button>
      </div>
  )
}

export default MovieSearch