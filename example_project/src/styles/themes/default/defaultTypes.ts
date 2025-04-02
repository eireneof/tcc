export type IColors = {
  primary_100: string
  primary_200: string
  primary_300: string
  secondary_100: string
  secondary_200: string
  neutral: string
  white: string
  black: string
  none: string
}

export type IGridSpace = {
  spacing_XXXS: string
  spacing_XXS: string
  spacing_XS: string
  spacing_SM: string
  spacing_MD: string
  spacing_LG: string
  spacing_XL: string
  spacing_XXL: string
  spacing_XXXL: string
  spacing_XXXXL: string
  spacing_XXXXXL: string
  spacing_XXXXXXL: string
}

type ICommonSize = {
  xsmall?: string
  small: string
  medium: string
  xmedium?: string
  large: string
  xlarge?: string
  xxlarge?: string
}

type ITitleSize = {
  huge: string
  large: string
  medium: string
  small: string
}

export type IMargin = {
  size: ICommonSize
}

export type IPadding = {
  size: ICommonSize
}

export type IBorderRadius = {
  border_0: string
  border_2: string
  border_4: string
  border_8: string
  border_circle: string
}

export type IShadowLevel = {
  level_1: string
  level_2: string
  level_3: string
}

export type IFontFamily = {
  primary: string
  secondary: string
}

export type IFontSize = {
  normal: ICommonSize
  title: ITitleSize
}

export type IFontWeight = {
  light: string
  normal: string
  medium: string
  bold: string
  bolder: string
  extra: string
}

export type IDefaultIconsSize = {
  small: {
    width: string
    height: string
  }
  medium: {
    width: string
    height: string
  }
  large: {
    width: string
    height: string
  }
}

export type IBreakpoints = {
  mobile: string
  desktop: string
}

export type IDevices = {
  mobile: string
  desktop: string
}
