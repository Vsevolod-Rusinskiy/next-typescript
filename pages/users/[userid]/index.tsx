import { memo } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { getUserData, getUserPosts } from "../../../src/client";
import { PostList } from "../../../src/componens/post-list";
import UserInfo from "../../../src/componens/user/userInfo";
import { ButtonContainer } from "../../../src/styles/ui/button/styleButtonItem";
import Link from "next/link";
import { ContainerCenter } from "../../../src/styles/pagesGlobalStyles";

//TODO: how does it work ?
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userid } = context.params;
  const user = await getUserData(String(userid));
  const posts = await getUserPosts(String(userid));

  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user: user, posts: posts },
  };
};

//TODO: change 'Contact' in propper way
//TODO: review 'Link' in propper way
//
const Contact = ({ user, posts }) => (
  <>
    <Head>
      <title>User</title>
    </Head>
    <UserInfo contact={user} />
    <h1>Posts</h1>
    <PostList data={posts} user={user.id} />
    <ContainerCenter>
      <ButtonContainer>
      
        <Link href={`/users/${user.id}/posts/`}>
          <button>Show all posts</button>
        </Link>
      </ButtonContainer>
    </ContainerCenter>
  </>
);

export default memo(Contact);
