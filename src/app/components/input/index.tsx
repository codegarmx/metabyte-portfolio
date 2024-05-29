// Import core libraries
import React, { FC, forwardRef, ReactNode } from 'react'

// Import types
import { inputPropsInterface, Ref } from './types'

const Input: FC<inputPropsInterface> = ({ name, type = 'text', ...props }) => {
  return (
    <input
      className={'rounded-full border py-3 px-5 w-full'}
      name={name}
      type={type}
      {...props}
    />
  )
}

/*const Input = forwardRef<Ref, inputPropsInterface>(({ name, type = 'text', ...props }, ref) => (
  <input
    className={'rounded-full border py-3 px-5 w-full'}
    name={name}
    ref={ref}
    type={type}
    {...props}
  />
))
Input.displayName = 'Input'*/

export default Input
