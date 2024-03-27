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
import config from "lib/config";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getteacherdata, updateteacher } from "../../actions/users";

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
  email: "",
  specialization: "",
 
  phonenumber: "",
  qualification:""
 
 
  
};


const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  // const dispatch = useDispatch();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

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
    name,
    email,
    specialization,
    qualification,
    
    phonenumber,
   
   
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      image,
    name,
    email,
    specialization,
    qualification,
   
    phonenumber,
    
    };
    console.log(reqData);
    let { error } = await updateteacher(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      console.log("tassssssssssssssssssssssssssssssss")
      toast.success("Updated Successfully", toasterOption);
      history("/teacherindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getteacherdata(id);
    console.log(test,"sss")
    let formdata = {};
    formdata["name"] = test.userValue.name;
    formdata["email"] = test.userValue.email;
    formdata["specialization"] = test.userValue.specialization;
    formdata["qualification"] = test.userValue.qualification;
   
    formdata["phonenumber"] = test.userValue.mobilenumber;
    formdata["image"] = test.userValue.image;
   
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(formdata);
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
                        labelText="Profile image"
                        style={{ fontSize:"12px" }}
                      onChange={handleFile}
                      id="image"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                       
                      }}
                    />
                     {image && <img src={config.API + "/images/user/" + image} alt="..." style={{ maxWidth: 50, maxHeight: 50 }} />}
                    {validateError.image && (
                      <span className={classes.textDanger}>
                        {validateError.image}
                      </span>
                      )}
                      <InputLabel style={{ color: "red", fontSize: "13px" }}>178*162(Recommended image size)
                      </InputLabel>
                  </GridItem>
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
                  </GridItem>
                
                    <GridItem xs={12} sm={12} md={4}>
                      <label style={{ color: "#919090", fontWeight: "500" }}>Email are not editable</label>
                      <input
                        style={{ width: "100%", paddingLeft: "8px" }}
                        readOnly={true}
                        // labelText="Options cannot be editable,it is only for reference"
                        onChange={onChange}
                        value={email}
                        id="options"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.email && (
                        <span className={classes.textDanger}>
                          {validateError.email}
                        </span>
                      )}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <label style={{ color: "#919090", fontWeight: "500" }}>phonenumber are not editable</label>
                      <input
                        style={{ width: "100%", paddingLeft: "8px" }}
                        readOnly={true}
                        // labelText="Options cannot be editable,it is only for reference"
                        onChange={onChange}
                        value={phonenumber}
                        id="options"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.phonenumber && (
                        <span className={classes.textDanger}>
                          {validateError.phonenumber}
                        </span>
                      )}
                    </GridItem>
                
                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone number *"
                      onChange={onChange}
                      value={phonenumber}
                      id="phonenumber"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phonenumber && (
                      <span className={classes.textDanger}>
                        {validateError.phonenumber}
                      </span>
                    )}
                  </GridItem> */}

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Specialization *"
                      onChange={onChange}
                      value={specialization}
                      id="specialization"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.specialization && (
                      <span className={classes.textDanger}>
                        {validateError.specialization}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="qualification *"
                      onChange={onChange}
                      value={qualification}
                      id="qualification"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.qualification && (
                      <span className={classes.textDanger}>
                        {validateError.qualification}
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
