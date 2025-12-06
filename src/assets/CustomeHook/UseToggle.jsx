import React, { useCallback, useState } from 'react'

const useToggle = (initialValues = false) => {
  const [value, setValue] = useState(initialValues);

  const toggle= useCallback(()=>{
    setValue(perv => !perv)  ;
  },[])

  return [value,toggle]
}

export default useToggle
  