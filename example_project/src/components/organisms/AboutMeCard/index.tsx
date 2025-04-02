import * as S from './styles'
import Title from '../../atoms/Title'
import Card from '../../molecules/Card'

export default function AboutMeCard() {
  return (
    <Card
      id="card-sobre-mim"
      accessibleName="Informações sobre o usuário"
      tabIndex={0}
    >
      <S.CardHeader>
        <Title
          id="card-sobre-mim-title"
          accessibleName="Sobre mim"
          tag="h2"
          tabIndex={0}
        >
          Sobre mim
        </Title>

        <S.DescriptionText
          tabIndex={0}
          aria-label="Descrição sobre o usuário: Qualquer conteúdo textual inventado da sua preferência"
          className="readable-text"
        >
          Sou uma pessoa aleatória e fictícia criada apenas para esta página do projeto de exemplo do <br/>
          Guia de Integração de Acessibilidade Web para Equipes de Desenvolvimento proposto pelo TCC da Eirene
        </S.DescriptionText>
      </S.CardHeader>

      <S.CardContent>
        <S.CardSection>
          <Title
            id="habilidades-title"
            accessibleName="Habilidades"
            tag="h3"
            tabIndex={0}
          >
            Habilidades
          </Title>
        </S.CardSection>

        <S.CardSection>
          <Title
            id="ferramentas-title"
            accessibleName="Lista de Ferramentas"
            tag="h4"
            tabIndex={0}
          >
            Ferramentas
          </Title>
          <S.StyledList role="list">
            <li role="listitem" tabIndex={0}>
              ESlint
            </li>
          </S.StyledList>
        </S.CardSection>

        <S.CardSection>
          <Title
            id="metodologias-title"
            accessibleName="Lista de metodologias"
            tag="h4"
            tabIndex={0}
          >
            Metodologias
          </Title>
          <S.StyledList role="list">
            <li role="listitem" tabIndex={0}>
              Revisão Sistemática
            </li>
            <li role="listitem" tabIndex={0}>
              Kanban
            </li>
          </S.StyledList>
        </S.CardSection>

        <S.CardSection>
          <Title
            id="banco-de-dados-title"
            accessibleName="Lista de banco de dados"
            tag="h4"
            tabIndex={0}
          >
            Banco de dados
          </Title>
          <S.StyledList role="list">
            <li role="listitem" tabIndex={0}>
              MongoDB
            </li>
          </S.StyledList>
        </S.CardSection>
      </S.CardContent>
    </Card>
  )
}
