import React from "react";
import styled from "styled-components";

const StyledIFrame = styled.iframe`
    background: #000;
    border-radius: 8px;
    overflow: hidden;
`

const Video = ({...props }) => {
    return (
        <StyledIFrame src={props.src} width="100%" height="100%"></StyledIFrame>
    )
}

export default Video;
