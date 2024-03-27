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

import { getcontact, updatecontact } from "../../actions/users";

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
  mail: "",
  phone: "",
  content: "",
  content1: "",
  content2: "",
  content3: "",
  content4: "",
  
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
    mail,
    phone,
    content,
    content1,
    content2,
    content3,
    content4,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      address,
      mail,
      phone,
      content,
      content1,
    content2,
    content3,
    content4,
    };
    console.log(reqData);
    let { error } = await updatecontact(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Updated", toasterOption);
      history("/contactindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getcontact(id);
    console.log(test)
    let data = {};
    data["address"] = test.userValue.address;
    data["mail"] = test.userValue.mail;
    data["phone"] = test.userValue.phone;
    data["content"] = test.userValue.content;
    data["content1"] = test.userValue.content1;
    data["content2"] = test.userValue.content2;
    data["content3"] = test.userValue.content3;
    data["content4"] = test.userValue.content4;
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleFormSubmit}
            >
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit</h4>
                <p className={classes.cardCategoryWhite}>update</p>
              </CardHeader>
              <CardBody>
              <GridContainer>
              {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="NEET UG"
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
                      labelText="JEE main"
                      onChange={onChange}
                      value={mail}
                      id="mail"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.mail && (
                      <span className={classes.textDanger}>
                        {validateError.mail}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Foundations"
                      onChange={onChange}
                      value={content}
                      id="content"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.mail && (
                      <span className={classes.textDanger}>
                        {validateError.mail}
                      </span>
                    )}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Doctors"
                      onChange={onChange}
                      value={phone}
                      id="phone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem> */}

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Heading-1"
                      onChange={onChange}
                      value={content1}
                      id="content1"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Heading-2"
                      onChange={onChange}
                      value={content2}
                      id="content2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Heading-3"
                      onChange={onChange}
                      value={content3}
                      id="content3"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
                      </span>
                    )}
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Heading-4"
                      onChange={onChange}
                      value={content4}
                      id="content4"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.phone && (
                      <span className={classes.textDanger}>
                        {validateError.phone}
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
