import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;

  input[type='text'] {
    width: 100%;
    height: 50px;
    margin-top: 12px;

    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 8px;
    padding: 12px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 20px;
    }

    span {
      color: ${(props) => props.theme['base-span']};
    }
  }
`
