import React from "react";
import styles from "./Support.module.scss";
import { deleteIcon, search } from "../../assets";

const Support = () => {
  const Datalistcompany = [
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      status: "Sale",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
  ];
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
        <div className={styles.support_container_bottom}>
          <div className={styles.support_container_bottom_left}>
            <table>
              <thead>
                <tr>
                  <th>Employee's Name</th>
                  <th>Group</th>
                  <th>Status</th>
                  <th>Assigned Signature</th>
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
          <div className={styles.support_container_bottom_right}>
            <p>1 to 18 of 18</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
