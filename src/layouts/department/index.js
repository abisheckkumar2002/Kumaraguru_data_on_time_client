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

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";

const Department = () => {
  const [departments, setDepartments] = useState([]);


  console.log(departments,"dddddfdfdfdfdf");
  console.log(setDepartments,"setDepartmentssetDepartmentssetDepartments");
  const columns = [
    {
      Header: 'Department',
      accessor: 'department', // Changed 'content' to 'department'
      align: 'left',
    },
    {
      Header: 'Action',
      accessor: 'action',
      align: 'left',
    },
  ];

  const addDepartment = () => {
    window.location = '/admin/departmentadd';
  };

  const editDepartment = (id) => {
    if (id) {
      window.location = `/admin/departmentedit/${id}`;
    }
  };

  const getDepartmentListData = () => {
    const staticData = [
      { _id: 1, department: 'Master of Computer Application' },
      { _id: 2, department: 'Master of Business Application' },
      { _id: 3, department: 'Electronic Computer Science' },
    ];

    const mappedData = staticData.map((element) => ({
      ...element,
      action: (
        <MDTypography
          component="a"
          onClick={() => editDepartment(element._id)}
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          <Button className="ml" variant="contained" color="primary">
            Edit
          </Button>
        </MDTypography>
      ),
    }));

    setDepartments(mappedData);
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
        onClick={addDepartment}
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
                  DEPARTMENT
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: columns, rows: departments }} // Pass departments directly
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

export default Department;
