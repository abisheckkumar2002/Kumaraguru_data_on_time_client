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
import Input from "@mui/material/Input"

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
      { Header: "S.No", accessor: "sno", align: "left", width:"3%" },
      { Header: "Enquiry ID", accessor: "enquiryid", align: "left" },
      { Header: "Enquiry Time", accessor: "enquirytime", align: "left" },
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "Business Name", accessor: "businessname", align: "left" },
      { Header: "Cell Number", accessor: "cellnumber", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        sno: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        1
          </MDTypography>
        ),
        enquiryid: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           		0421006
          </MDTypography>
        ),
        enquirytime: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         03-10-2022
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        	Ed
          </MDTypography>
        ),
        businessname: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
       	   LAVA Inc.
          </MDTypography>
        ),
        cellnumber: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
       	   9493424543
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
