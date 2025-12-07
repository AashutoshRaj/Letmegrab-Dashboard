import React, { useCallback, useState } from 'react'

const useToggle = () => {
  const [value, setValue] = useState(false);

  const toggle= useCallback(()=>{
    setValue(perv => !perv)  ;
  },[])

  return [value,toggle]
}

export default useToggle
  