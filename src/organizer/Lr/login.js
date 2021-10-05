import React, { useEffect, useState } from "react";
import "../../css/lr.css";
import { HeadBar } from "../home/LikedItems/LikedItem";
import Backico from "../home/search/ico";
import { FullInput } from "../myaccount/myaccount";
import { PasswordValidation, PhoneValidation } from "../myaccount/validation";
import { Switch, useHistory, Route } from "react-router-dom";
import Dialogue from "../global/dialogue";
import { KeyIco, NextIco } from "./ico";
import { handleOtpSubmit, handleRegisterSubmit } from "./logic";
// open dil close dil
const opendil = (id) => {
  document.getElementById(id).style.opacity = "1";
  document.getElementById(id).style.zIndex = "99999";
};

function dgi(id) {
  return document.getElementById(id);
}
// register
function Register() {
  const history = useHistory();
  const [valid, setValid] = useState(["Rphone"]);
  const [phone, setPhone] = useState("");
  const ifInvalid = (id) => {
    dgi(id).style.border = "2px solid var(--error)";
    dgi(`label${id}`).style.color = "var(--error)";
    setTimeout(() => {
      dgi(id).style.border = "";
      dgi(`label${id}`).style.color = "";
    }, 3000);
  };
  function validation(e) {
    if (valid.length === 0) {
      console.log(phone);
      const resp = handleRegisterSubmit(phone);
      console.log(Promise.resolve(resp));
    } else {
      for (let i = 0; i < valid.length; i++) {
        ifInvalid(valid[i]);
      }
      return false;
    }
  }
  const checkValidation = (value, id, validationfunc) => {
    if (validationfunc) {
      let outcome = validationfunc(value);
      if (!outcome) {
        setValid(() => {
          let list = Array.from(valid);
          list.push(id);
          return list;
        });
        ifInvalid(id);
      } else {
        dgi(id).style.border = "";
        dgi(`label${id}`).style.color = "";
        setValid(valid.filter((item) => item !== id));
      }
    }
  };
  return (
    <div className="login">
      <div className="lr-head">
        <h2>Register</h2>
      </div>

      <FullInput
        placeholder="Phone No."
        id="Rphone"
        labelname="Phone No."
        tabIndex="0"
        type="number"
        maxlength={10}
        validation={PhoneValidation}
        value={phone}
        updatestate={setPhone}
        validdata={checkValidation}
      />

      <div className="container center-box">
        <button
          onClick={(e) => {
            validation(e);
          }}
        >
          verify
        </button>
      </div>

      <div
        className="lr-switch"
        onClick={() => {
          history.push("/login");
        }}
      >
        {" Login"}
      </div>
    </div>
  );
}
// login
function Login() {
  const history = useHistory();
  const [valid, setValid] = useState(["Lphone", "Lpassword"]);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const ifInvalid = (id) => {
    dgi(id).style.border = "2px solid var(--error)";
    dgi(`label${id}`).style.color = "var(--error)";
    setTimeout(() => {
      dgi(id).style.border = "";
      dgi(`label${id}`).style.color = "";
    }, 3000);
  };
  const validation = (e) => {
    e.preventDefault();
    console.log(valid);
    if (valid.lenght === 0) {
      console.log(valid);
      return true;
    } else {
      for (let i = 0; i < valid.length; i++) {
        ifInvalid(valid[i]);
      }
      return false;
    }
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
        dgi(id).style.border = "";
        dgi(`label${id}`).style.color = "";
        setValid(valid.filter((item) => item !== id));
      }
    }
  };
  return (
    <div className="login">
      <div className="lr-head">
        <h2>Login</h2>
      </div>
      {/* <div className="lr-input">
          <input type="text" id="login" placeholder="Phone Number" />
          <label htmlFor="login"></label>
      </div> */}
      <FullInput
        placeholder="Phone No."
        id="Lphone"
        labelname="Phone No."
        tabIndex="0"
        type="number"
        maxlength={10}
        validation={PhoneValidation}
        value={phone}
        updatestate={setPhone}
        validdata={checkValidation}
      />
      <FullInput
        placeholder="Password."
        id="Lpassword"
        labelname="Password"
        tabIndex="1"
        type="password"
        maxlength={10}
        value={password}
        updatestate={setPassword}
        validation={PasswordValidation}
        validdata={checkValidation}
      />
      <div className="container center-box">
        <button
          onClick={(e) => {
            validation(e);
          }}
        >
          login
        </button>
      </div>
      <div className="lr-forgot small-title-font">
        <span
          onClick={() => {
            opendil("rpass");
          }}
        >
          {"Forgot Password"}
        </span>
      </div>
      <div
        className="lr-switch"
        onClick={() => {
          history.push("/register");
        }}
      >
        {" Register"}
      </div>
    </div>
  );
}

// otp verification dilouge body
function VerifyOtp(props) {
  const [otp, setOtp] = useState("");
  useEffect(() => {
    if (otp.length === 6) {
      dgi("otpinput").style.width = "70%";
      dgi("otpbutton").style.width = "30%";
    } else {
      dgi("otpinput").style.width = "100%";
      dgi("otpbutton").style.width = "0%";
    }
  }, [otp]);
  return (
    <div className="dark-mode-choice">
      <div className="dark-mode-choice-item">
        <div className="dic di">
          <KeyIco />
        </div>
        <div className="dic dt">Enter 6 digit OTP</div>
        <div className="dic oi">
          <div className="otpinput">
            <input
              type="number"
              placeholder="******"
              className="starplace"
              id="otpinput"
              value={otp}
              onChange={(e) => {
                if (e.target.value.length <= 6) {
                  setOtp(e.target.value);
                }
              }}
            />

            <button
              onClick={() => {
                if (otp.length === 6) {
                  handleOtpSubmit(otp);
                }
              }}
              id="otpbutton"
            >
              <NextIco />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// reset password
function ResetPassword(props) {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [penter, setPenter] = useState(false);
  useEffect(() => {
    if (phone.length === 10) {
      dgi("passinput").style.width = "80%";
      dgi("passbutton").style.width = "20%";
    } else {
      dgi("passinput").style.width = "100%";
      dgi("passbutton").style.width = "0%";
    }
    if ((pass.length > 8 && !penter) || (cpass.length > 8 && penter)) {
      dgi("passotpinput").style.width = "60%";
      dgi("passotpbutton").style.width = "20%";
    } else {
      dgi("passotpinput").style.width = "80%";
      dgi("passotpbutton").style.width = "0%";
    }
  }, [phone, pass, cpass, penter]);
  return (
    <div className="dark-mode-choice">
      <div className="dark-mode-choice-item">
        <div className="dic di">
          <KeyIco />
        </div>
        <div id="resettitle" className="dic dt">
          Phone Number
        </div>
        <div className="dic oi">
          <div className="otpinput" style={{ width: "80%" }}>
            <div
              id="rphoneprompt"
              style={{ width: "100%", transition: "0.3s" }}
            >
              <input
                type="number"
                placeholder="Phone Number"
                id="passinput"
                value={phone}
                onChange={(e) => {
                  if (e.target.value.length <= 11) {
                    setPhone(e.target.value);
                  }
                }}
              />

              <button
                id="passbutton"
                onClick={() => {
                  dgi("rphoneprompt").style.width = "0%";
                  dgi("rotpprompt").style.width = "100%";
                  dgi("resettitle").innerText = "Enter Password";
                }}
              >
                <NextIco />
              </button>
            </div>
            <div id="rotpprompt" style={{ width: "0", transition: "0.3s" }}>
              <button
                id="backotpbutton"
                style={{
                  transform: "rotate(180deg)",
                  float: "left",
                }}
                onClick={() => {
                  if (!penter) {
                    dgi("rphoneprompt").style.width = "100%";
                    dgi("rotpprompt").style.width = "0%";
                    dgi("resettitle").innerText = "Phone Number";
                  } else {
                    setPenter(false);
                    setCpass("");
                  }
                }}
              >
                <NextIco />
              </button>
              <input
                type="password"
                placeholder={!penter ? "New password" : "Confirm Passwod"}
                id="passotpinput"
                value={penter ? cpass : pass}
                onChange={(e) => {
                  penter ? setCpass(e.target.value) : setPass(e.target.value);
                }}
              />
              <button
                id="passotpbutton"
                onClick={() => {
                  if (pass.length > 8 && !penter) {
                    setPenter(true);
                    dgi("resettitle").innerText = "Confirm Password";
                  } else if (cpass.length > 8 && penter) {
                    if (pass === cpass) {
                    } else {
                      dgi("resettitle").innerText = "Password not matching";

                      setTimeout(() => {
                        dgi("resettitle").innerText = "Confirm Password";
                      }, 3000);
                    }
                  }
                }}
              >
                <NextIco />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginAndRegister() {
  useEffect(() => {
    document.title = "Login and Register";
  });
  return (
    <div className="lr-body">
      <HeadBar name="Login or Register" icon={Backico} back={true} />
      <Switch>
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
      </Switch>
      <Dialogue parentid="otp" title="Verify Otp" body={VerifyOtp} />
      <Dialogue parentid="rpass" title="Reset Password" body={ResetPassword} />
    </div>
  );
}

export { opendil };
