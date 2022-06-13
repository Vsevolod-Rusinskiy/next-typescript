import { FC, memo } from "react";
import { CardWrapper } from "../../styles/ui/grid-flex/gridFlex";
import { Post } from "../post";
// TODO: сделать список чего угодно data: T[], c:FC<T>

export const PostList: FC<{ data: any; user: any }> = memo(({ data, user }) => {
  return (
    <>
      <CardWrapper>
        {data.map((post) => (
          <Post {...post} userid={user} key={post.id} />
        ))}
      </CardWrapper>

    </>
  );
});
