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
import config from "lib/config";
const personalAssitant = () => {
    const [userdet, setUserDet] = useState([]);
  const columns = [
    {
      Header: "Image",
      accessor: "image",
      align: "left",
    },
    {
      Header: "Name",
      accessor: "name",
      align: "left",
    },

    {
      Header: "Department",
      accessor: "department",
      align: "left",
    },
    {
      Header: "Office Id",
      accessor: "Office_Id",
      align: "left",
    },
    {
      Header: "Action",
      accessor: "action",
      align: "center",
    },
  ];

  const addPa = () => {
    window.location = "/admin/personalassitantadd";
  };

  const editPa = (id) => {
    if (id) {
      window.location = `/admin/personalassitantedit/${id}`;
    }
  };

  const viewPa = (id) => {
    if (id) {
      window.location = `/admin/personalassitantview/${id}`;
    }
  };

  const getPadata = async()=>{
    const test = [
        {
          _id: 1,
          image: "image1",
          name: "durai",
          department: "master of computer science",
          Office_Id:"mca@123gmail.com"
        },
        {
          _id: 2,
          image: "image2",
          name: "mani",
          department: "master of computer science",
          Office_Id:"bsc@123gmail.com"
        },
        {
          _id: 3,
          image: "image3",
          name: "ananad",
          department: "master of computer science",
          Office_Id:"eee@123gmail.com"
        },
      ];



      const mapped = await Promise.all(
        test.map((element) => {
          Object.assign(element, {
            action: (
              <>
                <MDTypography
                  component="a"
                  onClick={() => editPa(element._id)}
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
                  onClick={() => viewPa(element._id)}
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
                  onClick={() => viewPa(element._id)}
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
  }

  useEffect(() => {
    getPadata();
  }, []);

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <Button
        className="ml-3"
        variant="contained"
        color="primary"
        onClick={addPa}
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
                  Personal Assitant
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
};

export default personalAssitant;
