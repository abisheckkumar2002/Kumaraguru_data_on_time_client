import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";



import { addmarveltestquestion,gettesttopiclist } from "actions/users";

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
 
  Photofile: "",
  set:"",
  topic:""

 
  
 
  
};

const useStyles = makeStyles(styles);

function checktype() {
  var fileInput =
      document.getElementById('Photofile');
   
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions =
          /(\.xlsx)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('Please import only excel file(.xlsx)');
      window.location.reload();
      // fileInput.value = '';
      // return false;
  }
}

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();
  console.log(history,"historyhistoryhistoryhistory");
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  const [courseopt, setcourseopt] = useState([]);
  const { id } = useParams();
  const [topicopt, settopicopt] = useState([]);

  


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
   
    Photofile,
    set,
    topic

   
   
   
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {

     
    Photofile,
    set,
    id,
    topic
     
      
     
     
    };
    let { error } = await addmarveltestquestion(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Added Successfully", toasterOption);
      history("/marveltestindex");
    } else {
      setValidateError(error);
    }
  };

  const userData = async() =>{
    const test = await gettesttopiclist(id);
    console.log(test,"sssss")
    
    const options =  test.userValue.map(d => ({
      "title" : d.content,
      "value" : d._id
    }));
    
    settopicopt(options)
  }
    useEffect(()=>{
      userData();
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
              <MDTypography>
                <h3 className={classes.cardTitleWhite}>Add</h3>
                </MDTypography>
              </CardHeader>
              <CardBody>
                <GridContainer>

                <GridItem xs={12} sm={12} md={4}>
                <InputLabel>Question Template</InputLabel>
                    <CustomInput
                      // labelText="Question template"
                      onChange={handleFile}
                      id="Photofile"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.Photofile && (
                      <span className={classes.textDanger}>
                        {validateError.Photofile}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                      <InputLabel>Set</InputLabel>
                    
                    <CustomInput
                      // labelText="Set"
                      onChange={onChange}
                      value={set}
                      id="set"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.set && (
                      <span className={classes.textDanger}>
                        {validateError.set}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={topicopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option2) => option2.title}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
                        let formData = {
                          ...formValue,
                          ...{ ["topic"]: newValue.value },
                        };
                        setFormValue(formData);
                      }}
                      type="text"
                      name="topic"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Class"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.topic && (
                      <span className={classes.textDanger}>
                        {validateError.topic}
                      </span>
                    )}
                  </GridItem>

              
                
               
                </GridContainer> 
              </CardBody>
              <CardFooter>
                <Button color="primary" type="submit" onClick={checktype}>
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
