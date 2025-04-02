import { styled } from 'styled-components'

export const StyledList = styled.ul`
  list-style-type: none;
  margin-top: ${({ theme }) => theme.gridSpace.spacing_XXS};
`

export const StyledItemList = styled.li`
  margin-top: ${({ theme }) => theme.gridSpace.spacing_XXS};
  height: ${({ theme }) => theme.gridSpace.spacing_XXXL};
  cursor: not-allowed;
`

export const BlockedLink = styled.a`
  text-decoration: underline;
  text-underline-offset: ${({ theme }) => theme.gridSpace.spacing_XXXS};
  pointer-events: none;
`

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.gridSpace.spacing_XL};
`

export const CardContent = styled.div`
  text-align: left;
  padding: ${({ theme }) => theme.padding.size.xsmall};
`

export const ButtonContainer = styled.section`
  margin: ${({ theme }) => theme.gridSpace.spacing_XS};
  display: flex;
  justify-content: center;
  align-items: center;
`
