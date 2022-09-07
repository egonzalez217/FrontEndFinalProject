import { Divider, Table } from "antd";
import React, { useState, useEffect } from "react";
import { usersApi } from "../rest/UsersApi";
import Loading from "./Loading";

const columns = [
  {
    title: "First Name",
    dataIndex: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const AntTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
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

  return (
    <div>
      {!isRendered ? (
        <Loading className="transition"></Loading>
      ) : (
        <div>
          <Divider />
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={users}
            rowKey="_id"
          />
        </div>
      )}
    </div>
  );
};

export default AntTable;
