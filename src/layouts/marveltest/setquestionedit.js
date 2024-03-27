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
import config from "lib/config";

//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getsetquestion, updatequestion } from "../../actions/users";

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
  
  question: "",
  options:"",
  questionnumber:"",
  setname:"",
  image: "",
  
};


const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const history = useNavigate();
  // const dispatch = useDispatch();
  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState({});
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
    image,
  
    question,
    options,
    questionnumber,
    setname,
  } = formValue;

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);

    let reqData = {
      image,
      question,
      options,
      questionnumber,
      setname,
    };
    console.log(reqData);
    let { error } = await updatequestion(reqData,id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("User Updated", toasterOption);
      history(-1);
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    var test = await getsetquestion(id);
    console.log(test,"vvv")
    let formdata = {};
 
    formdata["question"] = test.userValue.question;
    formdata["options"] = test.userValue.options;
    formdata["questionnumber"] = test.userValue.questionnumber;
    formdata["setname"] = test.userValue.set;
    formdata["image"] = test.userValue.image;
    // formdata["Photofile"] = test.userValue.image;
    setFormValue(formdata);
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
                <h4 className={classes.cardTitleWhite}>Edit questions</h4>
                <p className={classes.cardCategoryWhite}>update questions</p>
              </CardHeader>
              <CardBody>
              <GridContainer>

              <GridItem xs={12} sm={12} md={4}>
                      <InputLabel>questionnumber</InputLabel>
                    <CustomInput
                      // labelText="questionnumber"
                      onChange={onChange}
                      value={questionnumber}
                      id="questionnumber"
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
                      <InputLabel>setname</InputLabel>
                    <CustomInput
                      // labelText="setname"
                      onChange={onChange}
                      value={setname}
                      id="setname"
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
                      labelText="Course image"
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
                     <InputLabel style={{color:"red", fontSize:"13px"}}>Recommended 264*154
        </InputLabel>
                  </GridItem>

            
                  <GridItem xs={12} sm={12} md={4}>
                      <InputLabel>question</InputLabel>
                    <CustomInput
                      // labelText="question"
                      onChange={onChange}
                      value={question}
                      id="question"
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

                  {/* <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Options"
                      onChange={onChange}
                      value={options}
                      id="options"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    {validateError.mail && (
                      <span className={classes.textDanger}>
                        {validateError.mail}
                      </span>
                    )}
                  </GridItem> */}

                    <GridItem xs={12} sm={12} md={4}>
                      <label style={{ color: "#919090", fontWeight: "500" }}>Options cannot be editable,it is only for reference</label>
                      <input
                        style={{ width: "100%", paddingLeft: "8px" }}
                        readOnly={true}
                        // labelText="Options cannot be editable,it is only for reference"
                        onChange={onChange}
                        value={options}
                        id="options"
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
