import React from "react";
import { Layout } from "antd";
import AntDrawer from "../components/AntDrawer";

const DrawerRoute = () => {
  return (
    <Layout>
      <h1>Some Drawers</h1>
      <AntDrawer />
    </Layout>
  );
};

export default DrawerRoute;
