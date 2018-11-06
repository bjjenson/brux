
export const fetchAddress = async () => {
  return await getAddress()
}

const getAddress = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        street: '15662 S',
        city: 'bluffdale',
        state: 'Utah',
        zip: '84065'
      })
    }, 2000)
  })
}