import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
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

import { getteacherdata,  } from "../../actions/users";

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
  certificate1:"",
  certificate2:"",
  certificate3:"",
 
  phonenumber: "",
  qualification:"",
  specialization:""


  
};
const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  const {
  
    image,
    name,
    email,
    certificate1,
    certificate2,
    certificate3,
    
    phonenumber,
    qualification,
    specialization
  
  } = formValue;

  const { id } = useParams();
  // console.log(id,"asdfdsfdsfdsf");

  const handleFile = (event) => {
    const { id, files } = event.target;
    //settmpupimagefront(URL.createObjectURL(event.target.files[0]));

    let formData = { ...formValue, ...{ [id]: files[0] } };
    setFormValue(formData);
    //setValidateError(formData)
  };

  const getUserData = async () => {
    var test = await getteacherdata(id);
    console.log(test,"dd")
    let formdata = {};
   
    formdata["image"] = test.userValue.image;
    formdata["name"] = test.userValue.name;
    formdata["email"] = test.userValue.email;
    formdata["phonenumber"] = test.userValue.mobilenumber;
    formdata["qualification"] = test.userValue.qualification;
    formdata["specialization"] = test.userValue.specialization;
    formdata["certificate1"] = test.userValue.certificate1;
    formdata["certificate2"] = test.userValue.certificate2;
    formdata["certificate3"] = test.userValue.certificate3;
    
   
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
                  Back to
                </Button>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>View</h4>
              <p className={classes.cardCategoryWhite}>view</p>
            </CardHeader>
            <CardBody>
              

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.image}>
                    Teacher's Image
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                <img src={config.API + "/images/user/" + image} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>
<br></br><br></br>


<GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.image}>
                    Degree-certificate
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                <img src={config.API + "/images/user/" + certificate1} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>
<br></br><br></br>

<GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.image}>
                    SSLC-certificate
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                <img src={config.API + "/images/user/" + certificate2} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>
<br></br><br></br>

<GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.image}>
                    HSC-certificate
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                <img src={config.API + "/images/user/" + certificate3} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>
<br></br><br></br>
                <GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.name}>
                   Name
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <Box sx={{ typography: "name" }}>{name}</Box>
                </GridItem>
                <br></br><br></br>
                <GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.name}>
                   Qualification
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <Box sx={{ typography: "qualification" }}>{qualification}</Box>
                </GridItem>
                <br></br><br></br>
                <GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.email}>
                   Email
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <Box sx={{ typography: "email" }}>{email}</Box>
                </GridItem>

                <br></br><br></br>

                <GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.Specialization}>
                   Specialization
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <Box sx={{ typography: "specialization" }}>{specialization}</Box>
                </GridItem>

                <br></br><br></br>
               

               

                <GridItem xs={12} sm={12} md={2}>
                  <Typography noWrap className={classes.phonenumber}>
                   Phonenumber
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <Box sx={{ typography: "phonenumber" }}>{phonenumber}</Box>
                </GridItem>
              </GridContainer>
             
            
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      </DashboardLayout>
    </div>
  );
}
