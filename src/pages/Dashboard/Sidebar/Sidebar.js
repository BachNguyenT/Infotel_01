import "./Sidebar.scss";
import { MenuUnfoldOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleRedirect = async () => {
    navigate("/login");
  };
  return (
    <div className="Sidebar">
      <div className="Sidebar__Upper">
        <Button className="Sidebar__Upper__Button">
          <MenuUnfoldOutlined style={{ fontSize: "23px", opacity: "50%" }} />
        </Button>
      </div>
      <div className="Sidebar__Lower">
        <Button className="Sidebar__Upper__Button">
          <LogoutOutlined
            style={{ fontSize: "23px", opacity: "50%" }}
            onClick={handleRedirect}
          />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
