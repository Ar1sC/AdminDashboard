import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        tittle: "USERS",
        isMoney: false,
      };
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="tittle">USERS</span>
        <span className="counter">232332</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default widget;
