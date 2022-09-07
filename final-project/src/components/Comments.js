import React, { useState, useEffect } from "react";
import { Avatar, Comment } from "antd";
import { usersApi } from "../rest/UsersApi";
import Loading from "./Loading";

const Comments = () => {
  const [users, setUsers] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const getUsers = await usersApi.get();

      console.log(getUsers);

      setUsers(getUsers);
      setIsRendered(true);
    };

    if (isRendered === false) {
      fetchUsers();
      console.log("is rendered", isRendered);
    }
    console.log(users);
  }, []);

  const ExampleComment = ({ children }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<p>John Smith</p>}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={<p>This is a comment</p>}
    >
      {children}
    </Comment>
  );

  const commentsList = users.map((user, index) => {
    return (
      <div key={index}>
        <Comment
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          actions={[<span key="comment-nested-reply-to">Reply to</span>]}
          author={
            <p>
              {user.first_name} {user.last_name}
            </p>
          }
          content={<p>{user.email} is my email lol</p>}
        ></Comment>
      </div>
    );
  });

  return (
    <div>
      {!isRendered ? <Loading className="transition"></Loading> : <></>}
      {commentsList}
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </div>
  );
};

export default Comments;
