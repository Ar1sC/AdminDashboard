import "./home.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Widget from "../../components/widget/Widget.jsx";

const home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="eranings" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default home;
