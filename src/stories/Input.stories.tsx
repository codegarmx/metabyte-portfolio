import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@app/components'

const meta: Meta<typeof Input> = {
  component: Input
}

export default meta
type Story = StoryObj<typeof Input>

export const TextInput: Story = {
  args: {
    name: 'login',
    type: 'text',
    placeholder: 'Email'
  }
}
