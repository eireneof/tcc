import { lighten } from 'polished'
import { styled } from 'styled-components'

export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.padding.size.medium};
  background-color: ${({ theme }) => theme.colors.primary_300};
  color: ${({ theme }) => theme.colors.secondary_100};
  text-align: center;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.border_4};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium};

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.primary_300)};
  }
`
