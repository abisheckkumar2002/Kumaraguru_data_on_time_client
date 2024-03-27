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
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from "react-quill";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getaboutusdata, updateaboutus } from "../../actions/users";

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
  content1: "",
  content2: "",
  content3: "",
  content4: "",
  content5: "",
  content6: "",
  heading: "",
  image:"",
  content:""
 
  
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
    let formData = { ...formValue, ...{ ["content1"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange2 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["content2"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange3 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["content3"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange4 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["content4"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange5 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["content5"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange6 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["content6"]: contentsatta } };
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
    document.getElementById('image');
 
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
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content,
    image,
    heading
   
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content,
    heading,
    image
    };
    console.log(reqData);
    let { error } = await updateaboutus(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success(" Updated", toasterOption);
      history("/aboutusindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getaboutusdata(id);
    console.log(test,"lll")
    let data = {};
      function removeTags(str) {
  if ((str===null) || (str===''))
      return false;
  else
      str = str.toString();
        
  // Regular expression to identify HTML tags in 
  // the input string. Replacing the identified 
  // HTML tag with a null string.
  return str.replace(/(^([ ]*<p><br><\/p>)*)|((<p><br><\/p>)*[ ]*$)/gi, "").trim(" ");
}
    data["content1"] = removeTags(test.userValue.content1);
   
   
    data["content2"] = removeTags(test.userValue.content2);
    data["content3"] = removeTags(test.userValue.content3);
    data["content4"] = removeTags(test.userValue.content4);
    data["content5"] = removeTags(test.userValue.content5);
    data["content6"] = removeTags(test.userValue.content6);
   data["heading"] = test.userValue.heading;
    data["Photofile"] = test.userValue.image;
   
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(data);
    //setUser(test.userValue);
  };

  useEffect(() => {
    
    
    //logout(history)
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
                <h4 className={classes.cardTitleWhite}>Edit Aboutus</h4>
                <p className={classes.cardCategoryWhite}>update the Abouts</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content1}
        onChange={handleProcedureContentChange}
      >
        
      </ReactQuill> 
                  </GridItem>
               
                  <GridItem xs={12} sm={12} md={4}>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content2}
        onChange={handleProcedureContentChange2}
      >
        
      </ReactQuill> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content3}
        onChange={handleProcedureContentChange3}
      >
        
      </ReactQuill> 
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content4}
        onChange={handleProcedureContentChange4}
      >
        
      </ReactQuill> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content5}
        onChange={handleProcedureContentChange5}
      >
        
      </ReactQuill> 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
              <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content6}
        onChange={handleProcedureContentChange6}
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
                    {validateError.address && (
                      <span className={classes.textDanger}>
                        {validateError.address}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Profile image"
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
