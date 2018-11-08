import React from 'react'
import TextField from './controls/TextField'
import { StateConsumer, useBrix } from '../brix'
import { paths } from '../context'

const Name = () => {
  const firstNameState = useBrix(paths.name.first.get())
  const lastNameState = useBrix(paths.name.last.get())

  return (
    <StateConsumer>
      {({ state, setState }) =>
        <>
          <TextField label='First' {...firstNameState.cnx} />
          <TextField label='Last' {...lastNameState.cnx} />
        </>}
    </StateConsumer>
  )
}

export default Name
