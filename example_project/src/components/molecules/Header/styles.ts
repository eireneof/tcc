import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary_100};
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${({ theme }) => theme.padding.size.medium};
`
