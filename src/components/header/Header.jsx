import React, { useState } from "react";
import styles from "./Header.module.scss";
import { CgMenuRightAlt } from "react-icons/cg";
import { logo } from "../../assets";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
const Header = () => {
  // const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {/* ######################## Responsive Sidebar Modal ########################### */}
      {modal ? (
        <div className={styles.responsive_container} onClick={toggleModal}>
          <div className={styles.responsive_container_content}>
            <Sidebar />
          </div>
        </div>
      ) : (
        ""
      )}
      {/* ######################## Responsive Bar ########################### */}
      <div className={styles.responsive}>
        <div className={styles.responsive_content}>
          <img src={logo} alt="Stamplify" />
          <CgMenuRightAlt className={styles.resIcon} onClick={toggleModal} />
        </div>
      </div>
    </>
  );
};

export default Header;
