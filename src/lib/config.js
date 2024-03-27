let key = {};
if (process.env.NODE_ENV === "production") {
  console.log("Set Production Config");
  const API_URL = "http://localhost";
  key = {
    secretOrKey: "",
    Recaptchakey: "", //local

    API: `${API_URL}:3001`,
  };

} else {
  console.log("Set Development Config");
  const API_URL = "http://localhost";
  key = {
    secretOrKey: "",
    Recaptchakey: "", //local

    API: `${API_URL}:3001`, 
  };

}

export default key;
