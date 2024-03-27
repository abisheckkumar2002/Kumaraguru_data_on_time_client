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
      { Header: "Order ID", accessor: "OrderID", align: "left" },
      { Header: "Order Time", accessor: "order_time", align: "center" },
      { Header: "Name", accessor: "name", align: "center" },
      { Header: "Cell Number", accessor: "cellnumber", align: "center" },
      { Header: "Mode of Shipping", accessor: "modeofshipping", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        OrderID: <Project id ="#0322001171" />,
        order_time: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
           03-10-2022
          </MDTypography>
        ),
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          krishna
          </MDTypography>
        ),
        cellnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9632587410
          </MDTypography>
        ),
        modeofshipping:(
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            pickup
          </MDTypography>
        ),
        status:(
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Received
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
          <Button>View Order</Button>
          </MDTypography>
        ),
      },
      // {
      //   project: <Project image={logoGithub} name="Github" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $5,000
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       done
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="success" value={100} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // },
      // {
      //   project: <Project image={logoAtlassian} name="Atlassian" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $3,400
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       canceled
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="error" value={30} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // },
      // {
      //   project: <Project image={logoSpotify} name="Spotify" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $14,000
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       working
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="info" value={80} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // },
      // {
      //   project: <Project image={logoSlack} name="Slack" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $1,000
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       canceled
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="error" value={0} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // },
      // {
      //   project: <Project image={logoInvesion} name="Invesion" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $2,300
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       done
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="success" value={100} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // },
    ],
  };
}
