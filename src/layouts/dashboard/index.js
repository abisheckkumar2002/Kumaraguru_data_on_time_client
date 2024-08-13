import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { dashboardcourse } from "./../../actions/users";
import { dashboarduseryear } from "./../../actions/users";
import { dashboardcourseyear } from "./../../actions/users";
import { dashboardamountyear } from "./../../actions/users";
import { dashboarduser } from "./../../actions/users";
import { dashboardtotaluser } from "./../../actions/users";
import { dashboardtotalteacher } from "./../../actions/users";
import { paidstudents } from "./../../actions/users";
import { dashboardtotalcourse } from "./../../actions/users";
import { livecoursecount } from "./../../actions/users";
import { directcoursecount } from "./../../actions/users";
import { testcoursecount } from "./../../actions/users";
import { recordedcoursecount } from "./../../actions/users";
import { microcoursecount } from "./../../actions/users";
import { tabcoursecount } from "./../../actions/users";
import { scholarshipcoursecount } from "./../../actions/users";
import { examcategorycount } from "./../../actions/users";
import { dashboardcoursetoday } from "./../../actions/users";
import React, { useState, useEffect } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { confirm } from "react-confirm-box";
import { toast } from "react-toastify";
// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import DashbordTable from "../dashbordTable";
import {
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label,
  PieChart,
} from "recharts";

const COLORS = ["red", "blue", "green", "yellow", "pink", "black", "lightblue"];

const Bullet = ({ backgroundColor, size }) => {
  return (
    <div
      className="CirecleBullet"
      style={{
        backgroundColor,
        width: size,
        height: size,
      }}
    ></div>
  );
};

const CustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="LegendList">
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>
          <div className="BulletLabel">
            <Bullet backgroundColor={entry.payload.fill} size="10px" />
            <div className="BulletLabelText">{entry.value}</div>
          </div>
          <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
        </li>
      ))}
    </ul>
  );
};

const CustomLabel = ({ viewBox, labelText, value }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="15"
      >
        {labelText}
      </text>
      <text
        x={cx}
        y={cy + 20}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#0088FE"
        fontSize="26"
        fontWeight="600"
      >
        {value}
      </text>
    </g>
  );
};

const columns = [
  {
    Header: "Total no of Students",
    accessor: "noofusersregistered",
    align: "left",
  },

  {
    Header: "No of Students registered today",
    accessor: "noofusersregisteredtoday",
    align: "left",
  },

  {
    Header: "Total no of orders",
    accessor: "totalnoofcoursesold",
    align: "left",
  },

  {
    Header: "No of orders today",
    accessor: "noofcoursesoldtoday",
    align: "left",
  },
];

function Dashboard() {
  const [noofpurchasedcourse, setnoofpurchasedcourse] = useState(0);
  const [noofusers, setnoofusers] = useState(0);
  const [noofteachers, setnoofteachers] = useState(0);
  const [noofcourse, setnoofcourse] = useState(0);
  const [noofyearuser, setnoofyearuser] = useState([]);
  const [noofyearcourse, setnoofyearcourse] = useState([]);
  const [noofyearamount, setnoofyearamount] = useState([]);
  const [totalnoofusers, settotalnoofusers] = useState(0);
  const [totalnoofcourse, settotalnoofcourse] = useState(0);
  const [paidstudent, setpaidstudent] = useState(0);
  const [livecount, setlivecount] = useState(0);
  const [tabcount, settabcount] = useState(0);
  const [scholarshipcount, setscholarshipcount] = useState(0);
  const [testcount, settestcount] = useState(0);
  const [directcount, setdirectcount] = useState(0);
  const [microcount, setmicrocount] = useState(0);
  const [recordedcount, setrecordedcount] = useState(0);
  const [examcategorycount1, setexamcategorycount1] = useState([]);

  const history = useNavigate();

  const amount = noofyearamount;

  const finalamount = amount.map(function (val, index) {
    return { name: val._id.year, value: val.yearTotal };
  });

  console.log(finalamount, "999");

  const satta = examcategorycount1;

  const sath = satta.map(function (val, index) {
    return { name: val.examcontent.content, value: val.Total };
  });

  const data00 = [
    { name: "Total no of paid students", value: paidstudent },
    {
      name: "Total no of unpaid students",
      value: totalnoofusers - paidstudent,
    },
  ];
  const data02 = [
    { name: "Total no of Live course", value: livecount },
    { name: "Total no of Test series", value: testcount },
    { name: "Total no of Direct course", value: directcount },

    { name: "Total no of Micro course", value: microcount },
    { name: "Total no of Recorded course", value: recordedcount },
  ];
  const data01 = [
    { name: "Total no of students", value: totalnoofusers },
    { name: "No of students registered today", value: noofusers },
    { name: "Total no of orders", value: noofpurchasedcourse },
    { name: "No of orders today", value: noofcourse },
  ];

  // const getUserListdata = async () => {
  //   var test = await dashboardcourse();
  //   console.log(test, "cccc");

  //   setnoofpurchasedcourse(test.totalpurchasedcourse);

  //   var test6 = await dashboarduseryear();
  //   console.log(test6, "cdef");

  //   setnoofyearuser(test6.yearusercount);

  //   var test7 = await dashboardcourseyear();
  //   console.log(test7, "cdef");

  //   setnoofyearcourse(test7.yearcoursecount);

  //   var test8 = await dashboardamountyear();
  //   console.log(test8, "sss");

  //   setnoofyearamount(test8.yearamountcount);

  //   var test1 = await dashboarduser();
  //   console.log(test1, "kkk");

  //   setnoofusers(test1.totalusers);

  //   var test2 = await dashboardtotaluser();
  //   console.log(test1, "cccc");

  //   settotalnoofusers(test2.totaluserscount);

  //   var test2 = await dashboardtotalteacher();
  //   console.log(test1, "cccc");

  //   setnoofteachers(test2.totalteachercount);

  //   var test3 = await dashboardcoursetoday();
  //   console.log(test3, "cccc");

  //   setnoofcourse(test3.totalpurchasetoday);

  //   var test4 = await dashboardtotalcourse();
  //   console.log(test3, "cccc");

  //   settotalnoofcourse(test4.totalcoursecount);

  //   var test5 = await paidstudents();
  //   console.log(test3, "cccc");

  //   setpaidstudent(test5.totalpaidstudent);

  //   var test5 = await livecoursecount();
  //   console.log(test3, "cccc");

  //   setlivecount(test5.livecoursecount);

  //   var test5 = await testcoursecount();
  //   console.log(test3, "cccc");

  //   settestcount(test5.testcoursecount);

  //   var test6 = await directcoursecount();
  //   console.log(test3, "cccc");

  //   setdirectcount(test6.directcoursecount);

  //   var test6 = await scholarshipcoursecount();
  //   console.log(test3, "cccc");

  //   setscholarshipcount(test6.scholarshipcoursecount);

  //   var test6 = await tabcoursecount();
  //   console.log(test3, "cccc");

  //   settabcount(test6.tabcoursecount);

  //   var test7 = await microcoursecount();
  //   console.log(test3, "cccc");

  //   setmicrocount(test7.microcoursecount);

  //   var test7 = await examcategorycount();
  //   console.log(test7, "popo");

  //   setexamcategorycount1(test7.examcategorycount);

  //   var test7 = await recordedcoursecount();
  //   console.log(test3, "cccc");

  //   setrecordedcount(test7.recordedcoursecount);
  // };

  const logoutfuns = async () => {
    const test = await confirm("Are you sure do you want to logout?");
    console.log(test, "sss");
    if (test) {
      localStorage.removeItem("kct_login_token");
      localStorage.removeItem("kct_user_type");
      localStorage.removeItem("kct_prefix_route");

      window.location = "/login";
      toast.success("Logout Sucessfully");
    }
  };

  useEffect(() => {
    //logout(history)
    // getUserListdata();
  }, []);

  return (
    <DashboardLayout>
      <a>
        <Button className="ml-3" variant="contained" color="primary">
          Update Profile
        </Button>
      </a>

      <a className="flogin" type="button" onClick={logoutfuns}>
        <Button className="ml-3" variant="contained" color="primary">
          Logout
        </Button>
      </a>

      <Card style={{ marginTop: "3%" }}>
       
        <MDBox py={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="email"
                  title={"NO OF ADMIN"}
                  count={noofteachers}
                  percentage={{
                    color: "success",
                    // amount: "Full Details ->",
                  }}
                />
              </MDBox>
              <Link to="/teacherindex">
                <Button className="ml-3" variant="contained" color="primary">
                ADMIN
                </Button>
              </Link>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="email"
                  title={"NO OF HOD"}
                  count={totalnoofcourse}
                  percentage={{
                    color: "success",
                    // amount: "Full Details ->",
                  }}
                />
              </MDBox>
              <Link to="/livecourseindex">
                <Button className="ml-3" variant="contained" color="primary">
                 HEAD OF DEPARTMENT
                </Button>
              </Link>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="email"
                  title={"NO OF FACULTY"}
                  count={totalnoofcourse}
                  percentage={{
                    color: "success",
                    // amount: "Full Details ->",
                  }}
                />
              </MDBox>
              <Link to="/livecourseindex">
                <Button className="ml-3" variant="contained" color="primary">
                 FACULTY
                </Button>
              </Link>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="email"
                  title={"NO OF PA"}
                  count={totalnoofcourse}
                  percentage={{
                    color: "success",
                    // amount: "Full Details ->",
                  }}
                />
              </MDBox>
              <Link to="/livecourseindex">
                <Button className="ml-3" variant="contained" color="primary">
                 DEPARTMENT PA
                </Button>
              </Link>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="email"
                  title={"NO OF CORDINATOR"}
                  count={totalnoofcourse}
                  percentage={{
                    color: "success",
                    // amount: "Full Details ->",
                  }}
                />
              </MDBox>
              <Link to="/livecourseindex">
                <Button className="ml-3" variant="contained" color="primary">
                 MONTHLY COORDINATOR
                </Button>
              </Link>
            </Grid>
          </Grid>

          



          
        </MDBox>
      </Card>

      {/* <Card style={{ textAlign: "center", padding: "0% 2% 13% 2%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <div
              style={{ width: "100%", height: 420 }}
              className="amountreceive"
            >
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={finalamount}
                    dataKey="value"
                    cx={250}
                    cy={200}
                    innerRadius={80}
                    outerRadius={120}
                  >
                    {finalamount.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Label
                      content={
                        <CustomLabel
                          labelText="Amount received per years"
                          style={{ fontSize: "16px" }}
                        />
                      }
                      position="center"
                    />
                  </Pie>
                  <Legend content={<CustomizedLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div style={{ width: "100%", height: 420 }} className="courseorder">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={sath}
                    dataKey="value"
                    cx={250}
                    cy={200}
                    innerRadius={80}
                    outerRadius={120}
                  >
                    {sath.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Label
                      content={
                        <CustomLabel labelText="COURSE ORDERS BASED ON EXAM" />
                      }
                      position="center"
                    />
                  </Pie>
                  <Legend content={<CustomizedLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Grid>
        </Grid>
      </Card> */}

      {/* <DashboardNavbar/> */}

      {/* <Card style={{ width: "100%", height: 800 }} className="noofstudents">
        <Grid container spacing={3} style={{ padding: "0px 20px" }}>
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data00}
                    dataKey="value"
                    cx={250}
                    cy={200}
                    innerRadius={80}
                    outerRadius={120}
                  >
                    {data00.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Label
                      content={
                        <CustomLabel
                          labelText="NO OF STUDENTS"
                          value={totalnoofusers}
                        />
                      }
                      position="center"
                    />
                  </Pie>
                  <Legend content={<CustomizedLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ width: "100%", height: 420 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data02}
                    dataKey="value"
                    cx={250}
                    cy={200}
                    innerRadius={80}
                    outerRadius={120}
                  >
                    {data02.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Label
                      content={
                        <CustomLabel
                          labelText="NO OF COURSES"
                          value={
                            livecount +
                            testcount +
                            directcount +
                            microcount +
                            recordedcount
                          }
                        />
                      }
                      position="center"
                    />
                  </Pie>
                  <Legend content={<CustomizedLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={6}>
            <div style={{ width: "100%", height: 420 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={sath}
                  dataKey="value"
                  cx={250}
                  cy={200}
                  innerRadius={80}
                  outerRadius={120}
                >
                  {sath.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  <Label
                    content={
                      <CustomLabel
                        labelText="COURSE ORDERS BASED ON EXAM"
                        
                      />
                    }
                    position="center"
                  />
                </Pie>
                <Legend content={<CustomizedLegend />} />
              </PieChart>
            </ResponsiveContainer>

            </div>
            </Grid> */}
        {/* </Grid> */}
        {/* HIDE */}

        {/* <ResponsiveContainer>
     
     <PieChart>
       <Pie
         data={data01}
         dataKey="value"
         cx={200}
         cy={200}
         innerRadius={80}
         outerRadius={100}
       >
         {data01.map((entry, index) => (
           <Cell
             key={`cell-${index}`}
             fill={COLORS[index % COLORS.length]}
           />
         ))}
         <Label
           content={<CustomLabel labelText="MARVEL ANALYSIS" value={15} />}
           position="center"
         />
       </Pie>
       <Legend content={<CustomizedLegend />} />
     </PieChart>
    
   </ResponsiveContainer> */}
      {/* </Card> */}
    </DashboardLayout>
  );
}

export default Dashboard;
