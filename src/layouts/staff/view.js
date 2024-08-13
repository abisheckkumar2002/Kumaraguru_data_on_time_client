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
import { getStaffDetail } from "../../actions/users";

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

const useStyles = makeStyles(styles);
const staffView = () => {
  const { id } = useParams();
  const [formValue, setFormValue] = useState({
    name: "",
    mobile: "",
    type: "",
    email: "",
    UserId: "",
    department: "",
    addedBy:""
  });

    const [validateError, setValidateError] = useState({});

    const { name, mobile, type, email, UserId, department,addedBy } = formValue;
  const classes = useStyles();
  const history = useNavigate();


  const getUserData = async () => {
    const {userValue,errors} = await getStaffDetail(id);
    console.log(userValue,"userValueuserValueuserValueuserValueuserValue")
    let data = {};
    data["name"] = userValue.name;
    data["UserId"] = userValue.UserId;
    data["email"] = userValue.email;
    data["mobile"] = userValue.mobile;
    data["type"] = userValue.type;
    data["department"] = userValue.department;
    data["addedBy"] = userValue.addedBy;

    setFormValue(data);
  
  };

  useEffect(() => {
    //logout(history)
    getUserData();
  }, []);

  return (
    <DashboardLayout>
         <Button color="primary" onClick={() => history(-1)}>
          Go Back
        </Button>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>View </h4>
              <p className={classes.cardCategoryWhite}>View Staff Details</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.address}>
                    USER ID
                  </Typography>
                </GridItem>
                
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "UserId" }}>{UserId}</Box>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.name}>
                  NAME
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "name" }}>{name}</Box>
                </GridItem>
              </GridContainer>


              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.email}>
                  COLLEGE MAILID
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "email" }}>{email}</Box>
                </GridItem>
              </GridContainer>


              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.mobile}>
                  MOBILE NO
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "mobile" }}>{mobile}</Box>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.type}>
                 USER TYPE
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "type" }}>{type}</Box>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.department}>
               DEPARTMENT
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "department" }}>{department}</Box>
                </GridItem>
              </GridContainer>

             


              


              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.addedBy}>
                  ADDED BY
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "addedBy" }}>{addedBy}</Box>
                </GridItem>
              </GridContainer>

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </DashboardLayout>
  );
};

export default staffView;
