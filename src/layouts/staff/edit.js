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
import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import isEmpty from "../../lib/isEmpty";
import { toast } from "react-toastify";
import {
  updateUser,
  getStaffDetail,
  userTypeList,
  getDepartmentList,
} from "actions/users";
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

const staffEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [validateError, setValidateError] = useState({});
  const [userTypeData, setUserTypeData] = useState([]);
  const [departmentList, setdepartmentList] = useState([]);

  const classes = useStyles();
  const history = useNavigate();

  const [formValue, setFormValue] = useState({
    name: "",
    UserId: "",
    email: "",
    mobile: "",
    dep_id: "",
    type_id: "",
  });

  const { name, UserId, email, mobile, dep_id, type_id } = formValue;

  const userSelectData = async () => {
    let userData = await userTypeList();

    const typeLabel = userData.userValue.map((option) => ({
      value: option._id,
      label: option.Type,
    }));

    setUserTypeData(typeLabel);

    let departmentListdata = await getDepartmentList();

    const departmentLabel = departmentListdata.userValue.map((option) => ({
      value: option._id,
      label: option.department,
    }));

   
    setdepartmentList(departmentLabel);
  };

  const getUserData = async () => {
    let { error, userValue } = await getStaffDetail(id);
    //get api fecth

    console.log(error, "errorerrorerrorerror");
    console.log(userValue, "resultresultresultresultresult");
    let data = {};

    data["name"] = userValue.name;
    data["UserId"] = userValue.UserId;
    data["email"] = userValue.email;
    data["mobile"] = userValue.mobile;
    data["type_id"] = userValue.type_id;
    data["dep_id"] = userValue.dep_id;

    setFormValue(data);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { error } = await updateUser(formValue, id);
    if (isEmpty(error)) {
      toast.success("Updated Successfully");
      navigate(`/staff`);
    } else {
      setValidateError(error);
    }
  };

  useEffect(() => {
    setTimeout(getUserData, userSelectData, 100);
    userSelectData();
    getUserData();
  }, []);

  console.log(formValue, "FormValueFormValueFormValue");

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
                onSubmit={handleFormSubmit}
              >
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit</h4>
                  <p className={classes.cardCategoryWhite}>update</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="NAME"
                        style={{ color: "black" }}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            name: e.target.value,
                          })
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
                        style={{ color: "black" }}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            UserId: e.target.value,
                          })
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
                          setFormValue({
                            ...formValue,
                            email: e.target.value,
                          })
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
                          setFormValue({
                            ...formValue,
                            mobile: e.target.value,
                          })
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
                        options={departmentList}
                        placeholder="Select Department"
                        isLoading={true} // Assuming isLoading is a prop to indicate loading state
                        closeMenuOnScroll={true}
                     

                        value={departmentList.find(
                          (option) => option.value === dep_id
                        )}
                        onChange={(selectedOption) =>
                          setFormValue({
                            ...formValue,
                            dep_id: selectedOption
                              ? selectedOption.value
                              : null,
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
                        isLoading={true} // Assuming isLoading is a prop to indicate loading state
                        closeMenuOnScroll={true}
                        value={userTypeData.find(
                          
                          (option) =>{
                            console.log(option,"optionoptionoption")
                            option.value === type_id
                          } 
                        )}
                        onChange={(selectedOption) =>
                          setFormValue({
                            ...formValue,
                            type_id: selectedOption
                              ? selectedOption.value
                              : null,
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

export default staffEdit;
