import { Form, Input, message, Button, Space } from "antd";
import { Select } from "antd";

const { Option } = Select;

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFill = () => {
    form.setFieldsValue({
      url: "https://taobao.com/",
    });
  };

  return (
    <div>
      <Form
        style={{
          marginTop: "150px",
          marginLeft: "500px",
          height: 300,
          width: 400,
        }}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ overflow: "hidden" }}>
          <Form.Item style={{ marginLeft: "70px" }}>
            <Button
              href="/login"
              style={{
                backgroundColor: "white",
                position: "relative",
                float: "left",
                width: "115px",
              }}
            >
              Login
            </Button>
            <Button
              href="/signup"
              style={{
                backgroundColor: "white",
                position: "relative",
                float: "right",
                width: "100px",
                marginRight:"110px"
            }}
            >
              SignUp
            </Button>
          </Form.Item>

          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="phoneNumber "
            label="Phone Number"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input
              style={{ position: "relative", float: "left", width: 280 }}
              placeholder="Phone Number"
            />
            <Button
              style={{ position: "relative", float: "right", width: 120 }}
            >
              Send Otp
            </Button>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true }, { type: "email", min: 6 }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Select  placeholder="Select Your Gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="others">Others</Option>
            </Select>
        
          </Form.Item>

          <Form.Item
            name="otp"
            label="Otp"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input placeholder="Otp" />
          </Form.Item>
        </div>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              SignUp
            </Button>
            <Button htmlType="button" onClick={onFill}></Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
