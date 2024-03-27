import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useEffect, useState, Fragment } from "react";
import '../../../src/app.css'

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { Button } from "@material-ui/core";
import config from "lib/config";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { getstudylist,deletestudy } from "../../actions/users";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function Item() {

  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();

  const columns= [
    // { 
    //   Header: "Image", 
    //   accessor: "image", 
    //   align: "left" 
    // },
    // { 
    //   Header: "Content",
    //  accessor: "description", 
    //  align: "left" 
    // },
    { 
      Header: "Count",
     accessor: "heading", 
     align: "left" 
    },
    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    
  ];
  const add =()=>{
    window.location = "/studyadd"
  }
  function deleteR(id) {
    if (id != "") {
      deletestudy(id);
      toast.success("deleted success");
       history("/studyindex");
      window.location = "/studyindex";
    }
  }

  function editR(id) {
    if (id != "") {
      window.location ="/admin/studyedit/"+id;
    }
  }
  function viewR(id) {
    if (id != "") {
      window.location ="/studyview/"+id;
    }
  }

  const getUserListdata = async () => {
    var test = await getstudylist();
    const mapped = await Promise.all(test.userValue.map(element =>{ Object.assign(element, {
      action: (
        <>
        <MDTypography component="a"  onClick={() => editR(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Edit</Button>
        </MDTypography>
        {/* <MDTypography component="a"   onClick={() => viewR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>View</Button>
               </MDTypography> */}
              {/* <MDTypography component="a"   onClick={() => deleteR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>Delete</Button>
               </MDTypography> */}
              
               </>
      )
    }


    );
    element.image= <img src={config.API + "/images/user/" + element.image} alt="..." style={{maxWidth:200, maxHeight:200}} />;
return element;
    
  }
    ));
    setUserDet(test.userValue);
  };
  
  useEffect(() => {
    getUserListdata();
  }, []);


  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      {/* <Button
            className="ml-3"
            variant="contained"
            color="primary"
            
             onClick={add}
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
                 List 
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: columns, rows: userdet }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Item;
