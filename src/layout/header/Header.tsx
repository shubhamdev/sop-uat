import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

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
