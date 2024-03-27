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
import ReactQuill from "react-quill";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getmission, updatemission } from "../../actions/users";

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
 
  history1: "",
  mission: "",
  vision: "",
  facilities: "",
  objective: "",
  heading: "",
  heading1: "",
  heading2: "",
  heading3: "",


  
};


const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  // const dispatch = useDispatch();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});


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
    let formData = { ...formValue, ...{ ["history1"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange2 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["mission"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange3 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["vision"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange4 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["facilities"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange5 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["objective"]: contentsatta } };
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
    history1,
    mission,
    vision,
    facilities,
    objective,
    heading,
    heading1,
    heading2,
    heading3,

    
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      history1,
      mission,
      vision,
      facilities,
      objective,
      heading,
      heading1,
      heading2,
      heading3,
      
    };
    console.log(reqData);
    let { error } = await updatemission(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success(" Updated", toasterOption);
      history("/missionlist");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getmission(id);
    console.log(test)
    let data = {};
    data["history1"] = test.userValue.history1;
    data["mission"] = test.userValue.mission;
    data["vision"] = test.userValue.vision;
    data["facilities"] = test.userValue.facilities;
    data["objective"] = test.userValue.objective;
    data["heading"] = test.userValue.heading;
    data["heading1"] = test.userValue.heading1;
    data["heading2"] = test.userValue.heading2;
    data["heading3"] = test.userValue.heading3;
 
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(data);
    //setUser(test.userValue);
  };

  useEffect(() => {
    //logout(history)
    setTimeout(getUserData, 100);
    setTimeout(getUserData, 100);
    setTimeout(getUserData, 100);
    setTimeout(getUserData, 100);
  
    getUserData();
  }, []);

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
                <p className={classes.cardCategoryWhite}>Update</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4} style={{ marginTop:"20px"}}>
              <InputLabel>Every student is unique
        </InputLabel>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={objective}
        onChange={handleProcedureContentChange5}
      >
        
      </ReactQuill>    
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4} style={{ marginTop:"20px"}}>
                  <InputLabel>Marvel classes advantages
        </InputLabel>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={history1}
        onChange={handleProcedureContentChange}
      >
        
      </ReactQuill>    
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4} style={{ marginTop:"20px"}}>
                  <InputLabel>Learn better with individual learning paths
        </InputLabel>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={mission}
        onChange={handleProcedureContentChange2}
      >
        
      </ReactQuill>    
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4} style={{ marginTop:"20px"}}>
                  <InputLabel>They learn with videos, concepts, tests & stories
        </InputLabel>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={vision}
        onChange={handleProcedureContentChange3}
      >
        
      </ReactQuill>    
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4} style={{ marginTop:"20px"}}>
                  <InputLabel>Students experience all round academic growth
        </InputLabel>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={facilities}
        onChange={handleProcedureContentChange4}
      >
        
      </ReactQuill>    
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Content"
                      onChange={onChange}
                      value={heading}
                      id="heading"
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
                      labelText="Content"
                      onChange={onChange}
                      value={heading1}
                      id="heading1"
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
                      labelText="Content"
                      onChange={onChange}
                      value={heading2}
                      id="heading2"
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
                      labelText="Content"
                      onChange={onChange}
                      value={heading3}
                      id="heading3"
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
