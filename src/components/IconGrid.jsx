import React from "react";
import styled from "styled-components";
import Column from "./Grid/Column"
import Container from "./Grid/Container"
import Icon from "./Icon"
import Heading from "./Typography/Heading"
import Paragraph from "./Typography/Paragraph"

const IconGridWrapper = styled.div`
    .icon-grid {
        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            padding: 40px 0;
            
            &:before {
                content: "";
                height: 80%;
                width: 1px;
                background: var(--bg-gray);
                position: absolute;
                right: -10px;
                transform: translateY(-50%);
                top: 50%;
            }

            &:after {
                content: "";
                width: 80%;
                height: 1px;
                background: var(--bg-gray);
                position: absolute;
                bottom: -10px;
                transform: translateX(-50%);
                left: 50%;
            }

            &:nth-child(3n) {
                &:before {
                    display: none;
                }
            }

            @media (min-width: 930px) {
                &:nth-last-child(-n+3) {
                    &:after {
                        display: none;
                    }
            }

            @media (max-width: 930px) {
                &:before {
                    display: none;
                }
            }

            .icon {
                color: var(--blue);
                font-size: 2em;
            }
        }
    }
`

const IconGrid = ({ children, ...props }) => {
    return (
        <IconGridWrapper {...props} className="icon-grid">
            <Container>
                {children.map((item, key) => 
                    <Column key={key} size={4} xs={{size: 12}} className="icon-grid__item">
                        <Icon type={item.props.icon}/>
                        <Heading h="3">{item.props.title}</Heading>
                        <Paragraph>{item.props.children}</Paragraph>
                    </Column>
                )}
            </Container>
        </IconGridWrapper>
    )
}

export default IconGrid;
