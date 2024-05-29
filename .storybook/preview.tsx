import React from 'react'
import type { Preview } from "@storybook/react";
import { Inter } from 'next/font/google'
import "@app/globals.css"

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={inter.className}>
        <Story name={'default'}/>
      </div>
    )
  ]
};

export default preview;
