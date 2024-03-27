import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

// import required css from library
import "react-datepicker/dist/react-datepicker.css";

import { addmicro,getsubjectlist,getexamlist,getclasslist } from "actions/users";

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
  introduction: "",
  Photofile: "",
  Photofile2: "",
  Photofile3: "",
  Photofile4: "",
  Photofile5: "",
 
  exam: "",
  language: "English",
  totalclasses: "",
  totaltest: "",
  totalpdf: "",
  totalquestions: "",
  price: "",
  eligiblity: "",
  subject: "",
  targetexam: "",
  validity:""
  
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

  const handleProcedureContentChange1 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["introduction"]: contentsatta } };
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
    introduction,
    Photofile,
    Photofile2,
    Photofile3,
    Photofile4,
    Photofile5,
    
    exam,
    language,
    totalclasses,
    totaltest,
    totalpdf,
    totalquestions,
    price,
    eligiblity,
    subject,
    targetexam,
    validity,

  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      title,
      description,
      introduction,
      startDate,
      endDate,
      exam,
      language,
      totalclasses,
      totaltest,
      totalpdf,
      totalquestions,
      price,
      eligiblity,
      subject,
      targetexam,
      Photofile2,
      Photofile3,
      Photofile4,
      Photofile5,
     
      
      Photofile,
      validity,
    };
    console.log(reqData,"sss");
    let { error } = await addmicro(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Added Successfully", toasterOption);
      history("/microindex");
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
  setsubjectsopt(options)
  setexamsopt(options1)
  setclassopt(options2)
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
                  {/* <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>Recommended image 264*154</InputLabel>
                    <CustomInput
                      labelText="Course image"
                      onChange={handleFile}
                      id="Photofile2"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.photofile && (
                      <span className={classes.textDanger}>
                        {validateError.photofile}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>Recommended image 264*154</InputLabel>
                    <CustomInput
                      labelText="Course image"
                      onChange={handleFile}
                      id="Photofile3"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.photofile && (
                      <span className={classes.textDanger}>
                        {validateError.photofile}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>Recommended image 264*154</InputLabel>
                    <CustomInput
                      labelText="Course image"
                      onChange={handleFile}
                      id="Photofile4"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.photofile && (
                      <span className={classes.textDanger}>
                        {validateError.photofile}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>Recommended image 264*154</InputLabel>
                    <CustomInput
                      labelText="Course image"
                      onChange={handleFile}
                      id="Photofile5"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.photofile && (
                      <span className={classes.textDanger}>
                        {validateError.photofile}
                      </span>
                    )}
                  </GridItem> */}

                
                  {/* <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>Start date
        </InputLabel>  
                  <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)} 
    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>End date
        </InputLabel>  
                  <DatePicker 
      selected={endDate} 
      onChange={date => setEndDate(date)} 
    />
                  </GridItem>
                  </GridItem> */}
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

                  <GridItem xs={12} sm={12} md={4}>
                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>Expiry date
        </InputLabel>  
                  <DatePicker 
      selected={endDate} 
      onChange={date => setEndDate(date)} 
    />
                  </GridItem>
                  {validateError.endDate && (
                      <span className={classes.textDanger}>
                        {validateError.endDate}
                      </span>
                    )}
                  </GridItem>
                  

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Validity"
                      onChange={onChange}
                      value={validity}
                      id="validity"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.language && (
                      <span className={classes.textDanger}>
                        {validateError.language}
                      </span>
                    )}
                  </GridItem> */}

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Total classes"
                      onChange={onChange}
                      value={totalclasses}
                      id="totalclasses"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.content && (
                      <span className={classes.textDanger}>
                        {validateError.content}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Totaltest"
                      onChange={onChange}
                      value={totaltest}
                      id="totaltest"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.content && (
                      <span className={classes.textDanger}>
                        {validateError.content}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Totalpdf"
                      onChange={onChange}
                      value={totalpdf}
                      id="totalpdf"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.content && (
                      <span className={classes.textDanger}>
                        {validateError.content}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Total questions"
                      onChange={onChange}
                      value={totalquestions}
                      id="totalquestions"
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
                      labelText="Price *"
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
                    </GridItem>
                    

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

                  <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={classopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option) => option.title}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["eligiblity"]: newValue.value },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="subject"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select class *"
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
                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Targetexam"
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

      <GridItem xs={12} sm={12} md={12} style={{ marginTop:"20px"}}>
                  <InputLabel>Introduction
        </InputLabel>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={introduction || ""}
        onChange={handleProcedureContentChange1}
      >
        
      </ReactQuill>    
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
