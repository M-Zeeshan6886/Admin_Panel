import React from "react";
import styles from "./Subscription.module.scss";
import { deleteIcon, search } from "../../assets";
const Subscription = () => {
  const Datalistcompany = [
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
    {
      empName: "Joseph carter",
      group: "Abcd@mail.com",
      status: "Company",
      ASignature: "My Card",
      Img: deleteIcon,
    },
  ];
  return (
    <>
      <div className={styles.subscription_container}>
        <div className={styles.subscription_container_top}>
          <h1>Subscription</h1>
          <select>
            <option>Mar 2023</option>
            <option>Mar 2024</option>
            <option>Mar 2025</option>
          </select>
        </div>
        <div className={styles.subscription_container_middle}>
          {/* <div className={styles.subscription_container_middle_left}>
            <table>
              <thead>
                <tr>
                  <th>Employees Status</th>
                  <th>Groups</th>
                  <th>Status</th>
                  <th>Assigned Signature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Non Archived</td>
                  <td>All group</td>
                  <td>status</td>
                  <td>All Signature</td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div className={styles.subscription_container_middle_right}>
            <input type="search" placeholder="Search by Name" />
            <img src={search} alt="Icon" />
          </div>
        </div>
        <div className={styles.subscription_container_bottom}>
          <div className={styles.subscription_container_bottom_left}>
            <table>
              <thead>
                <tr>
                  <th>Clients Name</th>
                  <th>Email</th>
                  <th>Subscription Plan</th>
                  <th>Billing Cycle</th>
                </tr>
              </thead>
              <tbody>
                {Datalistcompany.map((data) => {
                  return (
                    <tr>
                      <td>{data.empName}</td>
                      <td>{data.group}</td>
                      <td>{data.status}</td>
                      <td>{data.ASignature}</td>
                      <td>
                        <img src={data.Img} alt="Icon" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={styles.subscription_container_bottom_right}>
            <p>1 to 18 of 18</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
