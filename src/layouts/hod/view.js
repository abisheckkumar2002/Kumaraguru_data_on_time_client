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
const hodView = () => {

    const [validateError, setValidateError] = useState({});

  const classes = useStyles();
  const history = useNavigate();

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
              <p className={classes.cardCategoryWhite}>View Hod Details</p>

            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.address}>
                    Staff Id
                  </Typography>
                </GridItem>
                
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "address" }}>MCA1001</Box>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.mail}>
                  NAME
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "mail" }}>Ranjakarupan</Box>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.mail}>
                  DEPARTMENT
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "mail" }}>Master of computer application</Box>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.phone}>
                  COLLEGE MAILID
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "phone" }}>abisheckkumar23.kct@123</Box>
                </GridItem>
              </GridContainer>


              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.phone}>
                  PHONE NO
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "phone" }}>76038984379</Box>
                </GridItem>
              </GridContainer>


              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Typography noWrap className={classes.phone}>
                  DESIGNATION
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Box sx={{ typography: "phone" }}>Asst proffersor</Box>
                </GridItem>
              </GridContainer>

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </DashboardLayout>
  );
};

export default hodView;
