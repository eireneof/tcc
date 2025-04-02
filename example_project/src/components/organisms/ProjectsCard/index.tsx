import * as S from './styles'
import Title from '../../atoms/Title'
import Card from '../../molecules/Card'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

export default function ProjectsCard() {
  return (
    <S.ProjectsContainer>
      <S.CardHeader>
        <Title id="projetos" tag="h2" accessibleName="Projetos" tabIndex={0}>
          Projetos
        </Title>
      </S.CardHeader>
      <Card
        id="projeto-card"
        accessibleName="Card com informações de projeto"
        tabIndex={0}
      >
        <Icon
          id="imagem-sem-conteudo"
          iconType="NO_IMAGE_CONTENT"
          size={250}
          isDecorative={true}
        ></Icon>
        <Title
          id="projetos-title"
          tag="h3"
          accessibleName="Nome do Projeto"
          tabIndex={0}
        >
          Nome do Projeto
        </Title>
        <S.DescriptionText aria-label="Descrição sobre o projeto." tabIndex={0}>
          Descrição sobre o projeto.
        </S.DescriptionText>
        <S.ButtonContainer>
          <Button id="ver-mais">Ver mais</Button>
        </S.ButtonContainer>
      </Card>
      <S.CardFooter>
        <Button id="ver-todos-os-projetos">Ver todos os projetos</Button>
      </S.CardFooter>
    </S.ProjectsContainer>
  )
}
