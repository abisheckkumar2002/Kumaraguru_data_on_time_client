import React, { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@mui/material/styles';
import InputLabel from "@material-ui/core/InputLabel";
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
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";
import './../../app.css';
import ReactQuill from "react-quill";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";

import { addfreestuff,getsubjectlist,getexamlist,getclasslist,gettestsetlist } from "actions/users";

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
  title: "",
  description: "",
  Photofile: "",
 
  exam: "",
  language: "English",
 
  price: "",
  
  subject: "",
  classs: "",
  testsets:[],
 
  
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();
  console.log(history,"historyhistoryhistoryhistory");
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [subjectsopt, setsubjectsopt] = useState([]);
  const [examssopt, setexamsopt] = useState([]);
  const [classopt, setclassopt] = useState([]);
  const [testsetopt, settestsetopt] = useState([]);
  const theme = useTheme();

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
    title,
    description,
  Photofile,
 
  exam,
  language,
 
  price,
  
  subject,
  classs,
  testsets,

  } = formValue;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value,"vvvvvvvvvvvvvvvvvvv")

    let formData = { ...formValue, ...{ ["testsets"]:  typeof value === 'string' ? value.split(',') : value, } };
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
      title,
      description,
      Photofile,
     
      exam,
      language,
     
      price,
      
      subject,
      classs,
      testsets,
    };
    console.log(reqData,"sss");
    let { error } = await addfreestuff(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Added Successfully", toasterOption);
      history("/freestuffindex");
    } else {
      setValidateError(error);
    }
  };
const userData = async() =>{
  const test = await getsubjectlist();
  const test1 = await getexamlist();
  const test2 = await getclasslist();
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
  const test3 = await gettestsetlist();

  if(test3){
    console.log(test3,"sasa")

  const options3 =  test3.userValue.map(d => ({
    "title" : d.setname,
    "value" : d._id
  }));

  settestsetopt(options3)
}
  setsubjectsopt(options)
  setexamsopt(options1)
  setclassopt(options2)
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
                <h3 className={classes.cardTitleWhite}>Add</h3>
                </MDTypography>
              </CardHeader>
              <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                
                    <CustomInput
                      labelText="Course image"
                      onChange={handleFile}
                      id="Photofile"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.photo && (
                      <span className={classes.textDanger}>
                        {validateError.photo}
                      </span>
                      )}
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>Recommended image 264*154</InputLabel>
                  </GridItem>

                
                  
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Language"
                      onChange={onChange}
                      value={language}
                      id="language"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.language && (
                      <span className={classes.textDanger}>
                        {validateError.language}
                      </span>
                    )}
                  </GridItem>

                 
                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Price"
                      onChange={onChange}
                      value={price}
                      id="price"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.price && (
                      <span className={classes.textDanger}>
                        {validateError.price}
                      </span>
                    )}
                  </GridItem> */}

                 

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Subject"
                      onChange={onChange}
                      value={subject}
                      id="subject"
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
                    <CustomInput
                      labelText="Title *"
                      onChange={onChange}
                      value={title}
                      id="title"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.title && (
                      <span className={classes.textDanger}>
                        {validateError.title}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12} style={{ marginTop:"20px"}}>
                  <InputLabel>Description
        </InputLabel>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description || ""}
        onChange={handleProcedureContentChange}
      >
        
      </ReactQuill>    
      </GridItem>


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
                      options={classopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option3) => option3.title}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["classs"]: newValue.value },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="classs"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Class *"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.classs && (
                      <span className={classes.textDanger}>
                        {validateError.classs}
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
                  <InputLabel id="testsetsLabel">Test sets *</InputLabel>
                      <Select
                        labelId="testsetsLabel"
                        id="testsets"
                        multiple
                        value={testsets}
                        onChange={handleChange}
                        input={<OutlinedInput id="testsets-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={(testsetopt.find((e)=>e.value==value)).title} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                      {testsetopt.map((name) => (
                        <MenuItem
                          key={name.value}
                          value={name.value}
                          style={getStyles(name.value, testsets, theme)}
                        >
                          {name.title}
                        </MenuItem>
                      ))}
                    </Select>
                    {validateError.testsets && (
                      <span className={classes.textDanger}>
                        {validateError.testsets}
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
