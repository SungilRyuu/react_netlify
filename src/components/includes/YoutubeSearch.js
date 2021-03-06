import React, {useRef} from 'react'

function YoutubeSearch({onSearch}) {
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
    <div className='youtube__search container'>
        <h2>검색하기</h2>
        <input 
            ref={inputRef}
            type="search" 
            placeholder='검색해보세요.' 
            onKeyPress={onKeyPress} 
        />
        <button 
            type='submit'
            onClick={onClick}
        >검색</button>
    </div>
  )
}

export default YoutubeSearch