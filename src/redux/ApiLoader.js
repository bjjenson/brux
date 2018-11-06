import React from 'react'
import { useBruxValue } from './useBrux'
// import { createResource } from './createResource';

// export const ApiResource = createResource(
//   ({ src }) => {
//     return new Promise((resolve, reject) => {

//     })
//   },
//   ({ src }) => src
// )

export const ApiLoader = ({ children, path, ...rest }) => {
  console.log(path, rest)
  // const [value, setValue] = useBruxValue(path)
  // if (value === undefined) {
  return new Promise((resolve) => {

  })
  // }
  // if (typeof children === 'function') {
  //   return children()
  // }

  // return children
}

// export function useApiLoader({ src }) {
//   return ApiResource.read({ src })
// }