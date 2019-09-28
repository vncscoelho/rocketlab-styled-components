import styled from 'styled-components/macro'

const Section = styled.section`
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || "60px 20px"};
    background-color: ${props => props.bgColor || "#FFF"};
    background-image: url(${props => props.bgImage ? `${process.env.PUBLIC_URL}/assets/${props.bgImage}` : "none"});
    background-size: 100%;
    
    /* Will support retina devices */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
        background-image: url(${props => props.bgImage ? `${process.env.PUBLIC_URL}/assets/${props.bgImage.split(".").join("@2x.")}` : "none"});
    }
`

export default Section;
