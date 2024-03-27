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

import { addevent } from "actions/users";
import { blackColor } from "assets/jss/material-dashboard-react";

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

const initialFormValue = {
  location: "",
  Photofile: "",
  date: "",
  company: "",
  content: "",
  keys: [{ attribute: " ", type: " " }],
};

const options = ["one", "two", "three"];

const defaultOption = options[0];

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const history = useNavigate();

  const [userdet, setUser] = useState();
  const [formValue, setFormValue] = useState(initialFormValue);

  console.log(formValue, "keyskeyskeyskeyskeys");
  const [validateError, setValidateError] = useState({});

  const { Photofile, type, tittle, sort_desciption, content, keys } = formValue;

  console.log(keys, "abisheckabisheckabisheckabisheck");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const options = [
    { id: 1, label: "Faculty Contribution" },
    { id: 2, label: "Student Contribution" },
    { id: 3, label: "Department Contribution" },
  ];

  const options3 = [
    { id: 1, label: "Input" },
    { id: 2, label: "Description" },
    { id: 3, label: "Date" },
  ];



  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
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

  // function
  const onChange = (e) => {
    e.preventDefault();

    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    console.log(formValue);
    //setValidateError(formData)
  };

  const onChangekey = (index, value) => {
    console.log(value, "onChangekeyonChangekeyonChangekey");
    const newKeys = [...formValue.keys]; // Create a copy of the keys array
    newKeys[index] = { ...newKeys[index], attribute: value }; // Update the attribute value for the specific index
    setFormValue({ ...formValue, keys: newKeys }); // Update the state with the modified keys array
  };

  const onChangeType = (index, value) => {
    console.log(value, "onChangeTypeonChangeTypeonChangeTypeonChangeType");
    const newKeys = [...formValue.keys]; // Create a copy of the keys array
    newKeys[index] = { ...newKeys[index], type: value }; // Update the type value for the specific index
    setFormValue({ ...formValue, keys: newKeys }); // Update the state with the modified keys array
  };

  const addInput = () => {
    // Clone the current keys array
    const newKeys = [...formValue.keys];
    console.log(
      ...formValue.keys,
      ".formValue.keys.formValue.keys.formValue.keys.formValue.keys.formValue.keys"
    );
    console.log(newKeys, "newKeysnewKeysnewKeysnewKeysnewKeys");
    // Add a new empty string to the cloned array
    newKeys.push({ attribute: "", type: "" });
    // Update the state with the new keys array
    setFormValue({ ...formValue, keys: newKeys });
  };

  const removeInputField = (indexToRemove) => {
    // Filter out the value at the specified index from the keys array
    const newKeys = formValue.keys.filter(
      (_, index) => index !== indexToRemove
    );

    console.log(
      newKeys,
      "removeInputFieldremoveInputFieldremoveInputFieldremoveInputField"
    );
    // Update the state with the new keys array
    setFormValue({ ...formValue, keys: newKeys });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formValue);
    let reqData = {
      type,
      tittle,
      sort_desciption,
      content,
      Photofile,
    };

    let { error } = await addevent(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Added Successfully", toasterOption);
      history("/eventindex");
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
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Profile image"
                        onChange={handleFile}
                        id="Photofile"
                        type="file"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.photofile && (
                        <span className={classes.textDanger}>
                          {validateError.photofile}
                        </span>
                      )}
                    </GridItem>

                    {/* <GridItem xs={12} sm={12} md={4}>
                      <Dropdown
                        options={options}
                        // onChange={this._onSelect}
                        value={defaultOption}
                        placeholder="Select an option"
                      />
                      ;
                    </GridItem> */}

                    {/* <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Type"
                        onChange={onChange}
                        value={type}
                        id="type"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.type && (
                        <span className={classes.textDanger}>
                          {validateError.type}
                        </span>
                      )}
                    </GridItem> */}

                    <GridItem xs={12} sm={12} md={7}>
                      <CustomInput
                        labelText="Tittle"
                        onChange={onChange}
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

                    <GridItem xs={12} sm={12} md={7}>
                      <InputLabel
                        style={{
                          marginTop: "30px",
                          color: "black",
                          fontSize: "15px",
                        }}
                      >
                        About Event
                      </InputLabel>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={content || ""}
                        onChange={handleProcedureContentChange}
                      ></ReactQuill>
                    </GridItem>

                    <div
                      style={{
                        width: 450,
                        marginLeft: "17px",
                        marginTop: "48px",
                        marginRight: "10px",
                      }}
                    >
                      <Select
                        options={options}
                        placeholder="Select Event Type"
                        loading={true}
                        closeOnScroll={true} // Fixed incorrect syntax
                        labelField="id"
                        separator={true}
                        // valueField="id"
                        // value={options}
                        style={{
                          placeholder: (basestyles, state) => ({
                            ...basestyles,
                            color: "red",
                            fontSize: 40,
                          }),
                        }}
                        // onChange={(values) => this.setValues(values)}
                      />
                    </div>

                    {formValue.keys.map((e, index) => (
                      <div className={classes.addButton}>
                        <React.Fragment key={index}>
                          <GridItem xs={12} sm={12} md={7}>
                            <InputLabel
                              style={{
                                marginTop: "30px",
                                color: "black",
                                fontSize: "15px",
                              }}
                            >
                              Add Key
                            </InputLabel>
                            <CustomInput
                              labelText={`Attribute ${index + 1}`}
                              onChange={(e) =>
                                onChangekey(index, e.target.value)
                              }
                              value={e.attribute}
                              id={`attribute ${index + 1}`}
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

                          <GridItem xs={12} sm={12} md={5}>
                            <InputLabel
                              style={{
                                marginTop: "30px",
                                color: "black",
                                fontSize: "15px",
                                marginLeft: "17px",
                              }}
                            >
                              Select Input Type
                            </InputLabel>

                            <div
                              style={{
                                width: 350,
                                marginLeft: "17px",
                                marginTop: "48px",
                                marginRight: "10px",
                              }}
                            >
                              <Select
                                options={options3}
                                labelText={`Type ${index + 1}`}
                                placeholder="Select Input Type"
                                onChange={(e) =>
                                  onChangeType(index, e.target.value)
                                }
                                loading={true}
                                closeOnScroll={true} // Fixed incorrect syntax
                                labelField="id"
                                separator={true}
                                // valueField="id"
                                id={`type ${index + 1}`}
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                style={{
                                  placeholder: (basestyles, state) => ({
                                    ...basestyles,
                                    color: "red",
                                    fontSize: 40,
                                  }),
                                }}
                                // onChange={(values) => this.setValues(values)}
                              />
                            </div>

                            {/* <CustomInput
                              labelText={`Type ${index + 1}`}
                              onChange={(e) =>
                                onChangeType(index, e.target.value)
                              }
                              value={e.type}
                              id={`type ${index + 1}`}
                              formControlProps={{
                                fullWidth: true,
                              }}
                            /> */}
                            {validateError.tittle && (
                              <span className={classes.textDanger}>
                                {validateError.tittle}
                              </span>
                            )}
                          </GridItem>

                          <GridItem style={{ marginTop: "100px",marginLeft:"20px" }}>
                            {formValue.keys.length > 1 && (
                              <Button
                                color="danger"
                                onClick={() => removeInputField(index)}
                              >
                                Remove
                              </Button>
                            )}
                          </GridItem>
                        </React.Fragment>
                      </div>
                    ))}
                    <GridItem style={{ marginTop: "100px" }}>
                      <Button color="primary" onClick={addInput}>
                        Add
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
