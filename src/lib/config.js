let key = {};
if (process.env.NODE_ENV === "production") {
  console.log("Set Production Config");
  const API_URL = "http://localhost";
  key = {
    secretOrKey: "",
    Recaptchakey: "", //local

    API: `${API_URL}:3000`,
  };
} else {
  console.log("Set Development Config");
  const API_URL = "http://localhost";

  var URL = `${API_URL}:3000`;

  if (localStorage.kct_user_type) {
    console.log("kct_user_type", localStorage.kct_user_type);

    const type = localStorage.kct_user_type;

    if (type == "Head Of Department") {
      URL = URL + "/hod";
    }

    if (type === "Principal") {
      URL += "/principal";
    }
    if (type === "Admin") {
      URL += "/admin";
    }
  }

  key = {
    secretOrKey: "",
    Recaptchakey: "", //local

    API: URL,
  };
}

export default key;
