import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
import 'react-toastify/dist/ReactToastify.css';
import TextField from "@material-ui/core/TextField";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getmarveltestdata, updatemarveltest,getexamlist,getsubjectlist,getclasslist,getfreelist } from "../../actions/users";

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
  exam: {
    "title" :"",
    "value" : ""
  },
  eligiblity: {
    "title" :"",
    "value" : ""
  },
  subject: {
    "title" :"",
    "value" : ""
  },
  free: {
    "title" :"",
    "value" : ""
  },
  setname:"",
  noofattempt:"",
  mark:0,
  time:1,
  negativemark:0
 
  
};


const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  // const dispatch = useDispatch();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  const [subjectsopt, setsubjectsopt] = useState([]);
  const [examssopt, setexamsopt] = useState([]);
  const [classopt, setclassopt] = useState([]);
  const [freeopt, setfreeopt] = useState([]);

  const { id } = useParams();
  // console.log(userId,"asdfdsfdsfdsf");

  const handleFile = (event) => {
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
    // console.log(formValue);
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
      eligiblity:eligiblity.value,
    subject:subject.value,
    exam:exam.value,
    setname,
    free:free.value,
    noofattempt,
    mark,
    time,
    negativemark,
     
    };
    console.log(reqData);
    let { error } = await updatemarveltest(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Successfully updated", toasterOption);
      history("/marveltestindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getmarveltestdata(id);
    console.log(test,"hhh")
    let formdata = {};
   
    formdata["exam"] = test.userValue.exam;
    formdata["time"] = test.userValue.time;
    formdata["setname"] = test.userValue.setname;
    formdata["subject"] = test.userValue.subject;
    formdata["eligiblity"] = test.userValue.eligiblity;
    formdata["free"] = test.userValue.payment;
    formdata["noofattempt"] = test.userValue.noofattempt;
    formdata["mark"] = test.userValue.mark;
    formdata["time"] = test.userValue.time;
    formdata["negativemark"] = test.userValue.negativemark;
    // formdata["Photofile"] = test.userValue.image;
    const testsub = await getsubjectlist();
    const test1 = await getexamlist();
    const test2 = await getclasslist();
    const test3 = await getfreelist();
    console.log(test.userValue,"test.userValuetest.userValuetest.userValue");
    const options =  testsub.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    formdata["subject"] = options.find(e => e.value == test.userValue.subject);

    const options1 =  test1.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    formdata["exam"] = options1.find(e => e.value == test.userValue.exam);
    const options2 =  test2.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    formdata["eligiblity"] = options2.find(e => e.value == test.userValue.eligiblity);
    const options3 =  test3.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    formdata["free"] = options3.find(e => e.value == test.userValue.payment);
   
    setsubjectsopt(options)
    setfreeopt(options3)
    setexamsopt(options1)
    setclassopt(options2)
    setFormValue(formdata);
  }
    useEffect(()=>{
     
      getUserData();
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
                <h4 className={classes.cardTitleWhite}>Edit Set details</h4>
                <p className={classes.cardCategoryWhite}>update the Set details</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={classopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option2) => option2.title}
                      value={eligiblity}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["eligiblity"]: newValue },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="subject"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select class"
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

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={freeopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option3) => option3.title}
                      value={free}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["free"]: newValue },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="subject"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select payment"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.free && (
                      <span className={classes.textDanger}>
                        {validateError.free}
                      </span>
                    )}
                  </GridItem> */}

                  <GridItem xs={12} sm={12} md={4}>
                      <label style={{ color: "#919090", fontWeight: "500" }}>Free/paid are not editable.It is visible for reference only</label>
                      <input
                        style={{ width: "100%", paddingLeft: "8px" }}
                        readOnly={true}
                        // labelText="Options cannot be editable,it is only for reference"
                        onChange={onChange}
                        value={free.title}
                        id="free"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.mail && (
                        <span className={classes.textDanger}>
                          {validateError.mail}
                        </span>
                      )}
                    </GridItem>

                  


                  <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={subjectsopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option) => option.title}
                      value={subject}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["subject"]: newValue },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="subject"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Subject"
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

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Target exam"
                      onChange={onChange}
                      value={targetexam}
                      id="targetexam"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.content && (
                      <span className={classes.textDanger}>
                        {validateError.content}
                      </span>
                    )}
                  </GridItem> */}

                  <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={examssopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option) => option.title}
                      value={exam}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["exam"]: newValue },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="exam"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Exams"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.content && (
                      <span className={classes.textDanger}>
                        {validateError.content}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Setname"
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
                      labelText="Mark"
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
                      labelText="Negative Mark"
                      onChange={onChange}
                      value={negativemark}
                      id="negativemark"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <p style={{ color:"red" }}>(Eg: enter 1 or any positive integer only).if 2 means for wrong answer 2marks will be reduced. </p>
                    {validateError.mark && (
                      <span className={classes.textDanger}>
                        {validateError.mark}
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
                     <p style={{ color:"red" }}>(Eg: if we enter 1.5 - 1(hours) .5(30mins)) </p>
                    {validateError.time && (
                      <span className={classes.textDanger}>
                        {validateError.time}
                      </span>
                    )}
                  </GridItem>


                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="No of attempt"
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
}
