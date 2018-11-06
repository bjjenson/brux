import { fromJS } from 'perpetual-js'
import { useContext } from 'react'
import { StateContext } from './StateProvider'

export const useBruxValue = path => {
  const { state, setState } = useContext(StateContext)
  const value = state.getIn(path)

  const update = updatedValue => setState(state.setIn(path, updatedValue))

  const attach = async action => {
    if (value === undefined) {
      const result = await action()
      console.log(result)
      update(fromJS(result))
    }
  }

  return {
    value,
    set: update,
    cnx: {
      value,
      onChange: e => update(e.target.value),
    },
    attach,
  }
}
