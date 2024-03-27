import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useTheme } from '@mui/material/styles';
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
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";

import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import './../../app.css';
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
// import required css from library
import "react-datepicker/dist/react-datepicker.css";

import { getbatchdata,updatebatch ,getsubjectlist,getexamlist,getclasslist,getliveteacherlist } from "actions/users";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
  batchName: "",
  start_date: new Date(),
  teachers:[],
  
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();
  const theme = useTheme();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [teacheropt, setteacheropt] = useState([]);
  
  const { id } = useParams();
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"]
    ]
  };

  const  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];

  const handleProcedureContentChange = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["description"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

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
    batchName,
    start_date,
    teachers,

  } = formValue;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value,"vvvvvvvvvvvvvvvvvvv")

    let formData = { ...formValue, ...{ ["teachers"]:  typeof value === 'string' ? value.split(',') : value, } };
    setFormValue(formData);
    // setPersonName(
    //   // On autofill we get a stringified value.
     
    // );
  };

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      batchName,
      start_date,
      teachers,
    };
    console.log(reqData,"sss");
    let { error } = await updatebatch(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Updated Successfully", toasterOption);
      window.location=document.referrer;
      // location.reload();
    } else {
      setValidateError(error);
    }
  };
const userData = async() =>{

  const test3 = await getliveteacherlist();

  const options3 =  test3.userValue.map(d => ({
    "title" : d.name,
    "value" : d._id
  }));

  setteacheropt(options3)

  var test = await getbatchdata(id);
  console.log(test,"ffff");
  let formdata = {};
  formdata["batchName"] = test.userValue.batchName;
  formdata["start_date"] = new Date(test.userValue.start_date);
  formdata["teachers"] = test.userValue.teachers;

  setFormValue(formdata);
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
  useEffect(()=>{
    userData();
  },[])


  const getUserData = async () => {

    // formdata["Photofile"] = test.userValue.image;
   
    //setUser(test.userValue);
  };



  return (
    <div>
        <DashboardLayout>
        <Button color="primary" variant="contained" onClick={()=>history(-1)}  >
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
                <h3 className={classes.cardTitleWhite}>Add</h3>
                </MDTypography>
              </CardHeader>
              <CardBody>
                  <GridContainer>
                    
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Batch Name"
                      onChange={onChange}
                      value={batchName}
                      id="batchName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.batchName && (
                      <span className={classes.textDanger}>
                        {validateError.batchName}
                      </span>
                    )}
                    </GridItem>
                    
                
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel style={{ marginTop:"18px" }}>Start date
        </InputLabel>  
                  <DatePicker 
      selected={start_date} 
      onChange={date => {
        let formData = {
          ...formValue,
          ...{ ["start_date"]: date },
        };
        setFormValue(formData);
        }} 
    />
   
                  </GridItem>




                  <GridItem xs={12} sm={12} md={4}>
                      <InputLabel style={{ marginTop: "18px" }} id="teachersLabel">Teachers</InputLabel>
                      <Select
                        labelId="teachersLabel"
                        id="teachers"
                        multiple
                        value={teachers}
                        onChange={handleChange}
                        input={<OutlinedInput id="teachers-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={(teacheropt.find((e)=>e.value==value)).title} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                      {teacheropt.map((name) => (
                        <MenuItem
                          key={name.value}
                          value={name.value}
                          style={getStyles(name.value, teachers, theme)}
                        >
                          {name.title}
                        </MenuItem>
                      ))}
                    </Select>
                    {validateError.teachers && (
                      <span className={classes.textDanger}>
                        {validateError.teachers}
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
      {/* <Footer/> */}
      </DashboardLayout>
    </div>
  );
}
