import React from 'react'
import TextField from './controls/TextField'
import { StateConsumer, useReduxInput } from '../redux'
import { paths } from '../context'

const Name = () => {
  const firstNameProvider = useReduxInput(paths.name.first.get())
  const lastNameProvider = useReduxInput(paths.name.last.get())

  return (
    <StateConsumer>
      {({ state, setState }) =>
        <>
          <TextField label='First' {...firstNameProvider} />
          <TextField label='Last' {...lastNameProvider} />
        </>}
    </StateConsumer>
  )
}

export default Name
