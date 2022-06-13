// пост юзера по нажатию на кнопку
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import { memo } from "react";
import { getComments, getPost, addComment } from "../../../../src/client";
import { PostComments } from "../../../../src/componens/post-comments";
import { ContainerCenter } from "../../../../src/styles/pagesGlobalStyles";
import ButtonItem from "../../../../src/styles/ui/button/buttonItem";
import { ButtonContainer } from "../../../../src/styles/ui/button/styleButtonItem";
import { Input } from "../../../../src/styles/ui/input-item/styleInputItem";
import ModalWindow from "../../../../src/styles/ui/modal-window/modalWindow";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postid } = context.params; // заберает параметры из урла???
  const post = await getPost(String(postid));
  const comments = await getComments(String(postid));

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: post, comments: comments, postid: postid },
  };
};

const PostDetails = ({ post, comments, postid }) => {
  // 🤬 when rerender ?
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [localComments, setLocalComments] = useState([]);


  // если бы я хотел переипользовать инпут это правилльный подход или нет ?

  // создать стейт с пустым массивом кот подружаются  ассинхронно после того как отправил коммент
  // передавать в PostComments результат props.comments + массива в созданном состоянии
  // добавлять в массив состояния комент кот пришел с сервера

  // setName('') // how to clear ❓
  // косяк с unique ID ❓

  // const 👉 handleAddComment = useCallback((e) => {
  const addNewPost = useCallback(
    (e: any) => {
      e.preventDefault();
      addComment(postid, name, email, text).then((data) => {
        setLocalComments([...localComments, data]);
      });
      setName('');
      setEmail('');
      setText('');
    },
    [addComment, postid, name, email, text]
  );

  const showModal = useCallback(
    (e: any) => {
      setIsModalVisible(false);
    },

    [setIsModalVisible]
  );

  const handleNameChange = useCallback(
    (value: any) => {
      setName(value);
    },
    [setName]
  );
  const handleEmailChange = useCallback(
    (value: any) => {
      setEmail(value);
    },
    [setEmail]
  );

  const handleTextChange = useCallback(
    (value: any) => {
      setText(value);
    },
    [setText]
  );

  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p style={{color: "red"}}>Сделать поиск</p>
      <PostComments data={[...comments, ...localComments]}  /> 
      <ContainerCenter>
        <ButtonContainer>
          <button onClick={() => setIsModalVisible(true)}>Add comment</button>
        </ButtonContainer>
      </ContainerCenter>
      <ModalWindow visible={isModalVisible} setVisible={setIsModalVisible}>
        <form onSubmit={addNewPost}>
          <Input
            value={name}
            name="name"
            onChange={(e) => handleNameChange(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <Input
            value={email}
            name="email"
            onChange={(e) => handleEmailChange(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <Input
            value={text}
            name="text"
            onChange={(e) => handleTextChange(e.target.value)}
            type="text"
            placeholder="Text"
          />
          <ButtonItem onClick={showModal}>Send</ButtonItem>
        </form>
      </ModalWindow>
    </div>
  );
};
export default memo(PostDetails);
