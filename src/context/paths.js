export const paths = {
  name: {
    _: 'name',
    first: {
      get: () => [paths.name._, 'first'],
    },
    last: {
      get: () => [paths.name._, 'last'],
    }
  },
  address: {
    _: 'address',
    get: () => [paths.address._],
    street: {
      get: () => [paths.address._, 'street']
    },
    city: {
      get: () => [paths.address._, 'city']
    },
    state: {
      get: () => [paths.address._, 'state']
    },
    zip: {
      get: () => [paths.address._, 'zip']
    },
  }
}