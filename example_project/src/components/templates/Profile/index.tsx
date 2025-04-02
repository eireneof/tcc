import Icon from '../../atoms/Icon'
import Title from '../../atoms/Title'
import AboutMeCard from '../../organisms/AboutMeCard'
import Button from '../../atoms/Button'
import ProjectsCard from '../../organisms/ProjectsCard'
import LastsPostsListCard from '../../organisms/LastPostsListCard'
import { ProfileContainer } from './styles'

export default function Profile() {
  return (
    <ProfileContainer>
      <Icon
        id="avatar_profile"
        role="img"
        iconType={'PROFILE_AVATAR'}
        size={200}
        isDecorative={false}
        alt="Avatar de usuário genérico"
        accessibleName="Avatar de usuário genérico"
        tabIndex={0}
      />
      <Title
        id="nome-do-usuario"
        accessibleName="Nome do Usuário: Fulane"
        tabIndex={0}
      >
        Pessoa
      </Title>
      <Button id="entre-em-contato">Entre em contato</Button>
      <AboutMeCard />
      <ProjectsCard />
      <LastsPostsListCard />
    </ProfileContainer>
  )
}
