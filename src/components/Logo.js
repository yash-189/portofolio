import React from 'react'

const Logo = (props) => {
  return (
    <>
    <svg viewBox="0 0 24 24" fill={props.color} alt="logo" 
     width=" 48px" height="40px" xmlns="http://www.w3.org/2000/svg"><g id="Glyph"><path d="M1,9v9a5,5,0,0,0,5,5H18a5,5,0,0,0,5-5V9Zm9.71,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-2-2a1,1,0,0,1,0-1.42l2-2a1,1,0,0,1,1.42,1.42L9.41,15Zm6-.58-2,2a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L14.59,15l-1.3-1.29a1,1,0,0,1,1.42-1.42l2,2A1,1,0,0,1,16.71,15.71ZM23,7H1V6A5,5,0,0,1,6,1H18a5,5,0,0,1,5,5Z"/></g></svg>
    </>
  )
}

export default Logo