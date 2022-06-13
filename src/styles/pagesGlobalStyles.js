import styled from 'styled-components';

import {
    v
} from "./variables";

export const Container = styled.main `
 display: flex;
 flex-direction:column;
 color: ${v.colorMain};
 padding: 24px 50px;
 
    h1, p {
        margin-bottom: ${v.lgSpacing};
    }
    /* ul {
        padding-left: 20px;
    } */
`;

export const UserName = styled.div `
    font-size: 17px;
    font-weight: bold;
    padding-bottom: 4px;
`

export const Header = styled.div `
    font-size: 2em;
    font-weight: bold;
    padding: 18px 11px;
`


export const UserPostSnippet = styled.div `
 display: flex;
 flex: 1;
p {
    color: rgba(0, 0, 0, 0.41);
        margin-bottom: 15px;
        overflow: hidden;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 20px;

        &:first-letter {
                text-transform: uppercase;
        }
}
        
`


export const ContainerCenter = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`