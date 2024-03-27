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
import Select from "react-select";
import { toast } from "react-toastify";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";
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
    fontSize: "18px",
  },
};

const options = [
  { id: 1, label: "Master of Computer Application" },
  { id: 2, label: "Electronic Communication Enginneering" },
  { id: 3, label: "Mechanical Enginneering" },
];

const options2 = [
  { id: 1, label: "Head Of Department" },
  { id: 2, label: "Staff" },
];

const useStyles = makeStyles(styles);

const staffAdd = () => {
  const classes = useStyles();

  const history = useNavigate();

  const [validateError, setValidateError] = useState({});
  return (
    <div>
      <DashboardLayout>
        <Button color="primary" onClick={() => history(-1)}>
          Back to
        </Button>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form
                className={classes.form}
                noValidate
                // onSubmit={}
              >
                <CardHeader color="primary">
                  <MDTypography>
                    <h3 className={classes.cardTitleWhite}>Add Staff</h3>
                  </MDTypography>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="STAFF ID"
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
                        labelText="STAFF NAME"
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
                        labelText="DEPARTMENT"
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

                    <div
                      style={{
                        width: 370,
                        marginLeft: "17px",
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

                    <div
                      style={{
                        width: 370,
                        marginLeft: "17px",
                        marginTop: "43px",
                        marginRight: "10px",
                      }}
                    >
                      <Select
                        options={options2}
                        placeholder="Select Type"
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
      </DashboardLayout>
    </div>
  );
};

export default staffAdd;
