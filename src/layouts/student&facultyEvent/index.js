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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { geteventslist, deleteevent } from "../../actions/users";
import config from "lib/config";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

const studentFacultyEvent = () => {
  const [events, setDepartments] = useState([]);

  console.log(events, "dddddfdfdfdfdf");
  console.log(setDepartments, "setDepartmentssetDepartmentssetDepartments");
  const columns = [
    {
      Header: "Event",
      accessor: "event", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Action",
      accessor: "action",
      align: "left",
    },
  ];



  const editClick = (id) => {
    if (id) {
      window.location = `/admin/editevent/${id}`;
    }
  };


  const Click = (id) => {
    if (id) {
      window.location = `/admin/eventclick/${id}`;
    }
  };

  const getEventListData = () => {
    const staticData = [
      { _id: 1, event: "Faculty Competition" },
      { _id: 2, event: "Student Projects Industry" },
      { _id: 3, event: "Student Projects Inhouse" },
      { _id: 4, event: "Internships" },
      { _id: 5, event: "Students Publications" },
      { _id: 6, event: "Students Presentation" },
      { _id: 7, event: "Students Participation Prog" },
      { _id: 8, event: "Stud-Participation-competiti" },
      { _id: 9, event: "Scholarship" },
      { _id: 10, event: "Studs success -career exams" },
      { _id: 11, event: "Entrepreneurship Details" },
    ];

    const mappedData = staticData.map((element) => ({
      ...element,
      action: (
        <>
        <MDTypography
          component="a"
          onClick={() => Click(element._id)}
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          <Button className="ml" variant="contained" color="primary">
            Click
          </Button>
        </MDTypography>

        <MDTypography
          component="a"
          onClick={() => editClick(element._id)}
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          <Button className="ml-3" variant="contained" color="primary">
            Edit
          </Button>
        </MDTypography>

        </>
      ),
    }));

    setDepartments(mappedData);
  };

  useEffect(() => {
    getEventListData();
  }, []);

  return (
    <DashboardLayout>
      {/* <Button
        className="ml-3"
        variant="contained"
        color="primary"
        onClick={addEvent}
      >
        Add
      </Button> */}

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
                  Sudent/Faculty Events
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: columns, rows: events }} // Pass departments directly
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

export default studentFacultyEvent;
