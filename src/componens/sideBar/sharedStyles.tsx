import styled from 'styled-components';
import { v, buttonReset } from "../../styles/variables";


export const Logo = styled.div`
  width: 54px;
  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;
`;

export const Search = styled.div`
display: flex;
background: ${v.bg};
border: 1px solid rgb(230,230,230);
border-radius: ${v.borderRadius};
input {
    padding-top: 15px;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
}
`

export const LinkIcon = styled.span`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
        font-size: 20px;
    }
`;