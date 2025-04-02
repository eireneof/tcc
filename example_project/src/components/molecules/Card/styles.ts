import { styled } from 'styled-components'
import { ICardProps } from './interface'

export const StyledCard = styled.div<ICardProps>`
  background-color: ${({ theme }) => theme.colors.none};
  border: ${({ theme }) => theme.borderRadius.border_2} solid
    ${({ theme }) => theme.colors.secondary_200};
  border-radius: ${({ theme }) => theme.borderRadius.border_8};
  padding: ${({ theme }) => theme.padding.size.large};
  box-sizing: border-box;
`
