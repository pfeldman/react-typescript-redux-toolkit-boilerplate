import { ThemedStyledProps } from 'styled-components'

export type Theme = {
  background: string
  color: string
  primary: string
  dark: string
  light: string
  accent: string
  accentTwo: string
  good: string
  urgent: string
  violet: string
  grey: string
}

export type MyThemeProps<P> = ThemedStyledProps<P, Theme>

export const dark: Theme = {
  background: '#303133',
  color: '#ECECEC',
  primary: '#0F93D2',
  dark: '#303133',
  light: '#ECECEC',
  accent: '#f77d0e',
  accentTwo: '#1f2024',
  good: '#43a047',
  urgent: '#e53935',
  violet: '#8e24aa',
  grey: '#CCC',
}

export const light: Theme = {
  background: '#ECECEC',
  color: '#303133',
  primary: '#0F93D2',
  dark: '#303133',
  light: '#ECECEC',
  accent: '#f77d0e',
  accentTwo: '#FFF',
  good: '#43a047',
  urgent: '#e53935',
  violet: '#8e24aa',
  grey: '#CCC',
}
