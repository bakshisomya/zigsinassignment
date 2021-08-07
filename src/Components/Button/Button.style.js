import style from "styled-components";

export const Button = style.button`
    padding : 9px 18px;
    border-radius : 50px;
    text-transform : uppercase;
    font-size: 11px;
    background: ${(props) => props.bg1};
    background: ${(props) => props.bg2};
    border:${(props) => props.border};
    color:${(props) => props.color};
    font-weight: 600;
`;
