import React, { lazy } from 'react'

export const LoadFromApi = () => {
  const count = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 1000)
  })
  console.log(count)
  return (
    <React.Suspense fallback={<div>loading count</div>}>
      {count}
    </React.Suspense>
  )
}

export default LoadFromApi