import styled from "styled-components";

export const ButtonFilled = styled.button`
    border: none;
    background: ${props => props.backgroundColor || '#FFFFFF'};
    border-radius: 5px;
    width: 152px;
    height: 48px;
    font-size: 16px;
    cursor: pointer;
`;

export const LargeButtonFilled = styled.button`
    width: 100%;
    background-color: white;
    color: black;
    height: 40px;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 15px;
`