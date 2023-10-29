import styled from 'styled-components'

export const ContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 168px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 8px;
  margin-top: calc(0px - 6.5rem - 6px);
  padding: 2rem 2.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }
`

export const ContentHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 14px;
  }
`

export const ContentHeaderInfos = styled.footer`
  display: flex;
  align-items: end;
  gap: 4rem;

  span {
    color: ${(props) => props.theme['base-span']};
    display: flex;
    align-items: center;

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 10px;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
