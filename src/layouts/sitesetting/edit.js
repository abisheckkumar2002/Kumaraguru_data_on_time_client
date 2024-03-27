import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";
import config from "lib/config";

import { getsitesettingdata, updatesitesetting } from "../../actions/users";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  textDanger: {
    color: "rgb(148,44,174)",
  },
};

// toaster config
toast.configure();
let toasterOption = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};


const initialFormValue = {
  address: "",
  mail1: "",
  phone1: "",
  phone2: "",
  mail2: "",
  facebook: "",
  youtube: "",
  twitter: "",
  linkedin: "",
  image:"",
  image2:""
  
};


const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  // const dispatch = useDispatch();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  const { id } = useParams();
  // console.log(userId,"asdfdsfdsfdsf");

  const handleFile = (event) => {
    const { id, files } = event.target;
    //settmpupimagefront(URL.createObjectURL(event.target.files[0]));

    let formData = { ...formValue, ...{ [id]: files[0] } };
    setFormValue(formData);
    //setValidateError(formData)
  };

  // function
  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    // console.log(formValue);
    //setValidateError(formData)
  };

  const {
    address,
    mail1,
    phone1,
    phone2,
    mail2,
    facebook,
    youtube,
    twitter,
    linkedin,
    image,
    image2
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      address,
    mail1,
    phone1,
    phone2,
    mail2,
    facebook,
    youtube,
    twitter,
    linkedin,
    image,
    image2
    };
    console.log(reqData);
    let { error } = await updatesitesetting(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("settings Updated", toasterOption);
      history("/sitesettingindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getsitesettingdata(id);
    console.log(test)
    let data = {};
    data["address"] = test.userValue.address;
    data["mail1"] = test.userValue.mail1;
    data["phone1"] = test.userValue.phone1;
    data["phone2"] = test.userValue.phone2;
    data["mail2"] = test.userValue.mail2;
    data["facebook"] = test.userValue.facebook;
    data["twitter"] = test.userValue.twitter;
    data["youtube"] = test.userValue.youtube;
    data["linkedin"] = test.userValue.linkedin;
    data["image"] = test.userValue.image;
    data["image2"] = test.userValue.image2;
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(data);
    //setUser(test.userValue);
  };

  useEffect(() => {
    //logout(history)
    getUserData();
  }, []);

  return (
    <div>
              <DashboardLayout>
              <Button color="primary" onClick={()=>history(-1)}  >
                  Back to
                </Button>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleFormSubmit}
            >
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Sitesettings</h4>
                <p className={classes.cardCategoryWhite}>update the Sitesettings</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Address"
                      onChange={onChange}
                      value={address}
                      id="address"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.address && (
                      <span className={classes.textDanger}>
                        {validateError.address}
                      </span>
                    )}
                  </GridItem>
               
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Mail-1"
                      onChange={onChange}
                      value={mail1}
                      id="mail1"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.mail1 && (
                      <span className={classes.textDanger}>
                        {validateError.mail1}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone-1"
                      onChange={onChange}
                      value={phone1}
                      id="phone1"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone1 && (
                      <span className={classes.textDanger}>
                        {validateError.phone1}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Phone-2"
                      onChange={onChange}
                      value={phone2}
                      id="phone2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone2 && (
                      <span className={classes.textDanger}>
                        {validateError.phone2}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Mail-2"
                      onChange={onChange}
                      value={mail2}
                      id="mail2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.mail2 && (
                      <span className={classes.textDanger}>
                        {validateError.mail2}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Facebook"
                      onChange={onChange}
                      value={facebook}
                      id="facebook"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.facebook && (
                      <span className={classes.textDanger}>
                        {validateError.facebook}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Youtube"
                      onChange={onChange}
                      value={youtube}
                      id="youtube"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.youtube && (
                      <span className={classes.textDanger}>
                        {validateError.youtube}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Twitter"
                      onChange={onChange}
                      value={twitter}
                      id="twitter"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.twitter && (
                      <span className={classes.textDanger}>
                        {validateError.twitter}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Linkedin"
                      onChange={onChange}
                      value={linkedin}
                      id="linkedin"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.linkedin && (
                      <span className={classes.textDanger}>
                        {validateError.linkedin}
                      </span>
                    )}
                  </GridItem>


                  <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{color:"red", fontSize:"13px"}}>1350*500(Recommended Logo size)
        </InputLabel>
                    <CustomInput
                      labelText="Header Logo"
                      onChange={handleFile}
                      id="image"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                     {image && <img src={config.API + "/images/user/" + image} alt="..." style={{ maxWidth: 50, maxHeight: 50 }} />}
                    {validateError.image && (
                      <span className={classes.textDanger}>
                        {validateError.image}
                      </span>
                    )}
                  </GridItem>


                  <GridItem xs={12} sm={12} md={4}>
                <InputLabel style={{color:"red", fontSize:"13px"}}>1350*500(Recommended Logo size)
        </InputLabel>
                    <CustomInput
                      labelText="Footer Logo"
                      onChange={handleFile}
                      id="image2"
                      type="file"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                     {image2 && <img src={config.API + "/images/user/" + image2} alt="..." style={{ maxWidth: 50, maxHeight: 50 }} />}
                    {validateError.image && (
                      <span className={classes.textDanger}>
                        {validateError.image}
                      </span>
                    )}
                  </GridItem>
               
               
                </GridContainer> 
              </CardBody>
              <CardFooter>
                <Button color="primary" type="submit">
                  Update
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
      </DashboardLayout>
    </div>
  );
}
