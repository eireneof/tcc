import Card from '../../molecules/Card'
import Title from '../../atoms/Title'
import * as S from './styles'
import Button from '../../atoms/Button'
import TimeDisplay from '../../atoms/TimeDisplay'

export default function LastsPostsListCard() {
  const date: string = '21/03/2024'
  const datelabel: string = 'Data da postagem: 21 de março de 2024'
  return (
    <Card
      id="ultimos-postagens-card"
      accessibleName="Card de últimas postagens do usuário"
      tabIndex={0}
    >
      <S.CardHeader>
        <Title
          id="ultimos-postagens-title"
          accessibleName="Últimas postagens"
          tag="h2"
        >
          Últimas postagens
        </Title>
      </S.CardHeader>

      <S.CardContent aria-label="Lista de últimas postagens" tabIndex={0}>
        <S.StyledList role="list">
          <S.StyledItemList role="listitem" tabIndex={0}>
            <S.BlockedLink>
              <TimeDisplay label={datelabel} date={date} />- Uma postagem
              interessante.
            </S.BlockedLink>
          </S.StyledItemList>

          <S.StyledItemList role="listitem" tabIndex={0}>
            <S.BlockedLink>
              <TimeDisplay label={datelabel} date={date} />- Outra postagem
              interessante.
            </S.BlockedLink>
          </S.StyledItemList>

          <S.StyledItemList role="listitem" tabIndex={0}>
            <S.BlockedLink>
              <TimeDisplay label={datelabel} date={date} />- Uma postagem
              interessante.
            </S.BlockedLink>
          </S.StyledItemList>

          <S.StyledItemList role="listitem" tabIndex={0}>
            <S.BlockedLink>
              <TimeDisplay label={datelabel} date={date} />- Outra postagem
              interessante.
            </S.BlockedLink>
          </S.StyledItemList>

          <S.StyledItemList role="listitem" tabIndex={0}>
            <S.BlockedLink>
              <TimeDisplay label={datelabel} date={date} />- Outra postagem
              interessante.
            </S.BlockedLink>
          </S.StyledItemList>
        </S.StyledList>

        <S.ButtonContainer>
          <Button id="ver-postagens">Ver todas as postagens</Button>
        </S.ButtonContainer>
      </S.CardContent>
    </Card>
  )
}
