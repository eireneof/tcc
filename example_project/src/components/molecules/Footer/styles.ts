import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary_200};
  color: ${({ theme }) => theme.colors.secondary_100};
  text-align: center;
  padding: ${({ theme }) => theme.padding.size.large};
  position: relative;
  bottom: 0;
  width: 100%;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
`
