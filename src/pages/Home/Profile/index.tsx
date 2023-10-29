import {
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileSection,
} from './styles'
/* import avatar from '../../../assets/avatar.png' */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '../../../lib/axios'
import { useEffect, useState } from 'react'

interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: string
}

export function Profile() {
  const [user, setUser] = useState<ProfileData>({} as ProfileData)
  const response = async () => {
    const usuario = await api.get('users/gdrbacca')
    setUser(usuario.data)
  }

  useEffect(() => {
    response()
  }, [])
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <ProfileSection>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <a
            href="https://github.com/gdrbacca"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>

        <p>{user.bio}</p>

        <ProfileFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </span>
        </ProfileFooter>
      </ProfileSection>
    </ProfileContainer>
  )
}
