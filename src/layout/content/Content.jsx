import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { ReactComponent as Logo1 } from "../../assets/iconmonstr-location-1.svg";
import CitiesData from "../../../src/utils/CitiesData";
import { Input, AutoComplete } from "antd";
import { ReactComponent as Logo2 } from "../../assets/male-doc.svg";
import { ReactComponent as Logo4 } from "../../assets/lab-test.svg";
import { ReactComponent as Logo3 } from "../../assets/medicine.svg";
import { Link } from "react-router-dom";
import Popup from "./Popup";

const Content = () => {
  var Did = "d2beabbb-d891-4a86-8297-26b006d0861f";
  var Lid = "1d70a7da-654c-4396-a411-f098c0f3f376";
  var Mid = "e80cd81a-74d8-4ceb-bd37-e057dc4a4af7";

  const [cityData, setCityData] = useState([]);

  const [visible, setVisible] = useState(false);
  const [doctorCityName, setcityName] = useState([]);
  const [LabCityName, setcityNameforLab] = useState([]);

  const [medicineCityName, setcityNameForMedicine] = useState([]);

  const getData = (dataOfCity) => {
    setCityData(dataOfCity);
    setcityName(dataOfCity[Did]);
    // setcityName(dataOfCity[Did]);
    // setcityNameforLab(dataOfCity[Lid]);
    // setcityNameForMedicine(dataOfCity[Mid]);
  };
  const changeCitydata = (id) => {
    setcityName(cityData[id]);
  };

  return (
    <div>
      {/* <div style={{alignItems:"flex-end",height :"25px" ,width:"25px"  }}> */}

      <Link to="/">
        <Logo2
          // onClick={()=>{drList()}}
          className="logo2"
          style={{ height: "40px", marginTop: "165px", marginLeft: "95px" }}
        />
      </Link>
      <Link to="/">
        <Logo3
          onClick={() => changeCitydata("1d70a7da-654c-4396-a411-f098c0f3f376")}
          className="logo3"
          style={{ height: "40px", marginTop: "165px", marginLeft: "100px" }}
        />
      </Link>
      <Link to="/">
        <Logo4
          onClick={() => changeCitydata("e80cd81a-74d8-4ceb-bd37-e057dc4a4af7")}
          className="logo4"
          style={{ height: "40px", marginTop: "165px", marginLeft: "105px" }}
        />
      </Link>

      <div style={{ justifyContent: "center", marginTop: "20px" }}>
        <Input.Group compact>
          <Button
            type="primary"
            style={{ width: 100, backgroundColor: "white" }}
            onClick={() => setVisible(true)}
          >
            <Logo1 style={{ display: "flex" }}></Logo1>
          </Button>
          <Popup doctorCityName={doctorCityName} visible1={visible} />

          <AutoComplete
            style={{ width: "350px" }}
            placeholder="Cities"
            options={[{ value: "text 1" }, { value: "text 2" }]}
          />
          <Button style={{ backgroundColor: "skyblue" }}>Search</Button>
        </Input.Group>
        <CitiesData dataOfCities={getData}></CitiesData>
      </div>
    </div>
  );
};

export default Content;
