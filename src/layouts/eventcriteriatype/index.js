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
import {eventCriteriaTypeList,deleteCriteriaType} from "actions/users";

const EventCriteriaType = () => {
  const navigate = useNavigate();

  const [criteriaType, setCriteriaType] = useState([]);

  console.log(criteriaType, "dddddfdfdfdfdf");
  console.log(setCriteriaType, "setDepartmentssetDepartmentssetDepartments");
  const columns = [
    {
      Header: "Criteria Type",
      accessor: "criteriaType", // Changed 'content' to 'department'
      align: "left",
    },

    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  const addCriteriaType= () => {
  
    navigate( `/criteriaType/add`)
  };

  const editCriteriaType = (id) => {
    if (id) {
      navigate( `/criteriaType/edit/${id}`)
   
    }
  };






  
  const delCriteriaType = async(id) =>{
    const result = await confirm("Are you sure to delete?");
    if (result) {
      console.log("ididid",id)
      if (id != "") {
        await deleteCriteriaType(id);
    
      
        toast.success("Deleted Successfully");
        getCriteriaTypetData();
      
      }
      return;
    }
    console.log("You click No!");
  }

  const getCriteriaTypetData = async () => {
   

    const crieriaTypeList = await eventCriteriaTypeList(null);
    console.log(crieriaTypeList,"crieriaTypeListcrieriaTypeListcrieriaTypeList")

    const mappedData = crieriaTypeList.userValue.map((element) => ({
      ...element,
      action: (
        <>
          <MDTypography
            component="a"
            onClick={() => editCriteriaType(element._id)}
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
            onClick={() => delCriteriaType(element._id)}
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

    setCriteriaType(mappedData);
  };

  useEffect(() => {
    getCriteriaTypetData();
  }, []);

  return (
    <DashboardLayout>
      <Button
        className="ml-3"
        variant="contained"
        color="primary"
        onClick={addCriteriaType}
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
                  CRITERIA TYPE
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: columns, rows: criteriaType }} // Pass departments directly
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

export default EventCriteriaType;
