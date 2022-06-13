import {FC, ReactNode} from 'react'
import SidebarStatic from "../sideBar/sidebarStatic/Header";
import { Header } from "./stylesLayout";
import {Container} from '../../styles/pagesGlobalStyles';

type layoutProps = {
    children: ReactNode,
}
// поменять название sideBar на Header
const Layout:FC<layoutProps> = ({children}) => {
    return (
        <>
            <Header> 
                <SidebarStatic/>
                <Container>
                    {children}  
                </Container>
            </Header>
        </>
    );
};

export default Layout;