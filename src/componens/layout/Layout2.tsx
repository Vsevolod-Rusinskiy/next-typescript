import {FC, ReactNode} from 'react'
import SidebarStatic from "../sideBar/sidebarStatic/Header";
import  {SidebarLayout}  from "./stylesLayout";
import {Container} from '../../styles/pagesGlobalStyles';

type layoutProps = {
    children: ReactNode,
}

const Layout2:FC<layoutProps> = ({children}) => {
    return (
        <>
            <SidebarLayout> 
                <SidebarStatic/>
                <Container>
                    {children}  
                </Container>
            </SidebarLayout>
        </>
    );
};

export default Layout2;