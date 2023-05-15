import React from "react";
import styles from "./Support.module.scss";
import { search } from "../../assets";

const Support = () => {
  return (
    <>
      <div className={styles.support_container}>
        <div className={styles.support_container_top}>
          <h1>Support Requests</h1>
          <select>
            <option>Mar 2023</option>
            <option>Mar 2024</option>
            <option>Mar 2025</option>
          </select>
        </div>
        <div className={styles.support_container_middle}>
          <div className={styles.support_container_middle_left}>
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
          </div>
          <div className={styles.support_container_middle_right}>
            <input type="search" placeholder="Search by Name" />
            <img src={search} alt="Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
