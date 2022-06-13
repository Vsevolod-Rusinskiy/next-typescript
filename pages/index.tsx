import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { contactType } from "../types";
import {
  CardWrapper,
  CardContainer,
  
} from "../src/styles/ui/grid-flex/gridFlex";
import { ButtonContainer } from "../src/styles/ui/button/styleButtonItem";
import { UserName } from "../src/styles/pagesGlobalStyles";

type contactsTypeProps = {
  users: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data },
  };
};

const Users: FC<contactsTypeProps> = ({ users }) => {
  return (
    <>
      <Head>
        <title>List of users</title>
      </Head>
      <h1>List of users:</h1>
      <CardWrapper>
        {users &&
          users.map(({ id, name }) => (
            <CardContainer key={id}>
              <UserName>{name}</UserName>
              <ButtonContainer>
                <Link href={`/users/${id}`}>
                  <button>Show profile</button>
                </Link>
              </ButtonContainer>
            </CardContainer>
          ))}
      </CardWrapper>
    </>
  );
};

export default Users;
