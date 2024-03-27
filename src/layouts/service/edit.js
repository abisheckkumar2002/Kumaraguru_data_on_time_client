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

import { getservice, updateservice } from "../../actions/users";

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
  description: "",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  image: "",
  taste: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  image6: "",
  
};


const useStyles = makeStyles(styles);

function checktype() {
  var fileInput =
      document.getElementById('image','image2','image3','image4','image5','image6');
   
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions =
          /(\.jpg|\.jpeg|\.png)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('Please import only jpg,jpeg,png files');
      window.location.reload();
      // fileInput.value = '';
      // return false;
  }
}

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
    let formData = { ...formValue, ...{ ["description"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange2 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["taste"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange3 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["description2"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange4 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["description3"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange5 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["description4"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange6 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["description5"]: contentsatta } };
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
    var fileInput =
    document.getElementById(id);
 
var filePath = fileInput.value;

// Allowing file type
var allowedExtensions =
        /(\.jpg|\.jpeg|\.png)$/i;
 
if (!allowedExtensions.exec(filePath)) {
    alert('Please import only jpg,jpeg,png files');
    window.location.reload();
    // fileInput.value = '';
    // return false;
}
else{
  setFormValue(formData);
}
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
    description,
    description2,
    description3,
    description4,
    description5,
    image,
    image3,
    image4,
    image5,
    image6,
    taste,
    image2,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      description,
      description2,
      description3,
      description4,
      description5,
      image,
      taste,
      image2,
      image3,
      image4,
      image5,
      image6,
    };
    console.log(reqData);
    let { error } = await updateservice(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success(" Updated", toasterOption);
      history("/serviceindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getservice(id);
    console.log(test,"ssss")
    let formdata = {};
    formdata["description"] = test.userValue.description;
    formdata["description2"] = test.userValue.description2;
    formdata["description3"] = test.userValue.description3;
    formdata["description4"] = test.userValue.description4;
    formdata["description5"] = test.userValue.description5;
    formdata["Photofile"] = test.userValue.image;
    formdata["Photofile2"] = test.userValue.image2;
    formdata["Photofile3"] = test.userValue.image3;
    formdata["Photofile4"] = test.userValue.image4;
    formdata["Photofile5"] = test.userValue.image5;
    formdata["Photofile6"] = test.userValue.image6;
    formdata["taste"] = test.userValue.taste;
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(formdata);
    //setUser(test.userValue);
  };

  useEffect(() => {
    //logout(history)
    setTimeout(getUserData, 100);
    setTimeout(getUserData, 100);
    
    getUserData();
  }, []);

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
                <h4 className={classes.cardTitleWhite}>Edit</h4>
                <p className={classes.cardCategoryWhite}>update</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                
                    <CustomInput
                      labelText="Image-1"
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
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>Digital program-icon-1-60*58(Recommended image size)
                      </InputLabel>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                
                    <CustomInput
                      labelText="Image-2"
                      onChange={handleFile}
                      id="image2"
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
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>Digital program-icon-2-60*58(Recommended image size)
                      </InputLabel>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                 
                    <CustomInput
                      labelText="Image-3"
                      onChange={handleFile}
                      id="image3"
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
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>Digital program-icon-3-60*58(Recommended image size)
                      </InputLabel>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                
                    <CustomInput
                      labelText="Image-4"
                      onChange={handleFile}
                      id="image4"
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
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>Digital program-icon-4-60*58(Recommended image size)
                      </InputLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
              
                    <CustomInput
                      labelText="Image-5"
                      onChange={handleFile}
                      id="image5"
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
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>Short-term-course 60*58(Recommended image size)
                      </InputLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                
                    <CustomInput
                      labelText="Image-6"
                      onChange={handleFile}
                      id="image6"
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
                       <InputLabel style={{ color: "red", fontSize: "13px" }}>Short-term-course 60*58(Recommended image size)
                      </InputLabel>
                  </GridItem>
                
                  {/* <GridItem xs={12} sm={12} md={4}>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description}
        onChange={handleProcedureContentChange}
      >
        
      </ReactQuill> 
                  </GridItem>
                
                  <GridItem xs={12} sm={12} md={4}>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description2}
        onChange={handleProcedureContentChange3}
      >
        
      </ReactQuill> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description3}
        onChange={handleProcedureContentChange4}
      >
        
      </ReactQuill> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description4}
        onChange={handleProcedureContentChange5}
      >
        
      </ReactQuill> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description5}
        onChange={handleProcedureContentChange6}
      >
        
      </ReactQuill> 
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={taste}
        onChange={handleProcedureContentChange2}
      >
        
      </ReactQuill> 
                  </GridItem> */}
               
                </GridContainer> 
              </CardBody>
              <CardFooter>
                <Button color="primary" type="submit">
                  Updatess
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
