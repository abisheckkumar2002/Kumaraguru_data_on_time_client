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
// import projectsTableData from "layouts/test/data/itemdetails"

const hodIndex = () => {
  const [formdata, setformdata] = useState([]);

  const columns = [
    {
      Header: "Image",
      accessor: "image", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Hod Id",
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

  const addHod = () => {
    window.location = "/admin/hodadd";
  };

  const editHod = (id) => {
    if (id) {
      window.location = `/admin/hodedit/${id}`;
    }
  };

  const viewHod = (id) => {
    if (id) {
      window.location = `/admin/hodview/${id}`;
    }
  };

  console.log("formdatadatadata", formdata);

  const getDepartmentHodData = () => {
    const staticData = [
      {
        _id: 1,
        image: "",
        department_id: "Master of computer application",
        staff_id: "23",
        name: "crk",
        phone: 7603984379,
        clgMailid: "crk@mca001",
        type: "hod",
      },
      {
        _id: 2,
        image: "",
        department_id: "Electronic Communication Engineering",
        staff_id: "24",
        name: "dhanabalan",
        phone: 7603984379,
        clgMailid: "dhanabalan@mca.gmail.com",
        type: "hod",
      },
      {
        _id: 3,
        image: "",
        department_id: "Mechanical Engineering",
        staff_id: "25",
        name: "hamind",
        phone: 7603984379,
        clgMailid: "hamind@gmail.com",
        type: "hod",
      },
    ];

    const mappedData = staticData.map((element) => ({
      ...element,
      action: (
        <>
          <MDTypography
            component="a"
            onClick={() => editHod(element._id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <Button className="ml" variant="contained" color="primary">
              Edit
            </Button>
          </MDTypography>

          <MDTypography
            component="a"
            onClick={() => viewHod(element._id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <Button className="ml-3" variant="contained" color="primary">
              View
            </Button>
          </MDTypography>
        </>
      ),
    }));

    setformdata(mappedData);
  };

  useEffect(() => {
    getDepartmentHodData();
  }, []);

  return (
    <DashboardLayout>
      <Button
        className="ml-3"
        variant="contained"
        color="primary"
        onClick={addHod}
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
                  HEAD OF DEPARTMENT
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

export default hodIndex;
