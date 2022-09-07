import { Button, Modal } from "antd";
import React, { useState } from "react";
import Elsie from "../assets/images/elsie.jpg";

const AntModal = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Click to see dog
      </Button>
      <Modal
        title="Doggy"
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <img src={Elsie} alt="good doggy" className="elsie" />
      </Modal>
    </>
  );
};

export default AntModal;
