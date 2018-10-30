export const paths = {
  name: {
    _: 'name',
    first: {
      get: () => [paths.name._, 'first'],
    },
    last: {
      get: () => [paths.name._, 'last'],
    }
  }
}