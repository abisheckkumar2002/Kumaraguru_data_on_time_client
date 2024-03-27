/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";
// import Input from "@mui/material/Input"

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
 import Button from '@mui/material/Button';

export default function data() {

  return {
    columns: [
      { Header: "S.No", accessor: "sno", align: "left", width:"5%" },
      { Header: "Zipcode", accessor: "zipcode", align: "left"},
      { Header: "Minimium charge(Free delivery)", accessor: "mcfd", align: "left"},
      { Header: "Delivery charge", accessor: "dc", align: "left"},
      { Header: "Same day delivery charge", accessor: "sddc", align: "left"},
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        sno: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        1
          </MDTypography>
        ),
        zipcode: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           					20778
          </MDTypography>
        ),
        mcfd: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           			149.99
          </MDTypography>
        ),
        dc: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           				9.99
          </MDTypography>
        ),
        sddc: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           			19.99
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        <Button>Edit</Button>
          </MDTypography>
        ),
      },
    ],
  };
}
