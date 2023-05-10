import React from "react";
import styles from "./Layout.module.scss";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
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
