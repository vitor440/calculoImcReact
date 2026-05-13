import React from 'react'
import "./Botao.css"

const Botao = ({id, text, action}) => {

    const handleAction = (e) => {
        action(e);
    }

  return (
    
    <div>
        <button id={id} onClick={handleAction}>{text}</button>
    </div>
  )
}

export default Botao