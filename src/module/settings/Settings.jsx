import React from "react";
import styles from "./Settings.module.scss";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Checkbox } from "../../assets";

const Settings = () => {
  const passwordvalidation = Yup.object({
    current_password: Yup.string().required("Please enter current password."),
    new_password: Yup.string()
      .required("Please enter new password.")
      .notOneOf(
        [Yup.ref("current_password")],
        "Your are entering previous password"
      )
      .min(8, "Your password is too short."),
    retypePassword: Yup.string()
      .required("Please retype your new password.")
      .oneOf([Yup.ref("new_password")], "Your passwords do not match."),
  });
  return (
    <>
      <div className={styles.setting_container}>
        <div className={styles.parentContainer}>
          <h1>Change Password</h1>
          <p>Your Password has Expired, Please choose a New Password</p>
          <div className={styles.parentContainer_childContainer}>
            <Formik
              initialValues={{
                current_password: "",
                new_password: "",
                retypePassword: "",
              }}
              validateOnMount
              validationSchema={passwordvalidation}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {(formik) => (
                <div>
                  <Form>
                    <FormInput
                      label="Old Password"
                      name="current_password"
                      type="password"
                      place="*****"
                    />
                    <FormInput
                      label="New Password"
                      name="new_password"
                      type="password"
                      place="**************"
                    />
                    <FormInput
                      label="Confirm New Password"
                      name="retypePassword"
                      type="password"
                      place="**************"
                    />

                    <button
                      disabled={!formik.isValid}
                      className={styles.parentContainer_childContainer_btn}
                    >
                      Reset Password
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
            <div className={styles.parentContainer_childContainer_auth}>
              <p>Two factor authentication</p>
              <Link to="/changepasword">
                <img src={Checkbox} alt="Ipcn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
