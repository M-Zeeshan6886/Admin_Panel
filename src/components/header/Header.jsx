import React from "react";
import styles from "./Header.module.scss";
import { CgMenuRightAlt } from "react-icons/cg";
import { logo } from "../../assets";
import { useNavigate } from "react-router-dom";
const Header = () => {
  // const navigate = useNavigate();
  return (
    <>
      {/* ######################## Responsive Sidebar ########################### */}

      {/* ######################## Responsive Bar ########################### */}
      <div className={styles.responsive}>
        <div className={styles.responsive_content}>
          <img src={logo} alt="Stamplify" />
          <CgMenuRightAlt className={styles.resIcon} />
        </div>
      </div>
    </>
  );
};

export default Header;
