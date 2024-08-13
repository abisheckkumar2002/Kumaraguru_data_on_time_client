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
import { useHistory, useLocation } from "react-router-dom";
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import { AddNewCriteriaType } from "actions/users";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  textDanger: {
    color: "red",
    fontSize: "15px",
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

const useStyles = makeStyles(styles);

const AddCriteriaType = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    criteriaType: "",
  });

  const [validateError, setValidateError] = useState({});
  console.log("validateError", validateError);

  const { criteriaType } = formValue;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let { error, result } = await AddNewCriteriaType(formValue);

    console.log(result, "resultresultresultresultresultresult");
    console.log(error, "errorerrorerrorerrorerrorerror");
    if (isEmpty(error)) {
      toast.success("Added Successfully");
      navigate(`/criteriatype`);
    } else {
      setValidateError(error);
    }
  };
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
                    <h3 className={classes.cardTitleWhite}>Add</h3>
                  </MDTypography>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Criteria Type"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            criteriaType: e.target.value,
                          })
                        }
                        value={criteriaType}
                        id="criteriaType"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.criteriaType && (
                        <span className={classes.textDanger}>
                          {validateError.criteriaType}
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
      </DashboardLayout>
    </div>
  );
};

export default AddCriteriaType;
