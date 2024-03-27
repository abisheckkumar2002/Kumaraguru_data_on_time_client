import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useEffect, useState, Fragment } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { Button } from "@material-ui/core";

import { getbloglist } from "../../actions/users";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function Item() {

  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();

  const columns= [
    { 
      Header: "Image", 
      accessor: "image", 
      align: "left" 
    },
    { 
      Header: "Heading",
     accessor: "heading", 
     align: "left" 
    },
    { 
      Header: "Content", 
      accessor: "content", 
      align: "left"
     },
  ];
  const add =()=>{
    window.location = "/testadd"
  }

  const getUserListdata = async () => {
    var test = await getbloglist();
    console.log(test.userValue, "saran123");
    setUserDet(test.userValue);
  };
  
  useEffect(() => {
    getUserListdata();
  }, []);


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Button
            className="ml-3"
            variant="contained"
            color="primary"
            
             onClick={add}
          >
            Add
          </Button>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
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
                 Manage Items
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
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Item;
