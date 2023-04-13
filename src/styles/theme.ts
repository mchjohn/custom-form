import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blueGray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    }
  },
  fonts: {
    body: 'Albert Sans, system-ui, sans-serif',
    heading: 'Albert Sans, system-ui, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        color: 'blueGray.500',
        lineHeight: 'tall',
        backgroundColor: 'blueGray.900',
      },
      a: {
        color: 'pink.600',
      },
    },
  },
})

