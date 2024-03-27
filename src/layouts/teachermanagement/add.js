import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
import 'react-toastify/dist/ReactToastify.css';
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";

import { addteacher } from "actions/users";

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
  email: "",
 
  phonenumber: "",
 
  Photofile: "",
  specialization: "",
  qualification:""
  
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();
  console.log(history,"historyhistoryhistoryhistory");
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
  email,
  
  phonenumber,
  specialization,
 
  Photofile,
  qualification,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      name,
  email,
 
  phonenumber,
  specialization,
  qualification,
  
  Photofile,
    };
    let { error } = await addteacher(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Added Successfully", toasterOption);
      history("/teacherindex");
    } else {
      setValidateError(error);
    }
  };

  return (
    <div>
        <DashboardLayout>
        <Button color="primary" onClick={()=>history(-1)}  >
                  Go Back
                </Button>
      
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
                <h3 className={classes.cardTitleWhite}>Add</h3>
                </MDTypography>
              </CardHeader>
              <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                      {/* <InputLabel style={{ color: "red", fontSize: "13px" }}>178*162(Recommended image size)
                      </InputLabel> */}
                    <CustomInput
                      labelText="Profile image"
                      onChange={handleFile}
                      id="Photofile"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.photofile && (
                      <span className={classes.textDanger}>
                        {validateError.photofile}
                      </span>
                      )}
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>178*162(Recommended image size)
                      </InputLabel>
                  </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      {/* <InputLabel style={{ fontSize: "17px" }}>Name <span style={{ color: "red" }}>*</span>
                      </InputLabel> */}
                    

                      <CustomInput 
                        labelText="Name *"
                      onChange={onChange}
                      value={name}
                      id="name"
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
                      labelText="Qualification *"
                      onChange={onChange}
                      value={qualification}
                      id="qualification"
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
                      labelText="Email *"
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
                      labelText="Phonenumber *"
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
                      labelText="Specialization *"
                      onChange={onChange}
                      value={specialization}
                      id="specialization"
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
      {/* <Footer/> */}
      </DashboardLayout>
    </div>
  );
}
