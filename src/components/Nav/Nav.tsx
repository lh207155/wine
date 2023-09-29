import "./Nav.css";
import { Switch } from "antd";
const Nav = () => {
  return (
    <div className="navWrapper">
      <div className="logo">logo</div>
      <div className="menuWrapper">
        <div className="menuItem">HOME</div>
        <div className="menuItem">FEATURES</div>
        <div className="menuItem">PRODUCTS</div>
        <div className="menuItem">BLOG</div>
        <div className="menuItem">CONTACT US</div>
      </div>
      <div>
        <Switch />
      </div>
    </div>
  );
};

export default Nav;
