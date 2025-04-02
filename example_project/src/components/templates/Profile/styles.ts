import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.padding.size.xxlarge};
  display: flex; // Usando flexbox para layout
  flex-direction: column; // Organizando os filhos na direção vertical
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) =>
    theme.gridSpace.spacing_LG}; // Adicionando espaço entre os filhos
`
