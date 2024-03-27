import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useEffect, useState, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

import { getquestiondata,deletesubject } from "../../actions/users";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function Item() {

  const history = useNavigate();
  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();
  const { id } = useParams();

  const columns= [
    { 
      Header: "Questions",
     accessor: "question", 
     align: "left" 
    },
    { 
      Header: "Topic",
     accessor: "topic", 
     align: "left" 
    },

    
  
    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    
  ];
  const add =()=>{
    window.location = "/admin/subjectadd"
  }
  function editR(id) {
    if (id != "") {
      window.location ="/admin/setquestionedit/"+id;
    }
  }
  

  async function deleteR(id) {
    const result = await confirm("Are you sure to delete?");
    if (result) {
      if (id != "") {
        
       await deletesubject(id);
       setUserDet(userdet.filter((x, i) => x._id != id))
        // window.location.reload();
        toast.success("deleted success");
        getUserListdata()
         history("/subjectindex");
       
      }
      return;
    }
    console.log("You click No!");
   
  }

  function questionindex(id) {
    if (id != "") {
      window.location ="/admin/marveltestquestionadd/"+id;
    }
  }

  const getUserListdata = async () => {
    var test = await getquestiondata(id);
    console.log(test,"eee")
    const mapped = await Promise.all(test.userValue.map(element => Object.assign(element, {
      action: (
        <>
       <MDTypography component="a"  onClick={() => editR(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button className="ml-3"
              variant="contained"
              color="primary">Edit</Button>
        </MDTypography>
              {/* <MDTypography component="a"   onClick={() => deleteR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>Delete</Button>
               </MDTypography> */}
               {/* <MDTypography component="a"   onClick={() => viewR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>View</Button>
               </MDTypography> */}
               </>
      )
    })));
    console.log(test.userValue, "saran123");
    setUserDet(mapped);
  };
  
  useEffect(() => {
    getUserListdata();
  }, []);


  return (
    <DashboardLayout>
      
      {/* <DashboardNavbar /> */}
      <Button color="primary" variant="contained" onClick={()=>history(-1)}  >
                  Back to
                </Button>
      <Button
            className="ml-3"
            variant="contained"
            color="primary"
            
             onClick={() => questionindex(id)}
          >
            Import Question excel format
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
                 Questions added
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
