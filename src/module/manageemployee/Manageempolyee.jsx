import React, { useState } from "react";
import styles from "./Manageempolyee.module.scss";
import { deleteIcon, search } from "../../assets";
const Manageempolyee = () => {
  const [otp, setOtp] = useState("");
  const [Fpopup, setFpopup] = useState(false);
  const forgotClick = () => {
    setFpopup(!Fpopup);
  };

  const Datalistcompany = [
    {
      empName: "Anton Hall",
      group: "Active",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
    {
      empName: "Anton Hall",
      group: "Active",
      ASignature: "My Company Signature",
      Img: deleteIcon,
    },
  ];
  return (
    <div className={styles.manage_container}>
      <div className={styles.manage_container_top}>
        <h1>Invite Employee</h1>
        <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select>
      </div>
      <div className={styles.manage_container_middle}>
        <div className={styles.manage_container_middle_left}>
          <table>
            <thead>
              <tr>
                <th>Employees Name</th>
                <th>Employee Status</th>
                <th>Assigned Signature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Non Archived</td>
                <td>Non Archived</td>
                <td>All Signature</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.manage_container_middle_right}>
          <button onClick={forgotClick}>Add manually</button>
          <button>Invite users</button>
          {Fpopup ? (
            <div className={styles.addManually_container}>
              <h1>Add Manually</h1>
              <div className={styles.addManually_container_top}>
                <div className={styles.addManually_container_top_inputfield}>
                  <input type="radio" name="add" />
                  <p>All Members</p>
                </div>
                <div className={styles.addManually_container_top_inputfield}>
                  <input type="radio" name="add" />
                  <p>Only Selected</p>
                </div>
              </div>
              <div className={styles.addManually_container_search}>
                <img src={search} alt="Icon" />
                <input type="search" placeholder=" Search member" />
              </div>
              <div className={styles.addManually_container_options}>
                <button>Select all</button>
                <button>deselect all</button>
              </div>
              <div className={styles.addManually_container_select}>
                <div>
                  <h1>Name</h1>
                </div>
                <div>
                  <p>Anton Hall</p>
                  <input type="checkbox" />
                </div>
                <div>
                  <p>Anton Hall</p>
                  <input type="checkbox" />
                </div>
                <div>
                  <p>Anton Hall</p>
                  <input type="checkbox" />
                </div>
              </div>
              <div className={styles.addManually_container_btn}>
                <button>Cancel</button>
                <button>Add</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.manage_container_bottom}>
        <div className={styles.manage_container_bottom_left}>
          <table>
            <thead>
              <tr>
                <th>Employee's Name</th>
                <th>Assigned Signature</th>
              </tr>
            </thead>
            <tbody>
              {Datalistcompany.map((data) => {
                return (
                  <tr>
                    <td>{data.empName}</td>
                    <td>{data.group}</td>
                    {/* <td>{data.status}</td> */}
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
        <div className={styles.manage_container_bottom_right}>
          <p>1 to 18 of 18</p>
        </div>
      </div>
    </div>
  );
};

export default Manageempolyee;
