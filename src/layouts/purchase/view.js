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

import { getpurchase,  } from "../../actions/users";


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
 
  amount: "",
  user_id:"",
  coursetitle:"",
  date:"",
  orderid:"",
  image:"",
  
 
  
};
const useStyles = makeStyles(styles);


export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  

  const {
   
    amount,
    user_id,
    coursetitle,
    date,
    orderid,
    image,
    
   
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
    var test = await getpurchase(id);
    console.log(test,"sss")
    let data = {};
   
    data["amount"] = test.userValue.amount;
    data["user_id"] = test.userValue.name.name;
    data["coursetitle"] = test.userValue.coursevalue.title;
    data["date"] = test.userValue.createdAt;
    data["orderid"] = test.userValue.order_id;
    data["image"] = test.userValue.coursevalue.image;
    
   
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
              <p className={classes.cardCategoryWhite}>view Purchase Details</p>
            </CardHeader>
            <CardBody>
              <GridContainer>

              <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  User Name
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "user_id" }}>{user_id}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Course title
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "course title" }}>{coursetitle}</Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.amount}>
                  amount
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "amount" }}>{amount}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Order id
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "Orderid" }}>{orderid}</Box>
                </GridItem>

                


                

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.user_id}>
                  Date of purchase
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box sx={{ typography: "Date of purchase" }}>{datealignment(date)}</Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Typography noWrap className={classes.image}>
                    Course Image
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <img src={config.API + "/images/user/" + image} alt="..." style={{maxWidth:200, maxHeight:200}} />
                 
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
