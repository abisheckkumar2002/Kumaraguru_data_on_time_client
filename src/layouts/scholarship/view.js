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

import { getscholarshipdata,getscholarshipviewdata  } from "../../actions/users";

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
  title: "",
  scholarship: "",
 
  startdate: new Date(),
  enddate: new Date(),
  language: "",
  totalclasses: "",
  totaltest: "",
  totalpdf: "",
  totalquestions: "",
  price: "",
  eligiblity: "",
  targetexam: "",
  exam: "",
  subject: "",
  



  
};
const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  function datealignment(startdate){
   
    var now = new Date(startdate);

var startdate = now.getDate()  + "-" + (now.getMonth()+1) + "-" + now.getFullYear() + " " ;

   
      
// Regular expression to identify HTML tags in 
// the input string. Replacing the identified 
// HTML tag with a null string.
return startdate;
}

  const {
  
    image,
    scholarship,
   
    title,
    startdate,
    enddate,
    language,
    totalclasses,
    totaltest,
    totalpdf,
    totalquestions,
    price,
    eligiblity,
    targetexam,
    exam,
    subject,
    

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
    var test = await getscholarshipviewdata(id);
    console.log(test,"ssss");
    let formdata = {};
   
    formdata["image"] = test.userValue.image;
    formdata["title"] = test.userValue.title;
    formdata["scholarship"] = test.userValue.scholarship;
   
    formdata["startdate"] = test.userValue.startdate;
    formdata["enddate"] = test.userValue.enddate;
    formdata["language"] = test.userValue.language;
    formdata["totalclasses"] = test.userValue.totalclasses;
    formdata["totaltest"] = test.userValue.totaltest;
    formdata["totalpdf"] = test.userValue.totalpdf;
    formdata["totalquestions"] = test.userValue.totalquestions;
    formdata["price"] = test.userValue.price;
    formdata["eligiblity"] = test.userValue.eligiblitys;
    formdata["targetexam"] = test.userValue.targetexam;
    formdata["exam"] = test.userValue.exams;
    formdata["subject"] = test.userValue.subjects;

   
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
              <h4 className={classes.cardTitleWhite}>View Scholarship</h4>
              <p className={classes.cardCategoryWhite}>view Scholarship Details</p>
            </CardHeader>
            <CardBody>
              

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.image}>
                    Banner Image
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <img src={config.API + "/images/user/" + image} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>
               
               

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.title}>
                    Title
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "title" }}>{title}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.scholarship}>
                    Scholarship
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "scholarship" }}>{scholarship}</Box>
                </GridItem>

                {/* <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.targetexam}>
                  targetexam
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "targetexam" }}>{targetexam}</Box>
                </GridItem> */}


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.startdate}>
                  startdate
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "startdate" }}>{datealignment(startdate)}</Box>
                </GridItem>
               

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.enddate}>
                  enddate
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "enddate" }}>{datealignment(enddate)}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.language}>
                  language
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "language" }}>{language}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.totalclasses}>
                  totalclasses
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "totalclasses" }}>{totalclasses}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.totaltest}>
                  totaltest
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "totaltest" }}>{totaltest}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.totalpdf}>
                  totalpdf
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "totalpdf" }}>{totalpdf}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.totalquestions}>
                  totalquestions
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "totalquestions" }}>{totalquestions}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.price}>
                  price
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "price" }}>{price}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.exam}>
                  Exam
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "exam" }}>{exam}</Box>
                </GridItem>



                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.eligiblity}>
                  eligiblity
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "Eligiblity" }}>{eligiblity}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.eligiblity}>
                  subject
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "subject" }}>{subject}</Box>
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
