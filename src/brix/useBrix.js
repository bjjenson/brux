import { fromJS } from 'perpetual-js'
import { useContext } from 'react'
import { StateContext } from './StateProvider'

export const useBrix = (path, notSetValue) => {
  const { state, setState } = useContext(StateContext)
  const value = state.getIn(path, notSetValue)

  const update = updatedValue => setState(state.setIn(path, coerceDataToImmutable(updatedValue)))

  return {
    value,
    set: update,
    cnx: {
      value,
      onChange: e => update(e.target.value),
    },
  }
}


const coerceDataToImmutable = data =>
  typeof data === 'object' || Array.isArray(data) ? fromJS(data) : data