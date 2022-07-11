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