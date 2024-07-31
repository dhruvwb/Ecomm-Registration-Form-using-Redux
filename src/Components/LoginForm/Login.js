import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { MDBDatepicker } from "db-react-ui-kit";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [classs, setClasss] = useState("");
  const [gender, setGender] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");

  const [startDate, setStartDate] = useState(null);
  const [city, setCity] = useState("");
  const [states, setStates] = useState([
    { id: 1, name: "Andhra_Pradesh" },
    { id: 2, name: "Arunachal_Pradesh" },
    { id: 3, name: "Assam" },
    { id: 4, name: "Bihar" },
    { id: 5, name: "Uttarakhand" },
    { id: 6, name: "UttarPradesh" },
  ]);

  const [cities, setCities] = useState({
    Andhra_Pradesh: [
      { id: 1, name: "Anantapur" },
      { id: 2, name: "Chittoor" },
      { id: 3, name: "East Godavari" },
    ],
    Arunachal_Pradesh: [
      { id: 1, name: "Vishakha Patnam" },
      { id: 2, name: "Guntur" },
      { id: 3, name: "Ttirupati" },
    ],
    Assam: [
      { id: 1, name: "Guwahati" },
      { id: 2, name: "Jorhat" },
      { id: 3, name: "Tezpur" },
    ],
    Bihar: [
      { id: 1, name: "Patna" },
      { id: 2, name: "Bhagalpur" },
      { id: 3, name: "Muzaffarpur" },
    ],
    Uttarakhand: [
      { id: 1, name: "Dehradun" },
      { id: 2, name: "Rishikesh" },
      { id: 3, name: "Mussoorie" },
    ],
    UttarPradesh: [
      { id: 1, name: "Lucknow" },
      { id: 2, name: "Kanpur" },
      { id: 3, name: "Agra" },
    ],
  });

  const [nameError, setNameError] = useState(false);
  const [classsError, setClasssError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [pinCodeError, setPinCodeError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [alert, ShowAlert] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    else {
      ShowAlert(true);
      event.preventDefault();
      const userData = {
        name,
        password,
        classs,
        gender,
        age,
        pinCode,
        state,
        city,
        startDate,
      };
      try {
        const response = await axios.post(
          "http://localhost:5500/api/user/register",
          userData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      console.log(JSON.stringify(userData));
    }
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setClasss("");
    setGender("");
    setPinCode("");
    setState("");
    setStartDate(null);
    // ShowAlert(false);
  };

  const handleStateChange = (event) => {
    // console.log(val);
    console.log(event.target.text);
    setState(event.target.text);
    // setState("");
    setCity(" ");
  };

  const handleCityChange = (event) => {
    console.log(event.target.text);
    setCity(event.target.text);
  };

  // handleAddCity("Andhra Pradesh", { id: 4, name: "Nellore" });

  const validateForm = () => {
    let isValid = true;

    if (name.length < 5) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (classs === "") {
      setClasssError(true);
      isValid = false;
    } else {
      setClasssError(false);
    }

    if (age === "") {
      setAgeError(true);
      isValid = false;
    } else {
      setAgeError(false);
    }

    if (gender === "") {
      setGenderError(true);
      isValid = false;
    } else {
      setGenderError(false);
    }

    if (pinCode.length < 6) {
      setPinCodeError(true);
      isValid = false;
    } else {
      setPinCodeError(false);
    }

    if (state === "") {
      setStateError(true);
      isValid = false;
    } else {
      setStateError(false);
    }

    if (startDate === null) {
      setStartDateError(true);
      isValid = false;
    } else {
      setStartDateError(false);
    }

    return isValid;
  };

  return (
    <Container>
      <Form>
        <center>
          <h1>Registration Form</h1>
        </center>
        <Form.Group as={Row} controlId="formName" className="mt-3">
          <Form.Label column sm={2}>
            Name:
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(text) => setName(text.target.value)}
            />
            {nameError && (
              <Form.Text className="text-danger">
                Name must be at least 5 characters
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPassword" className="mt-3">
          <Form.Label column sm={2}>
            Password:
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(text) => setPassword(text.target.value)}
            />
            {passwordError && (
              <Form.Text className="text-danger">
                Password must be at least 8 characters, contain at least one
                uppercase letter and one digit
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formClass" className="mt-3">
          <Form.Label column sm={2}>
            Class:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              value={classs}
              onChange={(event) => setClasss(event.target.value)}
            >
              <option value="">Select a Class</option>
              <option value="0-5"> 0-5</option>
              <option value="6-8"> 6-8</option>
              <option value="9-10"> 9-10</option>
              <option value="11-12"> 11-12</option>
            </Form.Control>
            {classsError && (
              <Form.Text className="text-danger">
                Please select a class
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formAge" className="mt-3">
          <Form.Label column sm={2}>
            Gender:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(event) => setGender(event.target.value)}
            />
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(event) => setGender(event.target.value)}
            />
            {genderError && (
              <Form.Text className="text-danger">
                Please Select a Gender
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formAge" className="mt-3">
          <Form.Label column sm={2}>
            Age
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            >
              <option value="">Select an age</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
            </Form.Control>
            {ageError && (
              <Form.Text className="text-danger">Please select a Age</Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPincode" className="mt-3">
          <Form.Label column sm={2}>
            Pincode:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={pinCode}
              placeholder="Enter Pincode"
              onChange={(event) => setPinCode(event.target.value)}
            />
            {pinCodeError && (
              <Form.Text className="text-danger">
                Name must be at least 5 characters
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formState" className="mt-3">
          <Form.Label column sm={2}>
            State:
          </Form.Label>
          <Col sm={10}>
            {/* <Form.Control
              as="select"
              onChange={(event) => setState(event.target.value)}
            >
              <option value={state}>Select a state</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="UttarPradesh">UttarPradesh</option>
            </Form.Control> */}

            <DropdownButton id="state-dropdown" title={state || "Select State"}>
              {states.map((state) => (
                <Dropdown.Item
                  key={state.id}
                  eventKey={state.name}
                  onClick={handleStateChange}
                >
                  {state.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>

            {/* <DropdownButton id="state-dropdown" title={state || "Select State"}>
              {states.map((x) => (
                <Dropdown.Item
                  key={x.id}
                  eventkey={x.name}
                  onClick={handleStateChange}
                  value={x.name}
                >
                  {x.name}
                </Dropdown.Item>
              ))}
            </DropdownButton> */}
            {stateError && (
              <Form.Text className="text-danger">
                Please select a state
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        {/* {state && (
          <Form.Group controlId="city">
            <Form.Label column sm={2}>
              City
            </Form.Label>
            <DropdownButton id="city-dropdown" title={city || "select City"}>
              {cities[state].map((city) => (
                <Dropdown.Item
                  key={city.id}
                  eventkey={city.name}
                  onClick={handleCityChange}
                >
                  {city.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Form.Group>
        )} */}

        {state && (
          <Form.Group as={Row} controlId="city" className="mt-3">
            <Form.Label column sm={2}>
              City:
            </Form.Label>
            <Col sm={10}>
              <DropdownButton
                id="city-dropdown"
                title={city ? city : "Select a city"}
              >
                {cities[state].map((city) => (
                  <Dropdown.Item
                    key={city.id}
                    eventKey={city.name}
                    onClick={handleCityChange}
                  >
                    {city.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Form.Group>
        )}
        <Col>
          <Form.Group as={Row} className="mt-3">
            <Col>
              <Form.Label column sm={2}>
                Select Date:
              </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="form-control"
                placeholderText="dd/mm/yyyy"
                maxDate={new Date()}
              />
              {startDateError && (
                <Form.Text className="text-danger mt-3">
                  {/* <br /> */}
                  Please select a Date
                </Form.Text>
              )}
            </Col>
          </Form.Group>
          {/* </Col> */}
          {alert && (
            <Alert variant="success" className="mt-3">
              <Alert.Heading>Success!</Alert.Heading>
              <p>Your data has been saved successfully.</p>
            </Alert>
          )}

          <center>
            <Button
              className="mt-3"
              onClick={handleSubmit}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className="mt-3 "
              style={{ marginLeft: "20px" }}
              href="/LoginRedux"
              variant="secondary"
            >
              Login
            </Button>
          </center>
        </Col>
      </Form>
    </Container>
  );
}
