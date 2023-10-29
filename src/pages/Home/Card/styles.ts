import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 416px;
  height: 260px;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 8px;
  padding: 2rem;

  margin-top: 2rem;
  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
    border-radius: 8px;
  }

  h1 {
    font-size: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    h1 {
      color: ${(props) => props.theme['base-title']};
      width: 60%;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 12px;
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
