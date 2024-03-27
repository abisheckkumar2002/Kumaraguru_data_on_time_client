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
import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { updatezoommeeting,getzoommeet,getbactchteacher } from "actions/users";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
  course_id: "",
  topic: "",
  teacherId:"",
  agenda: "",
  type:"",
  date: new Date(),
  start_time: new Date(),
  end_time: new Date(),
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();

  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  const [b_id, setb_id] = useState({});  
  const [c_id, setc_id] = useState({});
  const { id } = useParams();
  const [teacheropt, setteacheropt] = useState([]);
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

  const { topic, agenda, password, date,type,teacherId, start_time, end_time } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      course_id: c_id,
      batchId:b_id,
      type,
      teacherId,
      topic,
      agenda,
      date,
      start_time,
      end_time,
    };
    let { error } = await updatezoommeeting(reqData,id);

    if (isEmpty(error)) {
      toast.success("Schedule Updated", toasterOption);
      window.location=document.referrer;
      // history("/coureschedule/"+c_id);
    } else {
      setValidateError(error);
    }
  };

  const userData = async() =>{
    var test = await getzoommeet(id);
    console.log(test,"ffff");
    let formdata = {};
    formdata["topic"] = test.userValue.topic;
    
    formdata["agenda"] = test.userValue.agenda;
   
    formdata["exam"] = test.userValue.exam;
    formdata["date"] = test.userValue.date;
   
    formdata["start_time"] = test.userValue.start_time;
    
   
    formdata["end_time"] = test.userValue.end_time;
    formdata["teacherId"] = test.userValue.teacherId;
    setFormValue(formdata);
    setc_id(test.userValue.course_id);
    setb_id(test.userValue.batchId);

    const test3 = await getbactchteacher(test.userValue.batchId);

    const options3 =  test3.userValue.map(d => ({
      "title" : d.name,
      "value" : d._id
    }));

    setteacheropt(options3)
  }

    useEffect(()=>{
     
      userData();

    },[])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <DashboardLayout>
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
                      <h3 className={classes.cardTitleWhite}>Add Schedule</h3>
                    </MDTypography>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Topic"
                          onChange={onChange}
                          value={topic}
                          id="topic"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                        {validateError.topic && (
                          <span className={classes.textDanger}>
                            {validateError.topic}
                          </span>
                        )}
                      </GridItem>

                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Description"
                          onChange={onChange}
                          value={agenda}
                          id="agenda"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                        {validateError.agenda && (
                          <span className={classes.textDanger}>
                            {validateError.agenda}
                          </span>
                        )}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        
                        <InputLabel >Teacher</InputLabel>
  
    <select
      id="demo-simple-select"
      value={teacherId}
      label="Age"
      onChange={(event)=>setFormValue({
        ...formValue,
        ...{ ["teacherId"]: event.target.value },
      })}
    >
      <option value={""} >Select Teacher</option>
      {teacheropt.map(e=><option value={e.value} selected={true}>{e.title}</option>)}
  
    </select>
  
                          {validateError.agenda && (
                            <span className={classes.textDanger}>
                              {validateError.agenda}
                            </span>
                          )}
                        </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <DesktopDatePicker
                          label="Date"
                          inputFormat="MM/dd/yyyy"
                          value={date}
                          onChange={(value)=>setFormValue({ ...formValue, ...{ ["start_time"]: value,["date"]:value,["end_time"]:value } })}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {validateError.date && (
                          <span className={classes.textDanger}>
                            {validateError.date}
                          </span>
                        )}
                      </GridItem>

                      <GridItem xs={12} sm={12} md={4}>
                        <TimePicker
                          label="Start Time"
                          value={start_time}
                          onChange={(value) =>
                            setFormValue({
                              ...formValue,
                              ...{ ["start_time"]: value },
                            })
                          }
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {validateError.start_time && (
                          <span className={classes.textDanger}>
                            {validateError.start_time}
                          </span>
                        )}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                      <TimePicker
                          label="End Time"
                          value={end_time}
                          onChange={(value) =>
                            setFormValue({
                              ...formValue,
                              ...{ ["end_time"]: value },
                            })
                          }
                          renderInput={(params) => <TextField {...params} />}
                        />
   
                        {validateError.end_time && (
                          <span className={classes.textDanger}>
                            {validateError.end_time}
                          </span>
                        )}
                      </GridItem>

                      {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Family details"
                      onChange={onChange}
                      value={familydetails}
                      id="familydetails"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    
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
          {/* <Footer/> */}
        </DashboardLayout>
      </div>
    </LocalizationProvider>
  );
}
