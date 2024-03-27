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

  // const  dd ={_id:"abisheck",jeya:""}
  // let abi = {...dd,...{[_id]:"jeya"}}
  // console.log("testtest",abi);
  

  // const dd = { _id: "abisheck", jeya: "this is the abisheck kumar" };
  // const jeya = "jeya"; // Define _id as a string
  // console.log("test test1", typeof _id);
  // console.log("test test2", typeof dd. _id);
  // let abi = { ...dd, ...{ [jeya]: "" } };
  // console.log("test test", abi);

  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target,'e.target')

    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    console.log(formValue,"formValueformValue");

   
  };


  const handleFormSubmit = ()=>{


    //  add department api fetching 
  }
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
                        labelText="Department"
                        onChange={onChange}
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


                    {/* <GridItem xs={12} sm={12} md={12}>
                      <InputLabel>About Event</InputLabel>
                      <ReactQuill
                        theme="snow"
                        // modules={modules}
                        // formats={formats}
                        // value={team || ""}
                        onChange={handleProcedureContentChange}
                      ></ReactQuill>
                    </GridItem> */}
                    
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

export default department;
