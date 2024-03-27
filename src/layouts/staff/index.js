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
import { confirm } from "react-confirm-box";
import { toast } from "react-toastify";

import { getexamlist, deleteexam } from "../../actions/users";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

const Staff = () => {
  const [formdata, setformdata] = useState([]);
console.log("formdatadatadata",formdata)
  const columns = [
    {
      Header: "Staff Id",
      accessor: "staff_id", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Department",
      accessor: "department_id", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Name",
      accessor: "name", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
   
  ];

  const addStaff = () => {
    window.location = "/admin/staffadd";
  };

  const editStaff = (id) => {
    if (id) {
      window.location = `/admin/staffedit/${id}`;
    }
  };

  const viewStaff =(id)=>{
    if(id){
        window.location =`/admin/staffview/${id}`
    }
  }

  const getDepartmentListData = () => {
    const staticData = [
      {
        _id: 1,
        department_id: "Master of computer application",
        staff_id: "23",
        name: "crk",
        phone: 7603984379,
        clgMailid: "crk@mca001",
      },
      {
        _id: 2,
        department_id: "Electronic Communication Engineering",
        staff_id: "24",
        name: "dhanabalan",
        phone: 7603984379,
        clgMailid: "dhanabalan@mca.gmail.com",
      },
      {
        _id: 3,
        department_id: "Master of Business Application",
        staff_id: "25",
        name: "hamind",
        phone: 7603984379,
        clgMailid: "hamind@gmail.com",
      },
    ];

    const mappedData = staticData.map((element) => ({
      ...element,
      action: (
        <>
          <MDTypography
            component="a"
            onClick={() => editStaff(element._id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <Button className="ml" variant="contained" color="primary">
              Edit
            </Button>
          </MDTypography>


          <MDTypography component="a"   
          onClick={() => viewStaff(element._id)} 
          variant="caption" 
          color="text" 
          fontWeight="medium">
              <Button  className="ml-3"
            variant="contained"
            color="primary">View</Button>
               </MDTypography>

        </>
      ),
    
    }));

    setformdata(mappedData);
  };

  useEffect(() => {
    getDepartmentListData();
  }, []);

  return (
    <DashboardLayout>
      <Button
        className="ml-3"
        variant="contained"
        color="primary"
        onClick={addStaff}
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
                  STAFF
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: columns, rows: formdata }} // Pass departments directly
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                  canSearch={true}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default Staff;
