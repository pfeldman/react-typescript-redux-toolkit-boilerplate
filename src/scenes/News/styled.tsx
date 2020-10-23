import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  > div {
    width: 30%;
    margin-right: 1%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 30px;

    .imageContainer {
      height: 340px;
    }

    img {
      max-width: 100%;
    }
  }
`
