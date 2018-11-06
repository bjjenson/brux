import React from 'react'
import TextField from './controls/TextField'
import { useBruxValue } from '../redux'
import { paths, fetchAddress } from '../context'

const Address = () => {
  // const state = useBruxValue(paths.address.get())
  // if (state.value) {
  //   console.log(state.value.toJS())
  // }

  // state.attach(fetchAddress)
  const streetState = useBruxValue(paths.address.street.get())
  // console.log('street', streetState)
  return (
    <div>
      <h5>Address</h5>
      <TextField label='Street' {...streetState.cnx} />
    </div>
  )
}

export default Address
