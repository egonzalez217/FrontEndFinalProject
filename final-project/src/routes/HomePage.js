import React from "react";
import UsersList from "../components/UsersList";
import { Layout } from "antd";
import AntModal from "../components/AntModal";

const HomePage = () => {
  return (
    <Layout>
      <UsersList />
      <AntModal />
    </Layout>
  );
};

export default HomePage;
