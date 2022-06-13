import {FC} from 'react'
import { contactType } from "../../../types";  // ❗ userType change 
import { Header } from '../../styles/pagesGlobalStyles';
import { Wrapper, Container, Item } from "./styleUserInfo";

type contactInfoProps = {
    contact: contactType,
}

const ContactInfo:FC<contactInfoProps> = ({contact}) => {
    const {username, phone, email, website,} = contact || {};
    const {name, bs} = contact.company || {};

    if (!contact){
        return <h1>The contact is empty!</h1>
    }

    return (
        <>
        <Wrapper>
            <Container>
                <Header>{username}</Header>
            </Container>
            <Container>
                <Item>{email}</Item>
                <Item>{phone}</Item>
                <Item>{website}</Item>
                <Item>{`${name}, ${bs}`}</Item>
            </Container>
        </Wrapper>
        </>
    )
}
// ContactInfo.layout = 'L2'
export default ContactInfo;