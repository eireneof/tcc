import * as DefaultTypes from './defaultTypes'

export const IGridSpace: DefaultTypes.IGridSpace = {
  spacing_XXXS: '0.25rem',
  spacing_XXS: '0.5rem',
  spacing_XS: '1rem',
  spacing_SM: '1.5rem',
  spacing_MD: '2rem',
  spacing_LG: '2.5rem',
  spacing_XL: '3rem',
  spacing_XXL: '3.5rem',
  spacing_XXXL: '4rem',
  spacing_XXXXL: '4.5rem',
  spacing_XXXXXL: '5rem',
  spacing_XXXXXXL: '5.5rem',
}

export const IMarginDefault: DefaultTypes.IMargin = {
  size: {
    small: '0.25rem',
    medium: '0.5rem',
    xmedium: '1rem',
    large: '0.75rem',
    xlarge: '1rem',
    xxlarge: '1.25rem',
  },
}

export const IPaddingDefault: DefaultTypes.IPadding = {
  size: {
    xsmall: '.25rem',
    small: '.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '2.5rem',
  },
}

export const IBorderRadiusDefault: DefaultTypes.IBorderRadius = {
  border_0: '0',
  border_2: '1px',
  border_4: '4px',
  border_8: '8px',
  border_circle: '100px',
}

export const IShadowLevelDefault: DefaultTypes.IShadowLevel = {
  level_1: 'rgba(0, 0, 0, 0.08) 0px 12px 12px',
  level_2: '0px 4px 16px rgba(0, 0, 0, 0.16)',
  level_3:
    '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
}

export const IFontFamilyDefault: DefaultTypes.IFontFamily = {
  primary: 'Montserrat, Verdana, sans-serif',
  secondary: 'Metropolis, Verdana, sans-serif',
}

export const IFontSizeDefault: DefaultTypes.IFontSize = {
  normal: {
    small: '.75rem',
    xsmall: '.875rem',
    medium: '1rem',
    xmedium: '1.125rem',
    large: '1.5rem',
  },
  title: {
    huge: '32px',
    large: '32px',
    medium: '24px',
    small: '18px',
  },
}

export const IFontWeightDefault: DefaultTypes.IFontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  bold: '600',
  bolder: '700',
  extra: '800',
}

export const IDefaultIconsSize: DefaultTypes.IDefaultIconsSize = {
  small: {
    width: '18px',
    height: '18px',
  },
  medium: {
    width: '24px',
    height: '24px',
  },
  large: {
    width: '36px',
    height: '36px',
  },
}

export const IDefaultBreakpoints: DefaultTypes.IBreakpoints = {
  desktop: `1025px`,
  mobile: `1024px`,
}

export const IDefaultDevices: DefaultTypes.IDevices = {
  desktop: `(min-width: ${IDefaultBreakpoints.desktop})`,
  mobile: `(max-width: ${IDefaultBreakpoints.mobile})`,
}
