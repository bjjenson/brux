import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

export const StateContext = React.createContext({
  state: Map(),
})

export const StateProvider = ({ value = Map(), children }) => {
  const [state, setState] = useState(value)

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  )
}

StateProvider.propTypes = {
  value: PropTypes.object,
}

export const StateConsumer = StateContext.Consumer
