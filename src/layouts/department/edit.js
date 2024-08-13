import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getDepartment, updateDepartment } from "actions/users";
import "react-toastify/dist/ReactToastify.css";
import isEmpty from "lib/isEmpty";
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

const department = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const classes = useStyles();
  const history = useNavigate();

  const [formValue, setFormValue] = useState({
    department: "",
    sortForm: "",
  });
  const [validateError, setValidateError] = useState({});
  console.log("validateError", validateError);

  const { department, sortForm } = formValue;

  //function

  
  // api call
  const getUserDepartment = async () => {
    let { error, userValue } = await getDepartment(id);
    //get api fecth

    console.log(error, "errorerrorerrorerror");
    console.log(userValue, "resultresultresultresultresult");
    let data = {};

    data["department"] = userValue.data.department;
    data["sortForm"] = userValue.data.sortForm;

    setFormValue(data);
  };

 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { error } = await updateDepartment(formValue, id);
    if (isEmpty(error)) {
      toast.success("Updated Successfully");
      navigate( `/department`)
    } else {
      setValidateError(error);
    }
  };

  //usestate

  useEffect(() => {
    setTimeout(getUserDepartment, 100);

    getUserDepartment();
  }, []);

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
                        labelText="Department"
                        style={{ color: "black" }}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            department: e.target.value,
                          })
                        }
                        value={department}
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
                        labelText="SORT FORM"
                        style={{ color: "black" }}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            sortForm: e.target.value,
                          })
                        }
                        value={sortForm}
                        id="sortForm"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.sortForm && (
                        <span className={classes.textDanger}>
                          {validateError.sortForm}
                        </span>
                      )}
                    </GridItem>
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
export default department;
