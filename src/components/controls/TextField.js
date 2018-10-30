import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, value, onChange }) => {
  const [_value, setValue] = useState(value)

  const handleChange = ({ target: { value } }) => {
    setValue(value)
    onChange(value)
  }

  return (
    <div>
      <label>{label}</label>
      <input
        value={_value}
        onChange={handleChange}
      />
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

TextField.defaultProps = {
  value: undefined,
  onChange: () => undefined
}

export default TextField