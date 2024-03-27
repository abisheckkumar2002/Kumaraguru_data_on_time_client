import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
import 'react-toastify/dist/ReactToastify.css';
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";


import { addmarveltest,getsubjectlist,getexamlist,getclasslist,getfreelist } from "actions/users";

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
  eligiblity:"",
  subject:"",
  exam:"",
  setname:"",
  free:"",
  noofattempt:"",
  mark:1,
  time:1,
  negativemark:0

 
  
 
  
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();
  console.log(history,"historyhistoryhistoryhistory");
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  const [courseopt, setcourseopt] = useState([]);
  const [subjectsopt, setsubjectsopt] = useState([]);
  const [examssopt, setexamsopt] = useState([]);
  const [classopt, setclassopt] = useState([]);
  const [freeopt, setfreeopt] = useState([]);


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
    eligiblity,
    subject,
    exam,
    setname,
    free,
    noofattempt,
    mark,
    time,
    negativemark,

   
   
   
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {

      eligiblity,
    subject,
    exam,
    setname,
    free,
    noofattempt,
    mark,
    time,
    negativemark,
     
      
     
     
    };
    let { error } = await addmarveltest(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Added Successfully", toasterOption);
      history("/marveltestindex");
    } else {
      setValidateError(error);
    }
  };

  const userData = async() =>{
    const test = await getsubjectlist();
    const test1 = await getexamlist();
    const test2 = await getclasslist();
    const test3 = await getfreelist();
    console.log(test.userValue,"test.userValuetest.userValuetest.userValue");
    const options =  test.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    const options1 =  test1.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    const options2 =  test2.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    const options3 =  test3.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    setsubjectsopt(options)
    setexamsopt(options1)
    setclassopt(options2)
    setfreeopt(options3)
  }
    useEffect(()=>{
      userData();
    },[])

  
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
                <h3 className={classes.cardTitleWhite}>Add Set details</h3>
                </MDTypography>
              </CardHeader>
              <CardBody>
                <GridContainer>

                <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={examssopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option) => option.title}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["exam"]: newValue.value },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="exam"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Exams *"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.exam && (
                      <span className={classes.textDanger}>
                        {validateError.exam}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={freeopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option) => option.title}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["free"]: newValue.value },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="free"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Paid or free *"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.free && (
                      <span className={classes.textDanger}>
                        {validateError.free}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={subjectsopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option) => option.title}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["subject"]: newValue.value },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="subject"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Subject *"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.subject && (
                      <span className={classes.textDanger}>
                        {validateError.subject}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={classopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option2) => option2.title}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["eligiblity"]: newValue.value },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="class"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Class *"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.eligiblity && (
                      <span className={classes.textDanger}>
                        {validateError.eligiblity}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Setname *"
                      onChange={onChange}
                      value={setname}
                      id="setname"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.setname && (
                      <span className={classes.textDanger}>
                        {validateError.setname}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Mark per question"
                      onChange={onChange}
                      value={mark}
                      id="mark"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.mark && (
                      <span className={classes.textDanger}>
                        {validateError.mark}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Negative Mark per question"
                      onChange={onChange}
                      value={negativemark}
                      id="negativemark"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <p style={{ color:"red" }}>(Eg: enter 1 or any integer).if 2 means for wrong answer 2marks will be reduced. </p>
                    {validateError.mark && (
                      <span className={classes.textDanger}>
                        {validateError.mark}
                      </span>
                    )}
                  </GridItem>


                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="No of attempt *"
                      onChange={onChange}
                      value={noofattempt}
                      id="noofattempt"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.noofattempt && (
                      <span className={classes.textDanger}>
                        {validateError.noofattempt}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Time in hour"
                      onChange={onChange}
                      value={time}
                      id="time"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                     <p style={{ color:"red" }}>(Eg: For enter 1.5 - 1(hours) .5(30hr)) </p>
                    {validateError.time && (
                      <span className={classes.textDanger}>
                        {validateError.time}
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
