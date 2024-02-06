import "./Box.scss";
import { useNavigate } from "react-router-dom";
const Box = () => {
  const navigate = useNavigate();

  const handleRedirect = async () => {
    navigate("/dashboard");
  };
  return (
    <div className="Box">
      <div className="Box__Login">
        <h1 className="Box__Login__Title">Login</h1>
        <input type="text" placeholder="Email" className="Box__Login__Info" />
        <input
          type="password"
          placeholder="Password"
          className="Box__Login__Info"
        />

        <div className="Box__Login__Lower">
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" className="Box__Login__Lower__Checkbox" />
            <p>Save Password</p>
          </div>
          <tag className="Box__Login__Lower__Forgot">Forgot Password</tag>
        </div>
        <div className="hi">
          <button className="Box__Login__Log">
            <div style={{ fontSize: 27, cursor: 'pointer' }} onClick={handleRedirect}>
              Login
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
