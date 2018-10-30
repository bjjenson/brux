import React from 'react'
import { StateContext } from '../redux'
import { paths } from '../context'

class Address extends React.PureComponent {

  render() {
    const { state } = this.context
    return (
      <div>
        <span>{state.getIn(paths.name.first.get())}</span>
      </div>
    )
  }
}

Address.contextType = StateContext

export default Address