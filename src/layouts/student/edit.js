import React, { useState, useEffect } from "react";

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
import Select from "react-select";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
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
  textDanger: {
    color: "rgb(148,44,174)",
  },
};
const useStyles = makeStyles(styles);

const studentEdit = () => {
  const [validateError, setValidateError] = useState({});

  const classes = useStyles();
  const history = useNavigate();

  const handleFile = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    const { id, files } = event.target;
    //settmpupimagefront(URL.createObjectURL(event.target.files[0]));

    let formData = { ...formValue, ...{ [id]: files[0] } };
    setFormValue(formData);
    //setValidateError(formData)
  };

  const options = [
    { id: 1, label: "Master of Computer Application" },
    { id: 2, label: "Electronic Communication Enginneering" },
    { id: 3, label: "Mechanical Enginneering" },
  ];

  return (
    <div>
      <DashboardLayout>
        <Button color="primary" onClick={() => history(-1)}>
          Go Back
        </Button>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form
                className={classes.form}
                noValidate
                // onSubmit={handleFormSubmit}
              >
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit</h4>
                  <p className={classes.cardCategoryWhite}>
                    Update Student Details
                  </p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
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
                      {validateError.photofile && (
                        <span className={classes.textDanger}>
                          {validateError.photofile}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="STUDENT ID"
                        style={{ color: "black" }}
                        // onChange={onChange}
                        // value={content}
                        id="department"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.content && (
                        <span className={classes.textDanger}>
                          {validateError.content}
                        </span>
                      )}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="STUDENT NAME"
                        style={{ color: "black" }}
                        // onChange={onChange}
                        // value={content}
                        id="department"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.content && (
                        <span className={classes.textDanger}>
                          {validateError.content}
                        </span>
                      )}
                    </GridItem>

                    <div
                      style={{
                        width: 370,
                        marginLeft: "20px",
                        marginTop: "43px",
                        marginRight: "10px",
                      }}
                    >
                      <Select
                        options={options}
                        placeholder="Select Department"
                        loading={true}
                        closeOnScroll={true} // Fixed incorrect syntax
                        labelField="id"
                        separator={true}
                        // valueField="id"
                        // value={options}
                        style={{
                          placeholder: (basestyles, state) => ({
                            ...basestyles,
                            color: "red",
                            fontSize: 40,
                          }),
                        }}
                        // onChange={(values) => this.setValues(values)}
                      />
                    </div>

                  
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="COLLEGE MAILID"
                        // onChange={onChange}
                        // value={department}
                        id="department"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.department && (
                        <span className={classes.textDanger}>
                          {validateError.department}
                        </span>
                      )}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="PHONE NO"
                        // onChange={onChange}
                        // value={department}
                        id="department"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.department && (
                        <span className={classes.textDanger}>
                          {validateError.department}
                        </span>
                      )}
                    </GridItem>
                    {/* <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="DESIGNATION"
                        // onChange={onChange}
                        // value={department}
                        id="department"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.department && (
                        <span className={classes.textDanger}>
                          {validateError.department}
                        </span>
                      )}
                    </GridItem> */}
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit">
                    Update
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </DashboardLayout>
    </div>
  );
};

export default studentEdit;
