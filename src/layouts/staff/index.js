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
import { useNavigate } from "react-router-dom";
import { useNavigation } from "actions/Navigate";

import { getStaffList,deleteexistingStaff } from "actions/users";
// import projectsTableData from "layouts/test/data/itemdetails";

const Staff = () => {
  const [formdata, setformdata] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0); 
  const navigate = useNavigate();
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  console.log("formdatadatadata", formdata);
  const columns = [
    {
      Header: "User Id",
      accessor: "UserId", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Name",
      accessor: "name", // Changed 'content' to 'department'
      align: "left",
    },
    {
      Header: "Department",
      accessor: "department", // Changed 'content' to 'department'
      align: "left",
    },
   
    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  const addStaff = () => {
   
    navigate("/staff/add");
  };

  const editStaff = (id) => {
    if (id) {
    
      navigate( `/staff/edit/${id}`);
    }
  };

  const viewStaff = (id) => {
    if (id) {
    
      
      navigate( `/staff/view/${id}`)
     
    }
  };




  const deleteStaff = async(id) =>{
    const result = await confirm("Are you sure to delete?");
    if (result) {
      console.log("ididid",id)
      if (id != "") {
       const abi= await deleteexistingStaff(id);
      
      
        toast.success("Deleted Successfully");
        getDUserListtData();
      
      }
      return;
    }
    console.log("You click No!");
  }

  const getDUserListtData = async () => {
    const userList = await getStaffList();

    console.log(userList, "bbbbbbfgfbfbfbf");
    
    const mappedData = userList.userValue.map((element) => ({
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

          <MDTypography
            component="a"
            onClick={() => viewStaff(element._id)}
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
            onClick={() => deleteStaff(element._id)}
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

    setformdata(mappedData);
  };

  useEffect(() => {
    var userType = localStorage.kct_user_type;
    var tabs = [];
    
    switch (userType) {
      case "Principal":
        tabs = [
          { id: 1, name: "ADMIN" },
          { id: 2, name: "HOD" },
          { id: 3, name: "DEPARTMENT PA" },
          { id: 4, name: "MONTLY EXECUTOR" },
          { id: 5, name: "STAFF" }
        ];
        break;
    
      case "Admin":
        tabs = [
          { id: 1, name: "HOD" },
          { id: 2, name: "DEPARTMENT PA" },
          { id: 3, name: "MONTLY EXECUTOR" },
          { id: 4, name: "STAFF" }
        ];
        break;
    
      case "Head Of Department":
        tabs = [
          { id: 1, name: "DEPARTMENT PA" },
          { id: 2, name: "MONTLY EXECUTOR" },
          { id: 3, name: "STAFF" }
        ];
        break;
    
      case "Montly Executor":
        tabs = [
          { id: 1, name: "DEPARTMENT PA" },
          { id: 2, name: "STAFF" }
        ];
        break;
    
      default:
        tabs = [];
    }
    
    setTabs(tabs);
    

    getDUserListtData();
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
      <div style={{ paddingBottom: 20 }} className="row">
      <div className="tabs">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={activeTab == index ? "tab_active" : "tab"}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.name}
                </div>
              ))}
            </div>
      </div>
  
      <style>
        {`
          .tabs {
            display: flex;
            margin-left: 20px;
          }
          
          .tab {
            font-size: 17px;
            padding: 5px 10px;
            cursor: pointer;
          }
          
          .tab_active {
            border-bottom: 3px solid #007bff;
            color: #007bff;
            font-size: 17px;
            padding: 5px 10px;
            font-weight: bold;
          }
          
          .tab-content {
            margin-top: 20px;
          }
        `}
      </style>
  
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
  )  
};

export default Staff;
