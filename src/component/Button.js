import React from 'react'

const Button = (props) => {
  return (  
    <div className='button-wrapper'>
        <button className="button" onClick={props.onClick}>
        {props.buttonText}
        </button>
    </div>
  )
}

export default Button