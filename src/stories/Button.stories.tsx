import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
//import { withActions } from '@storybook/addon-actions/decorator'

import { Button } from '@app/components'

const meta: Meta<typeof Button> = {
  component: Button,
  /*parameters: {
    actions: {
      handles: ['click .btn']
    }
  },*/
  args: {
    onClick: fn()
  },
  //decorators: [withActions]
}

export default meta
type Story = StoryObj<typeof Button>

export const ButtonType: Story = {
  args: {
    children: 'Press me',
    type: 'button'
  }
}

export const SubmitType: Story = {
  args: {
    children: 'Submit me',
    type: 'submit'
  }
}

export const ResetType: Story = {
  args: {
    children: 'Reset me',
    type: 'reset'
  }
}
