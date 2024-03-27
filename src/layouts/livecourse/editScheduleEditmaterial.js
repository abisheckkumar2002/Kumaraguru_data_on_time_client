import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";
import config from "lib/config";
// import required css from library
import "react-datepicker/dist/react-datepicker.css";

import { addmaterialvideo,getmaterialviewdata,deletefilematerial,addfile } from "actions/users";

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
  const [topicopt, settopicopt] = useState([]);
  const [freeopt, setfreeopt] = useState([]);
  const [examssopt, setexamsopt] = useState([]);
  const [classopt, setclassopt] = useState([]);
  const [inputList, setInputList] = useState([{title: "", file: ""}]);
  const { id } = useParams();
  const handleFile = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    const { id, files } = event.target;
    //settmpupimagefront(URL.createObjectURL(event.target.files[0]));

    let formData = { ...formValue, ...{ [id]: files[0] } };
    setFormValue(formData);
    //setValidateError(formData)
  };
  function checktype() {
   
     
    if (!inputList[0].file) {
        alert('Please import a video file(.mp4)');
        window.location.reload();
        // fileInput.value = '';
        // return false;
    }
  }

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
  function questionindex(id) {
    if (id != "") {
      window.location ="https://marvelclasses.net:3000/images/user/"+id;
      // http://localhost:3001/images/user/IMAGE-1675830709443.pdf
    }
  }

  const {
   

  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      id,
      inputList,
    };
    console.log(reqData,"sss");
    let { error } = await addmaterialvideo(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Added Successfully", toasterOption);
     history(-1)
    } else {
      setValidateError(error);
    }
  };

    // handle input change
    const handleInputChange = (e, index) => {
      
      const { id, value } = e.target;
      const list = [...inputList];
      list[index][id] = value;
      setInputList(list);
    };

    const handlemultipleFile = async (event,index) => {
      event.preventDefault();
      console.log(event.target.files[0]);
      const { id, files } = event.target;
      const filename = await addfile( files[0]);
      if(filename.error){
        alert("please upload only pdf file");
        window.location.reload();
      }
      //settmpupimagefront(URL.createObjectURL(event.target.files[0]));
      console.log(filename);
      // let formData = { ...formValue, ...{ [id]: filename } };
      // setFormValue(formData);
      const list = [...inputList];
      list[index][id] = filename;
      setInputList(list);
      //setValidateError(formData)
    };
  
   
  
    // handle click event of the Remove button
    const handleRemoveClick = async (index) => {
      const list = [...inputList];
      if("_id" in list[index]){
      await deletefilematerial(list[index]._id);
      }
      list.splice(index, 1);
      setInputList(list);
    };
   
   
    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, { title: "",file:""}]);
    };
const userData = async() =>{
  
  
 
  const listdata=await getmaterialviewdata(id);

  console.log(listdata,"bbb")
  if(listdata.userValue.length){
  

    setInputList(listdata.userValue);
  }

  

}

// const userDatas = async() =>{
//  const listdata=await getrecordedvideodata(id);

//   console.log(listdata,"bbb")
//   if(listdata.userValue.length){
//     setInputList(listdata.userValue);
//   }

  

  useEffect(()=>{
    userData();
    // setTimeout(userDatas, 1000);
  },[])
console.log(inputList);
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
               
                {inputList.map((x, i) => {
        return (
          <Card>
                <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Add more {i+1}</h4>
              </CardHeader>
         <CardBody> 
          <GridContainer>
{/* 
          <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Course image"
                      onChange={e => handlemultipleFile(e, i)}
                      id="image"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                   {x.image && <img src={config.API + "/images/user/" + x.image} alt="..." style={{maxWidth:200, maxHeight:200}} /> }
                    {validateError.image && (
                      <span className={classes.textDanger}>
                        {validateError.image}
                      </span>
                    )}
                  </GridItem> */}

               

                 

                  <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
              labelText="Title"
              onChange={e => handleInputChange(e, i)}
              id="title"
              value={x.title}
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
                    <CustomInput
                      labelText="Add Material"
                      onChange={e => handlemultipleFile(e, i)}
                      id="file"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <Button
            className="ml-3"
            variant="contained"
            color="primary"
            
             onClick={() => questionindex(x.file)}
          >
            Download
          </Button>
                    {validateError.file && (
                      <span className={classes.textDanger}>
                        {validateError.file}
                      </span>
                    )}
                  </GridItem>

                 


                 


                
                  
         
        </GridContainer>
            <CardFooter>
            {inputList.length !== 1 && <Button color="primary" className="mr10" onClick={() => handleRemoveClick(i) }>
                Remove
              </Button>}
            {/* {inputList.length - 1 === i && <Button color="primary" onClick={handleAddClick}>
                  Add
                </Button>} */}

              </CardFooter>
        </CardBody>  
        
        </Card>

        );
      })}

                
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
