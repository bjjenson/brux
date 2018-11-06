import React, { lazy, Suspense } from 'react'
import { useToggleState } from '../state'
import { paths } from '../context'
import { ApiLoader, useBruxValue } from '../redux'
import Address from './Address'
import { useWorker, getKey } from './api/suspended-worker'
// const Address = lazy(() => import('./Address'))

function worker() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('worked it hard!')
    }, 2000)
  })
}

const workerKey = getKey()
const MyWorkingComponent = () => {
  // const { value: zip, set } = useBruxValue(paths.address.zip.get())
  const data = useWorker(workerKey, worker)
  // set(data)
  return (
    <div>
      <p>The worker responded with "<span>{data}</span>"</p>
    </div>
  )
}


const ExtraPanel = () => {
  const { value, ...showAddressState } = useToggleState(true)

  return (
    <div>
      <button {...showAddressState}>Show Address</button>
      {value &&
        <React.Suspense fallback={<div>working it...</div>}>
          <MyWorkingComponent />
        </React.Suspense>
        // <Suspense fallback={<div>loadding...</div>}>
        //   <Address />
        // </Suspense>
      }
    </div>
  )
}

export default ExtraPanel