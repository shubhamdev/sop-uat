import IHXlogo from "../../assets/ihx-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ margin: 5 }}>
      <p style={{ justifyContent: "flex-start" }}>LEGAL</p>
      <Link to="/">Disclaimer</Link>
      <span> | </span>
      <Link to="/ ">Privacy</Link>
      <span> | </span>
      <Link to="/">Terms & services</Link>
      <div style={{ position: "relative", float: "right", marginTop: -32 }}>
        <p>© Star Health Insurance. All rights reserved.</p>
        Powered BY{" "}
        <img src={IHXlogo} style={{ height: 30, width: 30 }} alt="" />
      </div>
    </div>
  );
};

export default Footer;
