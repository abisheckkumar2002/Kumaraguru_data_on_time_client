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

import { getevent, getOneEventData, getEvent1 } from "../../actions/users";

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

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const { id1, id2 } = useParams();

  const classes = useStyles();
  const history = useNavigate();
  const [Data, setData] = useState({});

  console.log(Data,"ddddfvadvaadedvdd")
  const [dev, setdev] = useState({
    tittle: "",
    eventId: "",
  });

  console.log(config.API,"apiapaiapai")

  const [File ,setFile]=useState({
    recordFile:""
  })
  const { tittle, eventId } = dev;

  console.log(Data, "Data");



  const getUserData = async () => {
    var test = await getOneEventData(id1, id2);

  
    const createdDate = new Date(test.userValue.createdate);
    const formattedDate = `${createdDate.getDate()}/${
      createdDate.getMonth() + 1
    }/${createdDate.getFullYear()}`;
    const data = {};
    test.userValue.eventData.map((item) => {
      if (item.inputField === "TextEditor") {
        console.log("item.inputField", item.inputField);
        console.log("item.item[item.key]", item[item.key]);
        const htmlContent = item[item.key]; // Assuming item[item.key] contains HTML content
        const abi = <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
    
        data[item.key] = abi;
      } else {
        data[item.key] = item[item.key];
      }
    });
   
    data["Created At"] = formattedDate;

    setFile(test.userValue.recordFile)

 

    setData(data);
  };

  const getEventOne = async (id) => {
    const { userValue, errors } = await getEvent1(id);

    let data = {};
    data["tittle"] = userValue.data.tittle;
    data["eventId"] = userValue.data.eventId;
    console.log(userValue, "userValueuserValueuserValue");

    setdev(data);
  };

  useEffect(() => {
    getEventOne(id1);
    getUserData();
  }, []);

  const StaticData = [
    "names",
    "date",
    "staff id",
    "deparment id",
    "Book Tittle",
    "Publication Month year",
    "pages",
  ];
  return (
    <div>
      <DashboardLayout>
        <Button color="primary" onClick={() => history(-1)}>
          Back to
        </Button>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4
                  className={classes.cardTitleWhite}
                >{`${eventId} - ${tittle}`}</h4>
                <p className={classes.cardCategoryWhite}>View Details</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  {Object.keys(Data).map((key, index) => (
                    
                    <React.Fragment key={index}>
                      <GridItem xs={12} sm={12} md={3}>
                        <Typography noWrap className={classes.location}>
                          {key}:
                        </Typography>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <Box sx={{ typography: "location" }}>{Data[key]}</Box>
                      </GridItem>

                    
                    </React.Fragment>

                  ))}


                 

                  <GridItem xs={12} sm={12} md={3}>
                    <Typography noWrap className={classes.image}>
                      Record File
                    </Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <img
                      src={config.API + "/Src/public/records/" + File}
                      alt="..."
                      style={{ maxWidth: 200, maxHeight: 200 }}
                    />
                    {/* <Box sx={{ typography: "image" }}>{image}</Box> */}
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
