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
import { toast } from "react-toastify";
import { confirm } from "react-confirm-box";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

import config from "lib/config";
import { eventList, deleteEvent, getEvent1,getAllEventDatalistPrincipal } from "actions/users";
import { useNavigate, useParams } from "react-router-dom";
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

const eventUser = () => {
  
  const { id } = useParams();

  console.log(id,"idididiididid")

  const navigate = useNavigate();
  const [userdet, setUserDet] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [formValue, setFormValue] = useState({
    tittle: "",
    eventId: "",
  });

  const type = localStorage.kct_user_type;
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  const { tittle, eventId } = formValue;

  // Define the content for each tab

  const columns = [
    {
      Header: "UserId",
      accessor: "addedBy_Details.UserId",
      align: "left",
    },
    {
      Header: "Name",
      accessor: "addedBy_Details.name",
      align: "left",
    },

    {
      Header: "Department",
      accessor: "addedBy_Details.department",
      align: "left",
    },
  
    {
      Header: "PDF",
      accessor: "FILE",
      align: "left",
    },
    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  const add = () => {
    navigate( `/${id}/event/add`) 
  };

  const delevent = async (eventid) => {
    const result = await confirm("Are you sure to delete?");

    if (result) {
      console.log("ididid", eventid);
      if (eventid !== "") {
        // Assuming deleteEventApiCall is the function to call the delete operation
        const response = await deleteEvent(eventid); // Renamed from `deleteEvent` to `deleteEventApiCall`
        console.log("response", response);

        toast.success("Deleted Successfully");
        getEventListData();
      }
      return;
    }
    console.log("You clicked No!");
  };

  function editR(eventid) {
    if (eventid != "") {
      window.location = "/admin/eventedit/" + eventid;
    }
  }
  function viewR(eventid) {
    if (eventid != "") {
      navigate(`/${id}/${eventid}/viewall`);
    }
  }

  useEffect(() => {
    getEventOne(id);
    getEventListDatalist();
  }, []);

  const getEventOne = async (id) => {
    const { userValue, errors } = await getEvent1(id);

  

    let data = {};
    data["tittle"] = userValue.data.tittle;
    data["eventId"] = userValue.data.eventId;
    console.log(userValue, "userValueuserValueuserValue");

    setFormValue(data);
  };

  const getEventListDatalist = async () => {
    const eventListAllData = await getAllEventDatalistPrincipal(id);      // THIS FILE FOR ONLY THE ADMIN AND PRINCIPLE
    
   
    const mapped = await Promise.all(
      eventListAllData.userValue.map((element) => {
        Object.assign(element, {
          action: (
            <>
              <MDTypography
                component="a"
                onClick={() => editR(element._id)}
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                <Button className="ml-3" variant="contained" color="primary">
                  Edit
                </Button>
              </MDTypography>

              <MDTypography
                component="a"
                onClick={() => viewR(element._id)}
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                <Button className="ml-3" variant="contained" color="primary">
                  View
                </Button>
              </MDTypography>

              {/* <MDTypography
                component="a"
                onClick={() => delevent(element._id)}
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                <Button className="ml-3" variant="contained" color="primary">
                  Delete
                </Button>
              </MDTypography> */}
            </>
          ),
        });

        return element;
      })
    );

    setUserDet(mapped);
  };

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


      <Button    variant="contained"    className="ml-3" color="primary" onClick={() => navigate(-1)}>
          Back to
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
                  {`${eventId}  ${tittle}`}
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
};
export default eventUser;
