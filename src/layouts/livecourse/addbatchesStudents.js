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
import isEmpty from "lib/isEmpty";

import { getunallotedstudentsinbatchlist,livecoursebatchstudentadd,deletelivecourse } from "../../actions/users";
import { useNavigate, useParams } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import Moment from 'react-moment';

// Data,
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
toast.configure();
let toasterOption = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
let selectedStudents =[];
function Item() {
  const history = useNavigate();
  const [userdet, setUserDet] = useState([]);
  // const [selectedStudents, setselectedStudents] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();
  const { c_id,b_id } = useParams();
  const [ checkbox,setcheckbox ] = useState(0);
  const columns= [
    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    { 
      Header: "Student", 
      accessor: "userName", 
      align: "left" 
    },
    { 
      Header: "Join Date", 
      accessor: "createdAt", 
      align: "left" 
    },
  ];
  const add =()=>{
    window.location = "/admin/livecoursebatchadd/"+c_id
  }
  

  const selectStudent =(id)=>{
setcheckbox(1)
   const check = selectedStudents.find(e=>e == id)
  //  console.log(check,"checkcheckcheck")

   if(check){
    // alert("true")
    // console.log(selectedStudents.filter(e=>!(e == id)));
    
    selectedStudents =selectedStudents.filter(e=>!(e == id));
 

    
   }else{
    // alert("false")
    if(selectedStudents.length <= 20){
    selectedStudents=[...selectedStudents,id];
  }else{
    toast.error("Maximum 20 allowed", toasterOption);
  }
   }
     
// console.log(selectedStudents,"vfdgfdfgdfg")
  }


  const getUserListdata = async () => {
    var test = await getunallotedstudentsinbatchlist(c_id);
   
    console.log(test,"sss")
    const mapped = await Promise.all(test.userValue.map(element =>Object.assign(element, {
      action: (
        <>
                 <Checkbox {...label} sty onChange={()=>selectStudent(element.user_id)}/>
               </>
      ),
      createdAt:    <Moment format="DD/MM/YYYY hh:mm A">
      {element.createdAt}
   </Moment>,
        
    }


    )


    
  
    ));
    setUserDet(test.userValue);
  };


  const handleFormSubmit = async (e) => {
    //console.log("saran");

    // console.log(formValue);
    console.log(checkbox,"00000000")
    if(checkbox==0){
      alert("No student added")
    }
    let reqData = {
      course_id:c_id,
      batchId:b_id,
      inputList:selectedStudents,
    };
    console.log(reqData,"sss");
    let { error } = await livecoursebatchstudentadd(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Added Successfully", toasterOption);
      // history("/livecoursebatchstudents/"+c_id+'/'+b_id);
      window.location=document.referrer;

    } else {
      toast.error("Something Wrong", toasterOption);
    }
  };


  
  useEffect(() => {
    getUserListdata();
  }, []);


  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <Button color="primary" variant="contained" onClick={()=>history(-1)}  >
        Go Back
                </Button>
      <Button
            className="ml-3"
            variant="contained"
            color="primary"
            style={{width:"50px"}}

             onClick={()=>handleFormSubmit()}
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
      {/* <Button
            className="ml-3"
            variant="contained"
            color="primary"
            style={{width:"60px",margin:"0 auto"}}
             onClick={()=>handleFormSubmit()}
          >
            Add
          </Button> */}
    </DashboardLayout>
  );
}

export default Item;
