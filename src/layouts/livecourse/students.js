import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useEffect, useState, Fragment } from "react";
import { confirm } from "react-confirm-box";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { getunallotedstudentsinbatchlist,getallotedstudentsinbatchlist } from "../../actions/users";
import config from "lib/config";
import Moment from 'react-moment';

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Item() {


  const [userdet, setUserDet] = useState([]);
  const [userdet1, setUserDet1] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();
  const [value, setValue] = React.useState(0);
  const { id } = useParams();
  const history = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const columns = [
    { 
      Header: "Student", 
      accessor: "userName", 
      align: "left" 
    },
    { 
      Header: "Join Date", 
      accessor: "createdAt", 
      align: "left" 
    },
  ];

  const columns1 = [
    { 
      Header: "Student", 
      accessor: "userName", 
      align: "left" 
    },
    { 
      Header: "Join Date", 
      accessor: "createdAt", 
      align: "left" 
    },
  ];


  const getUserListdata = async () => {
    var test = await getunallotedstudentsinbatchlist(id);

    const mapped1 = await Promise.all(test.userValue.map(element => Object.assign(element, {

      

    
    
      createdAt:    <Moment format=" DD/MM/YYYY hh:mm:ss A">
     {element.createdAt}
  </Moment>,
       
    })));

    setUserDet(test.userValue);

    var test = await getallotedstudentsinbatchlist(id);
    const mapped = await Promise.all(test.userValue.map(element => Object.assign(element, {

      

    
    
      createdAt:    <Moment format=" DD/MM/YYYY hh:mm:ss A">
     {element.createdAt}
  </Moment>,
       
    })));
    
    setUserDet1(test.userValue);
  };

  useEffect(() => {
    getUserListdata();
  }, []);


  return (
    <DashboardLayout>
       <Button  className="ml-3"
            variant="contained"
            color="primary" onClick={()=>history(-1)}  >
                  Back to
                </Button>
      
      {/* <DashboardNavbar /> */}
   
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                  >
                    <Tab label="Unallotted" {...a11yProps(0)} />
                    <Tab label="Allotted" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                    Unallotted
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns: columns, rows: userdet }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  </MDBox>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                    Allotted
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns: columns1, rows: userdet1 }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  </MDBox>
                </TabPanel>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Item;
