import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useEffect, useState, Fragment } from "react";
import { confirm } from "react-confirm-box";

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

import { getmicrolist,deletemicro } from "../../actions/users";

// Data,
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function Item() {

  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();

  const columns= [
    { 
      Header: "Image", 
      accessor: "image", 
      align: "left" 
    },

    { 
      Header: "Title", 
      accessor: "title", 
      align: "left" 
    },
    
    

    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    
    
  ];
  const add =()=>{
    window.location = "/admin/microadd"
  }
 
  const topic =(id)=>{
    if (id != "") {
    window.location = "/admin/respectsubject/"+id
    }
  }
  const video =(id)=>{
    if (id != "") {
    window.location = "/admin/micromultiple/"+id
    }
  }
  const pdf =(id)=>{
    if (id != "") {
    window.location = "/admin/micromultiplepdf/"+id
    }
  }

  const folder1 =(id)=>{
    if (id != "") {
    window.location = "/admin/respectsubchapter/"+id
    }
  }
  async function deleteR(id) {
    const result = await confirm("Are you sure do you want to delete?");
    if (result) {
      if (id != "") {
        
       await deletemicro(id);
       
       setUserDet(userdet.filter((x, i) => x._id != id))
        // window.location.reload();
        toast.success("deleted Successfully");
        getUserListdata()
         history("/microindex");
       
      }
      return;
    }
    console.log("You click No!");
   
  }
  function viewR(id) {
    if (id != "") {
      window.location ="/admin/microview/"+id;
    }
  }

  function editR(id) {
    if (id != "") {
      window.location ="/admin/microedit/"+id;
    }
  }

  const getUserListdata = async () => {
    var test = await getmicrolist();
    const mapped = await Promise.all(test.userValue.map(element =>{ Object.assign(element, {
      action: (
        <>
        <MDTypography component="a"  onClick={() => editR(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml"
            variant="contained"
            color="primary">Edit</Button>
        </MDTypography>

        {/* <MDTypography component="a"  onClick={() => topic(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Chapters</Button>
        </MDTypography> */}

        <MDTypography component="a"  onClick={() => folder1(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Sub chapters</Button>
        </MDTypography>
        {/* <MDTypography component="a"  onClick={() => video(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Video</Button>
        </MDTypography>
        <MDTypography component="a"  onClick={() => pdf(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button  className="ml-3"
            variant="contained"
            color="primary">Pdf</Button>
        </MDTypography> */}
      
        <MDTypography component="a"   onClick={() => viewR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button  className="ml-3"
            variant="contained"
            color="primary">View</Button>
               </MDTypography>
              <MDTypography component="a"   onClick={() => deleteR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button  className="ml-3"
            variant="contained"
            color="primary">Delete</Button>
               </MDTypography>
               
               </>
      )
    }


    );
    element.image= <img src={config.API + "/images/user/" + element.image} alt="..." style={{maxWidth:100, maxHeight:100}} />;
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
               MICRO
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
