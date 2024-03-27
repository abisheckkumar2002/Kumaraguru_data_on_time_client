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
import "react-toastify/dist/ReactToastify.css";

import { geteventslist, deleteevent } from "../../actions/users";
import config from "lib/config";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/test/data/itemdetails";

function Item() {
  const [userdet, setUserDet] = useState([]);
  const { columns: pColumns, rows: pRows } = authorsTableData();

  const columns = [
    {
      Header: "Image",
      accessor: "image",
      align: "left",
    },
    {
      Header: "Type",
      accessor: "type",
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
      align: "left",
    },
  ];
  const add = () => {
    window.location = "/admin/eventadd";
  };
  function deleteR(id) {
    if (id != "") {
      deleteevent(id);
      toast.success("deleted success");
      history("/admin/eventindex");
      window.location = "/eventindex";
    }
  }

  function editR(id) {
    if (id != "") {
      window.location = "/admin/eventedit/" + id;
    }
  }
  function viewR(id) {
    if (id != "") {
      window.location = "/admin/eventview/" + id;
    }
  }

  const getUserListdata = async () => {
    // var test = await geteventslist();

    const test = [
      {
        _id: 1,
        image: "image1",
        type: "student",
        tittle: "studentenhance progam",
      },
      {
        _id: 2,
        image: "image2",
        type: "student",
        tittle: "placement program",
      },
      {
        _id: 3,
        image: "image3",
        type: "faculty",
        tittle: "Faculty enhanace program",
      },
    ];
    const mapped = await Promise.all(
      test.map((element) => {
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
                onClick={() => deleteR(element._id)}
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                <Button className="ml-3" variant="contained" color="primary">
                  Delete
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
            </>
          ),
        });
        element.image = (
          <img
            src={config.API + "/images/user/" + element.image}
            alt="..."
            style={{ maxWidth: 200, maxHeight: 200 }}
          />
        );
        return element;
      })
    );
    setUserDet(mapped);
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
                  Events
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
