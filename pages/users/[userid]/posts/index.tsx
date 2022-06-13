import { memo } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import {
  getAllUserPosts,
  getUserData,
  getUserPosts,
} from "../../../../src/client";
import { PostList } from "../../../../src/componens/post-list";
import UserInfo from "../../../../src/componens/user/userInfo";
import { ButtonContainer } from "../../../../src/styles/ui/button/styleButtonItem";

//TODO: All posts !!!
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userid } = context.params;
  const user = await getUserData(String(userid));
  const posts = await getAllUserPosts(String(userid));

  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user: user, posts: posts },
  };
};

//TODO: change 'Contact' in propper

const Contact = ({ user, posts }) => (
  <>
    <Head>
      <title>User</title>
    </Head>
    <UserInfo contact={user} />
    <h1>All posts</h1>
    <PostList data={posts} user={user.id} />
  </>
);

export default memo(Contact);
