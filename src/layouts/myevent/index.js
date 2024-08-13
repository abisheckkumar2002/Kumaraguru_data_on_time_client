import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useEffect, useState, Fragment } from "react";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
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
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import config from "lib/config";
import {
  eventList,
  deleteEvent,
  getEvent1,
  getMyEventDatalist,
  deleteOneEventData,
} from "actions/users";
import { useNavigate, useParams } from "react-router-dom";
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

const myEventData = () => {
  const { id } = useParams();

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
  const header = (index) => {
    if (userdet && userdet.length > 0) {
      const item = userdet[0];
      const keyArray = Object.keys(item);
      return keyArray[index] || "";
    }
    return "";
  };

  console.log(header(-1));

  console.log(
    typeof generatedColumn,
    "generatedColumngeneratedColumngeneratedColumn"
  );
  const columns = [
    {
      Header: header(0),
      accessor: header(0) || "0",
      align: "left",
    },

    {
      Header: header(1),
      accessor: header(1) || "1",
      align: "left",
    },
    {
      Header: header(2),
      accessor: header(2) || "8",
      align: "left",
    },

    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  console.log(columns); // Check the generated columns array

  // userdet.map((item) => {
  //   const valuesArray = Object.values(item);
  //   const keyarray = Object.keys(item);
  //   console.log(valuesArray[0], "valuesArray");
  //   console.log(keyarray[0], "keyarray");
  // });
  const add = () => {
    navigate(`/${id}/add`);
  };

  const delevent = async (eventid) => {
    const result = await confirm("Are you sure to delete?");

    if (result) {
      console.log("ididid", eventid);
      if (eventid !== "") {
        // Assuming deleteEventApiCall is the function to call the delete operation
        const response = await deleteOneEventData(eventid); // Renamed from `deleteEvent` to `deleteEventApiCall`
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
      navigate(`/${id}/${eventid}/edit`);
    }
  }
  function viewR(eventid) {
    if (eventid != "") {
      navigate(`/${id}/${eventid}/view`);
    }
  }

  useEffect(() => {
    getEventOne(id);
    getEventListData();
  }, []);

  const getEventOne = async (id) => {
    const { userValue, errors } = await getEvent1(id);

    let data = {};
    data["tittle"] = userValue.data.tittle;
    data["eventId"] = userValue.data.eventId;
    console.log(userValue, "userValueuserValueuserValue");

    setFormValue(data);
  };

  const getEventListData = async () => {
    const myEventListData = await getMyEventDatalist(id);
    console.log(
      myEventListData.userValue,
      "myEventListDatamyEventListDatamyEventListDatamyEventListDatamyEventListData"
    );

    const mapped = await Promise.all(
      myEventListData.userValue.map((element) => {
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

      <Button
        variant="contained"
        className="ml-3"
        color="primary"
        onClick={() => navigate(-1)}
      >
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
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <MDTypography variant="h6" color="white">
                  {`${eventId} - ${tittle}`}
                </MDTypography>
                <Tooltip title="Download">
                  <Icon
                    className=""
                    fontSize="large"
                    style={{ color: "white", float: "right" }} // Changed position:"right" to float:"right"
                  >
                    download
                  </Icon>
                </Tooltip>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: columns, rows: userdet }} // Pass departments directly
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
export default myEventData;
