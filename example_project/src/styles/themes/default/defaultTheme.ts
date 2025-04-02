import { DefaultTheme } from 'styled-components'
import * as DefaultValues from './defaultValues'

export const defaultTheme: DefaultTheme = {
  margin: DefaultValues.IMarginDefault,
  padding: DefaultValues.IPaddingDefault,
  borderRadius: DefaultValues.IBorderRadiusDefault,
  shadowLevel: DefaultValues.IShadowLevelDefault,
  fontFamily: DefaultValues.IFontFamilyDefault,
  fontSize: DefaultValues.IFontSizeDefault,
  fontWeight: DefaultValues.IFontWeightDefault,
  gridSpace: DefaultValues.IGridSpace,
  iconSize: DefaultValues.IDefaultIconsSize,
  breakpoints: DefaultValues.IDefaultBreakpoints,
  devices: DefaultValues.IDefaultDevices,
}
