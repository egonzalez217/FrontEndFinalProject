import React from "react";
import { Layout } from "antd";
import Comments from "../components/Comments";

const CommentSection = () => {
  return (
    <Layout>
      <h1>Comment Section</h1>
      <Comments />
    </Layout>
  );
};

export default CommentSection;
