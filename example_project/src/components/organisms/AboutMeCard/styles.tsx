import { styled } from 'styled-components'

export const StyledList = styled.ul`
  list-style-type: none;
  margin-top: ${({ theme }) => theme.gridSpace.spacing_XXS};
  padding-left: ${({ theme }) => theme.padding.size.medium};
`

export const DescriptionText = styled.p`
  margin-top: ${({ theme }) => theme.gridSpace.spacing_SM};
  text-align: left;
`

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.gridSpace.spacing_XL};
`
export const CardSection = styled.section`
  margin-bottom: ${({ theme }) => theme.gridSpace.spacing_MD};
`

export const CardContent = styled.div`
  text-align: left;
  padding: ${({ theme }) => theme.padding.size.xsmall};
`
