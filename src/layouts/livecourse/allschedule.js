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

import { allupcomingschedule,allcompletedschedules } from "../../actions/users";
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
      Header: "Coursename",
      accessor: "coursename",
      align: "left",
    },
    {
      Header: "Batchname",
      accessor: "batchname",
      align: "left",
    },
    {
      Header: "Topic",
      accessor: "topic",
      align: "left",
    },
    {
      Header: "Meeting Id",
      accessor: "meetingid",
      align: "left",
    },

    {
      Header: "Start Time",
      accessor: "start_time",
      align: "left",
    },
    {
      Header: "end Time",
      accessor: "end_time",
      align: "left",
    },
    {
      Header: "Action",
      accessor: "action",
      align: "left",
    },
  ];

  const columns1 = [
    {
      Header: "Coursename",
      accessor: "coursename",
      align: "left",
    },
    {
      Header: "Batchname",
      accessor: "batchname",
      align: "left",
    },
    {
      Header: "Topic",
      accessor: "topic",
      align: "left",
    },
    {
      Header: "Meeting Id",
      accessor: "meetingid",
      align: "left",
    },
    {
      Header: "Start Time",
      accessor: "start_time",
      align: "left",
    },
    {
      Header: "end Time",
      accessor: "end_time",
      align: "left",
    },
    
  ];

  function editR(id) {
    if (id != "") {
      window.location ="/admin/scheduleedit/"+id;
    }
  }

  const sheduleRenderer = (e) =>{
    if((new Date() > new Date(e.start_time)) && (new Date() < new Date(e.end_time))){
return   <MDTypography component="a"   onClick={() => window.open(e.start_url, '_blank')} variant="caption" color="text" fontWeight="medium">
<Button>Start Meet</Button>
 </MDTypography>
    }
}

async function deleteR(id) {
  const result = await confirm("Are you sure do you want to delete?");
  if (result) {
    if (id != "") {
      
     await deletezoommeet(id);  
    //  setUserDet(userdet.filter((x, i) => x._id != id))
      // window.location.reload();
      toast.success("Deleted Successfully");
      getUserListdata()
      //  history("/livecourseindex");
     
    }
    return;
  }
  console.log("You click No!");
 
}
  const getUserListdata = async () => {
    var test = await allupcomingschedule();
    const mapped = await Promise.all(test.userValue.map(element => Object.assign(element, {

      action: (
        <>
                         <MDTypography component="a"  onClick={() => editR(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Edit</Button>
        </MDTypography>
        <MDTypography component="a"   onClick={() => deleteR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button  className="ml-3"
            variant="contained"
            color="primary">Delete</Button>
               </MDTypography>
               </>
      ),
      image: <img src={config.API + "/images/user/" + element.image} alt="..." style={{maxWidth:200, maxHeight:200}} />,
      start_time:    <Moment format="DD/MM/YYYY hh:mm:ss A">
     {element.start_time}
  </Moment>,
        end_time:    <Moment format="DD/MM/YYYY hh:mm:ss A">
        {element.end_time}
     </Moment>,
    })));
    setUserDet(test.userValue);

    var test = await allcompletedschedules();

    const mapped1 = await Promise.all(test.userValue.map(element => Object.assign(element, {

    
      image: <img src={config.API + "/images/user/" + element.image} alt="..." style={{maxWidth:200, maxHeight:200}} />,
      start_time:    <Moment format="DD/MM/YYYY hh:mm:ss A">
     {element.start_time}
  </Moment>,
        end_time:    <Moment format="DD/MM/YYYY hh:mm:ss A">
        {element.end_time}
     </Moment>,
    })));
    
    setUserDet1(test.userValue);
  };

  useEffect(() => {
    getUserListdata();
  }, []);


  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
   
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Box sx={{ width: "100%", margin:"20px 0px" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                  >
                    <Tab label="Upcoming" {...a11yProps(0)} />
                    <Tab label="Completed" {...a11yProps(1)} />
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
                    Upcoming
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
                    Completed
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns: columns1, rows: userdet1 }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                      canSearch={true}
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
