import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  height: 212px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  margin-top: calc(0px - 6.5rem - 6px);
  padding: 2rem 2.5rem;

  @media (max-width: 1024px) {
    width: 48rem;
    margin-left: calc(0px - 16rem);
  }

  img {
    border-radius: 8px;
    width: 148px;
    height: 148px;
  }
`

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 100%;
  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  a {
    color: ${(props) => props.theme.blue};
    font-size: 14px;
    text-decoration: none;
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  align-items: end;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 10px;
    }
  }
`
