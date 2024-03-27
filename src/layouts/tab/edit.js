import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
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
import DatePicker from "react-datepicker";
import ReactQuill from "react-quill";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";


//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { gettabdata, updatetab,getexamlist,getsubjectlist,getclasslist } from "../../actions/users";

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
  image: "",
  title: "",
  description: "",
  
  exam: {
    "title" :"",
    "value" : ""
  },
  language: "",
  totalclasses: "",
  totaltest: "",
  totalpdf: "",
  totalquestions: "",
  price: "",
  eligiblity:{
    "title" :"",
    "value" : ""
  },
  subject: {
    "title" :"",
    "value" : ""
  },
  targetexam: "",
  
};


const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  // const dispatch = useDispatch();
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
    image,
   
    exam,
    title,
    description,
    language,
    totalclasses,
    totaltest,
    totalpdf,
    totalquestions,
    price,
    eligiblity,
    subject,
    targetexam,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      image,
    startDate,
    endDate,
    exam:exam.value,
    title,
    description,
    language,
    totalclasses,
    totaltest,
    totalpdf,
    totalquestions,
    price,
    eligiblity:eligiblity.value,
    subject:subject.value,
    targetexam,
    };
    console.log(reqData,"sss");
    let { error } = await updatetab(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Successfully updated", toasterOption);
      history("/tabindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {

    // formdata["Photofile"] = test.userValue.image;
   
    //setUser(test.userValue);
  };

  const userData = async() =>{
    var test = await gettabdata(id);
    console.log(test,"ffff");
    let formdata = {};
    formdata["title"] = test.userValue.title;
    formdata["description"] = test.userValue.description;
    formdata["photofile"] = test.userValue.image;
    formdata["startDate"] = test.userValue.startDate;
    formdata["endDate"] = test.userValue.endDate;
    formdata["exam"] = test.userValue.exam;
    formdata["language"] = test.userValue.language;
    formdata["totalclasses"] = test.userValue.totalclasses;
    formdata["totaltest"] = test.userValue.totaltest;
    formdata["totalpdf"] = test.userValue.totalpdf;
    formdata["totalquestions"] = test.userValue.totalquestions;
    formdata["price"] = test.userValue.price;
    formdata["eligiblity"] = test.userValue.eligiblity;
    formdata["subject"] = test.userValue.subject;
    formdata["targetexam"] = test.userValue.targetexam;
    // formdata["Photofile"] = test.userValue.image;
    const testsub = await getsubjectlist();
    const test1 = await getexamlist();
    const test2 = await getclasslist();
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
    setsubjectsopt(options)
    setexamsopt(options1)
    setclassopt(options2)
    setFormValue(formdata);
  }
    useEffect(()=>{
      setTimeout(userData, 100);
      setTimeout(userData, 100);
      setTimeout(userData, 100);
      setTimeout(userData, 100);
      setTimeout(userData, 100);
      userData();
      getUserData();
    },[])

  return (
    <div>
              <DashboardLayout>
              <Button color="primary" onClick={()=>history(-1)}  >
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
                <h4 className={classes.cardTitleWhite}>Edit</h4>
                <p className={classes.cardCategoryWhite}>update</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{color:"red", fontSize:"13px"}}>Recommended image 264*154</InputLabel>
                    <CustomInput
                      labelText="Course image"
                      onChange={handleFile}
                      id="image"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.image && (
                      <span className={classes.textDanger}>
                        {validateError.image}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Title"
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
                  <InputLabel>startDate
        </InputLabel> 
                  <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)} 
    />
               
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel>EndDate
        </InputLabel> 
                  <DatePicker 
      selected={endDate} 
      onChange={date => setEndDate(date)} 
    />
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
                    {validateError.content && (
                      <span className={classes.textDanger}>
                        {validateError.content}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
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
                      labelText="Total pdf"
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
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
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
                  </GridItem>

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
