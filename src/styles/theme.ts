import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  fonts: {
    body: 'Albert Sans, system-ui, sans-serif',
    heading: 'Albert Sans, system-ui, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        color: 'blueGray.300',
        lineHeight: 'tall',
        backgroundColor: 'blueGray.700',
      },
      a: {
        color: 'pink.800',
      },
    },
  },
}

export const theme = extendTheme({ customTheme })