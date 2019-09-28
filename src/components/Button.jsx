import styled from 'styled-components/macro'

const Button = styled.button`
    padding: 16px 40px;
    text-transform: uppercase;
    font-weight: 700;
    color: #FFF;
    background: #0d74b9;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    position: relative;

    :text {
        z-index: 1;
        position: relative;
    }

    &:before {
        z-index: 0;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.1);
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 150ms linear;
    }

    &:hover {
        &:before {
            opacity: 1;
        }
    }
`

export default Button;
