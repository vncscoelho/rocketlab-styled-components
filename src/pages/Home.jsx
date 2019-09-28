import React, { Fragment } from "react";
import Video from "../components/Video"
import Column from "../components/Grid/Column"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Section from "../components/Section"
import Heading from "../components/Typography/Heading"
import IconGrid from "../components/IconGrid"
import Container from "../components/Grid/Container"
import Paragraph from "../components/Typography/Paragraph"
import ArrowList from "../components/Typography/ArrowList"
import PriceTable from "../components/PriceTable"
import Testimonials from "../components/Testimonials"

const Home = () => (
    <Fragment>
        <Header/>
        <Section>
            <Container>
                <Column center>
                    <Heading h={2}>Craze Features</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis magna ac enim mollis, ac porta leo tincidunt. Nam eu nibh laoreet neque varius pretium malesuada quis ex.</Paragraph>

                    <IconGrid>
                        <div icon="desktop" title="Flat Design">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div icon="bullseye" title="Marketable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div icon="image" title="Edit Photos">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div icon="paint-brush" title="Edit Colors">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div icon="user" title="User Friendly">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div icon="cog" title="100% Editable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </IconGrid>
                </Column>
            </Container>
        </Section>
        <Section bgColor="var(--bg-gray)">
            <Container>
                <Column size={6} xs={{size: 12, align: "center"}}>
                    <Heading h={2}>What's Craze all About?</Heading>
                    <Paragraph color="var(--text-color)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis magna ac enim mollis, ac porta leo tincidunt. Nam eu nibh laoreet neque varius pretium malesuada quis ex.</Paragraph>
                    <Paragraph color="var(--text-color)">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                    <ArrowList style={{textAlign: "left"}}>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    </ArrowList>
                </Column>
                <Column size={6} xs={{display: "none"}}>
                    <Video src="https://player.vimeo.com/video/122702786" />
                </Column>
            </Container>
        </Section>
        <Section>
            <Testimonials>
                <div author="Gordon Cole">“Dolor sit amet.”</div>
                <div author="Cole Gordon">“Nam eu nibh.”</div>
                <div author="Gordon Cole">“Consectetur adipiscing.”</div>
            </Testimonials>
        </Section>
        <Section bgColor="var(--bg-gray)" padding="40px 20px 0 20px" style={{marginBottom: "-60px"}}>
            <Container>
                <Column center>
                    <Heading h={2}>Pricing Plans</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis magna ac enim mollis, ac porta leo tincidunt. Nam eu nibh laoreet neque varius pretium malesuada quis ex.</Paragraph>
                    <PriceTable>
                        <ul title="Basic" price="19.99">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                        <ul title="Standard" price="39.99">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                        <ul title="Deluxe" price="59.99">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                            <li>Feature 6</li>
                        </ul>
                        <ul title="Unlimited" price="79.99">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                    </PriceTable>
                </Column>
            </Container>
        </Section>
        <Footer/>
    </Fragment>
)

export default Home;