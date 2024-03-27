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
import { confirm } from "react-confirm-box";

import { getmarveltestlist,deletemarveltest } from "../../actions/users";

// Data,
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function Item() {

  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();

  const columns= [
    // { 
    //   Header: "Banner", 
    //   accessor: "image", 
    //   align: "left" 
    // },
    { 
      Header: "Set name",
     accessor: "setname", 
     align: "left" 
    },

    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    
    
  ];
  const add =()=>{
    window.location = "/admin/marveltestadd"
  }
  async function deleteR(id) {
    const result = await confirm("Are you sure to delete?");
    if (result) {
      if (id != "") {
        
       await deletemarveltest(id);
       
       setUserDet(userdet.filter((x, i) => x._id != id))
        // window.location.reload();
        toast.success("deleted success");
        getUserListdata()
         history("/bannerindex");
       
      }
      return;
    }
    console.log("You click No!");
   
  }

  async function download() {
    
    
      // console.log(test,"hi")
      const link = document.createElement('a');
link.href ="https://marvelclasses.net:3000/excelfiles/excelmodel.xlsx";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
    
  }
  function viewR(id) {
    if (id != "") {
      window.location ="/admin/marveltestview/"+id;
    }
  }
  function questionindex(id) {
    if (id != "") {
      window.location ="/admin/marveltestquestionindex/"+id;
    }
  }

  function editR(id) {
    if (id != "") {
      window.location ="/admin/marveltestedit/"+id;
    }
  }

  function questionedit(id) {
    if (id != "") {
      window.location ="/admin/marveltestquestionedit/"+id;
    }
  }

  const topic =(id)=>{
    if (id != "") {
    window.location = "/admin/marveltestfolder/"+id
    }
  }

  const topicindex =(id)=>{
    if (id != "") {
    window.location = "/admin/marveltopicindex/"+id
    }
  }

  const getUserListdata = async () => {
    var test = await getmarveltestlist();
    const mapped = await Promise.all(test.userValue.map(element =>{ Object.assign(element, {
      action: (
        <>
        <MDTypography component="a"  onClick={() => editR(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Edit</Button>
        </MDTypography>
        {/* <MDTypography component="a"  onClick={() => questionindex(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button>Add questions</Button>
        </MDTypography> */}
         <MDTypography component="a"  onClick={() => topicindex(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Topics management</Button>
        </MDTypography>

        <MDTypography component="a"  onClick={() => questionedit(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Add/Edit questions</Button>
        </MDTypography>

      
        {/* <MDTypography component="a"  onClick={() => topic(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button>Add topics</Button>
        </MDTypography> */}
       
        {/* <MDTypography component="a"   onClick={() => viewR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>View</Button>
               </MDTypography> */}
              <MDTypography component="a"   onClick={() => deleteR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button  className="ml-3"
            variant="contained"
            color="primary">Delete</Button>
               </MDTypography>
               
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
      <Button
            className="ml-3"
            variant="contained"
            color="primary"
            
             onClick={add}
          >
            Add
          </Button>

          <MDTypography component="a"   onClick={() => download()} variant="caption" color="text" fontWeight="medium">
              <Button className="ml-3"
            variant="contained"
            color="primary">Download</Button>
               </MDTypography>
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
                 Test Set list
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
  );
}

export default Item;
