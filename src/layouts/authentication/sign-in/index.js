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

import { login } from "../../../actions/users";
import isEmpty from "../../../lib/isEmpty";

// Images
import bgImage from "assets/images/kct.png";

const initialFormValue ={
  email:"", 
  password:""
}
function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [formValue, setFormValue] = useState(initialFormValue);

  const [validateError, setValidateError] = useState({});
  
  const { email, password } = formValue;
  const handleFormSubmit = async (e) => {
    e.preventDefault();

  };

  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    console.log(formValue);
    //setValidateError(formData)
  };
  const signOpen = async(e)=>{
    e.preventDefault();
    window.location = "/admin/dashboard"
    // let reqData = {
    //   email,
    //   password,
    // };
  
  
    // console.log(reqData,"reqDatareqDatareqDatareqDatareqDatareqDatareqDatareqDatareqDatareqData")
    // let { error, result } = await login(reqData);
    // // console.log(error);
    // if (isEmpty(error)) {
    //   setFormValue(initialFormValue);
    //   // await dispatch(setCurrentUser(result));
    //   window.location = "/admin/dashboard"
    // } else {
    //   setValidateError(error);
    // }

  }
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const history = useNavigate();

  return (
    <BasicLayout image={bgImage}>
      <Card>
      <form
              
              onSubmit={signOpen}
            >
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
            Kumaraguru-Data-On-Time
          </MDTypography>
          
        
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" id="email" onChange={onChange} fullWidth />
              {validateError.email && (
                      <span style={{color:"red",fontSize:"9px"}}>
                        {validateError.email}
                      </span>
                    )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" id="password" onChange={onChange} fullWidth />
              {validateError.password && (
                      <span style={{color:"red",fontSize:"9px"}}>
                        {validateError.password}
                      </span>
                    )}
            </MDBox>
       
            <MDBox mt={4} mb={1} style={{ textAlign: 'end', lineSpacingMultiplier:'1.5' }} >
              <MDButton variant="gradient" color="info" fullWidth onClick={signOpen} type="submit" style={{ PaddingBottom: '12px' }} >
                sign in
              </MDButton>

              <a variant="gradient" color="info"  href="/admin/forgotpassword" style={{ textDecoration: 'none' ,fontSize: '14px', textAlign:"end"}} >
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
