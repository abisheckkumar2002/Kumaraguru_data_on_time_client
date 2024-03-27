import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";

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
import config from "lib/config";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getservicedetail, updateservicedetail } from "../../actions/users";

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
  content: "",
  description: "",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  description6: "",
  description7: "",
  description8: "",
  
};


const useStyles = makeStyles(styles);
function checktype() {
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
    let formData = { ...formValue, ...{ ["content"]: contentsatta } };
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
    content,
    description,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      image,
      content,
      description,
      description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
    };
    console.log(reqData);
    let { error } = await updateservicedetail(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Updated Successfully", toasterOption);
      history("/servicedetailindex");
    } else {
      setValidateError(error);
    }
  };


  const getUserData = async () => {
    var test = await getservicedetail(id);
    console.log(test,"dsfsdf");
    let formdata = {};
    formdata["content"] = test.userValue.content;
    formdata["description"] = test.userValue.description;
    formdata["description2"] = test.userValue.description2;
    formdata["description3"] = test.userValue.description3;
    formdata["description4"] = test.userValue.description4;
    formdata["description5"] = test.userValue.description5;
    formdata["description6"] = test.userValue.description6;
    formdata["description7"] = test.userValue.description7;
    formdata["description8"] = test.userValue.description8;
    formdata["image"] = test.userValue.image;
    console.log(formdata,"dsfsdf");
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(formdata);
    // getUserData();
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
               
                    <CustomInput
                      labelText="Image"
                      onChange={handleFile}
                      id="image"
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
                       {image && <img src={config.API + "/images/user/" + image} alt="..." style={{ maxWidth: 50, maxHeight: 50 }} />}
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>450*300(Recommended image size)
                      </InputLabel>
                  </GridItem>
                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description"
                      onChange={onChange}
                      value={description}
                      id="description"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description2"
                      onChange={onChange}
                      value={description2}
                      id="description2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description3"
                      onChange={onChange}
                      value={description3}
                      id="description3"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description4"
                      onChange={onChange}
                      value={description4}
                      id="description4"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description5"
                      onChange={onChange}
                      value={description5}
                      id="description5"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description6"
                      onChange={onChange}
                      value={description6}
                      id="description6"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description7"
                      onChange={onChange}
                      value={description7}
                      id="description7"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="description8"
                      onChange={onChange}
                      value={description8}
                      id="description8"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.description && (
                      <span className={classes.textDanger}>
                        {validateError.description}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                  <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content || ""}
        onChange={handleProcedureContentChange}
      >
        
      </ReactQuill>    
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
