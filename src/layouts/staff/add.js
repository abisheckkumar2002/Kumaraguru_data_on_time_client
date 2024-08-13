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
import Typography from "@material-ui/core/Typography";
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";
import { userTypeList, getDepartmentList, addNewStaff } from "actions/users";
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
  { id: 1, label: "Head Of Department" },
  { id: 2, label: "Staff" },
];

const useStyles = makeStyles(styles);

const staffAdd = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userTypeData, setUserTypeData] = useState([]);
  const [departmentList, setdepartmentList] = useState([]);

  console.log(userTypeData, "userTypeData");
  console.log(departmentList, "departmentList");

  const [formValue, setFormValue] = useState({
    name: "",
    mobile: "",
    type_id: "",
    email: "",
    UserId: "",
    dep_id: "",
  });

  const [validateError, setValidateError] = useState({});

  console.log(validateError, "validateErrorvalidateErrorvalidateError");

  const { name, mobile, type_id, email, UserId, dep_id } = formValue;

  console.log(type_id, "type_idtype_idtype_id");
  console.log(dep_id, "dep_iddep_iddep_iddep_iddep_iddep_id");

  const userSelectData = async () => {
    let userData = await userTypeList();

    const typeLabel = userData.userValue.map((option) => ({
      value: option._id,
      label: option.Type,
    }));

    setUserTypeData(typeLabel);

    let departmentListdata = await getDepartmentList();

    setdepartmentList(departmentListdata.userValue);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let { error } = await addNewStaff(formValue);

    console.log(error, "errorerrorerrorerrorerrorerror");
    if (isEmpty(error)) {
      toast.success("Added Successfully");
      navigate(`/staff`);
    } else {
      setValidateError(error);
    }
  };

  useEffect(() => {
    userSelectData();
  }, []);

  return (
    <div>
      <DashboardLayout>
        <Button color="primary" onClick={() => navigate(-1)}>
          Back to
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
                    <h3 className={classes.cardTitleWhite}>Add Staff</h3>
                  </MDTypography>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="NAME"
                        onChange={(e) =>
                          setFormValue({ ...formValue, name: e.target.value })
                        }
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
                        labelText="STAFF ID"
                        onChange={(e) =>
                          setFormValue({ ...formValue, UserId: e.target.value })
                        }
                        value={UserId}
                        id="UserId"
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

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="MAIL ID"
                        onChange={(e) =>
                          setFormValue({ ...formValue, email: e.target.value })
                        }
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
                        labelText="PHONE NO"
                        onChange={(e) =>
                          setFormValue({ ...formValue, mobile: e.target.value })
                        }
                        value={mobile}
                        id="mobile"
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

                    <div
                      style={{
                        width: 360,
                        marginLeft: "15px",
                        marginTop: "43px",
                        marginRight: "10px",
                      }}
                    >
                      <Select
                        options={departmentList.map((option) => ({
                          value: option._id,
                          label: option.department,
                        }))}
                        placeholder="Select Department"
                        loading={true}
                        closeMenuOnScroll={true}
                        value={
                          dep_id
                            ? {
                                value: dep_id,
                                label: departmentList.find(
                                  (option) => option._id === dep_id
                                ).department,
                              }
                            : null
                        }
                        onChange={(selectedOption) =>
                          setFormValue({
                            ...formValue,
                            dep_id: selectedOption.value,
                          })
                        }
                      />

                      {validateError.dep_id && (
                        <span className={classes.textDanger}>
                          {validateError.dep_id}
                        </span>
                      )}
                    </div>

                    <div
                      style={{
                        width: 360,
                        marginLeft: "30px",
                        marginTop: "43px",
                        marginRight: "10px",
                      }}
                    >
                      <Select
                        options={userTypeData}
                        placeholder="Select Type"
                        loading={true}
                        closeMenuOnScroll={true}
                        value={userTypeData.find(
                          (option) => option.value === type_id
                        )}
                        onChange={(selectedOption) =>
                          setFormValue({
                            ...formValue,
                            type_id: selectedOption.value,
                          })
                        }
                      />
                      {validateError.type_id && (
                        <span className={classes.textDanger}>
                          {validateError.type_id}
                        </span>
                      )}
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
