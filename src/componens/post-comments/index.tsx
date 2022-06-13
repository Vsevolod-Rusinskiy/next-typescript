import { Head } from "next/document";
import { FC, memo } from "react";
import { ContainerCenter, UserName } from "../../styles/pagesGlobalStyles";
import {
  CardContainer3col,
  CardWrapper,
} from "../../styles/ui/grid-flex/gridFlex";
// import { CardWrapper } from "../../styles/ui/grid-flex/flexGrid";
// import { Post } from "../post";
// TODO: сделать список чего угодно data: T[], c:FC<T>

export const PostComments: FC<{ data: any }> = memo(({ data }) => {
  return (
    <>
      <CardWrapper>
          {data.map(({ name, id, email }) => (
            <CardContainer3col key={id}>
              <UserName>{name}</UserName>
              <div>{email}</div>
            </CardContainer3col>
          ))}
      </CardWrapper>
    </>
  );
});
