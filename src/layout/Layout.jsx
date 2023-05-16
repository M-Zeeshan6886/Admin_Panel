import React from "react";
import styles from "./Layout.module.scss";
import { Header, Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* ******************** Responsive Navbar ************************** */}
      <div className={styles.responsiveBar}>
        <Header />
      </div>
      {/* ******************** Desktop View ************************** */}
      <div className={styles.container}>
        <div className={styles.container_left}>
          <Sidebar />
        </div>
        <div className={styles.container_right}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
