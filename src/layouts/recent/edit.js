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

import { getrecent, updaterecent } from "../../actions/users";

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
  image: "",
  image2: "",
  image3: "",
  heading: "",
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
    let formData = { ...formValue, ...{ ["description"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange2 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["description2"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };
  const handleProcedureContentChange3 = (contentsatta, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["description3"]: contentsatta } };
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
    description,
    description2,
    description3,
    image,
    image2,
    image3,
    heading,
    heading2,
    heading3,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      description,
      description2,
      description3,
      image,
      image2,
      image3,
      heading,
      heading2,
      heading3,
    };
    console.log(reqData);
    let { error } = await updaterecent(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Updated", toasterOption);
      history("/recentindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getrecent(id);
    console.log(test)
    let formdata = {};
    formdata["description"] = test.userValue.description;
    formdata["description2"] = test.userValue.description2;
    formdata["description3"] = test.userValue.description3;
    formdata["photofile"] = test.userValue.image;
    formdata["photofile2"] = test.userValue.image2;
    formdata["photofile3"] = test.userValue.image3;
    formdata["heading"] = test.userValue.heading;
    formdata["heading2"] = test.userValue.heading2;
    formdata["heading3"] = test.userValue.heading3;
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(formdata);
    //setUser(test.userValue);
  };

  useEffect(() => {
    //logout(history)
    setTimeout(getUserData, 100);
    
    getUserData();
  }, []);

  return (
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
                <h4 className={classes.cardTitleWhite}>Edit</h4>
                <p className={classes.cardCategoryWhite}>update</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{color:"red", fontSize:"13px"}}>170*90(Recommended image size)
        </InputLabel>
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

                  <GridItem xs={12} sm={12} md={4}>
                  <InputLabel style={{color:"red", fontSize:"13px"}}>170*90(Recommended image size)
        </InputLabel>
                    <CustomInput
                      labelText="Profile image"
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
                  </GridItem>

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Profile image"
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
                  </GridItem> */}
                  <GridItem xs={12} sm={12} md={12} style={{ marginTop:"20px"}}>
                  <InputLabel>India's best learning app
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

      <GridItem xs={12} sm={12} md={12}>
      <InputLabel>NEET Live Classes
        </InputLabel>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description2 || ""}
        onChange={handleProcedureContentChange2}
      >
        
      </ReactQuill>    
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
      <InputLabel>JEE Live Classes
        </InputLabel>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={description3 || ""}
        onChange={handleProcedureContentChange3}
      >
        
      </ReactQuill>    
      </GridItem>

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Heading"
                      onChange={onChange}
                      value={heading}
                      id="heading"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.heading && (
                      <span className={classes.textDanger}>
                        {validateError.heading}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Heading"
                      onChange={onChange}
                      value={heading2}
                      id="heading2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.heading && (
                      <span className={classes.textDanger}>
                        {validateError.heading}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Heading"
                      onChange={onChange}
                      value={heading3}
                      id="heading3"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.heading && (
                      <span className={classes.textDanger}>
                        {validateError.heading}
                      </span>
                    )}
                  </GridItem> */}
               
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
