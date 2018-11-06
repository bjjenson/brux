import React from 'react'
import TextField from './controls/TextField'
import { StateConsumer, useBruxValue } from '../redux'
import { paths } from '../context'

const Name = () => {
  const firstNameState = useBruxValue(paths.name.first.get())
  const lastNameState = useBruxValue(paths.name.last.get())

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
