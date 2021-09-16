import { Form, Input, Button } from "antd";
const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        style={{
          boxSizing: "border-box",
          boxShadow: "5px",
          height: "100px",
          width: "500px",
          marginTop: "200px",
          marginLeft: "450px",
        }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item style={{ marginLeft: "100px" }}>
          <Button
            href="/login"
            style={{
              backgroundColor: "white",
              position: "relative",
              float: "left",
              width: "100px",
              marginLeft: "66px",
            }}
          >
            LOGIN
          </Button>
          <Button
            href="/signup"
            style={{
              backgroundColor: "white",
              position: "relative",
              float: "right",
              width: "100px",
            }}
          >
            SignUp
          </Button>
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="Phone Number"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
          ]}
        >
          <Input
            style={{ position: "relative", float: "left", width: 250 }}
            placeholder="Phone Number"
          />
          <Button style={{ position: "relative", float: "right", width: 80 }}>
            Send Otp
          </Button>
        </Form.Item>
        <Form.Item
          label="OTP"
          name="OTP"
          rules={[{ required: true, message: "Please input your OTP!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
