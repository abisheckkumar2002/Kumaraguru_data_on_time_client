import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  const navigation = useNavigate();

  function navigateTo(route) {
    setCurrentRoute(route);
    // window.history.pushState({}, '', route);

    console.log("route", localStorage.kct_prefix_route + route);
    navigation(route);
  }

  function goBack() {
    window.history.back();
  }

  return {
    currentRoute,
    navigateTo,
    goBack,
  };
}
