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

const studentIndex = () => {
  const [formdata, setformdata] = useState([]);
  console.log("formdatadatadata", formdata);

  const columns = [
    {
      Header: "Student Id",
      accessor: "student_id", // Changed 'content' to 'department'
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

  const addStudent = () => {
    window.location = "/admin/studentadd";
  };

  const editStudent = (id) => {
    if (id) {
      window.location = `/admin/studentedit/${id}`;
    }
  };

  const viewStudent = (id) => {
    if (id) {
      window.location = `/admin/studentview/${id}`;
    }
  };

  const getStudentListData = () => {
    const staticData = [
      {
        _id: 1,
        department_id: "Master of computer application",
        student_id: "23MCA001",
        name: "abisheck kumar",
        phone: 5678348934,
        clgMailid: "abisheckkumar@mca.gmail.com",
      },
      {
        _id: 2,
        department_id: "Electronic Communication Engineering",
        student_id: "23MCA025",
        name: "nagavelan",
        phone: 7865435643,
        clgMailid: "nagavelan@mca.gmail.com",
      },
      {
        _id: 3,
        department_id: "Master of Business Application",
        student_id: "23MCA33",
        name: "hariharan",
        phone: 672398097,
        clgMailid: "hariharan@gmail.com",
      },
    ];

    const mappedData = staticData.map((element) => ({
      ...element,
      action: (
        <>
          <MDTypography
            component="a"
            onClick={() => editStudent(element._id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <Button className="ml-3" variant="contained" color="primary">
              Edit
            </Button>
          </MDTypography>

          <MDTypography
            component="a"
            onClick={() => viewStudent(element._id)}
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
    getStudentListData();
  }, []);

  return (
    <DashboardLayout>
      <Button
        className="ml-3"
        variant="contained"
        color="primary"
        onClick={addStudent}
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
                  STUDENT
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

export default studentIndex;
