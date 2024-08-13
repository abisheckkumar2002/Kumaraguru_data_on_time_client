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
import MDBox from "components/MDBox";
import DataTable from "examples/Tables/DataTable";
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getEvent1 } from "../../actions/users";

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



const columns = [
  {
    Header: "key",
    accessor: "key",
    align: "left",
    Cell: ({ value }) => value ? value : "-"
  },
  {
    Header: "isRequired",
    accessor: "isRequired",
    align: "left",
    Cell: ({ value }) => value ? "True" : "False"
  },
  {
    Header: "inputField",
    accessor: "inputField",
    align: "left",
    Cell: ({ value }) => value ? value : "-"
  },
  {
    Header: "inputDataType",
    accessor: "inputDataType",
    align: "left",
    Cell: ({ value }) => value ? value : "-"
  },
  {
    Header: "option",
    accessor: "option",
    align: "left",
    Cell: ({ value }) => Array.isArray(value) ? value.join(", ") : "-"
  
  }
];




const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  const [eventKey, seteventKey] = useState([]);
  const [formValue, setFormValue] = useState({
    eventId:"",
    eventType_id:"",
    tittle:"",
    description:""



  });

  console.log(eventKey,"eventKeyeventKeyeventKeyeventKeyeventKey")
  const [validateError, setValidateError] = useState({});

  const { eventId, eventType_id, tittle, description } = formValue;

  const extractTag = <div dangerouslySetInnerHTML={{ __html: description }}></div>;

  console.log(formValue,"formValueformValueformValue")

  const { id } = useParams();
  // console.log(id,"asdfdsfdsfdsf");



  const getUserData = async () => {
    let event =await getEvent1(id)


    const eventData = event.userValue.data
  
    const data={}
    data["eventId"]=eventData.eventId
    data["eventType_id"]=eventData.eventType_id.eventtype
    data["tittle"]=eventData.tittle
    data["description"]=eventData.description
    
    const mappedData = eventData.eventKey.map((element) => ({
      ...element
    }))
   

    seteventKey(mappedData)

    console.log(mappedData,"mappedDatamappedDatamappedDatamappedDatamappedData")
   setFormValue(data) 
  };

  useEffect(() => {
    //logout(history)
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
                <h4 className={classes.cardTitleWhite}>View Event</h4>
                <p className={classes.cardCategoryWhite}>view Event Details</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  
                 
                  <GridItem xs={12} sm={12} md={3}>
                    <Typography noWrap className={classes.location}>
                      EventId
                    </Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <Box sx={{ typography: "location" }}>{eventId}</Box>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <Typography noWrap className={classes.location}>
                      Tittle
                    </Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "location" }}>{tittle}</Box>
                  </GridItem>


                  <GridItem xs={12} sm={12} md={3}>
                    <Typography noWrap className={classes.location}>
                      Event Type
                    </Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "location" }}>{eventType_id}</Box>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <Typography noWrap className={classes.location}>
                      Description
                    </Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <Box sx={{ typography: "location" }}>{ extractTag}</Box>
                  </GridItem>




                  <MDBox  xs={12} sm={12} md={3}  style={{ marginTop:"70px" }}>
                <DataTable
                  table={{ columns: columns, rows: eventKey  }} // Pass departments directly
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  
                 
                />
              </MDBox>
                  
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </DashboardLayout>
    </div>
  );
}
