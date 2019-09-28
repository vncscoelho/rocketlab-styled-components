import styled from "styled-components";

const ArrowList = styled.ul`
    list-style-type: none;
    padding-left: 1em;
    font-size: .9em;

    li:before {
        content: "";
        width: 5px;
        height: 5px;
        transform: rotate(-45deg);
        display: inline-block;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        margin-right: 12px;
    }
`
export default ArrowList;
