import React from "react";
import styled from "styled-components"

import Icon from "./Icon"
import Column from "./Grid/Column"
import Heading from "./Typography/Heading"
import Section from "./Section"
import Container from "./Grid/Container"
import Paragraph from "./Typography/Paragraph"

const StyledFooter = styled.footer`
    .footer {
        &__social-links {
            margin-right: 8px;
            display: inline-block;

            .icon {
                width: 35px;
                height: 35px;
                font-size: 1em;
                line-height: 35px;
            }
        }

        &__nav {
            text-align: center;

            ul {
                list-style-type: none;
                
                li {
                    display: inline-block;
                    margin-left: 24px;

                    @media (max-width: 930px) {
                        width: 50%;
                        margin-left: 0;
                        margin-bottom: 16px;
                    }

                    a {
                        color: #666;
                        font-size: .9em;
                        text-decoration: none;
                    }
                }
            }
        }
    }
`

const Footer = () => {
    return (
        <StyledFooter className="footer">
            <Section padding="120px 20px 100px 20px">
                <Container>
                    <Column center>
                        <Heading h={2}>Say Hi & Get in Touch</Heading>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                        <a className="footer__social-links" href="/"><Icon type="twitter" bgColor="#eee" color="#FFF" /></a>
                        <a className="footer__social-links" href="/"><Icon type="facebook" bgColor="#eee" color="#FFF" /></a>
                        <a className="footer__social-links" href="/"><Icon type="pinterest" bgColor="#eee" color="#FFF" /></a>
                        <a className="footer__social-links" href="/"><Icon type="google-plus" bgColor="#eee" color="#FFF" /></a>
                        <a className="footer__social-links" href="/"><Icon type="linkedin" bgColor="#eee" color="#FFF" /></a>
                        <a className="footer__social-links" href="/"><Icon type="youtube" bgColor="#eee" color="#FFF" /></a>
                    </Column>
                </Container>
            </Section>
            <Section bgColor="var(--bg-gray)">
                <nav className="footer__nav">
                    <ul>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Download</a></li>
                        <li><a href="/">Press</a></li>
                        <li><a href="/">Email</a></li>
                        <li><a href="/">Support</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </nav>
            </Section>
        </StyledFooter>
    )
}

export default Footer;