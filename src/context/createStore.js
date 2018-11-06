import { Map } from 'perpetual-js'
import { paths } from './paths'

export const store = Map()
  .setIn(paths.name.first.get(), 'Tyler')
  .setIn(paths.name.last.get(), 'Jenson')
