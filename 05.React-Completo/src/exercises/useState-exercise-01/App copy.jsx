import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {

  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'Prado', idade: '28'})
  const [modal, setModal] = React.useState(false)

  function handleClick() {
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'Possui faculdade'})
  }

  return (
    <React.Fragment>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>

      <Modal modal={modal} setModal={setModal} />
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <ButtonModal setModal={setModal} />
    </React.Fragment>
  )
};


export default App
