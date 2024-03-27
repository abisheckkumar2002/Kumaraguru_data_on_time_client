import React, { useState, useEffect,useRef } from "react";
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

import { addsubchaptervideo,getexamlist,getclasslist,videoadd,getsubchaptervideodata,deletesubchapterfile,gettopiclist,getfreelist } from "actions/users";

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
  const [freeopt, setfreeopt] = useState([]);
  
  const [examssopt, setexamsopt] = useState([]);
  const [classopt, setclassopt] = useState([]);
  const [inputList, setInputList] = useState([{ image: "",title: "",description: "", file: "",topicid:"",free:""}]);
  const { id,id1 } = useParams();
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

  function checktype() {
   
     
    if (!inputList[0].file) {
        alert('Please import a video file(.mp4)');
        window.location.reload();
        // fileInput.value = '';
        // return false;
    }
  }

  // function
 

  const {
   

  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      id,
      inputList,
      id1
    };
    console.log(reqData,"sss");
    let { error } = await addsubchaptervideo(reqData);
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
      const filename = await videoadd( files[0]);
      if(filename.error){
        alert("please upload only mp4 file(.mp4)");
        window.location.reload();
      }
      
     
      
      //settmpupimagefront(URL.createObjectURL(event.target.files[0]));
      console.log(filename,"kkk");
      // let formData = { ...formValue, ...{ [id]: filename } };
      // setFormValue(formData);
      const list = [...inputList];
      list[index]["file"] = filename.video;
      list[index]["image"] = filename.cover;
      setInputList(list);
      //setValidateError(formData)
    };
  
    // handle click event of the Remove button
    const handleRemoveClick = async (index) => {
      const list = [...inputList];
      if("_id" in list[index]){
      await deletesubchapterfile(list[index]._id);
      }
      list.splice(index, 1);
      setInputList(list);
    };
   
    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, { image: "",title: "",description: "", file: "",topicid:"",free:""}]);
    };
    function questionindex(id) {
      if (id != "") {
        window.location ="https://marvelclasses.net:3000/images/user/"+id;
        // http://localhost:3001/images/user/IMAGE-1675830709443.pdf
      }
    }
const userData = async() =>{
  
  const test1 = await getexamlist();
  const test2 = await getclasslist();
  const listdata=await getsubchaptervideodata(id1);
  console.log(listdata,"sasa")
  const test3=await gettopiclist(id);
  const test4 = await getfreelist();

 
 
  
  const options1 =  test1.userValue.map(d => ({
    "title" : d.content,
    "value" : d._id
  }));
  const options2 =  test2.userValue.map(d => ({
    "title" : d.content,
    "value" : d._id
  }));
  const options3 =  test3.userValue.map(d => ({
    "title" : d.content,
    "value" : d._id
  }));
  const options4 =  test4.userValue.map(d => ({
    "title" : d.content,
    "value" : d._id
  }));
  
  setexamsopt(options1)
  setclassopt(options2)
  settopicopt(options3)
  setfreeopt(options4)

  if(listdata.userValue.length){
    let updated = listdata.userValue.map(ele=>{
      ele.free=options4.find(e1=>e1.value == ele.free)
      ele.topicid = options3.find(e=>e.value == ele.topicid)
      console.log( ele.topicid ,"saam")
      return ele;

      
    })
    console.log(updated,"saam")

    setInputList(updated);
  }

}
  useEffect(()=>{
    userData();
  },[])
console.log(inputList);
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
                      labelText="Cover image"
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

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Upload Video"
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
                    {validateError.photo && (
                      <span className={classes.textDanger}>
                        {validateError.photo}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
              labelText="Description"
              onChange={e => handleInputChange(e, i)}
              id="description"
              value={x.description}
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
                    <Autocomplete
                      options={freeopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option4) => option4.title}
                      
                      value={x.free}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
    
                      
                        const list = [...inputList];
                        list[i]["free"] = newValue ;
                        setInputList(list);
                      }}
                      type="text"
                      name="free"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select free or unpaid"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.free && (
                      <span className={classes.textDanger}>
                        {validateError.free}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <h6 style={{ color:"blue" }}>Note:1.Free video demo will be applicable for recorded course and micro course for website.</h6>
                    <h6 style={{ color:"blue" }}>Note:2.Free/trending will also applicable for app(freevideos,trendingvideos).</h6>
                  </GridItem>
                
{/* <GridItem xs={12} sm={12} md={4}>
                    <Autocomplete
                      options={topicopt}
                      noOptionsText="Enter to create a new option"
                      getOptionLabel={(option3) => option3.title}
                      value={x.topicid}
                      onChange={(event, newValue) => {
                        console.log(newValue.value);
    
                      
                        const list = [...inputList];
                        list[i]["topicid"] = newValue;
                        setInputList(list);
                      }}
                      type="text"
                      name="subject"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select topic"
                          variant="outlined"
                        />
                      )}
                    />
                    {validateError.topic && (
                      <span className={classes.textDanger}>
                        {validateError.topic}
                      </span>
                    )}
                  </GridItem> */}

                  
         
        </GridContainer>
            <CardFooter>
            {inputList.length !== 1 && <Button color="primary" className="mr10" onClick={() => handleRemoveClick(i) }>
                Remove
              </Button>}
            {inputList.length - 1 === i && <Button color="primary" onClick={handleAddClick}>
                  Add more
                </Button>}

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


