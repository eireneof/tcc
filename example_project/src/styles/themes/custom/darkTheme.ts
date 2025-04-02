import { DefaultTheme } from 'styled-components'
import { defaultTheme } from '../default/defaultTheme'
import { IColors } from '../default/defaultTypes'

const colors: IColors = {
  primary_100: '#616161',
  primary_200: '#323232',
  primary_300: '#8E8E93',
  secondary_100: '#000',
  secondary_200: '#FFF',
  neutral: '#E1E1E1',
  none: 'none',
  white: '#FFF',
  black: '#000',
}

const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colors,
  themeKey: 'darkTheme',
}

export default darkTheme
