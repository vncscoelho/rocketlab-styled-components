import styled from 'styled-components/macro'

const Column = styled.div`
    grid-column: span ${props => props.size || 12};
    text-align: ${props => props.center ? "center" : "left"};

    @media (max-width: 930px) {
        grid-column: span ${props => props.xs ? props.xs.size : props.size};
        text-align: ${props => props.xs ? props.xs.align : props.center};
        display: ${props => props.xs ? props.xs.display : "visible"};
    }
`

export default Column;
