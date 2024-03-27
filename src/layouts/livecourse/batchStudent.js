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

import { getlivebatchesstudentslist,deletebatchstudent } from "../../actions/users";
import { useNavigate, useParams } from "react-router-dom";
// Data,
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function Item() {
  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();
  const { c_id,b_id } = useParams();
  const history = useNavigate();
  const columns= [
    { 
      Header: "Student", 
      accessor: "userName", 
      align: "left" 
    },
    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    
    
  ];
  
  const add =()=>{
    window.location ="/admin/addbatchesstudents/"+c_id+"/"+b_id;
  }

  async function deleteR(id,user) {
    const result = await confirm("Are you sure to delete?");
    if (result) {
      if (id != "") {
        let data = {
          course_id:c_id,
          user_id:user
        }
       await deletebatchstudent(id,data);
       
       setUserDet(userdet.filter((x, i) => x._id != id))
        // window.location.reload();
        toast.success("Deleted Successfully");
        getUserListdata()
        //  history("/livecourseindex");
       
      }
      return;
    }
    console.log("You click No!");
   
  }
  function viewR(id) {
    if (id != "") {
      window.location ="/admin/livecourseview/"+id;
    }
  }

  function editR(id) {
    if (id != "") {
      window.location ="/admin/livecourseedit/"+id;
    }
  }

  function mStudents(course_id,batch_id) {
    if (id != "") {
      window.location ="/admin/livecoursebatchstudents/"+course_id+"/"+batch_id;
    }
  }

  

  const getUserListdata = async () => {
    var test = await getlivebatchesstudentslist(c_id,b_id);
    const mapped = await Promise.all(test.userValue.map(element =>{ Object.assign(element, {
      action: (
        <>
                 {/* <MDTypography component="a"   onClick={() => mStudents(id,element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>Students Mangement</Button>
               </MDTypography> */}
        {/* <MDTypography component="a"  onClick={() => editR(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button>Edit</Button>
        </MDTypography> */}
        {/* <MDTypography component="a"  onClick={() => video(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button>Video</Button>
        </MDTypography>
        <MDTypography component="a"  onClick={() => pdf(element._id)}  variant="caption" color="text" fontWeight="medium">
       <Button>Pdf</Button>
        </MDTypography> */}

        {/* <MDTypography component="a"   onClick={() => viewR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button>View</Button>
               </MDTypography> */}
              <MDTypography component="a"   onClick={() => deleteR(element._id,element.userDetail._id)} variant="caption" color="text" fontWeight="medium">
              <Button>Delete</Button>
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
      <Button color="primary" variant="contained" onClick={()=>history(-1)}  >
                  Back to
                </Button>
      <Button
            className="ml-3"
            variant="contained"
            color="primary"
            
             onClick={()=>add()}
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
               Batches
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
