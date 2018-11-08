export function getAddress() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('I am error')
      // resolve({
      //   street: '15662 S Broken Arrow',
      //   city: 'Bluffdale',
      //   state: 'Utah',
      //   zip: '84065',
      // })
    }, 1000)
  })
}
