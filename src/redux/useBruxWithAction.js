import { useContext } from 'react'
import { useBruxValue } from './useBrux'

export const useBruxWithAction = (path, action) => {
  const { value, set } = useBruxValue(path)


}
