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
import ReactQuill from "react-quill";
// import isEmpty from "lib/isEmpty";
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from "../../lib/isEmpty";

import { getevent, updateevent } from "../../actions/users";

const styles = {
  addButton: {
    display: "flex",
  },

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
  location: "",
  date: "",
  company: "",
  image: "",
  content: "",
  keys: [{ attribute: " ", type: " " }],
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ],
};

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

const useStyles = makeStyles(styles);

const hodEdit = () => {
  const classes = useStyles();
  const history = useNavigate();
  // const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

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
  };

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

  const { location, date, image, company, content, keys } = formValue;

  console.log(keys.length, "anuanuanauanauanauanauanauanauanauanauanauanauan");
  console.log(keys, "keyvaluekeyvaluekeyvalue");

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

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    console.log(formValue);
    const keys = test.userValue.keys.push(formValue.keys);
    console.log(formValue);
    let reqData = {
      location,
      image,
      date,
      company,
      content,
      keys,
    };
    console.log(reqData);
    let { error } = await updateevent(reqData, id);
    console.log("error", error);
    if (isEmpty(error)) {
      toast.success("Updated Successfully", toasterOption);
      history.push("/eventindex");
    } else {
      setValidateError(error);
    }
  };

  const getUserData = async () => {
    // var test = await getevent(id);
    // Assuming you'll get the 'test' variable from somewhere
    // console.log(test);

    let formdata = {};
    formdata["location"] = "madurai";
    formdata["date"] = "date";
    formdata["Photofile"] = "Photofile";
    formdata["company"] = "company";
    formdata["content"] = "content";

    (formdata["keys"] = [{ attribute: " ", type: " " }]),
      // Assuming 'setFormValue' is a function to set form data
      setFormValue(formdata);
  };

  useEffect(() => {
    //logout(history)
    setTimeout(getUserData, 100);
    getUserData();
  }, []);

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
                  <h4 className={classes.cardTitleWhite}>Edit</h4>
                  <p className={classes.cardCategoryWhite}>update Event</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Event image"
                        onChange={handleFile}
                        id="image"
                        type="file"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.image && (
                        <span className={classes.textDanger}>
                          {validateError.image}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Type"
                        onChange={onChange}
                        value={date}
                        id="date"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.description && (
                        <span className={classes.textDanger}>
                          {validateError.description}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Tittle"
                        onChange={onChange}
                        value={company}
                        id="company"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {validateError.description && (
                        <span className={classes.textDanger}>
                          {validateError.description}
                        </span>
                      )}
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                      <InputLabel>About Event</InputLabel>
                      <ReactQuill
                        theme="snow"
                        // modules={modules}
                        // formats={formats}
                        // value={team || ""}
                        onChange={handleProcedureContentChange}
                      ></ReactQuill>
                    </GridItem>

                    {formValue.keys.map((e, index) => (
                      <div className={classes.addButton}>
                        <React.Fragment key={index}>
                          <GridItem xs={12} sm={12} md={4}>
                            <InputLabel>Add Key</InputLabel>
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

                          <GridItem xs={12} sm={12} md={4}>
                            <InputLabel>Add Input Type</InputLabel>
                            <CustomInput
                              labelText={`Type ${index + 1}`}
                              onChange={(e) =>
                                onChangeType(index, e.target.value)
                              }
                              value={e.type}
                              id={`type ${index + 1}`}
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

                          <GridItem style={{ marginTop: "100px" }}>
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
};

export default hodEdit;
