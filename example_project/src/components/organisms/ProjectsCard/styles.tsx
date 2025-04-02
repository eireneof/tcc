import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  padding: 1rem;
`

export const DescriptionText = styled.p`
  margin-top: ${({ theme }) => theme.gridSpace.spacing_SM};
  text-align: left;
`

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.gridSpace.spacing_XS};
`
export const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.gridSpace.spacing_MD};
`

export const CardFooter = styled.section`
  margin-top: ${({ theme }) => theme.gridSpace.spacing_MD};
`
