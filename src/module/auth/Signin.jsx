import React from "react";
import Styles from "./Signin.module.scss";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { google } from "../../assets";

const Signin = () => {
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string(),
  });
  return (
    <>
      <div className={Styles.signin_container}>
        <div className={Styles.signin_container_content2}>
          <div className={Styles.signin_container_content2_box1}>
            <h1>Sign in</h1>
            <div className={Styles.signin_container_content2_box1_content}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
              >
                {(formik) => (
                  <div>
                    <Form>
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        place="example@email.com"
                      />
                      <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        place="**************"
                      />
                      <Link
                        to="/forgetpassword"
                        className={
                          Styles.signin_container_content2_box1_content_forgetpass
                        }
                      >
                        Forget password ?
                      </Link>
                      <button
                        className={
                          Styles.signin_container_content2_box1_content_btn
                        }
                        onClick={() => navigate("/dashboard")}
                      >
                        Login
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
            <div className={Styles.signin_container_content2_box1_btnbox}>
              <div
                className={
                  Styles.signin_container_content2_box1_btnbox_continue
                }
              >
                <hr />
                <p>or continue with</p>
                <hr />
              </div>
              <button>
                <Link to="/" className={Styles.googlelink}>
                  <img src={google} alt="google" />
                  <p>Continue with google</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
