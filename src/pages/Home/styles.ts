import styled from 'styled-components'

export const ListCards = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem 0;

  ul {
    list-style-type: none;
    overflow: hidden;
    width: 100%;
    padding: 0 5rem 2rem;

    li {
      float: left;
      a {
        text-decoration: none;
      }
    }

    li:nth-child(2n + 2) {
      float: right;
    }
    li:nth-child(2n) {
      margin-right: 0;
    }
    li:nth-child(2n + 1) {
      clear: left;
    }
  }
`
