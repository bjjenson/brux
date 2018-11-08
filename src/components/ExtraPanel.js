import React from 'react'
import { Map } from 'perpetual-js'
import { useToggleState } from '../state'
import { paths } from '../context'
import { useBrixWorker, BoundedSuspense } from '../brix'
import Address from './AddressWithProps'
import { getAddress } from '../actions'

const MyWorkingComponent = () => {
  const { value } = useBrixWorker(paths.address.get(), getAddress, Map())
  console.log('r', value)
  return (
    <Address datum={value} />
  )
}


const ExtraPanel = () => {
  const { value, ...showAddressState } = useToggleState(true)

  return (
    <div>
      <button {...showAddressState}>Show Address</button>
      {value &&
        <BoundedSuspense fallback={<div>working it...</div>}>
          <MyWorkingComponent />
        </BoundedSuspense>
      }
    </div>
  )
}

export default ExtraPanel