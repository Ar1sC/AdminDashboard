import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};

export default home;
