import styled from 'styled-components'
import { TitleProps } from './interface'

export const StyledTitle = styled.div<Partial<TitleProps>>`
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  color: ${({ theme }) => theme.colors.secondary_200};
`
