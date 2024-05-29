import { FormEventHandler, ReactNode } from "react"

export type buttonType = 'button' | 'submit' | 'reset'

export interface ButtonPropsInterface {
  children: ReactNode
  type?: buttonType
  onClick?: () => void
}