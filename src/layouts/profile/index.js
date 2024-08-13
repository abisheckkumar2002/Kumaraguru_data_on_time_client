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

// @mui material components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GridContainer from "components/Grid/GridContainer.js";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import CardBody from "components/Card/CardBody.js";
// Overview page components
import Header from "layouts/profile/components/Header";
import { useNavigate, useParams } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { toast } from "react-toastify";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import GridItem from "components/Grid/GridItem";

import {
  getUserProfile,
  updateProfile1
} from "actions/users";

import { Password } from "@mui/icons-material";
import isEmpty from "lib/isEmpty";

const styles = {
  addButton: {
    display: "flex",
    width: 100,
  },

  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  textDanger: {
    color: "rgb(148,44,174)",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: "18px",
  },

  textareacontainer: {
    marginBottom: "20px",
  },

  textareainput: {
    width: "100%",
    height: "50px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "vertical",
  },
};

// toaster config
toast.configure();
let toasterOption = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const useStyles = makeStyles(styles);
function Profile() {
  const classes = useStyles();
  const history = useNavigate();

  const [formValue, setFormValue] = useState({
    name: "",
    UserId: "",
    mobile: "",
    password: "",
    conformpassword: ""
  });

  const [validateError, setValidateError] = useState({});

  console.log(validateError,"validateErrorvalidateErrorvalidateErrorvalidateErrorvalidateErrorvalidateError")

  const { name, UserId, mobile, password, conformpassword } = formValue;

  const getUserData = async () => {
    let { error, userValue } = await getUserProfile();
    if (userValue) {
      let data = {
        name: userValue.name,
        UserId: userValue.UserId,
        mobile: userValue.mobile,
        password: "",
        conformpassword: ""
      };
      setFormValue(data);
    }
    if (error) {
      setValidateError(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      name,
      UserId,
      mobile
    };

    if (password.trim() !== "") {
      dataToSend.password = password;
    }

    if (conformpassword.trim() !== "") {
      dataToSend.conformpassword = conformpassword;
    }

    console.log(dataToSend,"dataToSenddataToSenddataToSenddataToSend")

    let { error, result } = await updateProfile1(dataToSend);


    console.log(error,"errorerrorerrorerror")
    if (isEmpty(error)) {
      toast.success("Updated Successfully", toasterOption);
      history("/event");
    } else {
      setValidateError(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <DashboardLayout>
      <Button color="primary" onClick={() => history(-1)}>
        Back to
      </Button>
      <MDBox mb={2} />
      <Header>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form
                className={classes.form}
                noValidate
                onSubmit={handleFormSubmit}
              >
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="UserId"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            UserId: e.target.value,
                          })
                        }
                        id="UserId"
                        value={UserId}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.UserId && (
                        <span className={classes.textDanger}>
                          {validateError.UserId}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Name"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            name: e.target.value,
                          })
                        }
                        id="Name"
                        value={name}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.name && (
                        <span className={classes.textDanger}>
                          {validateError.name}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Mobile"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            mobile: e.target.value,
                          })
                        }
                        id="mobile"
                        value={mobile}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.mobile && (
                        <span className={classes.textDanger}>
                          {validateError.mobile}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="New Password"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            password: e.target.value,
                          })
                        }
                        id="newpassword"
                        value={password}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.password && (
                        <span className={classes.textDanger}>
                          {validateError.password}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Confirm Password"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            conformpassword: e.target.value,
                          })
                        }
                        id="conformpassword"
                        value={conformpassword}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.conformpassword && (
                        <span className={classes.textDanger}>
                          {validateError.conformpassword}
                        </span>
                      )}
                    </GridItem>

                    <GridItem
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button color="primary" type="submit">
                        Edit Profile
                      </Button>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </Header>
    </DashboardLayout>
  );
}

export default Profile;
``
