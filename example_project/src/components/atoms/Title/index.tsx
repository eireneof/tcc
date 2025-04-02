import { TitleProps } from './interface'
import { StyledTitle } from './styles'

export default function Title({
  tag = 'h1',
  children,
  accessibleName,
  isDecorative = false,
  tabIndex,
}: TitleProps) {
  const Tag = tag
  return (
    <StyledTitle>
      <Tag
        aria-hidden={isDecorative ? 'true' : undefined}
        aria-label={
          accessibleName && !isDecorative ? accessibleName : undefined
        }
        tabIndex={tabIndex}
      >
        {children}
      </Tag>
    </StyledTitle>
  )
}
