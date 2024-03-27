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
import GridContainer from "components/Grid/GridContainer.js";
// import { getexamlist, deleteexam } from "../../actions/users";
import { useNavigate, useParams } from "react-router-dom";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

const EventIndex = () => {
  const { id } = useParams();
  console.log(id, "idididididid");
  const history = useNavigate();
  const [userdet, setUserDet] = useState([]);

  const [name, setName] = useState({});

  let sentence = "this is the my next router";
  let replacedSentence = sentence.replace(/\s/g, "_");

  console.log(replacedSentence,"replacereplace");
  console.log(name, "gayathis");

  const { columns: pColumns, rows: pRows } = authorsTableData();

  const columns = [
    {
      Header: "Faculty Code",
      accessor: "faculty_code",
      align: "left",
    },

    {
      Header: "Faculty Name",
      accessor: "faculty_name",
      align: "left",
    },
    {
      Header: "Department",
      accessor: "department",
      align: "left",
    },

    {
      Header: "Created At",
      accessor: "created_at",
      align: "left",
    },

    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  const add = () => {
    window.location = `/admin/faculyeventindex/${id}/addprogramorgainsedforfaculty`;
  };
  function editEFacultyvent(id) {
    if (id != "") {
      window.location = "/admin/programorgainsedforfaculty/" + id;
    }
  }

  function ViewFacultyEvent(id) {
    if (id != "") {
      window.location = "/admin/examedit/" + id;
    }
  }
  const getFacultyIndexListData = () => {
    const staticData = [
      {
        _id: 1,
        faculty_code: "23mca",
        faculty_name: "sankar",
        department: "Master of Computer Application",
        created_at: "26/09/2023",
        event_id: 1,
      },
      {
        _id: 2,
        faculty_code: "23ece",
        faculty_name: "mathan",
        department: "Electronic computer Enginner",
        created_at: "26/09/2023",
        event_id: 1,
      },
      {
        _id: 3,
        faculty_code: "23eee",
        faculty_name: "ranjan",
        department: "mechanical enginnering",
        created_at: "26/09/2023",
        event_id: 1,
      },
    ];

    const mappedData = staticData.map((element) => ({
      ...element,
      action: (
        <>
          <MDTypography
            component="a"
            onClick={() => editEFacultyvent(element._id)}
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
            onClick={() => ViewFacultyEvent(element._id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <Button className="ml-3" variant="contained" color="primary">
              View
            </Button>
          </MDTypography>

          <MDTypography
            component="a"
            onClick={() => ViewFacultyEvent(element._id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <Button className="ml-3" variant="contained" color="primary">
              Delete
            </Button>
          </MDTypography>
        </>
      ),
    }));

    setUserDet(mappedData);
  };

  useEffect(() => {
    getFacultyIndexListData();
  }, []);

  return (
    <div>
      <DashboardLayout>
        {/* <DashboardNavbar /> */}

        <Button color="primary" className="ml-10" onClick={() => history(-1)}>
          Back to
        </Button>
       
        <Button
          className="ml-10"
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
                    program orgainsed for faculty
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns: columns, rows: userdet }}
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
        {/* <Footer /> */}
       
      </DashboardLayout>
    </div>
  );
};

export default EventIndex;
