export interface IconProps {
  id: string
  iconType:
    | 'NO_IMAGE_CONTENT'
    | 'MENU_HAMBURGUER'
    | 'PROFILE_AVATAR'
    | 'PROFILE_AVATAR_DARK_THEME'
  size?: number
  accessibleName?: string
  isDecorative?: boolean
  alt?: string
  role?: string
  tabIndex?: number
}
