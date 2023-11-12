import React from 'react'

const Modal = ({modal, setModal}) => {
  if(modal) {
    return (
        <div>
          <p>Esse é um modal</p>
          <button onClick={() => setModal(false)}>Fechar</button>
        </div>
      )
    }
    else {return null}
  }

export default Modal