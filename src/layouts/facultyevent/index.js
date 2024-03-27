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

const facultyEventIndex = () => {


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
      window.location = `/admin/faculyeventindex/${id}`;
    }
  };

  const getEventListData = () => {
    const staticData = [
      { _id: 1, event: "program orgainsed for faculty" },
      { _id: 2, event: "Guest Lectures organised" },
      { _id: 3, event: "One Credit Course Organised" },
      { _id: 4, event: "Value Added Courses Organis" },
      { _id: 5, event: "Faculty as Resource person" },
      { _id: 6, event: "Papers presented" },
      { _id: 7, event: "Journal (Scopus)" },
      { _id: 8, event: "Journal (non-scopus)" },
      { _id: 9, event: "Papers Reviewed" },
      { _id: 10, event: "Book Publication" },
      { _id: 11, event: "Book Chapter Pub" },
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
    <div><DashboardLayout>
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
                Faculty Events
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
  </DashboardLayout></div>
  )
}

export default facultyEventIndex