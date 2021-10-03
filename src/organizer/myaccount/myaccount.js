import react, { useState } from "react";
import React from "react";
import "../../css/myaccount.css";
import { HeadBar } from "../home/LikedItems/LikedItem";
import Backico from "../home/search/ico";
import {
  AddressValidation,
  AgeValidation,
  EmailValidation,
  GenderValidation,
  NameValidation,
  PhoneValidation,
  PincodeValidation,
} from "./validation";

// input bar
const Input = (props) => {
  const updateState = (e) => {
    props.updateState(e.target.value);
  };

  const checkValidation = (e) => {
    if (props.validation) {
      props.validData(e.target.value, props.id, props.validation);
    }
  };
  
  return (
    <react.Fragment>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className="full-input"
        next={props.tabIndex + 1}
        value={props.value !== "" ? props.value : null}
        onChange={(e) => {
          updateState(e);
          checkValidation(e);
        }}
        {...props}
        onBlur={(e) => {
          checkValidation(e);
        }}
        maxLength={parseInt(props.maxlength)}
        next={props.tabIndex}
      />
      <label htmlFor={props.id} id={`label${props.id}`}>
        {props.labelname}
      </label>
    </react.Fragment>
  );
};
// half size input bar
function HalfInput(props) {
  return (
    <div className="half">
      <Input {...props} />
    </div>
  );
}
// full size input bar
function FullInput(props) {
  return (
    <div className="container">
      <div className="full">
        <Input {...props} />
      </div>
    </div>
  );
}

// select
function HalfInputSelect(props) {
  const updateState = (e) => {
    props.updateState(e.target.value);
  };

  const checkValidation = (e) => {
    props.validData(e.target.value, props.id, props.validation);
  };

  return (
    <div className="half">
      <select
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className="full-input"
        tabIndex={props.tabIndex}
        value={props.value !== "" ? props.value : null}
        onChange={(e) => {
          updateState(e);
          checkValidation(e);
        }}
        onBlur={(e) => {
          checkValidation(e);
        }}
      >
        {Object.keys(props.options).map((key, index) => (
          <option
            key={key}
            disabled={index === 0 ? true : false}
            selected={index === 0 ? true : false}
            value={props.options[key]}
          >
            {key}
          </option>
        ))}
      </select>
      <label htmlFor={props.id} id={`label${props.id}`}>
        {props.labelname}
      </label>
    </div>
  );
}

function MyAccountBody() {
  const [valid, setValid] = useState([
    "fname",
    "age",
    "email",
    "phone",
    "gender",
    "address",
    "pincode",
  ]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const ifInvalid = (id) => {
    document.getElementById(id).style.border = "2px solid red";
    document.getElementById(`label${id}`).style.color = "red";
    setTimeout(() => {
      document.getElementById(id).style.border = "";
      document.getElementById(`label${id}`).style.color = "";
    }, 3000);
  };
  const checkValidation = (value, id, validationfunc) => {
    if (validationfunc) {
      let outcome = validationfunc(value);
      if (!outcome) {
        setValid(() => {
          let list = Array.from(valid);
          list.push(id);
          return list;
        });
        console.log(valid);
        ifInvalid(id);
      } else {
        document.getElementById(id).style.border = "";
        document.getElementById(`label${id}`).style.color = "";
        setValid(valid.filter((item) => item !== id));
      }
    }
  };
  const validation = (e) => {
    e.preventDefault();
    console.log(valid);
    if (valid.lenght === 0) {
      return true;
    } else {
      for (let i = 0; i < valid.length; i++) {
        ifInvalid(valid[i]);
      }
      return false;
    }
  };
  return (
    <div className="myaccount-body">
      <form
        onSubmit={(e) => {
          validation(e);
        }}
      >
        <div className="container">
          <HalfInput
            placeholder="First Name"
            id="fname"
            labelname="First Name"
            tabindex="0"
            type="text"
            value={fname}
            updateState={setFname}
            validation={NameValidation}
            validData={checkValidation}
          />
          <HalfInput
            placeholder="Last Name"
            id="lname"
            labelname="Last Name"
            tabindex="1"
            type="text"
            value={lname}
            updateState={setLname}
          />
        </div>
        <FullInput
          placeholder="Email"
          id="email"
          labelname="Email"
          tabindex="2"
          type="email"
          value={email}
          updateState={setEmail}
          validation={EmailValidation}
          validData={checkValidation}
        />
        <FullInput
          placeholder="Phone No."
          id="phone"
          labelname="Phone No."
          tabindex="3"
          type="tel"
          value={phone}
          updateState={setPhone}
          maxlength={10}
          validation={PhoneValidation}
          validData={checkValidation}
        />
        <div className="container">
          <HalfInputSelect
            placeholder="Gender"
            id="gender"
            labelname="Gender"
            tabindex="4"
            type="select"
            options={{
              "select an option": "",
              male: "m",
              female: "f",
              other: "o",
            }}
            value={gender}
            updateState={setGender}
            validation={GenderValidation}
            validData={checkValidation}
          />
          <HalfInput
            placeholder="Age"
            id="age"
            labelname="Age"
            tabindex="5"
            type="number"
            value={age}
            updateState={setAge}
            validation={AgeValidation}
            validData={checkValidation}
          />
        </div>
        <FullInput
          placeholder="Pincode"
          id="pincode"
          labelname="Pincode"
          tabindex="6"
          type="number"
          value={pin}
          updateState={setPin}
          validation={PincodeValidation}
          validData={checkValidation}
        />
        <FullInput
          placeholder="Full Address"
          id="address"
          labelname="Full Address"
          tabindex="7"
          type="text"
          value={address}
          updateState={setAddress}
          validData={checkValidation}
          validation={AddressValidation}
        />
        <div className="container"></div>
        <div className="container"></div>
        <button
          className="save-btn"
          type="submit"
          onSubmit={(e) => {
            validation(e);
          }}
        >
          save
        </button>
      </form>
    </div>
  );
}

function MyaAccount(props) {
  return (
    <div className="myaccount-main">
      <HeadBar name="My Account" icon={Backico} back={true} />
      <MyAccountBody />
    </div>
  );
}

export default MyaAccount;
