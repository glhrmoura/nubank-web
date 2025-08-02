import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      text: string
      white: string
      black: string
    }
    fonts: {
      primary: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
} 