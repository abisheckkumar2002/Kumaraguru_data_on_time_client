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
  name: "",
  cellnumber:"",
  email: "",
  type: "",
  refferalcode: "",
  walletbalance: "",
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
    name,
    cellnumber,
    email,
    type,
    refferalcode,
    walletbalance,
    // address2,
    // pincode,
    // city,
    // country,
    // company,
    // Photofile,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      name,
      email,
      cellnumber,
      type,
      refferalcode,
      walletbalance,
      // Photofile,
    };
    let { error } = await adduser(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("User added", toasterOption);
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
                <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Name"
                      onChange={onChange}
                      id="name"
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
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email"
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
                      labelText="Cellnumber"
                      onChange={onChange}
                      value={cellnumber}
                      id="cellnumber"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.cellnumber && (
                      <span className={classes.textDanger}>
                        {validateError.cellnumber}
                      </span>
                    )}
                  </GridItem>
                 
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Type"
                      onChange={onChange}
                      value={type}
                      id="type"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.type && (
                      <span className={classes.textDanger}>
                        {validateError.type}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Refferal Code"
                      onChange={onChange}
                      id="refferalcode"
                      value={refferalcode}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.refferalcode && (
                      <span className={classes.textDanger}>
                        {validateError.refferalcode}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Wallet Balance"
                      onChange={onChange}
                      id="walletbalance"
                      value={walletbalance}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.walletbalance && (
                      <span className={classes.textDanger}>
                        {validateError.walletbalance}
                      </span>
                    )}
                  </GridItem>
                  {/* <GridItem xs={12} sm={12} md={4}>
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
                  </GridItem>*/}
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
