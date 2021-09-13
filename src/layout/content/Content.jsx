import React, { useState } from 'react';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { ReactComponent as Logo1 } from '../../assets/iconmonstr-location-1.svg';
import CitiesData from '../../../src/utils/CitiesData';
import { Input, AutoComplete } from 'antd';

const Content = () => {
  const [visible, setVisible] = useState(false);
  const [doctorCityName, setcityName] = useState([]);

  const getData = (dataOfCity) => {
    setcityName(dataOfCity)
    
  }
  console.log(doctorCityName)
  
  return (
    <div style={{ justifyContent: 'center', marginTop: '200px' }}>
      <Input.Group compact>
        <Button
          type="primary"
          style={{ width: 100, backgroundColor: 'white' }}
          onClick={() => setVisible(true)}
        >
          <Logo1 style={{ display: 'flex' }}></Logo1>
        </Button>
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          footer={null}
          width={1000}
        >
          {doctorCityName.map(x=><p>{x}</p>)}
        
        </Modal>
        <AutoComplete
          style={{ width: '350px' }}
          placeholder="Cities"
          options={[{ value: 'text 1' }, { value: 'text 2' }]}
        />
        <Button style={{ backgroundColor: 'skyblue' }}>Search</Button>
      </Input.Group>
      <CitiesData dataOfCities={getData}></CitiesData>
    </div>
  );
};

export default Content;
