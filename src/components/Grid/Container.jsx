import styled from 'styled-components/macro'

const Container = styled.div`
    max-width: 930px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`

export default Container;
