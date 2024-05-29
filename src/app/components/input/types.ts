// Import core libraries
import { UseFormRegister, FieldValues } from 'react-hook-form'

export type inputType = 'text' | 'email'

export type Ref = HTMLInputElement

export interface inputPropsInterface {
  id?: string
  placeholder?: string
  name: string
  required?: boolean
  type?: inputType
  register?: UseFormRegister<FieldValues>
}