import React from "react";
import styles from "./Sidebar.module.scss";
import {
  avatar,
  dashboardWithoutBackground,
  logo,
  logout,
  manageEmployee,
  setting,
  subscription,
  supportRequest,
} from "../../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getColor = (current) => {
    if (location.pathname === current) {
      return "#01C8FB";
    }
  };
  const data = [
    {
      path: "/dashboard",
      icon: dashboardWithoutBackground,
      title: "Dashboard",
    },
    {
      path: "/supportRequest",
      icon: supportRequest,
      title: "Support Request",
    },
    {
      path: "/subscription",
      icon: subscription,
      title: "Subscription",
    },
    {
      path: "/manageEmployee",
      icon: manageEmployee,
      title: "Manage employee",
    },
    {
      path: "/settings",
      icon: setting,
      title: "Settings",
    },
  ];

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_top}>
          <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        </div>
        <div className={styles.sidebar_middle}>
          <ul>
            {" "}
            {data.map((item, ind) => {
              return (
                <li key={ind}>
                  <Link to={item.path} className={styles.Link}>
                    <span className={styles.icon}>
                      <img src={item.icon} alt="Icon" />
                    </span>
                    <span
                      className={styles.text}
                      style={{ color: getColor(item.path) }}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.sidebar_bottom}>
          <div className={styles.left}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.info}>
            <p className={styles.name}>Selina</p>
            <span className={styles.scale}>Signature design</span>
          </div>
          <div className={styles.right}>
            <img src={logout} alt="logout" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
