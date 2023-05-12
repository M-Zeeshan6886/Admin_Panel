import React from "react";
import styles from "./Dashboard.module.scss";
import { business, heart } from "../../assets";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  const dataList = [
    {
      image: heart,
      number: 2761,
      type: "Starter",
      perc: "65%",
      desc: "Starter subscription plan",
    },
    {
      image: business,
      number: 580,
      type: "Small Business",
      perc: "45%",
      desc: "Small Business",
    },
    {
      image: heart,
      number: 980,
      type: "Professional",
      perc: "-12%",
      desc: "Professional Subscription plan",
    },
    {
      image: business,
      number: 90,
      type: "Company",
      perc: "-8%",
      desc: "Company Users",
    },
  ];
  return (
    <div className={styles.dashboard_container}>
      <div className={styles.dashboard_container_content1}>
        <h1>Dashboard</h1>
        <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select>
      </div>
      <div className={styles.dashboard_container_content2}>
        <Grid container spacing={3}>
          {dataList.map((data) => {
            return (
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <div className={styles.analysis_card}>
                  <div className={styles.analysis_card_content}>
                    <div className={styles.analysis_card_content_left}>
                      <img src={data.image} alt="image" />
                    </div>
                    <div className={styles.analysis_card_content_right}>
                      <h3>{data.number}</h3>
                      <h6>{data.type}</h6>
                      <p>
                        <span>{data.perc}</span>
                        {data.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className={styles.dashboard_container_content3}>
        <div className={styles.dashboard_container_content3_chartbox}>
          <div className={styles.dashboard_container_content3_chartbox_left}></div>
          <div className={styles.dashboard_container_content3_chartbox_right}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
