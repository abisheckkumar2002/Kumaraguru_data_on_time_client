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
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import Dropdown from "react-dropdown";
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "lib/isEmpty";
import Select from "react-select";
import "react-dropdown/style.css";

import { eventTypeList, AddNewEvent } from "actions/users";
import { blackColor } from "assets/jss/material-dashboard-react";
import "./event.css";

const styles = {
  addButton: {
    display: "flex",
    width: 100000,
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

  textareacontainer: {
    margin: "bottom: 20px",
  },

  textareainput: {
    width: "100%",
    height: "50px",
    padding: "10px",
    fontsize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "vertical",
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

const options = ["one", "two", "three"];

const defaultOption = options[0];

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();

  const [eventTypeLabel, setEventTypeLabel] = useState([]);
  const [evenTypeList, setEventTypeList] = useState([]);

  const [formValue, setFormValue] = useState({
    eventId: "",
    tittle: "",
    description: "",
    eventType_id: "",
  });

  const [labelList, setLabelList] = useState([
    {
      key: " ",
      isRequired: false,
      inputField: " ",
      inputDataType: "",
      option: "",
    },
  ]);
  console.log(
    labelList,
    "labelListlabelListlabelListlabelListlabelListlabelListlabelList"
  );

  console.log(formValue, "formValueformValueformValueformValue");

  const [validateError, setValidateError] = useState({});
  console.log(
    validateError,
    "validateErrorvalidateErrorvalidateErrorvalidateErrorvalidateError"
  );

  const { eventId, eventType_id, tittle, description } = formValue;

  const newKeys = [...labelList];
  console.log(newKeys, "newKeys");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      // ["link", "image"], // description box
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
    // "image",
  ];

  const inputFields = [
    { value: 1, label: "TextBox" },
    { value: 2, label: "DatePicker" },
    { value: 3, label: "DropDown" },
    { value: 4, label: "TextEditor" },
  ];

  const inputDataType = [
    { value: 1, label: "Number" },
    { value: 2, label: "AlpahaNumeric" }, //backend need same
  ];

  const handleProcedureContentChange = (
    contentsatta,
    delta,
    source,
    editor
  ) => {
    //let has_attribues = delta.ops[1].attributes || "";
    console.log(contentsatta);
    let formData = { ...formValue, ...{ ["content"]: contentsatta } };
    setFormValue(formData);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  const handleFile = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    const { id, files } = event.target;
    //settmpupimagefront(URL.createObjectURL(event.target.files[0]));

    let formData = { ...formValue, ...{ [id]: files[0] } };
    setFormValue(formData);
    //setValidateError(formData)
  };

  // const addInput = () => {
  //   // Clone the current keys array
  //   const newKeys = [...formValue.keys];
  //   console.log(newKeys, "ggggggg");
  //   // Add a new empty string to the  array
  //   newKeys.push({
  //     label: "",
  //     inputField: "",
  //     option: "",
  //     inputDataType: "",
  //     isMultiple: false,
  //     isRequired: false,
  //   });
  //   // Update the state with the new keys array
  //   setFormValue({ ...formValue, keys: newKeys });
  //   console.log(newKeys, "newKeysnewKeysnewKeysnewKeysnewKeys");
  // };

  const addInput = () => {
    const newKeys = [...labelList]; //clone
    console.log(newKeys, "bcbcbcbcbcbc");

    // Add a new empty string to the  array
    newKeys.push({
      key: " ",
      isRequired: false,
      inputField: " ",
      inputDataType: "",
      option: "",
    });
    // Update the state with the new keys array
    setLabelList(newKeys);
  };

  const removeInputField = (indexToRemove) => {
    // Filter out the value at the specified index from the keys array
    console.log(indexToRemove, "indexToRemove");
    const newKeys = labelList.filter((_, index) => index !== indexToRemove);

    console.log(
      newKeys,
      "removeInputFieldremoveInputFieldremoveInputFieldremoveInputField"
    );
    // Update the state with the new keys array
    setLabelList(newKeys); //{ ...formValue, keys: newKeys }  its create the new object
  };

  function stripHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  const userSelectData = async () => {
    let userData = await eventTypeList();

    const eventlabel = userData.userValue.map((option) => ({
      value: option._id,
      label: option.eventtype,
    }));

    setEventTypeLabel(eventlabel);
    setEventTypeList(userData.userValue);
  };

  useEffect(() => {
    userSelectData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      tittle: formValue.tittle,
      description: formValue.description,
      eventType_id: formValue.eventType_id,
      eventId: formValue.eventId,
      eventKey: labelList,
    };
    let { error, result } = await AddNewEvent(dataToSend);
    console.log("error", error);
    console.log("result", result);
    if (isEmpty(error)) {
      toast.success("Added Successfully");
      history("/event");
    } else {
      setValidateError(error);
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
              <form
                className={classes.form}
                noValidate
                onSubmit={handleFormSubmit}
              >
                <CardHeader color="primary">
                  <MDTypography>
                    <h3 className={classes.cardTitleWhite}>Add Event</h3>
                  </MDTypography>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Event Id"
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            eventId: e.target.value,
                          })
                        }
                        id="EventId"
                        value={eventId}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.eventId && (
                        <span className={classes.textDanger}>
                          {validateError.eventId}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Tittle"
                        onChange={(e) =>
                          setFormValue({ ...formValue, tittle: e.target.value })
                        }
                        value={tittle}
                        id="tittle"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.tittle && (
                        <span className={classes.textDanger}>
                          {validateError.tittle}
                        </span>
                      )}
                    </GridItem>

                    <div
                      style={{
                        width: 470,
                        marginLeft: "17px",
                        marginTop: "48px",
                        marginRight: "10px",
                      }}
                    >
                      <Select
                        options={eventTypeLabel}
                        placeholder="Select Event Type"
                        loading={true}
                        closeOnScroll={true} // Fixed incorrect syntax
                        separator={true}
                        valueField="id"
                        value={
                          eventType_id
                            ? {
                                value: eventType_id,
                                label: evenTypeList.find(
                                  (option) => option._id === eventType_id
                                ).eventtype,
                              }
                            : null
                        }
                        onChange={(selectedOption) =>
                          setFormValue({
                            ...formValue,
                            eventType_id: selectedOption.value,
                          })
                        }
                        style={{
                          placeholder: (basestyles, state) => ({
                            ...basestyles,
                            color: "red",
                            fontSize: 40,
                          }),
                        }}
                      />

                      {validateError.eventType_id && (
                        <span className={classes.textDanger}>
                          {validateError.eventType_id}
                        </span>
                      )}
                    </div>

                    <GridItem xs={12} sm={12} md={6}>
                      {/* <InputLabel
                        style={{
                          marginTop: "25px",
                          color: "black",
                          fontSize: "15px",
                        }}
                      >
                        About Event
                      </InputLabel> */}
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={description}
                        id="description"
                        onChange={(content) =>
                          setFormValue({ ...formValue, description: content })
                        }
                        style={{ width: "657px", marginTop: "45px" }}
                      />

                      {validateError.description && (
                        <span className={classes.textDanger}>
                          {validateError.description}
                        </span>
                      )}
                    </GridItem>
                    <GridItem item xs={12} sm={12} md={12}>
                      <InputLabel
                        style={{
                        
                          paddingTop: "50px",
                          color: "blue", // Changed color to white for visibility
                          fontWeight: "bold", // Changed fontFamily to fontWeight
                          fontSize: "18px",
                        }}
                      >
                   Note: Once a event key is set, it cannot be edited, making it crucial to ensure its accuracy when adding an event
                      </InputLabel>
                    </GridItem>
                    {labelList.map((label, index) => (
                      <div className={classes.addButton} key={index}>
                        <GridItem xs={12} sm={12} md={4}>
                          <InputLabel
                            style={{
                              marginTop: "30px",
                              color: "black",
                              fontSize: "17px",
                              fontFamily: "bold",
                              marginLeft: "3px",
                            }}
                          >
                            {"Label" + "  " + (index + 1)}
                          </InputLabel>
                          <CustomInput
                            style={{}}
                            labelText="Label"
                            onChange={(e) => {
                              const newKeys = [...labelList]; // Create a copy of the keys array
                              newKeys[index] = {
                                ...newKeys[index],
                                key: e.target.value,
                              };

                              setLabelList(newKeys);
                            }}
                            value={label.key}
                            id={`label ${index + 1}`}
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                          {validateError[`eventKey[${index + 1}].key`] && (
                            <span className={classes.textDanger}>
                              {validateError[`eventKey[${index + 1}].key`]}
                            </span>
                          )}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <InputLabel
                            style={{
                              marginTop: "70px",
                              color: "black",
                              fontSize: "17px",
                              fontFamily: "bold",
                              marginLeft: "30px",
                            }}
                          >
                            IsRequired
                            <div
                              style={{
                                marginLeft: "17px",
                                marginTop: "73px",
                              }}
                            >
                              <input
                                type="checkbox"
                                name="isRequired"
                                value={true}
                                checked={label.isRequired === true}
                                onChange={(e) => {
                                  const newKeys = [...labelList];
                                  newKeys[index] = {
                                    ...newKeys[index],
                                    isRequired: e.target.checked,
                                  };
                                  setLabelList(newKeys);
                                }}
                              />{" "}
                            </div>
                            {validateError[
                              `eventKey[${index + 1}].isRequired`
                            ] && (
                              <span className={classes.textDanger}>
                                {
                                  validateError[
                                    `eventKey[${index + 1}].isRequired`
                                  ]
                                }
                              </span>
                            )}
                          </InputLabel>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={2}>
                          <InputLabel
                            style={{
                              marginTop: "70px",
                              color: "black",
                              fontSize: "17px",
                              marginLeft: "17px",
                              fontFamily: "bold",
                            }}
                          >
                            Input Field
                          </InputLabel>

                          <div
                            style={{
                              width: "100%",
                              marginLeft: "17px",
                              marginTop: "53px",
                              marginRight: "10px",
                            }}
                          >
                            <Select
                              options={inputFields}
                              labelText={`inputField ${index + 1}`}
                              placeholder="Input Field"
                              labelField="inputField"
                              onChange={(selectedOption) => {
                                const newKeys = [...labelList];
                                newKeys[index] = {
                                  ...newKeys[index],
                                  inputField: selectedOption
                                    ? selectedOption.label
                                    : "", // Assign the label string
                                };
                                setLabelList(newKeys);



                              }}
                              value={inputFields.find(
                                (option) => option.value === label.label
                              )}
                              id={`inputField ${index}`}
                              style={{
                                placeholder: (basestyles, state) => ({
                                  ...basestyles,
                                  color: "red",
                                  fontSize: 40,
                                }),
                              }}
                            />
                          </div>

                          {validateError[
                            `eventKey[${index + 1}].inputField`
                          ] && (
                            <span className={classes.textDanger}>
                              {
                                validateError[
                                  `eventKey[${index + 1}].inputField`
                                ]
                              }
                            </span>
                          )}
                        </GridItem>

                        {label.inputField === "TextBox" && label.isRequired ? (
                          <GridItem xs={12} sm={12} md={2}>
                            <InputLabel
                              style={{
                                marginTop: "70px",
                                color: "black",
                                fontSize: "17px",
                                marginLeft: "17px",
                                fontFamily: "bold",
                              }}
                            >
                              Input Data Type
                            </InputLabel>

                            <div
                              style={{
                                width: "100%",
                                marginLeft: "17px",
                                marginTop: "53px",
                                marginRight: "10px",
                              }}
                            >
                              <Select
                                options={inputDataType}
                                labelText={`inputDataType ${index + 1}`}
                                placeholder="Select Data Type"
                                labelField="inputDataType"
                                onChange={(selectedOption) => {
                                  const newKeys = [...labelList];
                                  newKeys[index] = {
                                    ...newKeys[index],
                                    inputDataType: selectedOption
                                      ? selectedOption.label
                                      : "",

                                      option:""
                                  };
                                  console.log("aahdfhjdkfhjkdhf",newKeys)
                                  setLabelList(newKeys);
                             
                                }}
                                value={inputDataType.find(
                                  (option) => option.value === label.label
                                )}
                                id={`inputDataType ${index}`}
                                style={{
                                  placeholder: (basestyles, state) => ({
                                    ...basestyles,
                                    color: "red",
                                    fontSize: 40,
                                  }),
                                }}
                              />
                            </div>

                            {validateError[
                              `eventKey[${index + 1}].inputDataType`
                            ] && (
                              <span className={classes.textDanger}>
                                {
                                  validateError[
                                    `eventKey[${index + 1}].inputDataType`
                                  ]
                                }
                              </span>
                            )}
                          </GridItem>
                        ) : null}

                        {
                        label.inputField === "DropDown" ? (
                          <GridItem xs={12} sm={12} md={2}>
                            <InputLabel
                              style={{
                                marginTop: "70px",
                                color: "black",
                                fontSize: "17px",
                                fontFamily: "bold",
                              }}
                            >
                              <div>
                                Option{" "}
                                <span style={{ color: "red" }}>
                                  {" "}
                                  <br /> note: Option must be a comma-separated
                                  value
                                </span>
                                <br />
                              </div>
                            </InputLabel>
                            <textarea
                              className={classes.textareainput}
                              value={label.option}
                              id={`option ${index + 1}`}
                              onChange={(e) => {
                                const newKeys = [...labelList]; // Create a copy of the keys array
                                newKeys[index] = {
                                  ...newKeys[index],
                                  option: e.target.value,
                                  inputDataType:""
                                };
                                setLabelList(newKeys);
                              }}
                            />
                            {validateError[`eventKey[${index + 1}].option`] && (
                              <span className={classes.textDanger}>
                                {validateError[`eventKey[${index + 1}].option`]}
                              </span>
                            )}
                          </GridItem>
                        ) : null}

                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          style={{ marginTop: "11%", marginLeft: "10px" }}
                        >
                          {labelList.length > 1 && (
                            <Button
                              color="danger"
                              onClick={() => removeInputField(index)}
                            >
                              Remove
                            </Button>
                          )}
                        </GridItem>
                      </div>
                    ))}

                    <GridItem
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button color="primary" onClick={addInput}>
                        Add Key
                      </Button>
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
