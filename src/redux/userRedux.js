import { useContext } from 'react'
import { StateContext } from './StateProvider'

export const useReduxInput = path => {
  const { state, setState } = useContext(StateContext)

  return {
    value: state.getIn(path),
    onChange: value => setState(state.setIn(path, value)),
  }
}
