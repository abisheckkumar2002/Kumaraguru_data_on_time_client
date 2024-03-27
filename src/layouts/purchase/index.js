import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useEffect, useState, Fragment } from "react";
import { confirm } from "react-confirm-box";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CardFooter from "components/Card/CardFooter.js";
import isEmpty from "lib/isEmpty";
import { useNavigate } from "react-router-dom";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { Button } from "@material-ui/core";

import { getpurchaselist,deletewallet,filterdate } from "../../actions/users";
import Moment from 'react-moment';
import GridItem from "components/Grid/GridItem.js";
import InputLabel from "@material-ui/core/InputLabel";
import DatePicker from "react-datepicker";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";


function datealignment(startdate){
   
  var now = new Date(startdate);

var startdate = now.getDate()  + "-" + (now.getMonth()+1) + "-" + now.getFullYear() + " " ;

 
    
// Regular expression to identify HTML tags in 
// the input string. Replacing the identified 
// HTML tag with a null string.
return startdate;
}

function Item() {

  function datealignment(startdate){
   
    var now = new Date(startdate);

var startdate = now.getDate()  + "-" + (now.getMonth()+1) + "-" + now.getFullYear() + " " ;

   
      
// Regular expression to identify HTML tags in 
// the input string. Replacing the identified 
// HTML tag with a null string.
return startdate;
}

  
  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [active, setactive] = useState(false);
  const history = useNavigate();

  const columns= [
    
    { 
      Header: "Name", 
      accessor: "username", 
      align: "left" 
    },
    { 
      Header: "Title", 
      accessor: "coursetitle", 
      align: "left" 
    },

    { 
      Header: "Amount", 
      accessor: "amount", 
      align: "left" 
    },

    { 
      Header: "Purchase date", 
      accessor: "createdAt", 
      align: "left" 
    },


    

    
  
    { 
      Header: "Action",
     accessor: "action", 
     align: "left" 
    },
    
  ];
  const add =()=>{
    window.location = "/admin/walletadd"
  }
  function editR(id) {
    if (id != "") {
      window.location ="/admin/walletedit/"+id;
    }
  }
  function viewR(id) {
    if (id != "") {
      window.location ="/admin/purchaseview/"+id;
    }
  }

  let toasterOption = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  

  async function deleteR(id) {
    const result = await confirm("Are you sure to delete?");
    if (result) {
      if (id != "") {
        
       await deletewallet(id);
       
       setUserDet(userdet.filter((x, i) => x._id != id))
        // window.location.reload();
        toast.success("deleted success");
        getUserListdata()
         history("/walletindex");
       
      }
      return;
    }
    console.log("You click No!");
   
  }

  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    console.log(formValue);
    //setValidateError(formData)
  };
  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
  
    let reqData = {
     
      "startDate":startDate,
      "endDate":endDate
     
     
      
     
    };
    console.log(reqData,"reqData");
    
    getUserListdata(reqData)
    // if (isEmpty(error)) {
    //   console.log("tassssssssssssssssssssssssssssssss")
    //   toast.success("Added Successfully", toasterOption);
    //   history("/purchaseindex");
    // } else {
    //   setValidateError(error);
    // }
  };

  const getUserListdata = async (reqData) => {
   console.log(reqData,"sandy")
    if(!reqData)
    {
      var test = await getpurchaselist();
      console.log("non-filter data",test.userValue)
    }
    else{
      var test = await filterdate(reqData);
      console.log("Filter_data",test.userValue)
    }

    console.log(test,"abc")
    const mapped = await Promise.all(test.userValue.map(element => Object.assign(element, {
      action: (
        <>
   
               <MDTypography component="a"   onClick={() => viewR(element._id)} variant="caption" color="text" fontWeight="medium">
              <Button  className="ml-3"
            variant="contained"
            color="primary">View</Button>
               </MDTypography>
               </>
      ),
      createdAt:    <Moment format=" DD/MM/YYYY">
      {element.createdAt}
   </Moment>,
        
    })));
    console.log(test.userValue, "saran123");
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
                 Purchaselists
                </MDTypography>
                
              </MDBox>
              <form
              style={{ display: "flex", alignItems:"center" }}
              noValidate
              onSubmit={handleFormSubmit}
            >
              <GridItem xs={4} sm={4} md={4}>
                  {/* <GridItem xs={12} sm={12} md={4}> */}
                  <InputLabel>From
        </InputLabel>  
                  <DatePicker 
                  dateFormat="dd/MM/yyyy"
      selected={startDate} 
      onChange={date => setStartDate(date)} 
    />
                  {/* </GridItem> */}
                  </GridItem>

                  <GridItem xs={4} sm={4} md={4}>
                  {/* <GridItem xs={12} sm={12} md={4}> */}
                  <InputLabel>To
        </InputLabel>  
                  <DatePicker 
                   dateFormat="dd/MM/yyyy"
      selected={endDate} 
      onChange={date => setEndDate(date)} 
    />
                  {/* </GridItem> */}
                  </GridItem>
                  <Button className="ml-3"
            variant="contained"
            color="primary"style={{ marginTop:'10px' }}  type="submit" onClick={() => handleFormSubmit()}>
                  Filter
                </Button>
</form>
             
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
      <CardFooter>
              
              </CardFooter>
    </DashboardLayout>
  );
}

export default Item;
