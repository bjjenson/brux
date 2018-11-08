import React from 'react'
import TextField from './controls/TextField'
import { useBrix } from '../brix'
import { paths, fetchAddress } from '../context'

const Address = () => {
  // const state = useBruxValue(paths.address.get())
  // if (state.value) {
  //   console.log(state.value.toJS())
  // }

  // state.attach(fetchAddress)
  const streetState = useBrix(paths.address.street.get(), '')
  // console.log('street', streetState)
  return (
    <div>
      <h5>Address</h5>
      <TextField label='Street' {...streetState.cnx} />
    </div>
  )
}

export default Address
