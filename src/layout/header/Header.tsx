// import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         1st menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item icon={<DownOutlined />} disabled>
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         2nd menu item (disabled)
//       </a>
//     </Menu.Item>
//     <Menu.Item disabled>
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         3rd menu item (disabled)
//       </a>
//     </Menu.Item>
//     <Menu.Item danger>atem</Menu.Item>
//   </Menu>
// );
const Header = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-start", marginTop: 5 }}
      >
        <Link className="logo-container" to="/">
          <Logo
            className="logo"
            style={{ display: "flex", justifyContent: "start" }}
          ></Logo>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "right", marginTop: -32 }}>
        <Link
          to="/login"
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 18,
            color: "black",
          }}
          className="login"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Header;
