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
import moment from "moment";
import "./datapicker.css";
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

export default function myEventData() {
  const { id } = useParams();
  const classes = useStyles();
  const history = useNavigate();

  const [formData, setFormData] = useState([]); // set the array of object

  const [formValue, setFormValue] = useState({
    // get only the tittle
    eventId: "",
    tittle: "",
  });

  const [RecordFile, setRecordFile] = useState();

  // console.log("RecordFileRecordFileRecordFileRecordFileRecordFile", RecordFile);

  console.log(
    formData,
    "formDataformDataformDataformDataformDataformDataformData"
  );

  const [validateError, setValidateError] = useState({});

  const [ErrorsName, setErrorsName] = useState({});

  const [startDate, setStartDate] = useState(null);

  console.log(startDate, "startDatestartDatestartDatestartDate");
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

  const handleFile = (event) => {
    event.preventDefault();

    const allowedTypes = ["application/pdf"];
    let fileType = event.target.files[0];

    if (fileType && allowedTypes.includes(fileType.type)) {
      // Handle the case when a PDF file is selected
      setRecordFile(fileType);

      setErrorsName({ recordFile: "" }); // Clear any previous error message
    } else {
      // Handle the case when a file of an unsupported type is selected
      setRecordFile(null); // Clear the selected file
      setErrorsName({
        recordFile: "Please select a PDF file only.",
      });
    }
  };

  const getEventOne = async (id) => {
    console.log(id, "idididid");
    const { userValue, errors } = await getEvent1(id);

    // console.log(errors, "errorserrorserrorserrors");

    let data = {};
    data["tittle"] = userValue.data.tittle;
    data["eventId"] = userValue.data.eventId;

    const newArray = userValue.data.eventKey.map((item) => ({
      ...item,
      [item.key]: "",
    }));

    // console.log("newArraynewArray", newArray);

    setFormData(newArray);
    setFormValue(data);
  };

  const OnChangeFunc = async (index, value, key) => {
    // console.log(index, "indexindexindex");
    // console.log(value, "valuevaluevaluevaluevaluevaluevaluevalue");

    // console.log(key, "key");

    var data = [...formData];

    data[index][key] = value;

    setFormData(data);
  };

  const fromSubmit = async (e) => {
    e.preventDefault();
    const send = formData.map((item) => ({
      ...item,
      [item.key]: item[item.key],
      isRequired: item.isRequired,
      key: item.key,
      inputDataType: item.inputDataType,
    }));

    const dataParse = JSON.stringify(send);

    var setData = {
      event_Id: id,
      eventData: dataParse,
      recordFile: RecordFile,
    };

    let { error, result } = await AddEventData(setData);

    console.log(result, "varvaravar");
    console.log(error, "errorerrorerrorerrorerrorerror");
    if (isEmpty(error)) {
      toast.success("Added Successfully");
      history(`/${id}/myeventdata`);
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
                  <GridContainer style={{ backgroundColor: "43px" }}>
                    {formData.map((key, index) => {
                      switch (key.inputField) {
                        case "TextEditor":
                          return (
                            <GridItem xs={12} sm={12} md={4}>
                              <ReactQuill
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                value={key[key.key]}
                                id={key[key.key]}
                                placeholder={key.key}
                                onChange={(value) =>
                                  OnChangeFunc(index, value, key.key)
                                }
                              />
                              {ErrorsName[key.key] && (
                                <span className={classes.textDanger}>
                                  {ErrorsName[key.key]}
                                </span>
                              )}
                            </GridItem>
                          );

                        case "TextBox":
                          return (
                            <GridItem xs={12} sm={12} md={4} key={index}>
                              <CustomInput
                                labelText={key.key}
                                style={{
                                  marginTop: "50px",
                                  marginLeft: "50px",
                                }}
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
                          console.log(key[key.key], "key[key.key]");
                          console.log(
                            moment(key[key.key]).format("MM/DD/YYYY"),
                            " new Date(moment(key[key.key]).format('MM/DD/YYYY') )"
                          );
                          // Original date string
                          var originalDateString = key[key.key];

                          // Split the original date string by '/'
                          var parts = originalDateString.split("/");

                          // Rearrange the parts to the desired format
                          var formattedDateString =
                            parts[1] + "/" + parts[0] + "/" + parts[2];

                          return (
                            <GridItem xs={12} sm={12} md={4} key={index}>
                              <div
                                style={{
                                  // width: 350,
                                  marginLeft: "50px",
                                  marginTop: "35px",
                                }}
                              >
                                {/* <div>
                                  <label htmlFor={key.key}>{key.key}</label>
                                </div> */}

                                <DatePicker
                                  selected={
                                    key[key.key]
                                      ? new Date(formattedDateString)
                                      : null
                                  }
                                  onChange={(date) => {
                                    console.log("date", date);
                                    const formattedDate =
                                      moment(date).format("DD/MM/YYYY");

                                    console.log(
                                      formattedDate,
                                      "formattedDateformattedDateformattedDateformattedDateformattedDate"
                                    );
                                    OnChangeFunc(index, formattedDate, key.key);
                                  }}
                                  dateFormat="dd/MM/yyyy"
                                  id={key.label}
                                  placeholderText={key.key}
                                  showTimeSelect={false}
                                  showPopperArrow={false}
                                  style={{ width: "400px" }}
                                />

                                <div>
                                  {ErrorsName[key.key] && (
                                    <span className={classes.textDanger}>
                                      {ErrorsName[key.key]}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </GridItem>
                          );

                        case "DropDown":
                          return (
                            <GridItem xs={12} sm={12} md={4} key={index}>
                              <div
                                style={{
                                  // width: 360,
                                  marginLeft: "15px",
                                  marginTop: "55px",
                                  marginRight: "10px",
                                }}
                              >
                                <Select
                                  options={key.option.map((option, index) => ({
                
                                    value: option, // Assigning index as the value
                                    label: option, // Using the string itself as the label
                                  }))}
                                  placeholder={key.key} // Set the placeholder text
                                  loading={true}
                                  closeMenuOnScroll={true}
                                  value={key.option.find(
                                   
                                    (option,index) => {
                                      console.log(option,"optionoptionoptionoption")
                                      console.log(key[key.key],"key[key.key]key[key.key]key[key.key]")
                                      option[index] === key[key.key]}
                                  )}
                                  onChange={(selectedOption) =>
                                    OnChangeFunc(
                                      index,
                                      selectedOption.value,
                                      key.key
                                    )
                                  }
                                />

                                {ErrorsName[key.key] && (
                                  <span className={classes.textDanger}>
                                    {ErrorsName[key.key]}
                                  </span>
                                )}
                              </div>
                            </GridItem>
                          );
                      }
                    })}

                    <GridItem xs={12} sm={12} md={4}>
                      {/* <InputLabel style={{ fontSize:"13px"}}>Upload Record </InputLabel> */}
                      <InputLabel style={{ color: "red", fontSize: "10px" }}>
                        1350*500(Recommended PDF size){" "}
                      </InputLabel>

                      <CustomInput
                        // style={{    marginTop: "50px", }}
                        labelText="Record File"
                        onChange={handleFile}
                        id="recordFile"
                        type="file"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {RecordFile ? (
                        <InputLabel
                          style={{ color: "green", fontSize: "15px" }}
                        >
                          FILE UPLOAD SUCCESSFULLY
                        </InputLabel>
                      ) : (
                        ErrorsName.recordFile && (
                          <span className={classes.textDanger}>
                            {ErrorsName.recordFile}
                          </span>
                        )
                      )}
                    </GridItem>
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
