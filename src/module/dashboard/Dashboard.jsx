import React from "react";
import styles from "./Dashboard.module.scss";
import {
  business,
  graphMenu,
  heart,
  search,
  tableUserImage,
} from "../../assets";
import Grid from "@mui/material/Grid";
import { Chart } from "chart.js";
import {
  Chart as ChartJS,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

Chart.register(ArcElement);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  labels: ["Basic", "Professional", "Small business"],
  datasets: [
    {
      data: [3, 6, 7],
      backgroundColor: ["  #8A8A8A", "#01CAFD", "#2B4465"],
    },
  ],
};

const Dashboard = () => {
  const lineGraphLabels = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

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
                      <p>{data.number}</p>
                      <p>{data.type}</p>
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
          <div className={styles.dashboard_container_content3_chartbox_left}>
            <div
              className={
                styles.dashboard_container_content3_chartbox_left_content
              }
            >
              <div
                className={
                  styles.dashboard_container_content3_chartbox_left_content_menu
                }
              >
                <h1>Monthly user data</h1>
                <img src={graphMenu} alt="Icon" />
              </div>
              <Line
                data={{
                  labels: lineGraphLabels,
                  datasets: [
                    {
                      data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                      type: "line",
                      order: 2,
                      borderColor: "#01CAFD",
                      // backgroundColor: "#01CAFD",
                      pointBackgroundColor: "#2B4465",
                      tension: 0.4,
                      fill: true,
                    },
                  ],
                }}
                options={options}
              ></Line>
            </div>
          </div>
          <div className={styles.dashboard_container_content3_chartbox_right}>
            <div
              className={
                styles.dashboard_container_content3_chartbox_right_content
              }
            >
              <div
                className={
                  styles.dashboard_container_content3_chartbox_right_content_menu
                }
              >
                <h1>Registered User Pie Chart</h1>
                <img src={graphMenu} alt="Icon" />
              </div>
              <Pie data={data} className={styles.piechart} options={options} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboard_container_content4}>
        <div className={styles.dashboard_container_content4_table}>
          <div className={styles.dashboard_container_content4_table_top}>
            <h1>All Registered Users</h1>
            <div
              className={
                styles.dashboard_container_content4_table_top_inputfield
              }
            >
              <input type="search" placeholder="search by Name" />
              <img src={search} alt="Icon " />
            </div>
          </div>
        </div>
        <div className={styles.dashboard_container_content4_table_content}>
          <table>
            <thead>
              <tr>
                <th>Tracking no</th>
                <th>User Name</th>
                <th>Price</th>
                <th>No of Signature</th>
                <th>Tatal Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#87634</td>
                <td>
                  <img src={tableUserImage} alt="ImgIcon" />
                  <h6>jane doe</h6>
                </td>
                <td>$400.00</td>
                <td>
                  <span>10</span>
                </td>
                <td>$6,000.000</td>
              </tr>
              <tr>
                <td>#87634</td>
                <td>
                  <img src={tableUserImage} alt="ImgIcon" />
                  <h6>jane doe</h6>
                </td>
                <td>$400.00</td>
                <td>
                  <span>10</span>
                </td>
                <td>$6,000.000</td>
              </tr>
              <tr>
                <td>#87634</td>
                <td>
                  <img src={tableUserImage} alt="ImgIcon" />
                  <h6>jane doe</h6>
                </td>
                <td>$400.00</td>
                <td>
                  <span>10</span>
                </td>
                <td>$6,000.000</td>
              </tr>
              <tr>
                <td>#87634</td>
                <td>
                  <img src={tableUserImage} alt="ImgIcon" />
                  <h6>jane doe</h6>
                </td>
                <td>$400.00</td>
                <td>
                  <span>10</span>
                </td>
                <td>$6,000.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
