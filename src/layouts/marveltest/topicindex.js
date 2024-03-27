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
import { useNavigate, useParams } from "react-router-dom";

import { testtopiclist } from "../../actions/users";
import { downloadquestions,deletetopic } from "../../actions/users";

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
      Header: "Topics", 
      accessor: "content", 
      align: "left" 
    },
  
    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    
  ];
  const add =()=>{
    window.location =  "/admin/marveltestfolder/"+id
  }
  function editR(id) {
    if (id != "") {
      window.location ="/admin/settopicedit/"+id;
    }
  }

 async function download(id) {
    if (id != "") {
      var test =  await downloadquestions(id);
      // console.log(test,"hi")
      const link = document.createElement('a');
link.href =test.link;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
    }
  }
  

  async function deleteR(id) {
    const result = await confirm("Are you sure to delete?");
    if (result) {
      if (id != "") {
        
       await deletetopic(id);
       setUserDet(userdet.filter((x, i) => x._id != id))
        // window.location.reload();
        toast.success("deleted success");
        getUserListdata()
         history("/marveltopicindex");
       
      }
      return;
    }
    console.log("You click No!");
   
  }

  const getUserListdata = async () => {
    var test = await testtopiclist(id);
    console.log(test,"nnn")
    const mapped = await Promise.all(test.topiclist.map(element => Object.assign(element, {
      action: (
        <>
       <MDTypography component="a"  onClick={() => editR(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button className="ml-3"
            variant="contained"
            color="primary">Edit</Button>
        </MDTypography>
              {/* <MDTypography component="a"   onClick={() => deleteR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button className="ml-3"
            variant="contained"
            color="primary">Delete</Button>
               </MDTypography> */}
               {/* <MDTypography component="a"   onClick={() => download(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button className="ml-3"
            variant="contained"
            color="primary">Export question</Button>
               </MDTypography> */}
               {/* <MDTypography component="a"   onClick={() => viewR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>View</Button>
               </MDTypography> */}
               </>
      )
    })));

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
                 Topics
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
