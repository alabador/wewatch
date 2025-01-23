import React from 'react'

export default function Input({type, name, placeholder}) {
  return (
    <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
    />
  )
}
