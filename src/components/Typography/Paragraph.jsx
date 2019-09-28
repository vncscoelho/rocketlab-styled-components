import styled from 'styled-components/macro'

const Paragraph = styled.p`
    font-size: 1em;
    color: ${props => props.color || "#666"};
    margin-bottom: ${props => props.margin || "12px"};
`;

export default Paragraph;
