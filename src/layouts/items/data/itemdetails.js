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
// import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

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
      { Header: "S.No", accessor: "sno", align: "left" },
      { Header: "Image", accessor: "image", align: "left" },
      { Header: "Product Code", accessor: "productcode", align: "left" },
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "Category", accessor: "category", align: "left" },
      { Header: "Type", accessor: "type", align: "left" },
      { Header: "Actual Quantity", accessor: "actualquantity", align: "left" },
      { Header: "Price", accessor: "price", align: "left" },
      { Header: "Offer Price", accessor: "offerprice", align: "left" },
      { Header: "Hotlist", accessor: "hotlist", align: "left" },
      { Header: "Offer Page", accessor: "offerpage", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        sno: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        1
          </MDTypography>
        ),
        image: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
       img
          </MDTypography>
        ),
        productcode: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         8901777548097
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        FZ VADILAL MUTHIYA 300 GM
          </MDTypography>
        ),
        category: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
       
          </MDTypography>
        ),
        type: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          retail
          </MDTypography>
        ),
        actualquantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          97 Gm
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        $2.99
          </MDTypography>
        ),
        offerprice: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        $ -
          </MDTypography>
        ),
        hotlist: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          NO
          </MDTypography>
        ),
        offerpage: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        NO
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
