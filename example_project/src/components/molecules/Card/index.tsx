import { ICardProps } from './interface'
import { StyledCard } from './styles'

export default function Card({
  id,
  children,
  accessibleName,
  tabIndex,
}: ICardProps) {
  return (
    <StyledCard
      id={id}
      aria-hidden="false"
      tabIndex={tabIndex}
      aria-label={accessibleName}
    >
      {children}
    </StyledCard>
  )
}
