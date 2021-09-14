import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
// import { Input,  } from 'antd';

// const { Search } = Inpu

const Popup = ({ doctorCityName, visible1 }) => {
  const [visible, setVisible] = useState(visible1);

  useEffect(() => {
    setVisible(visible1)
  }, [visible1]);

  return (
    <Modal
    
      title="Modal 1000px width"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={null}
      width={1000}
    >
       
      {doctorCityName?.length}
      {doctorCityName.map((x) => (
        <p>{x}</p>
      ))}
    </Modal>
  );
};

export default Popup;
