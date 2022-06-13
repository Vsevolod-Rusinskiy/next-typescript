import styled from 'styled-components';

import { v } from "../../../styles/variables";


export const Container = styled.nav `
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  position: relative;
  border-bottom: 1px solid lightgray;
`;



export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: lightgrey;
    margin: ${v.lgSpacing} 0;
`;

export const LinkContainer = styled.div`
    background: ${v.bg};
    border-radius: ${v.borderRadius};
    color: ${v.colorMain};

    :hover {
        color: #594120;
        cursor: pointer;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
`;

export const LinkItem = styled.span`
   padding-right: 10px;
   position: relative;
   top: 1px;
`;

