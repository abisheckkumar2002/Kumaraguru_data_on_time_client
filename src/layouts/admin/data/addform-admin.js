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
import isEmpty from "../../../lib/isEmpty";

import { adduser } from "../../../actions/users";

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
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
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
  username: "",
  email: "",
  password: "",
  // company: "",
  // phonenumber: "",
  // address1: "",
  // address2: "",
  // pincode: "",
  // city: "",
  // country: "",
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();

  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  const handleFile = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    const { id, files } = event.target;
    //settmpupimagefront(URL.createObjectURL(event.target.files[0]));

    let formData = { ...formValue, ...{ [id]: files[0] } };
    setFormValue(formData);
    //setValidateError(formData)
  };

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
    username,
    email,
    // phonenumber,
    // address1,
    // address2,
    // pincode,
    // city,
    // country,
    password,
    // company,
    // Photofile,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      username,
      email,
      // phonenumber,
      // address1,
      // address2,
      // pincode,
      // city,
      // country,
      password,
      // company,
      // Photofile,
    };
    let { error } = await adduser(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("User added", toasterOption);
      history.push("/userlist");
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
                <h4 className={classes.cardTitleWhite}>Add Admin Details</h4>
                <p className={classes.cardCategoryWhite}>Create a new Admin</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="UserName"
                      onChange={onChange}
                      id="username"
                      value={username}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.username && (
                      <span className={classes.textDanger}>
                        {validateError.username}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      onChange={onChange}
                      value={email}
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.email && (
                      <span className={classes.textDanger}>
                        {validateError.email}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="password"
                      onChange={onChange}
                      value={password}
                      id="password"
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
                </GridContainer>
                {/* <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Mobile"
                      onChange={onChange}
                      value={phonenumber}
                      id="phonenumber"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phonenumber && (
                      <span className={classes.textDanger}>
                        {validateError.phonenumber}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Address"
                      onChange={onChange}
                      id="address1"
                      value={address1}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.address1 && (
                      <span className={classes.textDanger}>
                        {validateError.address1}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      onChange={onChange}
                      id="city"
                      value={city}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.city && (
                      <span className={classes.textDanger}>
                        {validateError.city}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="State"
                      onChange={onChange}
                      id="address2"
                      value={address2}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.address2 && (
                      <span className={classes.textDanger}>
                        {validateError.address2}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      onChange={onChange}
                      id="country"
                      value={country}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.country && (
                      <span className={classes.textDanger}>
                        {validateError.country}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Pincode"
                      onChange={onChange}
                      id="pincode"
                      value={pincode}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.pincode && (
                      <span className={classes.textDanger}>
                        {validateError.pincode}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="company"
                      onChange={onChange}
                      value={company}
                      id="company"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.company && (
                      <span className={classes.textDanger}>
                        {validateError.company}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Profile image"
                      onChange={handleFile}
                      id="Photofile"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.photo && (
                      <span className={classes.textDanger}>
                        {validateError.photo}
                      </span>
                    )}
                  </GridItem>
                </GridContainer> */}
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
