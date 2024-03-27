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

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getenquiry,  } from "../../actions/users";

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
  email: "",
  phone: "",
  mclass: "",
  exam: "",

 
  
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
    email,
    phone,
    mclass,
    exam,
   
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
    var test = await getenquiry(id);
    console.log(test,"sss")
    let data = {};
    data["name"] = test.userValue.name;
    data["email"] = test.userValue.email;
    data["phone"] = test.userValue.phone;
    data["mclass"] = test.userValue.class;
    data["exam"] = test.userValue.exam;
   
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
              <h4 className={classes.cardTitleWhite}>View Enquiry</h4>
              <p className={classes.cardCategoryWhite}>view Enquiry Details</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.name}>
                    Name
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <Box sx={{ typography: "name" }}>{name}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.email}>
                    Email
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <Box sx={{ typography: "email" }}>{email}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.phone}>
                    Phone
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <Box sx={{ typography: "phone" }}>{phone}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.class}>
                    Class
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <Box sx={{ typography: "mclass" }}>{mclass}</Box>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <Typography noWrap className={classes.exam}>
                    Exam
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <Box sx={{ typography: "exam" }}>{exam}</Box>
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
