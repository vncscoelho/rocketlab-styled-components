import styled from 'styled-components/macro'
import React from "react";

const StyledHeading = styled.span`
    display: block;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: ${props => (4.75 / (1.25 * props.h))}em; /* Typography decrements in a scale of 1.25 */
    color: ${props => props.color || "var(--text-color)"};
    margin-bottom: ${props => props.margin || "12px"};
`

const Heading = ({children, ...props}) => {
    return <StyledHeading className={`h${props.h}`} {...props}>{children}</StyledHeading>
}

export default Heading;