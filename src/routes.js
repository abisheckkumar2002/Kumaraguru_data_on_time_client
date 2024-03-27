import Dashboard from "layouts/dashboard";
// import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import Admin from "layouts/admin";
import Category from "layouts/category";
import UnitType from "layouts/unitType";
import Items from "layouts/items";
import Orders from "layouts/orders";
import Enquiry from "layouts/enquiry";
import Users from "layouts/users";
import SendMail from "layouts/sendmail";
import Notification from "layouts/notification";
import Messages from "layouts/messages";
import FeedBack from "layouts/feedback";
import Coupons from "layouts/coupons";
import Banners from "layouts/banners";
import Charges from "layouts/charges";
import StaticPage from "layouts/staticpage";
import DeliveryCharges from "layouts/deliverycharges";
import Add from "layouts/admin/data/addform-admin";
import Addcategory from "layouts/category/data/addform-category";
import Additem from "layouts/items/data/addform-item";
import Addunittype from "layouts/unitType/data/addform-unittype";
import Logout from "layouts/authentication/logout/logout";

import Testadd from "layouts/test/add";
import Testindex from "layouts/test/index";

import Aboutadd from "layouts/about/add";
import Aboutindex from "layouts/about/index";
import Aboutedit from "layouts/about/edit";
import Aboutview from "layouts/about/view";

import Fameadd from "layouts/fame/add";
import Fameindex from "layouts/fame/index";
import Fameedit from "layouts/fame/edit";
import Fameview from "layouts/fame/view";

import Sitesettingindex from "layouts/sitesetting/index";
import Sitesettingedit from "layouts/sitesetting/edit";

import Aboutusindex from "layouts/aboutus/index";
import Aboutusedit from "layouts/aboutus/edit";

import Contactformindex from "layouts/contactform/index";
import Contactformview from "layouts/contactform/view";

import Eventindex from "layouts/events/index";
import Eventadd from "layouts/events/add";
import Eventedit from "layouts/events/edit";
import Eventview from "layouts/events/view";

import Educontentindex from "layouts/educontent/index";
import Educontentadd from "layouts/educontent/add";
import Educontentview from "layouts/educontent/view";
import Educontentedit from "layouts/educontent/edit";

import Indcontentindex from "layouts/indcontent/index";
import Indcontentadd from "layouts/indcontent/add";
import Indcontentview from "layouts/indcontent/view";
import Indcontentedit from "layouts/indcontent/edit";

import Banneradd from "layouts/banner/add";
import Bannerindex from "layouts/banner/index";
import Banneredit from "layouts/banner/edit";
import Bannerview from "layouts/banner/view";

import Trendingvideoadd from "layouts/trendingvideo/add";
import Trendingvideoindex from "layouts/trendingvideo/index";
import Trendingvideoedit from "layouts/trendingvideo/edit";

import Marveltestadd from "layouts/marveltest/add";
import Marveltestquestionadd from "layouts/marveltest/marvelquestionadd";
import Marveltestindex from "layouts/marveltest/index";
import Marveltestedit from "layouts/marveltest/edit";
import Settopicedit from "layouts/marveltest/settopicedit";
import Marveltestview from "layouts/marveltest/view";
import Marveltestquestionindex from "layouts/marveltest/marveltestquestionindex";
import Marvelfolder from "layouts/marveltest/folder";
import Marveltopicindex from "layouts/marveltest/topicindex";
import Marvelquestionedit from "layouts/marveltest/questionedit";
import Setquestionedit from "layouts/marveltest/setquestionedit";

import Bannerappadd from "layouts/bannerapp/add";
import Bannerappindex from "layouts/bannerapp/index";
import Bannerappedit from "layouts/bannerapp/edit";
import Bannerappview from "layouts/bannerapp/view";

import Teacheradd from "layouts/teachermanagement/add";
import Teacherindex from "layouts/teachermanagement/index";
import Teacheredit from "layouts/teachermanagement/edit";
import Teacherview from "layouts/teachermanagement/view";

import Livecourseadd from "layouts/livecourse/add";
import Livecourseindex from "layouts/livecourse/index";
import Respectsubjectindex from "layouts/livecourse/subjectindex";
import Livecourseedit from "layouts/livecourse/edit";
import Respectsubjectedit from "layouts/livecourse/respectsubjectedit";
import Livecourseview from "layouts/livecourse/view";
import Livecoursemultiple from "layouts/livecourse/multiple";
import Livecoursemultiplepdf from "layouts/livecourse/multiplepdf";
import Subpdf from "layouts/livecourse/subpdf";
import LivecourseBatchindex from "layouts/livecourse/batches";
import AllBatchindex from "layouts/livecourse/allbatchesindex";
import Coursescheduleedit from "layouts/livecourse/editScheduleEdit";
import Coursescheduleeditmaterial from "layouts/livecourse/editScheduleEditmaterial";
import Livecoursefolder from "layouts/livecourse/folder";
import Respectsubchapteredit from "layouts/livecourse/respectsubchapteredit";
import Subchaptersubtopiclistindex from "layouts/livecourse/subchaptersubtopiclist";
import Respectsubchapterindex from "layouts/livecourse/subchapterindex";

import Livecoursesubchaptertopic from "layouts/livecourse/subchaptertopic";
import Subvideo from "layouts/livecourse/subvideo";

import LivecourseStudents from "layouts/livecourse/students";
import Livecoursesubchapterfolder from "layouts/livecourse/subchapterfolder";

import AllSchedule from "layouts/livecourse/allschedule";
import LivecourseBatchAdd from "layouts/livecourse/addBatche";
import LivecourseBatchStudents from "layouts/livecourse/batchStudent";
import AddbatchesStudents from "layouts/livecourse/addbatchesStudents";
import LivecourseBatchEdit from "layouts/livecourse/editBatche";

import Couresschedule from "layouts/livecourse/schedule";
import Couresscheduleadd from "layouts/livecourse/addSchedule";

import Freestuffadd from "layouts/freestuff/add";
import Freestuffindex from "layouts/freestuff/index";
import Freestuffedit from "layouts/freestuff/edit";
import Freestuffview from "layouts/freestuff/view";
import Freestuffmultiple from "layouts/freestuff/multiple";
import Freestuffmultiplepdf from "layouts/freestuff/multiplepdf";
import Freestufffolder from "layouts/freestuff/folder";

import Testseriesadd from "layouts/testseries/add";
import Testseriesindex from "layouts/testseries/index";
import Testseriesedit from "layouts/testseries/edit";
import Testseriesview from "layouts/testseries/view";

import Directadd from "layouts/direct/add";
import Directindex from "layouts/direct/index";
import Directedit from "layouts/direct/edit";
import Directview from "layouts/direct/view";
import Directfolder from "layouts/direct/folder";
import Directmultiple from "layouts/direct/multiple";
import Directmultiplepdf from "layouts/direct/multiplepdf";
import Respectsubjectdirectindex from "layouts/direct/subjectindex";
import Respectsubjectdirectedit from "layouts/direct/respectsubjectedit";

import Scholarshipadd from "layouts/scholarship/add";
import Scholarshipindex from "layouts/scholarship/index";
import Scholarshipedit from "layouts/scholarship/edit";
import Scholarshipview from "layouts/scholarship/view";

import Tabadd from "layouts/tab/add";
import Tabindex from "layouts/tab/index";
import Tabedit from "layouts/tab/edit";
import Tabview from "layouts/tab/view";

import Microadd from "layouts/micro/add";
import Microindex from "layouts/micro/index";
import Microedit from "layouts/micro/edit";
import Microview from "layouts/micro/view";
import Micromultiple from "layouts/micro/multiple";
import Micromultiplepdf from "layouts/micro/multiplepdf";
import Microfolder from "layouts/micro/folder";
import Respectsubjectmicroindex from "layouts/micro/subjectindex";
import Respectsubjectmicroedit from "layouts/micro/respectsubjectedit";

import Recordedadd from "layouts/recorded/add";
import Recordedfolder from "layouts/recorded/folder";
import Recordedindex from "layouts/recorded/index";
import Recordededit from "layouts/recorded/edit";
import Recordedview from "layouts/recorded/view";
import Recordedmultiple from "layouts/recorded/multiple";
import Recordedmultiplepdf from "layouts/recorded/multiplepdf";

import Logoindex from "layouts/logo/index";
import Logoadd from "layouts/logo/add";
import Logoedit from "layouts/logo/edit";
import Logoview from "layouts/logo/view";

import Serviceindex from "layouts/service/index";
import Serviceadd from "layouts/service/add";
import Serviceedit from "layouts/service/edit";
import Serviceview from "layouts/service/view";

import Servicedetailindex from "layouts/servicelist/index";
import Servicedetailadd from "layouts/servicelist/add";
import Servicedetailedit from "layouts/servicelist/edit";
import Servicedetailview from "layouts/servicelist/view";

import Industryindex from "layouts/industry/index";
import Industryadd from "layouts/industry/add";
import Industryedit from "layouts/industry/edit";
import Industryview from "layouts/industry/view";

import Studyindex from "layouts/study/index";
import Studyadd from "layouts/study/add";
import Studyedit from "layouts/study/edit";
import Studyview from "layouts/study/view";

import Recentindex from "layouts/recent/index";
import Recentedit from "layouts/recent/edit";
import Recentview from "layouts/recent/view";

import Blogindex from "layouts/blog/index";
import Blogadd from "layouts/blog/add";
import Blogedit from "layouts/blog/edit";
import Blogview from "layouts/blog/view";

import Companyindex from "layouts/company/index";
import Companyadd from "layouts/company/add";
import Companyedit from "layouts/company/edit";
import Companyview from "layouts/company/view";

import Storyedit from "layouts/story/edit";
import Storyindex from "layouts/story/index";

import Testimonialindex from "layouts/testimonial/index";
import Testimonialadd from "layouts/testimonial/add";
import Testimonialedit from "layouts/testimonial/edit";
import Testimonialview from "layouts/testimonial/view";

import Contactindex from "layouts/contact/index";
import Contactadd from "layouts/contact/add";
import Contactedit from "layouts/contact/edit";
import Contactview from "layouts/contact/view";

import Privacypolicyedit from "layouts/privacypolicy/edit";
import Privacypolicyindex from "layouts/privacypolicy/index";

import Examindex from "layouts/exam/index";
import Examadd from "layouts/exam/add";
import Examedit from "layouts/exam/edit";

import Feedindex from "layouts/feed/index";
import Feedadd from "layouts/feed/add";
import Feededit from "layouts/feed/edit";

import Faqindex from "layouts/faq/index";
import Faqadd from "layouts/faq/add";
import Faqedit from "layouts/faq/edit";

import Staticindex from "layouts/static/index";
import Staticadd from "layouts/static/add";
import Staticedit from "layouts/static/edit";

import Subjectindex from "layouts/subject/index";
import Subjectadd from "layouts/subject/add";
import Subjectedit from "layouts/subject/edit";

import Typeindex from "layouts/type/index";
import Typeadd from "layouts/type/add";
import Typeedit from "layouts/type/edit";

import Walletindex from "layouts/wallet/index";
import Walletadd from "layouts/wallet/add";
import Walletedit from "layouts/wallet/edit";
import Walletview from "layouts/wallet/view";

import Couponindex from "layouts/coupon/index";

import Couponedit from "layouts/coupon/edit";

import Purchaseindex from "layouts/purchase/index";
import Purchaseview from "layouts/purchase/view";

import Enquiryindex from "layouts/enquiries/index";
import Enquiryview from "layouts/enquiries/view";

import Agentindex from "layouts/agent/index";
import Agentedit from "layouts/agent/edit";
import Agentstatusedit from "layouts/agent/agentstatusedit";
// import Enquiryview from "layouts/enquiries/view";

import Classindex from "layouts/class/index";
import Classadd from "layouts/class/add";
import Classedit from "layouts/class/edit";

import Missionedit from "layouts/mission/edit";
import Missionindex from "layouts/mission/index";

import Forgotpassword from "layouts/authentication/forgot/forgot";
import Changepassword from "layouts/authentication/changepass/changepass";

import Registerindex from "layouts/registeredstudents/index";
import Registerview from "layouts/registeredstudents/view";
import Icon from "@mui/material/Icon";


//department  crud
import Departmentindex from "layouts/department/index";
import Departmentadd from "layouts/department/add"
import Departmentedit from "layouts/department/edit"

//staff crud
import Staffindex from "layouts/staff/index"
import Staffadd from "layouts/staff/add"
import Staffview from "layouts/staff/view"
import Staffedit from "layouts/staff/edit"
// @mui icons

// student crud

import StudentIndex from "layouts/student/index"
import StudentAdd from "layouts/student/add"
import StudentEdit from "layouts/student/edit";
import StudentView from "layouts/student/view";

// personal assitant crud
import PersonalAssitantIndex from "layouts/personalassitant/index";
import PersonalAssitantAdd from "layouts/personalassitant/add";
import PersonalAssitantView from "layouts/personalassitant/view";
import PersonalAssitantEdit from "layouts/personalassitant/edit";

// hod crud
import HodIndex  from "layouts/hod/index";
import HodAdd from "layouts/hod/add"
import HodEdit from "layouts/hod/edit"
import HodView from "layouts/hod/view"


// events


//faculty Event

import FacultyEventIndex from  "layouts/facultyevent/index"

// student Event

import StudentEventIndex from "layouts/studentevent/index";

// student $faculty Event

import StudentFacultyEvent from "layouts/student&facultyEvent/index"

// faculty event index
import EventIndex from "layouts/faculty/eventindex/index"
// faculty Event 1.1
import  Faculty1 from "layouts/faculty/1.1/add"
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    title: "Master files",
  },

  // {
  //   type: "collapse",
  //   name: "Exam",
  //   key: "examindex",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/examindex",
  //   component: <Examindex />,
  // },

  {
    type: "collapse",
    name: "DEPARTMENT",
    key: "departmentindex",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/departmentindex",
    component: <Departmentindex />,
  },

  {
    type: "",
    name: "Department",
    key: "departmentadd",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/departmentadd",
    component: <Departmentadd />,
  },

  {
    type: "",
    name: "Department",
    key: "departmentedit",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/departmentedit/:id",
    component: < Departmentedit/>,
  },

  {
    type: "collapse",
    name: "STAFF",
    key: "staffindex",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/staffindex",
    component: <Staffindex />,
  },

  {
    type: "",
    name: "STAFF",
    key: "staffadd",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/staffadd",
    component: <Staffadd/>,
  },

  {
    type: "",
    name: "STAFF",
    key: "staffedit",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/staffedit/:id",
    component: <Staffedit/>,
  },

  {
    type: "",
    name: "STAFF",
    key: "staffview",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/staffview/:id",
    component: <Staffview/>,
  },


  {
    type: "collapse",
    name: "STUDENT",
    key: "studentindex",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/studentindex",
    component: <StudentIndex />,
  },
  

  {
    type: "",
    name: "STUDENT",
    key: "studentindex",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/studentadd",
    component: <StudentAdd />,
  },

  {
    type: "",
    name: "STUDENT",
    key: "studentview",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/studentview/:id",
    component: <StudentView />,
  },

  {
    type: "",
    name: "STUDENT",
    key: "studentedit",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/studentedit/:id",
    component: <StudentEdit/>,
  },

  {
    type: "collapse",
    name: "EVENT",
    key: "eventindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/eventindex",
    component: <Eventindex />,
  },


  {
    type: "divider",
  },
  {
    type: "title",
    title: "PERSONAL ASSITANT",
  },


  {
    type: "collapse",
    name: "DEPARTMENT PA",
    key: "departmentpaindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/personalassitantindex",
    component: <PersonalAssitantIndex />,
  },

  {
    type: "",
    name: "DEPARTMENT PA",
    key: "departmentpaadd",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/personalassitantadd",
    component: <PersonalAssitantAdd/>,
  },

  {
    type: "",
    name: "DEPARTMENT PA",
    key: "departmentpaedit",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/personalassitantedit/:id",
    component: <PersonalAssitantEdit />,
  },

  {
    type: "",
    name: "DEPARTMENT PA",
    key: "departmentpaview",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/personalassitantview/:id",
    component: <PersonalAssitantView />,
  },

 
  {
    type: "divider",
  },
  {
    type: "title",
    title: "EVENTS",
  },
  {
    type: "collapse",
    name: "FACULTY",
    key: "facultyeventindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/facultyeventindex",
    component: <FacultyEventIndex />,
  },

  {
    type: "collapse",
    name: "STUDENT ",
    key: "studenteventindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/studenteventindex",
    component: <StudentEventIndex />,
  },

  {
    type: "collapse",
    name: "DEPARTMENT ACTIVITY",
    key: "studentfacultyindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/studentfacultyindex",
    component: <StudentFacultyEvent />,
  },



  
  {
    type: "divider",
  },

  {
    type: "title",
    title: "DEPARTMENT HOD",
  },


  {
    type: "collapse",
    name: "HOD",
    key: "hodindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/hodindex",
    component: <HodIndex />,
  },

  {
    type: "",
    name: "HOD",
    key: "hodindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/hodadd",
    component: <HodAdd />,
  },


  {
    type: "",
    name: "HOD",
    key: "hodedit",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/hodedit/:id",
    component: <HodEdit />,
  },


  {
    type: "",
    name: "HOD",
    key: "hodview",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/hodview/:id",
    component: <HodView />,
  },


  {
    type: "",
    name: "",
    key: "faculyeventindex",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/faculyeventindex/:id",
    component: <EventIndex />,     
  },



  {
    type: "",
    name: "",
    key: "faculty1event",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/faculyeventindex/:id/addprogramorgainsedforfaculty",
    component: <Faculty1 />,
  },


  // {
  //   type: "",
  //   name: "scheduleedit",
  //   key: "scheduleedit",
  //   route: "/scheduleedit/:id",
  //   component: <Coursescheduleedit />,
  // },

  // {
  //   type: "",
  //   name: "scheduleeditmaterial",
  //   key: "scheduleeditmaterial",
  //   route: "/scheduleeditmaterial/:id",
  //   component: <Coursescheduleeditmaterial />,
  // },



  // {
  //   type: "collapse",
  //   name: "scheduleeditmaterial",
  //   key: "scheduleeditmaterial",
  //   route: "/scheduleeditmaterial/:id",
  //   component: <Coursescheduleeditmaterial />,
  // },

  // {
  //   type: "collapse",
  //   name: "USER TYPE",
  //   key: "subjectindex",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/subjectindex",
  //   component: <Subjectindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "TITTLE",
  //   key: "typeindex",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/typeindex",
  //   component: <Typeindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Class",
  //   key: "classindex",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/classindex",
  //   component: <Classindex />,
  // },

  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "DEPARTMENT PA",
  // },
  // {
  //   type: "collapse",
  //   name: "PA",
  //   key: "teacherindex",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   route: "/teacherindex",
  //   component: <Teacherindex />,
  // },
  // // {
  // //   type: "divider",
  // // },
  // // {
  // //   type: "title",
  // //   title: "Courses",
  // // },

  // {
  //   type: "collapse",
  //   name: "Live",
  //   key: "livecourseindex",
  //   icon: <Icon fontSize="small">info</Icon>,
  //   route: "/livecourseindex",
  //   component: <Livecourseindex />,
  // },

  // {
  //   type: "",
  //   name: "livecoursebatchedit",
  //   key: "livecoursebatchedit",
  //   route: "/livecoursebatchedit/:id",
  //   component: <LivecourseBatchEdit />,
  // },

  // {
  //   type: "collapse",
  //   name: "Direct",
  //   key: "directindex",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   route: "/directindex",
  //   component: <Directindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Recorded",
  //   key: "recordedindex",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/recordedindex",
  //   component: <Recordedindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Micro",
  //   key: "microindex",
  //   icon: <Icon fontSize="small">category</Icon>,
  //   route: "/microindex",
  //   component: <Microindex />,
  // },

  // {
  //   type: "",
  //   name: "Tab",
  //   key: "tabindex",
  //   icon: <Icon fontSize="small">info</Icon>,
  //   route: "/tabindex",
  //   component: <Tabindex />,
  // },
  // {
  //   type: "collapse",
  //   name: "Scholarship",
  //   key: "scholarshipindex",
  //   icon: <Icon fontSize="small">settings</Icon>,
  //   route: "/scholarshipindex",
  //   component: <Scholarshipindex />,
  // },


  // {
  //   type: "collapse",
  //   name: "Test Series",
  //   key: "testseriesindex",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/testseriesindex",
  //   component: <Testseriesindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Freestuff",
  //   key: "freestuffindex",
  //   icon: <Icon fontSize="small">groups</Icon>,
  //   route: "/freestuffindex",
  //   component: <Freestuffindex />,
  // },
  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "Batches and Schedules",
  // },
  // {
  //   type: "collapse",
  //   name: "Batches",
  //   key: "allbatchindex",
  //   icon: <Icon fontSize="small">info</Icon>,
  //   route: "/allbatchindex",
  //   component: <AllBatchindex />,
  // },
  // {
  //   type: "collapse",
  //   name: "Schedules",
  //   key: "allschedulesindex",
  //   icon: <Icon fontSize="small">info</Icon>,
  //   route: "/allschedulesindex",
  //   component: <AllSchedule />,
  // },
  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "Test sections",
  // },

  // {
  //   type: "collapse",
  //   name: "Marvel test",
  //   key: "marveltestindex",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/marveltestindex",
  //   component: <Marveltestindex />,
  // },

  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "General",
  // },

  // {
  //   type: "collapse",
  //   name: "Purchase",
  //   key: "purchaseindex",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   route: "/purchaseindex",
  //   component: <Purchaseindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Enquiry",
  //   key: "enquiryindex",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   route: "/enquiryindex",
  //   component: <Enquiryindex />,
  // },

  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "Agent",
  // },

  // {
  //   type: "collapse",
  //   name: "Agents",
  //   key: "agentindex",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   route: "/agentindex",
  //   component: <Agentindex />,
  // },

  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "Banner for app",
  // },
  // {
  //   type: "collapse",
  //   name: "Banner App",
  //   key: "bannerappindex",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/bannerappindex",
  //   component: <Bannerappindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Our story",
  //   key: "story",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/storyindex",
  //   component: <Storyindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Testimonial",
  //   key: "testimonial",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/testimonialindex",
  //   component: <Testimonialindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Educative image",
  //   key: "company",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/companyindex",
  //   component: <Companyindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Educative content",
  //   key: "educontent",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/educontentlist",
  //   component: < Educontentindex   />,
  // },

  // {
  //   type: "collapse",
  //   name: "Industry image",
  //   key: "industryindex",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/industryindex",
  //   component: <Industryindex />,
  // },

  // {
  //   type: "collapse",
  //   name: "Industry content",
  //   key: "indcontent",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/indcontentlist",
  //   component: < Indcontentindex   />,
  // },

  // {
  //   type: "collapse",
  //   name: "Blog",
  //   key: "blog",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/blogindex",
  //   component: <Blogindex />,
  // },



  // {
  //   type: "collapse",
  //   name: "Contact form",
  //   key: "contactformindex",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/getcontactform",
  //   component: <Contactformindex />,
  // },

  // {
  //   type: "",
  //   name: "Bannerview",
  //   key: "bannerview",
  //   route: "/bannerview/:id",
  //   component: <Bannerview />,
  // },

  // {
  //   type: "",
  //   name: "Marveltestview",
  //   key: "marveltestview",
  //   route: "/marveltestview/:id",
  //   component: <Marveltestview />,
  // },

  // {
  //   type: "",
  //   name: "Marveltestquestionindex",
  //   key: "marveltestquestionindex",
  //   route: "/marveltestquestionindex/:id",
  //   component: <Marveltestquestionindex />,
  // },
  // {
  //   type: "",
  //   name: "Bannerappview",
  //   key: "bannerappview",
  //   route: "/bannerappview/:id",
  //   component: <Bannerappview />,
  // },

  // {
  //   type: "",
  //   name: "Teacherview",
  //   key: "teacherview",
  //   route: "/teacherview/:id",
  //   component: <Teacherview />,
  // },

  // {
  //   type: "",
  //   name: "Livecourseview",
  //   key: "livecourseview",
  //   route: "/livecourseview/:id",
  //   component: <Livecourseview />,
  // },

  // {
  //   type: "",
  //   name: "Freestuffview",
  //   key: "freestuffview",
  //   route: "/freestuffview/:id",
  //   component: <Freestuffview />,
  // },
  // {
  //   type: "",
  //   name: "Testseriesview",
  //   key: "testseriesview",
  //   route: "/testseriesview/:id",
  //   component: <Testseriesview />,
  // },

  // {
  //   type: "",
  //   name: "Directview",
  //   key: "directview",
  //   route: "/directview/:id",
  //   component: <Directview />,
  // },

  // {
  //   type: "",
  //   name: "Scholarshipview",
  //   key: "scholarshipview",
  //   route: "/scholarshipview/:id",
  //   component: <Scholarshipview />,
  // },

  // {
  //   type: "",
  //   name: "Tabview",
  //   key: "tabview",
  //   route: "/tabview/:id",
  //   component: <Tabview />,
  // },

  // {
  //   type: "",
  //   name: "Microview",
  //   key: "microview",
  //   route: "/microview/:id",
  //   component: <Microview />,
  // },

  // {
  //   type: "",
  //   name: "Recordedview",
  //   key: "recordedview",
  //   route: "/recordedview/:id",
  //   component: <Recordedview />,
  // },

  // {
  //   type: "",
  //   name: "Contactformview",
  //   key: "contactformview",
  //   route: "/contactformview/:id",
  //   component: <Contactformview />,
  // },

  // {
  //   type: "",
  //   name: "Servicedetailview",
  //   key: "servicedetailview",
  //   route: "/servicedetailview/:id",
  //   component: <Servicedetailview />,
  // },

  // {
  //   type: "",
  //   name: "Indcontentview",
  //   key: "indcontentview",
  //   route: "/indcontentview/:id",
  //   component: <Indcontentview />,
  // },

  {
    type: "",
    name: "Eventview",
    key: "eventview",
    route: "/eventview/:id",
    component: <Eventview />,
  },
  // {
  //   type: "",
  //   name: "Banneredit",
  //   key: "banneredit",
  //   route: "/banneredit/:id",
  //   component: <Banneredit />,
  // },

  // {
  //   type: "",
  //   name: "Trendingvideoedit",
  //   key: "trendingvideoedit",
  //   route: "/trendingvideoedit/:id",
  //   component: <Trendingvideoedit />,
  // },

  // {
  //   type: "",
  //   name: "Marveltestedit",
  //   key: "marveltestedit",
  //   route: "/marveltestedit/:id",
  //   component: <Marveltestedit />,
  // },

  // {
  //   type: "",
  //   name: "Setquestionedit",
  //   key: "setquestionedit",
  //   route: "/setquestionedit/:id",
  //   component: <Setquestionedit />,
  // },

  // {
  //   type: "",
  //   name: "Marveltestquestionedit",
  //   key: "marveltestquestionedit",
  //   route: "/marveltestquestionedit/:id",
  //   component: <Marvelquestionedit />,
  // },

  // {
  //   type: "",
  //   name: "Settopicedit",
  //   key: "settopicedit",
  //   route: "/settopicedit/:id",
  //   component: <Settopicedit />,
  // },

  // {
  //   type: "",
  //   name: "Bannerappedit",
  //   key: "bannerappedit",
  //   route: "/bannerappedit/:id",
  //   component: <Bannerappedit />,
  // },
  // {
  //   type: "",
  //   name: "Teacheredit",
  //   key: "teacheredit",
  //   route: "/teacheredit/:id",
  //   component: <Teacheredit />,
  // },

  // {
  //   type: "",
  //   name: "Livecourseedit",
  //   key: "livecourseedit",
  //   route: "/livecourseedit/:id",
  //   component: <Livecourseedit />,
  // },

  // {
  //   type: "",
  //   name: "Respectsubjectedit",
  //   key: "respectsubjectedit",
  //   route: "/respectsubjectedit/:id",
  //   component: <Respectsubjectedit />,
  // },

  // {
  //   type: "",
  //   name: "Respectsubjectedit",
  //   key: "respectsubjectedit",
  //   route: "/respectsubjectedit/:id",
  //   component: <Respectsubjectdirectedit />,
  // },

  // {
  //   type: "",
  //   name: "Respectsubjectedit",
  //   key: "respectsubjectedit",
  //   route: "/respectsubjectedit/:id",
  //   component: <Respectsubjectmicroedit />,
  // },
  // {
  //   type: "",
  //   name: "Freestuffedit",
  //   key: "freestuffedit",
  //   route: "/freestuffedit/:id",
  //   component: <Freestuffedit />,
  // },
  // {
  //   type: "",
  //   name: "Testseriesedit",
  //   key: "testseriesedit",
  //   route: "/testseriesedit/:id",
  //   component: <Testseriesedit />,
  // },
  // {
  //   type: "",
  //   name: "Directedit",
  //   key: "directedit",
  //   route: "/directedit/:id",
  //   component: <Directedit />,
  // },

  // {
  //   type: "",
  //   name: "Agentedit",
  //   key: "agentedit",
  //   route: "/agentedit/:id",
  //   component: <Agentedit />,
  // },

  // {
  //   type: "",
  //   name: "Agentstatusedit",
  //   key: "agentedit",
  //   route: "/agentstatusedit/:id",
  //   component: <Agentstatusedit />,
  // },

  // {
  //   type: "",
  //   name: "Scholarshipedit",
  //   key: "scholarshipedit",
  //   route: "/scholarshipedit/:id",
  //   component: <Scholarshipedit />,
  // },

  // {
  //   type: "",
  //   name: "Tabedit",
  //   key: "tabedit",
  //   route: "/tabedit/:id",
  //   component: <Tabedit />,
  // },

  // {
  //   type: "",
  //   name: "Microedit",
  //   key: "microedit",
  //   route: "/microedit/:id",
  //   component: <Microedit />,
  // },

  // {
  //   type: "",
  //   name: "Recordededit",
  //   key: "recordededit",
  //   route: "/recordededit/:id",
  //   component: <Recordededit />,
  // },

  {
    type: "",
    name: "Eventedit",
    key: "eventedit",
    route: "/eventedit/:id",
    component: <Eventedit />,
  },

  // {
  //   type: "",
  //   name: "Indcontentedit",
  //   key: "indcontentedit",
  //   route: "/indcontentedit/:id",
  //   component: <Indcontentedit />,
  // },

  // {
  //   type: "",
  //   name: "Educontentedit",
  //   key: "educontentedit",
  //   route: "/educontentedit/:id",
  //   component: <Educontentedit />,
  // },

  // {
  //   type: "",
  //   name: "Missionedit",
  //   key: "missionedit",
  //   route: "/missionedit/:id",
  //   component: <Missionedit />,
  // },

  // {
  //   type: "",
  //   name: "Aboutedit",
  //   key: "aboutedit",
  //   route: "/aboutedit/:id",
  //   component: <Aboutedit />,
  // },

  // {
  //   type: "",
  //   name: "Fameedit",
  //   key: "fameedit",
  //   route: "/fameedit/:id",
  //   component: <Fameedit />,
  // },

  // {
  //   type: "",
  //   name: "Sitesettingedit",
  //   key: "sitesettingedit",
  //   route: "/sitesettingedit/:id",
  //   component: <Sitesettingedit />,
  // },

  // {
  //   type: "",
  //   name: "Aboutusedit",
  //   key: "aboutusedit",
  //   route: "/aboutusedit/:id",
  //   component: <Aboutusedit />,
  // },
  // {
  //   type: "",
  //   name: "Banneradd",
  //   key: "banneradd",
  //   route: "/banneradd",
  //   component: <Banneradd />,
  // },

  // {
  //   type: "",
  //   name: "trendingvideoadd",
  //   key: "trendingvideoadd",
  //   route: "/trendingvideoadd",
  //   component: <Trendingvideoadd />,
  // },

  // {
  //   type: "",
  //   name: "Marveltestadd",
  //   key: "marveltestadd",
  //   route: "/marveltestadd",
  //   component: <Marveltestadd />,
  // },

  // {
  //   type: "",
  //   name: "Marveltestquestionadd",
  //   key: "marveltestquestionadd",
  //   route: "/marveltestquestionadd/:id",
  //   component: <Marveltestquestionadd />,
  // },
  // {
  //   type: "",
  //   name: "Bannerappadd",
  //   key: "bannerappadd",
  //   route: "/bannerappadd",
  //   component: <Bannerappadd />,
  // },
  // {
  //   type: "",
  //   name: "Teacheradd",
  //   key: "teacheradd",
  //   route: "/teacheradd",
  //   component: <Teacheradd />,
  // },

  // {
  //   type: "",
  //   name: "Livecourseadd",
  //   key: "livecourseadd",
  //   route: "/livecourseadd",
  //   component: <Livecourseadd />,
  // },
  // {
  //   type: "",
  //   name: "Livecoursemultiple",
  //   key: "livecoursemultiple",
  //   route: "/livecoursemultiple/:id",
  //   component: <Livecoursemultiple />,
  // },

  // {
  //   type: "",
  //   name: "Livecoursemultiplepdf",
  //   key: "livecoursemultiplepdf",
  //   route: "/livecoursemultiplepdf/:id",
  //   component: <Livecoursemultiplepdf />,
  // },

  // {
  //   type: "",
  //   name: "Subpdf",
  //   key: "subpdf",
  //   route: "/subpdf/:id1/:id",
  //   component: <Subpdf />,
  // },

  // {
  //   type: "",
  //   name: "Recordedmultiplepdf",
  //   key: "recordedmultiplepdf",
  //   route: "/recordedmultiplepdf/:id",
  //   component: <Recordedmultiplepdf />,
  // },

  // {
  //   type: "",
  //   name: "Directmultiplepdf",
  //   key: "directmultiplepdf",
  //   route: "/directmultiplepdf/:id",
  //   component: <Directmultiplepdf />,
  // },
  // {
  //   type: "",
  //   name: "Micromultiplepdf",
  //   key: "micromultiplepdf",
  //   route: "/micromultiplepdf/:id",
  //   component: <Micromultiplepdf />,
  // },

  // {
  //   type: "",
  //   name: "Freestuffmultiplepdf",
  //   key: "freestuffmultiplepdf",
  //   route: "/freestuffmultiplepdf/:id",
  //   component: <Freestuffmultiplepdf />,
  // },

  // {
  //   type: "",
  //   name: "Freestuffmultiple",
  //   key: "freestuffmultiple",
  //   route: "/freestuffmultiple/:id",
  //   component: <Freestuffmultiple />,
  // },

  // {
  //   type: "",
  //   name: "Micromultiple",
  //   key: "micromultiple",
  //   route: "/micromultiple/:id",
  //   component: <Micromultiple />,
  // },

  // {
  //   type: "",
  //   name: "Recordedmultiple",
  //   key: "recordedmultiple",
  //   route: "/recordedmultiple/:id",
  //   component: <Recordedmultiple />,
  // },

  // {
  //   type: "",
  //   name: "Directmultiple",
  //   key: "directmultiple",
  //   route: "/directmultiple/:id",
  //   component: <Directmultiple />,
  // },

  // {
  //   type: "",
  //   name: "Freestuffadd",
  //   key: "freestuffadd",
  //   route: "/freestuffadd",
  //   component: <Freestuffadd />,
  // },
  // {
  //   type: "",
  //   name: "Testseriesadd",
  //   key: "testseriesadd",
  //   route: "/testseriesadd",
  //   component: <Testseriesadd />,
  // },
  // {
  //   type: "",
  //   name: "Directadd",
  //   key: "directadd",
  //   route: "/directadd",
  //   component: <Directadd />,
  // },

  // {
  //   type: "",
  //   name: "Scholarshipadd",
  //   key: "scholarshipadd",
  //   route: "/scholarshipadd",
  //   component: <Scholarshipadd />,
  // },

  // {
  //   type: "",
  //   name: "Tabadd",
  //   key: "tabadd",
  //   route: "/tabadd",
  //   component: <Tabadd />,
  // },
  // {
  //   type: "",
  //   name: "Microadd",
  //   key: "microadd",
  //   route: "/microadd",
  //   component: <Microadd />,
  // },

  // {
  //   type: "",
  //   name: "Recordedadd",
  //   key: "recordedadd",
  //   route: "/recordedadd",
  //   component: <Recordedadd />,
  // },

  // {
  //   type: "",
  //   name: "Recordedfolder",
  //   key: "recordedfolder",
  //   route: "/recordedfolder/:id",
  //   component: <Recordedfolder />,
  // },

  // {
  //   type: "",
  //   name: "Directfolder",
  //   key: "directfolder",
  //   route: "/directfolder/:id",
  //   component: <Directfolder />,
  // },

  // {
  //   type: "",
  //   name: "Livecoursefolder",
  //   key: "livecoursefolder",
  //   route: "/livecoursefolder/:id",
  //   component: <Livecoursefolder />,
  // },

  {
    type: "",
    name: "Freestufffolder",
    key: "freestufffolder",
    route: "/freestufffolder/:id",
    component: <Freestufffolder />,
  },

  {
    type: "",
    name: "Marveltestfolder",
    key: "marveltestfolder",
    route: "/marveltestfolder/:id",
    component: <Marvelfolder />,
  },

  {
    type: "",
    name: "Marveltopicindex",
    key: "marveltopicindex",
    route: "/marveltopicindex/:id",
    component: <Marveltopicindex />,
  },

  {
    type: "",
    name: "Microfolder",
    key: "microfolder",
    route: "/microfolder/:id",
    component: <Microfolder />,
  },

  {
    type: "",
    name: "Logoadd",
    key: "logoadd",
    route: "/logoadd",
    component: <Logoadd />,
  },
  {
    type: "",
    name: "Logoedit",
    key: "logoedit",
    route: "/logoedit/:id",
    component: <Logoedit />,
  },
  {
    type: "",
    name: "Logoview",
    key: "logoview",
    route: "/logoview/:id",
    component: <Logoview />,
  },

  {
    type: "",
    name: "Educontentview",
    key: "educontentview",
    route: "/educontentview/:id",
    component: <Educontentview />,
  },

  {
    type: "",
    name: "Serviceadd",
    key: "serviceadd",
    route: "/serviceadd",
    component: <Serviceadd />,
  },

  {
    type: "",
    name: "Servicedetailadd",
    key: "servicedetailadd",
    route: "/servicedetailadd",
    component: <Servicedetailadd />,
  },
  {
    type: "",
    name: "Serviceedit",
    key: "serviceedit",
    route: "/serviceedit/:id",
    component: <Serviceedit />,
  },

  {
    type: "",
    name: "Servicedetailedit",
    key: "servicedetailedit",
    route: "/servicedetailedit/:id",
    component: <Servicedetailedit />,
  },
  {
    type: "",
    name: "Serviceview",
    key: "serviceview",
    route: "/serviceview/:id",
    component: <Serviceview />,
  },

  {
    type: "",
    name: "Aboutview",
    key: "aboutview",
    route: "/aboutview/:id",
    component: <Aboutview />,
  },

  {
    type: "",
    name: "Fameview",
    key: "fameview",
    route: "/fameview/:id",
    component: <Fameview />,
  },

  {
    type: "",
    name: "Aboutadd",
    key: "aboutadd",

    route: "/addabout",
    component: <Aboutadd />,
  },

  {
    type: "",
    name: "Fameadd",
    key: "fameadd",

    route: "/addfame",
    component: <Fameadd />,
  },

  {
    type: "",
    name: "Industryadd",
    key: "industryadd",
    route: "/industryadd",
    component: <Industryadd />,
  },
  {
    type: "",
    name: "Industryedit",
    key: "industryedit",
    route: "/industryedit/:id",
    component: <Industryedit />,
  },
  {
    type: "",
    name: "Contactedit",
    key: "contactedit",
    route: "/contactedit/:id",
    component: <Contactedit />,
  },

  {
    type: "",
    name: "Privacypolicyedit",
    key: "privacypolicyedit",
    route: "/privacypolicyedit/:id",
    component: <Privacypolicyedit />,
  },

  // {
  //   type: "",
  //   name: "DEPARTMENT",
  //   key: "examedit",
  //   route: "/examedit/:id",
  //   component: <Examedit />,
  // },

  {
    type: "",
    name: "Feededit",
    key: "feededit",
    route: "/feededit/:id",
    component: <Feededit />,
  },

  {
    type: "",
    name: "Faqedit",
    key: "faqedit",
    route: "/faqedit/:id",
    component: <Faqedit />,
  },

  {
    type: "",
    name: "Staticedit",
    key: "staticedit",
    route: "/staticedit/:id",
    component: <Staticedit />,
  },

  {
    type: "",
    name: "Subjectedit",
    key: "subjectedit",
    route: "/subjectedit/:id",
    component: <Subjectedit />,
  },

  {
    type: "",
    name: "Typeedit",
    key: "typeedit",
    route: "/typeedit/:id",
    component: <Typeedit />,
  },

  {
    type: "",
    name: "Walletedit",
    key: "walletedit",
    route: "/walletedit/:id",
    component: <Walletedit />,
  },

  {
    type: "",
    name: "Couponedit",
    key: "couponedit",
    route: "/couponedit/:id",
    component: <Couponedit />,
  },
  // {
  //   type: "",
  //   name: "Classedit",
  //   key: "classedit",
  //   route: "/classedit/:id",
  //   component: <Classedit />,
  // },
  {
    type: "",
    name: "Industryview",
    key: "industryview",
    route: "/industryview/:id",
    component: <Industryview />,
  },

  {
    type: "",
    name: "Studyadd",
    key: "studyadd",
    route: "/studyadd",
    component: <Studyadd />,
  },
  {
    type: "",
    name: "Studyedit",
    key: "studyedit",
    route: "/studyedit/:id",
    component: <Studyedit />,
  },
  {
    type: "",
    name: "Recentedit",
    key: "recentedit",
    route: "/recentedit/:id",
    component: <Recentedit />,
  },
  {
    type: "",
    name: "Studyview",
    key: "studyview",
    route: "/studyview/:id",
    component: <Studyview />,
  },
  {
    type: "",
    name: "Recentview",
    key: "recentview",
    route: "/recentview/:id",
    component: <Recentview />,
  },

  {
    type: "",
    name: "Blogadd",
    key: "blogadd",
    route: "/blogadd",
    component: <Blogadd />,
  },
  {
    type: "",
    name: "Blogedit",
    key: "blogedit",
    route: "/blogedit/:id",
    component: <Blogedit />,
  },
  {
    type: "",
    name: "Blogview",
    key: "blogview",
    route: "/blogview/:id",
    component: <Blogview />,
  },

  {
    type: "",
    name: "Companyadd",
    key: "companyadd",
    route: "/companyadd",
    component: <Companyadd />,
  },

  {
    type: "",
    name: "Companyedit",
    key: "companyedit",
    route: "/companyedit/:id",
    component: <Companyedit />,
  },

  {
    type: "",
    name: "Storyedit",
    key: "Storyedit",
    route: "/storyedit/:id",
    component: <Storyedit />,
  },
  {
    type: "",
    name: "Companyview",
    key: "companyview",
    route: "/companyview/:id",
    component: <Companyview />,
  },

  {
    type: "",
    name: "Testimonialadd",
    key: "testimonialadd",
    route: "/testimonialadd",
    component: <Testimonialadd />,
  },
  {
    type: "",
    name: "Testimonialedit",
    key: "testimonialedit",
    route: "/testimonialedit/:id",
    component: <Testimonialedit />,
  },
  {
    type: "",
    name: "Testimonialview",
    key: "testimonialview",
    route: "/testimonialview/:id",
    component: <Testimonialview />,
  },

  {
    type: "",
    name: "Contactadd",
    key: "contactadd",
    route: "/contactadd",
    component: <Contactadd />,
  },
  {
    type: "",
    name: "Contactview",
    key: "contactview",
    route: "/contactview/:id",
    component: <Contactview />,
  },

  {
    type: "",
    name: "Wallettview",
    key: "walletview",
    route: "/wallettview/:id",
    component: <Walletview />,
  },

  {
    type: "",
    name: "Purchaseview",
    key: "purchaseview",
    route: "/purchaseview/:id",
    component: <Purchaseview />,
  },

  {
    type: "",
    name: "Enquiryview",
    key: "enquiryview",
    route: "/enquiryview/:id",
    component: <Enquiryview />,
  },

  // {
  //   type: "",
  //   name: "Examadd",
  //   key: "examadd",
  //   route: "/examadd",
  //   component: <Examadd />,
  // },

  {
    type: "",
    name: "Feedadd",
    key: "feedadd",
    route: "/feedadd",
    component: <Feedadd />,
  },

  {
    type: "",
    name: "Faqadd",
    key: "faqadd",
    route: "/faqadd",
    component: <Faqadd />,
  },

  {
    type: "",
    name: "Staticadd",
    key: "staticadd",
    route: "/staticadd",
    component: <Staticadd />,
  },
  {
    type: "",
    name: "Subjectadd",
    key: "subjectadd",
    route: "/subjectadd",
    component: <Subjectadd />,
  },

  {
    type: "",
    name: "Typeadd",
    key: "typeadd",
    route: "/typeadd",
    component: <Typeadd />,
  },

  {
    type: "",
    name: "Wallettadd",
    key: "walletadd",
    route: "/walletadd",
    component: <Walletadd />,
  },
  // {
  //   type: "",
  //   name: "Classadd",
  //   key: "classadd",
  //   route: "/classadd",
  //   component: <Classadd />,
  // },
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboard",
  //   component: <Dashboard />,
  // },

  {
    type: "",
    name: "Live Batches",
    key: "livecoursebatchesindex",
    icon: <Icon fontSize="small">info</Icon>,
    route: "/course-batches-index/:id/:type",
    component: <LivecourseBatchindex />,
  },
  {
    type: "",
    name: "Livecoursebatchadd",
    key: "livecoursebatchadd",
    route: "/livecoursebatchadd/:id/",
    component: <LivecourseBatchAdd />,
  },
  {
    type: "",
    name: "livecoursebatchstudents",
    key: "livecoursebatchstudents",
    route: "/livecoursebatchstudents/:c_id/:b_id",
    component: <LivecourseBatchStudents />,
  },

  {
    type: "",
    name: "livecoursestudents",
    key: "livecoursestudents",
    route: "/coursestudents/:id",
    component: <LivecourseStudents />,
  },

  {
    type: "",
    name: "addbatchesstudents",
    key: "addbatchesstudents",
    route: "/addbatchesstudents/:c_id/:b_id",
    component: <AddbatchesStudents />,
  },
  {
    type: "divider",
  },

  {
    type: "title",
    title: "CMS",
  },

  {
    type: "",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },

  {
    type: "",
    name: "Add",
    key: "add",
    route: "/addform-admin",
    component: <Add />,
  },
  {
    type: "",
    name: "Addcategory",
    key: "addcategory",
    route: "/addcategory",
    component: <Addcategory />,
  },

  {
    type: "",
    name: "Forgotpassword",
    key: "forgotpassword",
    route: "/forgotpassword",
    component: <Forgotpassword />,
  },
  {
    type: "",
    name: "Changepassword",
    key: "changepassword",
    route: "/changepassword/:userId",
    component: <Changepassword />,
  },

  {
    type: "",
    name: "Events Type",
    key: "addevent",
    route: "/eventadd",
    component: <Eventadd />,
  },

 

  {
    type: "",
    name: "Addeducontent",
    key: "addeducontent",
    route: "/addeducontent",
    component: <Educontentadd />,
  },

  {
    type: "",
    name: "Addindcontent",
    key: "addindcontent",
    route: "/addindcontent",
    component: <Indcontentadd />,
  },
  {
    type: "",
    name: "Addunit",
    key: "addunittype",
    route: "/addunittype",
    component: <Addunittype />,
  },
  {
    type: "",
    name: "Additem",
    key: "additem",
    route: "/additem",
    component: <Additem />,
  },

  // {
  //   type: "collapse",
  //   name: "Test",
  //   key: "testindex",
  //   icon: <Icon fontSize="small">paid</Icon>,
  //   route: "/testindex",
  //   component: <Testindex />,
  // },

  {
    type: "",
    name: "Testadd",
    key: "testadd",
    route: "/testadd",
    component: <Testadd />,
  },

  {
    type: "collapse",
    name: "Banner",
    key: "bannerindex",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/bannerindex",
    component: <Bannerindex />,
  },

  //p1
  // {
  //   type: "collapse",
  //   name: "Trendingvideo",
  //   key: "trendingvideoindex",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/trendingvideoindex",
  //   component: <Trendingvideoindex />,
  // },

  {
    type: "collapse",
    name: "Strength",
    key: "studyindex",
    icon: <Icon fontSize="small">photo</Icon>,
    route: "/studyindex",
    component: <Studyindex />,
  },
  //p1
  // {
  //   type: "collapse",
  //   name: "Learning app",
  //   key: "recentindex",
  //   icon: <Icon fontSize="small">discount</Icon>,
  //   route: "/recentindex",
  //   component: <Recentindex />,
  // },

  //p1
  // {
  //   type: "collapse",
  //   name: "Marvel classes",
  //   key: "missionlist",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   route: "/missionlist",
  //   component: < Missionindex   />,
  // },

  {
    type: "collapse",
    name: "Digital programs",
    key: "contactindex",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/contactindex",
    component: <Contactindex />,
  },

  //p1
  // {
  //   type: "collapse",
  //   name: "Students & parents Speak",
  //   key: "logoindex",
  //   icon: <Icon fontSize="small">category</Icon>,
  //   route: "/logoindex",
  //   component: <Logoindex />,
  // },
  {
    type: "collapse",
    name: "Advantages image",
    key: "servicedetailindex",
    icon: <Icon fontSize="small">info</Icon>,
    route: "/servicedetailindex",
    component: <Servicedetailindex />,
  },

  {
    type: "collapse",
    name: "Icons & images",
    key: "serviceindex",
    icon: <Icon fontSize="small">discount</Icon>,
    route: "/serviceindex",
    component: <Serviceindex />,
  },

  {
    type: "collapse",
    name: "Testimonial",
    key: "aboutlist",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/aboutlist",
    component: <Aboutindex />,
  },

  {
    type: "collapse",
    name: "Fame",
    key: "famelist",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/famelist",
    component: <Fameindex />,
  },
  {
    type: "collapse",
    name: "Feed",
    key: "feedindex",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/feedindex",
    component: <Feedindex />,
  },
  {
    type: "collapse",
    name: "Faq",
    key: "faqindex",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/faqindex",
    component: <Faqindex />,
  },

  {
    type: "collapse",
    name: "Wallet",
    key: "wallettindex",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/wallettindex",
    component: <Walletindex />,
  },

  {
    type: "collapse",
    name: "Coupon",
    key: "couponindex",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/couponindex",
    component: <Couponindex />,
  },

  {
    type: "collapse",
    name: "Privacy Policy",
    key: "privacypolicyindex",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/privacypolicyindex",
    component: <Privacypolicyindex />,
  },
  {
    type: "collapse",
    name: "About us",
    key: "aboutusindex",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/aboutusindex",
    component: <Aboutusindex />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    title: "Site settings",
  },

  {
    type: "collapse",
    name: "Site Settings",
    key: "sitesettingindex",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/sitesettingindex",
    component: <Sitesettingindex />,
  },

  {
    type: "",
    name: "Couresschedule",
    key: "coureschedule",
    route: "/coureschedule/:id/:b_id/:type",
    component: <Couresschedule />,
  },

  {
    type: "",
    name: "Couresscheduleadd",
    key: "couresscheduleadd",
    route: "/couresscheduleadd/:id/:b_id/:type",
    component: <Couresscheduleadd />,
  },

  {
    type: "collapse",
    name: "Registered students",
    key: "registerindex",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/registerindex",
    component: <Registerindex />,
  },

  {
    type: "",
    name: "Registerview",
    key: "registerview",
    route: "/registerview/:id",
    component: <Registerview />,
  },
  {
    type: "",
    name: "Livecoursesubchapterfolder",
    key: "livecoursesubchapterfolder",
    route: "/livecoursesubchapterfolder/:id",
    component: <Livecoursesubchapterfolder />,
  },

  {
    type: "",
    name: "Livecoursesubchaptertopic",
    key: "livecoursesubchaptertopic",
    route: "/livecoursesubchaptertopic/:id",
    component: <Livecoursesubchaptertopic />,
  },

  {
    type: "",
    name: "Respectsubchapteredit",
    key: "respectsubchapteredit",
    route: "/respectsubchapteredit/:id",
    component: <Respectsubchapteredit />,
  },

  {
    type: "",
    // name: "Live",
    key: "subtopicslist",
    // icon: <Icon fontSize="small">info</Icon>,
    route: "/subtopicslist/:id1/:id",
    component: <Subchaptersubtopiclistindex />,
  },
  {
    type: "",
    name: "Livecoursesubchapterfolder",
    key: "livecoursesubchapterfolder",
    route: "/livecoursesubchapterfolder/:id",
    component: <Livecoursesubchapterfolder />,
  },

  {
    type: "",
    name: "Livecoursesubchaptertopic",
    key: "livecoursesubchaptertopic",
    route: "/livecoursesubchaptertopic/:id",
    component: <Livecoursesubchaptertopic />,
  },

  {
    type: "",
    name: "Respectsubchapteredit",
    key: "respectsubchapteredit",
    route: "/respectsubchapteredit/:id",
    component: <Respectsubchapteredit />,
  },

  {
    type: "",
    name: "Subvideo",
    key: "subvideo",
    route: "/subvideo/:id1/:id",
    component: <Subvideo />,
  },

  // {
  //   type: "collapse",
  //   name: "Logout",
  //   key: "logout",
  //   icon: <Icon fontSize="small">logout</Icon>,
  //   route: "/logout",
  //   component: <Logout />,
  // },

  {
    type: "",
    // name: "Live",
    key: "respectsubjectindex",
    // icon: <Icon fontSize="small">info</Icon>,
    route: "/respectsubject/:id",
    component: <Respectsubjectindex />,
  },

  {
    type: "",
    // name: "Live",
    key: "respectsubjectindex",
    // icon: <Icon fontSize="small">info</Icon>,
    route: "/respectsubject/:id",
    component: <Respectsubjectdirectindex />,
  },

  {
    type: "",
    // name: "Live",
    key: "respectsubjectindex",
    // icon: <Icon fontSize="small">info</Icon>,
    route: "/respectsubject/:id",
    component: <Respectsubjectmicroindex />,
  },

  {
    type: "",
    // name: "Live",
    key: "respectsubchapterindex",
    // icon: <Icon fontSize="small">info</Icon>,
    route: "/respectsubchapter/:id",
    component: <Respectsubchapterindex />,
  },
];

export default routes;
