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

import { getfamedata,  } from "../../actions/users";

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
  image2: "",
  image3: "",
  image4: "",
  name1: "",
  name2: "",
  name3: "",
  name4: "",
  exam1: "",
  exam2: "",
  exam3: "",
  exam4: "",
  content: "",
 
 
 
  

  
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
    image2,
    image3,
    image4,
    name1,
    name2,
    name3,
    name4,
    content,
    exam1,
    exam2,
    exam3,
    exam4,
  
   
   
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
    var test = await getfamedata(id);
    console.log(test,"hgfgh");
    let formdata = {};
   
    
    formdata["image"] = test.userValue.image;
    formdata["image2"] = test.userValue.image2;
    formdata["image3"] = test.userValue.image3;
    formdata["image4"] = test.userValue.image4;
    formdata["content"] = test.userValue.content;
    formdata["name1"] = test.userValue.name1;
    formdata["name2"] = test.userValue.name2;
    formdata["name3"] = test.userValue.name3;
    formdata["name4"] = test.userValue.name4;
    
   
   
   
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
              <p className={classes.cardCategoryWhite}>view details</p>
            </CardHeader>
            <CardBody>
              

              <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.image}>
                     Image-1
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <img src={config.API + "/images/user/" + image} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.image2}>
                     Image-2
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <img src={config.API + "/images/user/" + image2} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.image3}>
                     Image-3
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <img src={config.API + "/images/user/" + image3} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.image4}>
                     Image-4
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <img src={config.API + "/images/user/" + image4} alt="..." style={{maxWidth:200, maxHeight:200}} />
                  {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
                </GridItem>
               

                {/* <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.content}>
                    Content
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "content" }}>{content}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.fcontent}>
                    Content
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "content" }}>{fcontent}</Box>
                </GridItem> */}
                 <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.name1}>
                    Name-1
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "name1" }}>{name1}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.name2}>
                    Name-2
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "name2" }}>{name2}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.name3}>
                    Name-3
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "name3" }}>{name3}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.name4}>
                    Name-4
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "name4" }}>{name4}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.exam1}>
                    Exam-1
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "exam1" }}>{exam1}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.exam2}>
                    Exam-2
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "exam-2" }}>{exam2}</Box>
                </GridItem>



                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.exam3}>
                    Exam-3
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "exam3" }}>{exam3}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.exam4}>
                    Exam-4
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "exam4" }}>{exam4}</Box>
                </GridItem>

               
                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.content}>
                  Fame content
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "content" }}>{content}</Box>
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
