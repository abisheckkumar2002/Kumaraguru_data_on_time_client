import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";
//import Button from '@mui/material/Button';
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import Dropdown from "react-dropdown";
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-dropdown/style.css";
import Typography from "@material-ui/core/Typography";
import { addevent } from "actions/users";
import { blackColor } from "assets/jss/material-dashboard-react";
import { useNavigate, useParams } from "react-router-dom";
import { getEvent1, AddEventData } from "actions/users";
const styles = {
  addButton: {
    display: "flex",
    width: 1000,
  },

  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  textDanger: {
    color: "rgb(148,44,174)",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: "18px",
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

const useStyles = makeStyles(styles);

export default function UserEvent() {
  const { id } = useParams();
  const classes = useStyles();
  const history = useNavigate();

  const [formData, setFormData] = useState([]);

  const [formValue, setFormValue] = useState({
    eventId: "",
    tittle: "",
  });

  console.log(
    formData,
    "formDataformDataformDataformDataformDataformDataformData"
  );

  const [validateError, setValidateError] = useState({});

  const [ErrorsName, setErrorsName] = useState({});

  const [startDate, setStartDate] = useState(new Date());
  const { eventId, tittle } = formValue;

  // const newArray = keys.map((item) => {
  //   const newObj = {};

  //   newObj[item.key] = "";

  //   return newObj;
  // });

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list", // description box
    "bullet",
    "indent",
    "link",
  ];

  useEffect(() => {
    getEventOne(id);
  }, []);

  const getEventOne = async (id) => {
    console.log(id, "idididid");
    const { userValue, errors } = await getEvent1(id);

    console.log(errors, "errorserrorserrorserrors");

    let data = {};
    data["tittle"] = userValue.data.tittle;
    data["eventId"] = userValue.data.eventId;

    const newArray = userValue.data.eventKey.map((item) => ({
      ...item,
      [item.key]: "",
    }));

    console.log("newArraynewArray", newArray);

    setFormData(newArray);
    setFormValue(data);
  };

  const OnChangeFunc = async (index, value, key) => {
    console.log(index, "indexindexindex");
    console.log(value, "valuevaluevaluevaluevaluevaluevaluevalue");

    console.log(key, "key");

    var data = [...formData];

    data[index][key] = value;

    console.log(data, "data");

    setFormData(data);
  };

  const fromSubmit = async (e) => {
    e.preventDefault();
    const send = formData.map((item) => ({

      ...item,
      [item.key]: item[item.key],
      isRequired: item.isRequired,
      key: item.key,
      inputDataType:item.inputDataType
    }));

    console.log(send, "sendsendsendsendsendsendsendsendsendsendsendsendsendsendsendsendsendsend");
    var setData = {
      event_Id: id,
      eventData: send,
    };

    let { error, result } = await AddEventData(setData);

    console.log(result, "resultresultresultresultresultresult");
    console.log(error, "errorerrorerrorerrorerrorerror");
    if (isEmpty(error)) {
      toast.success("Added Successfully");
      history(`/${id}/eventuser`);
    } else {
      setErrorsName(error);
    }
  };

  return (
    <div>
      <DashboardLayout>
        <Button color="primary" onClick={() => history(-1)}>
          Back to
        </Button>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form className={classes.form} noValidate onSubmit={fromSubmit}>
                <CardHeader color="primary">
                  <MDTypography>
                    <h3 className={classes.cardTitleWhite}>
                      Add {`${eventId}  ${tittle}`}
                    </h3>
                  </MDTypography>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    {formData.map((key, index) => {
                      console.log(key[key.key], "this this this this this ");
                      switch (key.inputField) {
                        case "TextEditor":
                          return (
                            <GridItem xs={12} sm={12} md={7}>
                              <InputLabel
                                style={{
                                  marginTop: "30px",
                                  color: "black",
                                  fontSize: "15px",
                                }}
                              >
                                {key.key}
                              </InputLabel>
                              <ReactQuill
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                value={key[key.key]}
                                id={key[key.key]}
                                onChange={(e) =>
                                  OnChangeFunc(index, e.target.value, key.key)
                                }
                              />
                            </GridItem>
                          );

                        case "TextBox":
                          return (
                            <GridItem xs={12} sm={12} md={4} key={index}>
                              <CustomInput
                                labelText={key.key}
                                onChange={(e) =>
                                  OnChangeFunc(index, e.target.value, key.key)
                                }
                                value={key[key.key]}
                                id={key.key}
                                formControlProps={{
                                  fullWidth: true,
                                }}
                              />
                              {ErrorsName[key.key] && (
                                <span className={classes.textDanger}>
                                  {ErrorsName[key.key]}
                                </span>
                              )}
                            </GridItem>
                          );

                        case "DatePicker":
                          return (
                            <div
                              style={{
                                width: 350,
                                marginLeft: "15px",
                              }}
                            >
                              <div>
                                <label htmlFor={key.key}>{key.key}</label>
                              </div>

                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                id={key.label}
                                showPopperArrow={true}
                                style={{ width: "400px" }}
                              />
                            </div>
                          );

                        case "CheckBox":
                          // Code for CheckBox
                          break;

                        case "DropDown":
                          return (
                            <div
                              style={{
                                width: 360,
                                marginLeft: "15px",
                                marginTop: "43px",
                                marginRight: "10px",
                              }}
                            >
                              <Select
                                options={key.option.map((option, index) => ({
                                  value: index, // Assigning index as the value
                                  label: option, // Using the string itself as the label
                                }))}
                                placeholder={key.key}
                                loading={true}
                                closeMenuOnScroll={true}
                                value={  key.option.find(
                                  (option) => option === key[key.key]
                                )}
                                onChange={(e) =>
                                  OnChangeFunc(index, e.value, key.key)
                                }
                              />

                              {ErrorsName[key.key] && (
                                <span className={classes.textDanger}>
                                  {ErrorsName[key.key]}
                                </span>
                              )}
                            </div>
                          );

                        default:
                          // Code for default case
                          break;
                      }
                    })}
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit">
                    Add
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
        {/* <Footer/> */}
      </DashboardLayout>
    </div>
  );
}
