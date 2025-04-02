import styled from 'styled-components'
import { IconProps } from './interface'

export const StyledImg = styled.img<Partial<IconProps>>`
  width: ${({ theme, size }) =>
    size ? `${size}px` : theme.iconSize.large.width};
  height: ${({ theme, size }) =>
    size ? `${size}px` : theme.iconSize.large.height};
`
