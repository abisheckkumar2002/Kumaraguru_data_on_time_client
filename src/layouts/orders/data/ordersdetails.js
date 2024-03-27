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
      { Header: "S.No", accessor: "sno", align: "left", width:"2%" },
      { Header: "OrderId", accessor: "orderid", align: "left" },
      { Header: "Order Time", accessor: "order_time", align: "left" },
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "Cell Number", accessor: "cellnumber", align: "left" },
      { Header: "refund Status", accessor: "refundstatus", align: "left" },
      { Header: "Payment Type", accessor: "paymenttype", align: "center" },
      { Header: "Status", accessor: "status", align: "left" },
      { Header: "Change Status", accessor: "changestatus", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        sno: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        1
          </MDTypography>
        ),
        orderid: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
       0322001171
          </MDTypography>
        ),
        order_time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         03-10-2022
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        Test
          </MDTypography>
        ),
        cellnumber: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
       9632587410
          </MDTypography>
        ),
        refundstatus: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          <Input style={{border:"0.5px solid gray", padding:"5px",borderRadius:"6px"}}></Input>
          </MDTypography>
        ),
        paymenttype: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        <Button>COD</Button>
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Recived
          </MDTypography>
        ),
        changestatus: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        <Input style={{border:"0.5px solid gray", padding:"5px",borderRadius:"6px"}}></Input>
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
