import React, { useState } from "react";
import styles from "./Changepasord.module.scss";
import { Share } from "../../assets";
import OTPInput from "react-otp-input";

const ChangePasword = () => {
  const [otp, setOtp] = useState("");
  const [Fpopup, setFpopup] = useState(false);
  const forgotClick = () => {
    setFpopup(!Fpopup);
  };
  return (
    <>
      {/* ######################## Change Password Container ############################ */}
      <div className={styles.Changepasword_container}>
        <div className={styles.parentContainer}>
          <h1>Change Password</h1>
          <p>Your Password has Expired, Please choose a New Password</p>
          <div className={styles.parentContainer_childContainer}>
            <h1>Email Sent</h1>
            <img src={Share} alt="Icon" />
            {/* ######################## Change Success Popup #################################### */}

            {Fpopup ? (
              <div className={styles.success_popup}>
                <p>Your password has been changed successfully!</p>
              </div>
            ) : (
              ""
            )}
            {/* ####################### */}
            <p>Enter your six digit code sent on the given email</p>

            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "10%",
                border: `1px solid #4EDAFC`,
                borderRadius: "5px",
                padding: "5px 5px",
                marginTop: "1.5rem",
                fontSize: "2rem",
                marginRight: "1rem",
                outline: "none",
              }}
              containerStyle={{
                display: "flex",
                justifyContent: "center",
              }}
            />
            <button className={styles.btn} onClick={forgotClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasword;
