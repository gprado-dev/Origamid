import React from 'react'

import Button from './Button'
import Input from './Input'

const Form = () => {

  const arr =   ['item 1', 'item 2']

  return (
    <>
      <Input id="email" type="email" label="Email" required />
      <Input id="password" type="password" label="Password" />
      <Button items={arr} />
    </>
  )
}

export default Form