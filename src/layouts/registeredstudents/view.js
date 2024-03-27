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

import { getregister,  } from "../../actions/users";


function datealignment(startdate){
   
  var now = new Date(startdate);

var startdate = now.getDate()  + "-" + (now.getMonth()+1) + "-" + now.getFullYear() + " " ;

 
    
// Regular expression to identify HTML tags in 
// the input string. Replacing the identified 
// HTML tag with a null string.
return startdate;
}

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
 
  name: "",
  mobilenumber:"",
  email:"",
  dob:new Date(),
  referandearncode:"",
  mclass:"",
  board:"",
  school:"",
  fathername:"",
  fatheremail:"",
  fathermobile:"",
  mothername:"",
  motheremail:"",
  mothermobile:"",
  city:"",
  state:"",
  country:""
 
  
 
  
};
const useStyles = makeStyles(styles);


export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  

  const {
   
    name,
    mobilenumber,
    email,
    date,
    dob,
    referandearncode,
    mclass,
    board,
    school,
    fathername,
  fatheremail,
  fathermobile,
  mothername,
  motheremail,
  mothermobile,
  city,
  state,
  country
   
    
   
  } = formValue;

  const { id } = useParams();
  // console.log(id,"asdfdsfdsfdsf");

  const handleFile = (event) => {
    const { id, files } = event.target;
    //settmpupimagefront(URL.createObjectURL(event.target.files[0]));

    let Data = { ...formValue, ...{ [id]: files[0] } };
    setFormValue(Data);
    //setValidateError(formData)
  };

  const getUserData = async () => {
    var test = await getregister(id);
    console.log(test,"sss")
    let data = {};
   
    data["name"] = test.userValue.name;
    data["mobilenumber"] = test.userValue.mobilenumber;
    data["email"] = test.userValue.email;
    data["date"] = test.userValue.createdate;
    data["dob"] = test.userValue.dob;
    data["referandearncode"] = test.userValue.referandearncode;
    data["mclass"] = test.userValue.class;
    data["board"] = test.userValue.board;
    data["school"] = test.userValue.school;
    data["fathername"] = test.userValue.fathername;
    data["fatheremail"] = test.userValue.fatheremail;
    data["fathermobile"] = test.userValue.fathermobile;
    data["mothername"] = test.userValue.mothername;
    data["motheremail"] = test.userValue.motheremail;
    data["mothermobile"] = test.userValue.mothermobile;
    data["city"] = test.userValue.city;
    data["state"] = test.userValue.state;
    data["country"] = test.userValue.country;
    
   
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
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>View</h4>
              <p className={classes.cardCategoryWhite}>view Registered Students Details</p>
            </CardHeader>
            <CardBody>
              <GridContainer>

              <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                   Name
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "name" }}>{name}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.amount}>
                  Email
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "email" }}>{email}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Mobile number
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "mobilenumber" }}>{mobilenumber}</Box>
                </GridItem>
                

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.date}>
                  Registered Date
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "date" }}>{datealignment(date)}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.date}>
                  D.o.b
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "date" }}>{datealignment(dob)}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Refer and earn code
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "Refer and earn code" }}>{referandearncode}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Class
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "mobilenumber" }}>{mclass}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Board
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "board" }}>{board}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                 School
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{school}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                 Father-name
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{fathername}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Father-email
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{fatheremail}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Father-mobile
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{fathermobile}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Mother-name
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{mothername}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                 Mother-email
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{motheremail}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                 Mother-mobile
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{mothermobile}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                City
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{city}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                State
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{state}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                Country
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "school" }}>{country}</Box>
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
