import { useRouter } from "next/router";
import { FC } from "react";
import uuid from 'react-uuid'
import Image from 'next/image'
import Link from 'next/link'
import {logoWheelPNG} from '../../../../public/assets/index';
import {AiOutlineDashboard, AiOutlineSetting, AiOutlineStar} from 'react-icons/ai';

import { Logo, LinkIcon} from "../sharedStyles";
import { Container,
          Divider,
          LinkContainer,
          LinkWrapper,
          LinkItem
} from "./stylesHeader";

const SidebarStatic:FC = () => {

const {pathname} = useRouter();  

  return (
    <Container>
      <Link href='/'>
        <Logo>
          <Image
            src={logoWheelPNG}
          />
        </Logo>
      </Link>
      {/* <Divider/> */}
        {LinkArray.map(({title, icon, path, id}) => (
        <LinkContainer key={id}>
            <Link href={path}>
                <LinkWrapper style={pathname === path ? {color: '#594120'} : null}>
                    <LinkIcon>{icon}</LinkIcon>
                    <LinkItem >{title}</LinkItem>
                </LinkWrapper>
            </Link>
        </LinkContainer>
        ))}
    </Container>
  );
};

const LinkArray = [
    // {
    //     id: uuid(),
    //     title: 'Something todo',
    //     icon: <AiOutlineDashboard/>,
    //     path: '#'
    // },
    // {
    //     id: uuid(),
    //     title: 'Settings',
    //     icon: <AiOutlineSetting/>,
    //     path: '/settings'
    // },
    // {
    //     id: uuid(),
    //     title: 'Users',
    //     icon: <AiOutlineStar/>,
    //     path: '/users'
    // },
]

export default SidebarStatic;
