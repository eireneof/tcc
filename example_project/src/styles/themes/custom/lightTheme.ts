import { DefaultTheme } from 'styled-components'
import { defaultTheme } from '../default/defaultTheme'
import { IColors } from '../default/defaultTypes'

const colors: IColors = {
  primary_100: '#616161',
  primary_200: '#323232',
  primary_300: '#212121',
  secondary_100: '#FFF',
  secondary_200: '#000',
  neutral: '#E1E1E1',
  none: 'none',
  white: '#FFF',
  black: '#000',
}

const lightTheme: DefaultTheme = {
  ...defaultTheme,
  colors,
  themeKey: 'lightTheme',
}

export default lightTheme
