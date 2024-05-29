// Import core libraries
import React, { FC } from 'react'

// Import types
import { ButtonPropsInterface } from './types'

const Button: FC<ButtonPropsInterface> = ({ children, type = 'button', ...props }) => {

  return (
    <button 
      className={'w-full py-2 duration-500 transition-all font-normal hover:bg-black hover:text-white rounded-full border border-black'} 
      type={type}
      {...props}
    >
      {
        children
      }
    </button>
  )
}

export default Button
