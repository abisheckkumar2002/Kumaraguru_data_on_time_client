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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import Button from '@mui/material/Button';

export default function data() {
  const Project = ({ id }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
     
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {id}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "S.no", accessor: "sno", align: "left" ,width:"5%"},
      { Header: "Category Image", accessor: "categroyimage", align: "left" },
      { Header: "Category Name", accessor: "categoryname", align: "left" },
      { Header: "Category Order", accessor: "categoryorder", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        sno: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           1  
          </MDTypography>
        ),
        categroyimage: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           image
          </MDTypography>
        ),
        categoryname: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          	Poultry
          </MDTypography>
        ),
        categoryorder: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          13
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         <Button>Edit</Button>
          </MDTypography>
        ),
      },
    ],
  };
}
