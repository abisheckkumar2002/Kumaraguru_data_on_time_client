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
import { useNavigate } from "react-router-dom";
import config from "lib/config";
import { eventList, deleteEvent ,eventTypeList} from "actions/users";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

const event = () => {
  const navigate = useNavigate();
  const [userdet, setUserDet] = useState([]);
  const [count, setcount] = useState(0);
  const [tabs, setTabs] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();
  const type = localStorage.kct_user_type;
  const [activeTab, setActiveTab] = useState(""); // Default to the first tab


  console.log(activeTab,"activeTabactiveTabactiveTabactiveTabactiveTab")

  console.log(tabs,"tabstabstabs")

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Define the content for each tab

  const columns = [
    {
      Header: "EventId",
      accessor: "eventId",
      align: "left",
    },

    {
      Header: "Tittle",
      accessor: "tittle",
      align: "left",
    },
    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  const add = () => {
    navigate(`/eventadd`);
  };

  const delevent = async (id) => {
    const result = await confirm("Are you sure to delete?");

    if (result) {
      console.log("ididid", id);
      if (id !== "") {
        // Assuming deleteEventApiCall is the function to call the delete operation
        const response = await deleteEvent(id); // Renamed from `deleteEvent` to `deleteEventApiCall`
        console.log("response", response);

        toast.success("Deleted Successfully");
        getEventListData();
      }
      return;
    }
    console.log("You clicked No!");
  };

  const handleDepartmentChange = (selectedOption) => {
    setDepId(selectedOption.value);
  };

  function editR(id) {
    if (id != "") {
      navigate(`/event/edit/${id}`);
    }
  }

  function eventUser(id) {
    if (id != "") {
      navigate(`/${id}/eventuser`);
    }
  }
  function viewR(id) {
    if (id != "") {
      navigate(`/event/view/${id}`);
    }
  }

  useEffect(() => {
    var userType = localStorage.kct_user_type;
    getLableData();
  
    getEventListData();
 
   
  }, []);


  const  getLableData = async()=>{
    const eventListData = await eventTypeList(null);

    console.log(eventListData.userValue,"eventListData.userValue")
    setTabs(eventListData.userValue)
    setActiveTab(eventListData.userValue[0]._id)

  }

  const getEventListData = async () => {

    console.log(activeTab,"activeTabactiveTabactiveTabactiveTab")
    const eventListData = await eventList(activeTab);

    setcount(eventListData.userValue.count);
    const mapped = await Promise.all(
      eventListData.userValue.event_list.map((element) => {
        Object.assign(element, {
          action: (
            <>
              <MDTypography
                component="a"
                onClick={() => eventUser(element._id)}
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                <Button className="ml-3" variant="contained" color="primary">
                  View All
                </Button>
              </MDTypography>

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

              <MDTypography
                component="a"
                onClick={() => delevent(element._id)}
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
        });

        return element;
      })
    );

    setUserDet(mapped);
  };

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
      <label
        style={{
          marginLeft: "950px",
          fontSize: "23px",
          fontFamily: "monospace",
        }}
      >
        {"COUNT" + ":" + " " + count}
      </label>
      <MDBox pt={6} pb={3}>
        <div style={{ paddingBottom: 20 }} className="row">
          <div className="col-9">
            <div className="tabs">
              {tabs.map((tab, index) => (

               
                <div
                  key={tab._id}
                  className={activeTab == tab._id ? "tab_active" : "tab"}
                  onClick={() => handleTabClick(tab._id)}
                >
                  {tab.eventtype}
                </div>
              ))}
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
          </div>

          {/* <div className="col-3">
              <Select
                options={departmentList.map((option) => ({
                  value: option._id,
                  label: option.department,
                }))}
                placeholder="Select Department"
                loading={false} // Set to false for static data
                closeMenuOnScroll={true}
                value={
                  dep_id
                    ? {
                        value: dep_id,
                        label: departmentList.find(
                          (option) => option._id === dep_id
                        ).department,
                      }
                    : null
                }
                onChange={handleDepartmentChange}
              />
            </div> */}
        </div>
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
                  Event
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
export default event;
