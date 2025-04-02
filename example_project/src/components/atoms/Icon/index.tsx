import { ICON_PATH } from './constant'
import { IconProps } from './interface'
import { StyledImg } from './styles'

export default function Icon({
  id,
  iconType,
  size,
  accessibleName,
  isDecorative = true,
  alt,
  role,
  tabIndex,
  ...props
}: IconProps) {
  return (
    <StyledImg
      id={id}
      role={role}
      src={ICON_PATH[iconType]}
      alt={!isDecorative ? alt : ''}
      aria-hidden={isDecorative ? 'true' : 'false'}
      aria-label={accessibleName}
      size={size}
      tabIndex={tabIndex}
      {...props}
    />
  )
}
