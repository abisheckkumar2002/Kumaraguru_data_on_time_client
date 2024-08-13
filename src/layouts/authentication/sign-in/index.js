/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

import isEmpty from "../../../lib/isEmpty";

// Images
import bgImage from "assets/images/kct22.jpeg";
import { login } from "actions/users";
import { toast } from "react-toastify";

import { useNavigation } from "actions/Navigate";

function SignIn() {
  const history = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [validateError, setValidateError] = useState({});

  console.log(validateError, "validateErrorvalidateErrorvalidateError");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };
  const { navigateTo } = useNavigation();
  const signOpen = async (e) => {
    e.preventDefault();

    console.log(
      formValue,
      "reqDatareqDatareqDatareqDatareqDatareqDatareqDatareqDatareqDatareqData"
    );
    let { error, result } = await login(formValue);

    console.log(error, "errorerrorerrorerror");
    console.log(result, "resultresultresultresult");

    if (isEmpty(error)) {
      let userType = result.result.userType;
      var type_name = "";

      if (userType == "Head Of Department") {
        localStorage.setItem("kct_prefix_route", "hod");
        type_name = "hod/";
      } else if (userType == "Principal") {
        localStorage.setItem("kct_prefix_route", "principal");
        type_name = "principal/";
      } else if (userType == "Admin") {
        localStorage.setItem("kct_prefix_route", "admin");
        type_name = "admin/";
      } else if (userType == "Admin") {
        localStorage.setItem("kct_prefix_route", "admin");
        type_name = "admin/";
      } else if (userType == "Faculty") {
        localStorage.setItem("kct_prefix_route", "faculty");
        type_name = "faculty/";
      } else if (userType == "Department PA") {
        localStorage.setItem("kct_prefix_route", "department_pa");
        type_name = "department_pa/";
      } else if (userType == "Montly Executor") {
        localStorage.setItem("kct_prefix_route", "montly_executor");
        type_name = "montly_executor/";
      }

      window.location = type_name + "dashboard";

      setFormValue({
        email: "",
        password: "",
      });
      // history("dashboard")
      toast.success("Login Sucessfully");

      // window.location = type_name + "/dashboard";
    } else {
      setValidateError(error);
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <form onSubmit={signOpen}>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={3}
            mt={-1}
            p={2}
            mb={4}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              KCT LOGIN
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  onChange={(e) =>
                    setFormValue({ ...formValue, email: e.target.value })
                  }
                  fullWidth
                />
                {validateError.email && (
                  <span style={{ color: "red", fontSize: "15px" }}>
                    {validateError.email}
                  </span>
                )}
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  onChange={(e) =>
                    setFormValue({ ...formValue, password: e.target.value })
                  }
                  fullWidth
                />
                {validateError.password && (
                  <span style={{ color: "red", fontSize: "15px" }}>
                    {validateError.password}
                  </span>
                )}
              </MDBox>

              <MDBox
                mt={4}
                mb={1}
                style={{ textAlign: "end", lineSpacingMultiplier: "1.5" }}
              >
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  onClick={signOpen}
                  type="submit"
                  style={{ PaddingBottom: "12px" }}
                >
                  sign in
                </MDButton>

                <a
                  variant="gradient"
                  color="info"
                  href="/admin/forgotpassword"
                  style={{
                    textDecoration: "none",
                    fontSize: "14px",
                    textAlign: "end",
                  }}
                >
                  Forgot password
                </a>
              </MDBox>
            </MDBox>
          </MDBox>
        </form>
      </Card>
    </BasicLayout>
  );
}

export default SignIn;
