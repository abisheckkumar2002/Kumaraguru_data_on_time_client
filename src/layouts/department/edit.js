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
import "react-toastify/dist/ReactToastify.css";

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

const initialFormValue = {
  department: "",
};

const useStyles = makeStyles(styles);

const department = () => {
  const classes = useStyles();
  const history = useNavigate();

  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  console.log("validateError", validateError);

  const { department } = formValue;

  //function

  const onChange = (e) => {
    e.preventDefault();

    console.log(e.target, "e.target");

    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    console.log(formValue, "formValueformValue");
  };

  const getUserData =async ()=>{


    //get api fecth
    let formdata ={}

    formdata['department'] ="master of computerscience"

    setFormValue(formdata);
  }


  //usestate

  useEffect(() => {  
    
    setTimeout(getUserData, 100);
    getUserData();
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
                // onSubmit={handleFormSubmit}
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
                        onChange={onChange}
                        value={department}
                        id="department"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {/* {validateError.content && (
                        <span className={classes.textDanger}>
                          {validateError.content}
                        </span>
                      )} */}
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
