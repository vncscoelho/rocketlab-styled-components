import React from "react";
import styled from "styled-components";

const IconWrapper = styled.span`
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: ${props => props.bgColor || "none"};
    color: ${props => props.color || "var(--text-color)"};
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
    font-size: 1.5em;

    &:last-of-type {
        margin: 0;
    }
`

const Icon = ({type, ...props}) => {
        return (
            <IconWrapper {...props} className="icon">
               
                <span className={`fa fa-${type}`}></span>
            </IconWrapper>
        )
}

export default Icon;
