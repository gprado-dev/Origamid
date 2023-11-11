import React from 'react'

const Title = ({cor, texto, children}) => {
  return (
    <h1 style={{color: cor}}>
      {texto}, {children}
    </h1>
  )
}

const App = () => {

  return (
    <React.Fragment>
     <Title cor="blue" texto="Meu título 1" />
     <Title cor="red" texto="Meu título 2"> <p>Isso é um children</p></Title>
    </React.Fragment>
  )

};


export default App
