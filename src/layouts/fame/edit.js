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

import { getfamedata, updatefame } from "../../actions/users";

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
 
 
  name: "",
 
  exam: "",
 

  
 
  
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
    //setValidateError(formData)
  };

  // function
  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
  
  };

  const {
    image,
   
    
    name,
   
    exam,
   
   
   
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      image,
     
     
     
      name,
      exam,
      
    };
    console.log(reqData);
    let { error } = await updatefame(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success(" Updated", toasterOption);
      history("/famelist");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getfamedata(id);
    console.log(test,"sss")
    let formdata = {};
   
    formdata["photofile"] = test.userValue.image;
   
    
    formdata["name"] = test.userValue.name;
  
    formdata["exam"] = test.userValue.exam;
    
   
   
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
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>178*162(Recommended image size)
                      </InputLabel>
                  </GridItem>

                

                 

                 

                 
                 

                 

{/* 
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Name *"
                      onChange={onChange}
                      value={name}
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.name && (
                      <span className={classes.textDanger}>
                        {validateError.name}
                      </span>
                    )}
                  </GridItem> */}

<GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Exam"
                        style={{ color:"black" }}
                      onChange={onChange}
                      value={name}
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.name && (
                      <span className={classes.textDanger}>
                        {validateError.name}
                      </span>
                    )}
                  </GridItem>

                 

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Exam"
                      onChange={onChange}
                      value={exam}
                      id="exam"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.name && (
                      <span className={classes.textDanger}>
                        {validateError.name}
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
