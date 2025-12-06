import React from 'react'

export const Input = ({label, type, onChange, className, name, value, labelClass, registerProps, errorMessage , validation, placeholder  }) => {
  return (
    <div  className='relative'>
      <label  className={labelClass}>{label}</label>
      <input 
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        {...registerProps}  
        validation={validation}  
        placeholder={placeholder}  
        />
       {errorMessage && <p className={'errorValidation text-[red]'
      } >
          {errorMessage}
          </p>
          }
    </div>
  )
}



