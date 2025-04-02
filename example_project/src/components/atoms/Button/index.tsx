import { StyledButton } from './styles'
import { IButton } from './interface'

export default function Button({
  id,
  children,
  dataTestId,
  onClick,
  ...props
}: IButton) {
  return (
    <StyledButton
      id={id}
      data-testid={dataTestId}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
