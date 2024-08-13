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
import { useNavigate } from "react-router-dom";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import { getDepartmentList ,deleteDepartment} from "actions/users";

const Department = () => {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  console.log(departments, "dddddfdfdfdfdf");
  console.log(setDepartments, "setDepartmentssetDepartmentssetDepartments");
  const columns = [
    {
      Header: "Department",
      accessor: "department", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "SORTfORM",
      accessor: "sortForm", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  const addDepartment = () => {
  
    navigate( `/department/add`)
  };

  const editDepartment = (id) => {
    if (id) {
      navigate( `/department/edit/${id}`)
   
    }
  };






  
  const delDepartment = async(id) =>{
    const result = await confirm("Are you sure to delete?");
    if (result) {
      console.log("ididid",id)
      if (id != "") {
       const abi= await deleteDepartment(id);
       console.log("abiabiabiabiabiabi",abi)
      
        toast.success("Deleted Successfully");
        getDepartmentListData();
      
      }
      return;
    }
    console.log("You click No!");
  }

  const getDepartmentListData = async () => {
   

    const departmentList = await getDepartmentList(null);

    const mappedData = departmentList.userValue.map((element) => ({
      ...element,
      action: (
        <>
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

          <MDTypography
            component="a"
            onClick={() => delDepartment(element._id)}
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
