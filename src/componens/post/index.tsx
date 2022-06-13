import Link from "next/link";
import { UserName, UserPostSnippet } from "../../styles/pagesGlobalStyles";
import { ButtonContainer } from "../../styles/ui/button/styleButtonItem";
import { CardContainer3col } from "../../styles/ui/grid-flex/gridFlex";

export const Post = ({ title, body, id: postid, userid }) => {
  // const post=id
  return (
    <CardContainer3col>
      <UserName>{title}</UserName>
         <UserPostSnippet><p>{body}</p></UserPostSnippet>
      <ButtonContainer>
        <Link href={`/users/${userid}/posts/${postid}`}>
          <button>More...</button>
        </Link>
      </ButtonContainer>
    </CardContainer3col>
  );
};
