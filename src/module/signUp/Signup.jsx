import React from "react";
import "./Signup.scss";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { google } from "../../assets";

const Signup = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string(),
  });
  return (
    <>
      <div className="signin-container">
        <div className="signin-container-content2">
          <div className="signin-container-content2-box1">
            <h1>Sign in</h1>
            <div className="signin-container-content2-box1-content">
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
                      <Link to="/forgetpassword" className="forgetpass">
                        Forget password ?
                      </Link>
                      <button className="signin-container-content2-box1-content-btn">
                        Login
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
            <div className="signin-container-content2-box1-btnbox">
              <div className="signin-container-content2-box1-btnbox-continue">
                <hr />
                <p>or continue with</p>
                <hr />
              </div>

              <button>
                <Link to="/" className="googlelink">
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

export default Signup;
