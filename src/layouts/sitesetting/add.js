import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";
//import Button from '@mui/material/Button';
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";

import { addsitesetting } from "actions/users";

const styles = {
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
    fontSize:"18px"
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

const initialFormValue = {
  address: "",
  mail1: "",
  phone1: "",
  phone2: "",
mail2: "",
  facebook: "",
  youtube: "",
  twitter: "",
  linkedin: "",
  
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();

  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});



  // function
  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    console.log(formValue);
    //setValidateError(formData)
  };

  const {
    address,
    mail1,
    phone1,
    phone2,
    mail2,
    facebook,
    twitter,
    youtube,
    linkedin,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      address,
    mail1,
    phone1,
    phone2,
    mail2,
    facebook,
    twitter,
    youtube,
    linkedin,
    };
    let { error } = await addsitesetting(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Blog added", toasterOption);
      history.push("/dashboard");
    } else {
      setValidateError(error);
    }
  };

  return (
    <div>
        <DashboardLayout>
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleFormSubmit}
            >
              <CardHeader color="primary"> 
              <MDTypography>
                <h3 className={classes.cardTitleWhite}>Manage Items</h3>
                </MDTypography>
              </CardHeader>
              <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Address"
                      onChange={onChange}
                      value={address}
                      id="address"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.address && (
                      <span className={classes.textDanger}>
                        {validateError.address}
                      </span>
                    )}
                  </GridItem>
              
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Mail"
                      onChange={onChange}
                      value={mail1}
                      id="mail1"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.mail && (
                      <span className={classes.textDanger}>
                        {validateError.mail}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone"
                      onChange={onChange}
                      value={phone1}
                      id="phone1"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone2"
                      onChange={onChange}
                      value={phone2}
                      id="phone2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone2"
                      onChange={onChange}
                      value={mail2}
                      id="mail2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>


                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone2"
                      onChange={onChange}
                      value={facebook}
                      id="facebook"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone2"
                      onChange={onChange}
                      value={youtube}
                      id="youtube"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone2"
                      onChange={onChange}
                      value={twitter}
                      id="twitter"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone2"
                      onChange={onChange}
                      value={linkedin}
                      id="linkedin"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>
               
                </GridContainer> 
              </CardBody>
              <CardFooter>
                <Button color="primary" type="submit">
                  Add
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
      <Footer/>
      </DashboardLayout>
    </div>
  );
}
