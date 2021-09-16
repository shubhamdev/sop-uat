import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { Input } from "antd";
const { Search } = Input;

// import {ReactComponent as SearchLogo}  from '../../assets/icons8-search.svg'
//
const Popup = ({ doctorCityName, visible1 }) => {
  const [visible, setVisible] = useState(visible1);
  const [defaultCityList, setDefaultCityList] = useState([]);

  const defaultCity = ["bengaluru", "chennai"];

  const filterCityData = () => {
    const data = defaultCity.map((i) => {
      return doctorCityName.filter((j) => {
        if (i.toLowerCase() === j.toLowerCase()) {
          return j;
        }
      });
    });
    setDefaultCityList(data);
  };

  const loadCrad = (i) => {
    switch (i) {
      case "bengaluru":
        return <>{i}</>;

      default:
        return <>{i}</>;
    }
  };

  useEffect(() => {
    setVisible(visible1);
    filterCityData();
  }, [visible]);

  return (
    <>
      <Modal
        title="Select City"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        width={800}
      >
        {<h2>Choose the Location</h2>}
        {defaultCityList.map((i) => {
          return loadCrad(i);
        })}
        <Input></Input>

        {/* {doctorCityName?.length} */}
        {doctorCityName.map((x) => (
          <button style={{ margin: 5 }}>{x}</button>
        ))}
      </Modal>
    </>
  );
};

export default Popup;
