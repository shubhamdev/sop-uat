import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';


import { Input, AutoComplete, Button } from 'antd';




const Content = () => {
    return (
        <div style ={{justifyContent:'center',marginTop:'200px'}}>




<Input.Group compact>
    <Button style={{width :100}}><LocationOnIcon   style={{display:"flex"}}/></Button>
      <AutoComplete
        style={{ width: '350px' }}
        placeholder="Cities"
        options={[{ value: 'text 1' }, { value: 'text 2' }]}
      />
      <Button style ={{backgroundColor:"blue"}}>Search</Button>
    </Input.Group>












            
        </div>
    )
}

export default Content
