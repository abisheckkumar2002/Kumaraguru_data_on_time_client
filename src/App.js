import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";

import {
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
import SignIn from "layouts/authentication/sign-in";
import Forgotpassword from "layouts/authentication/forgot/forgot";
import Changepassword from "layouts/authentication/changepass/changepass";
// Images
import brandWhite from "assets/images/logo.png";
import brandDark from "assets/images/logo.png";
import { route1,routes } from "routes";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const PROPS = () => {
    if (window.location.pathname == "/") {
      window.location = localStorage.kct_prefix_route + "/dashboard";
    } else if (
      window.location.pathname ==
      "/" + localStorage.kct_prefix_route
    ) {
      window.location = localStorage.kct_prefix_route + "/dashboard";
    } else if (
      window.location.pathname ==
      "/" + localStorage.kct_prefix_route + "/"
    ) {
      window.location = "/" + localStorage.kct_prefix_route + "/dashboard";
    }
    return null;
  };

  const getRoutes = (allRoutes) => (
    <Routes>
      {allRoutes.map((route) => {
        // if (route.collapse) {
        //   console.log("Router", route.collapse);
        //   return getRoutes(route.collapse);
        // }
        // console.log(route.route,"route.routeroute.routeroute.route")
        // if(localStorage.kct_prefix_route){
        //   route.route=localStorage.kct_prefix_route+route.route}

        //   console.log(route.route,"localStoragelocalStoragelocalStoragelocalStorage")
        if (route.route) {
          return (
            <Route
              path={route.route}
              element={route.component}
              key={route.key}
            />
          );
        }

        return null;
      })}

      <Route path="*" element={<PROPS />} />
    </Routes>
  );

  const getdhgghghg = () => {
    if (localStorage.kct_login_token) {
      
      if (localStorage.kct_user_type == "Principal"||"Admin") {
        
          return getRoutes(route1);
         
       
      }
      else{

        return getRoutes(routes);

      }
    } else if (!localStorage.kct_login_token) {
      return (
        <Routes>
          <Route exact path="/login" element={<SignIn />} key="sign-in" />
          <Route
            exact
            path="/forgotpassword"
            element={<Forgotpassword />}
            key="forgotpassword"
          />
          <Route
            exact
            path="/changepassword/:userId"
            element={<Changepassword />}
            key="changepassword"
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      );
    }
  };

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      {/* <Icon fontSize="small" color="inherit">
        settings
      </Icon> */}
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && localStorage.kct_login_token && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={
              (transparentSidenav && !darkMode) || whiteSidenav
                ? brandDark
                : brandWhite
            }
            brandName="KUMARAGURU"
            routes={route1}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {/* {configsButton} */}
        </>
      )}
      {layout === "vr" && <Configurator />}

      {getdhgghghg()}
    </ThemeProvider>
  );
}
