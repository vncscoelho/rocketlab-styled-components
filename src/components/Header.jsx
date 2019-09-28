import React from "react";
import styled from "styled-components";

import Icon from "../components/Icon"
import Image from "../components/Image"
import Column from "../components/Grid/Column"
import Section from "../components/Section"
import Heading from "../components/Typography/Heading"
import Container from "../components/Grid/Container"
import Paragraph from "../components/Typography/Paragraph"

const StyledHeader = styled.header`
    .h1 {
        font-family: "Pacifico", Georgia;
    }

    .h1, p {
        text-shadow: 1px 2px 0 rgba(0,0,0,.3);
    }

    .icon {
        opacity: 0.5;
        margin-right: 16px;
    }

    p {
        font-size: 1.35em;
        font-weight: 400;
    }

    @media (max-width: 930px) {
        ${Column} {
            text-align: center;
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Section padding="100px 40px 0 40px" bgImage="header_bg.jpg" >
                <Container>
                    <Column size={7} xs={{size: 12}}>
                        <Heading h={1} color="#FFF" margin="24px">Craze</Heading>
                        <Paragraph margin="24px" color="#FFF">A great new free psd theme to showcase your new app.</Paragraph>
                        <Icon type="apple" bgColor="#000" color="#FFF" />
                        <Icon type="android" bgColor="#000" color="#FFF" />
                        <Icon type="windows" bgColor="#000" color="#FFF" />
                    </Column>
                    <Column size={5} xs={{size: 12}}>
                        <Image src={process.env.PUBLIC_URL + "/assets/header_hand-holding-iphone.png"} />
                    </Column>
                </Container>
            </Section>
        </StyledHeader>
    )
}

export default Header;