import React from 'react'
import TextField from './controls/TextField'
import { useInputState } from '../state'

const Address = () => {
  const streetState = useInputState()

  return (
    <div>
      <h5>Address</h5>
      <TextField label='Street' {...streetState} />
    </div>
  )
}

export default Address
