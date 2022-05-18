import React from "react";
import { Row, Col, message } from "antd";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import "./Footer.scss";
import "./Wrapper.scss"

// import image
import logo from "../../images/logo.png";
import hoaky from "../../images/hoaky.svg";
import vietnam from "../../images/vietnam.svg";
import japan from "../../images/Japan.svg";
import closeEyes from "../../images/closeEyes.svg";
import phone from "../../images/phone.svg";
import dropdown from "../../images/dropdow.svg";
import { getAPI } from "../API/useAPI";
import { Content } from "antd/lib/layout/layout";

import success from "../../images/success.svg";
import err from "../../images/err.svg";
import openEyes from "../../images/openEyes.svg";
import loading from "../../images/loading.svg";
import CloseNoti from "../../images/closeNoti.js";

function Login() {
  // navigate home
  const navigate = useNavigate();
  const key = 'updatable';
  const [Check, setCheck] = useState(false);
  const [loadingImg, setloadingImg] = useState(false);
  const [CheckDropdown, setCheckDropdown] = useState(false);
  const [HidePass, setHidePass] = useState(true);
  const inputRef = useRef(null);
  const inputNullRef = useRef(null);
  const [fail, setFail] = useState(false);
  const btnLogin = useRef(null);
  const loadingRef = useRef();
  const [valueSlected, setValueSelected] = useState("Select");
  // get input
  const [username, setUser] = useState("");
  // get pass
  const [password, setPass] = useState("");
  const [ChooseLanguage, setChooseLanguage] = useState(false);
  const valueHotel = ["hotel", "hotel2", "hotel3"];
  const labelUserRef = useRef(null);
  const labelPassRef = useRef(null);

  //focus input
  useEffect(() => {
    inputRef.current.focus();
  }, [Check]);

  useEffect(() => {
    if (loadingImg == true) {
      console.log(btnLogin.current.innerHtml);
      btnLogin.current.disabled = false;
      // btnLogin.current.innerText = " ";
      btnLogin.current.style.background = 'rgba(62,92,118,.8)';
    }
  }, [loadingImg]);
  // check
  const handleLocation = (e) => {
    console.log(e.target.checked);
    setCheck(e.target.checked);
  };
  const handleSelected = () => {
    setCheckDropdown(!CheckDropdown);
  };
  //pass -text
  const handlePassword = () => {
    setHidePass(!HidePass);
  };

  const loginError = (error) => {
    message.error(error);
  };


  const [durationTime, setdurationTime] = useState(10)
  const loginSuccess = (res) => {
    if (res.success == "1") {
      message.success({
        content: (
          <>
            <Row justify="space-between" className="custom-content" align="middle">
              <Col className="ant-colo">
                <img src={success} alt="" />
              </Col>
              <Col className="ant-colo">Login successfull</Col>
              <Col className="ant-colo">
                <CloseNoti />
              </Col>
            </Row>
          </>
        ),
        key,
        duration: 30,
        icon: <></>,
      })
      setTimeout(() => navigate("/home"), 2000);
    }
    else {
      message.error({
        content: (
          <>
            <Row justify="space-between" className="custom-content-fail" align="middle">
              <Col className="ant-colo">
                <img src={err} alt="" />
              </Col>
              <Col className="ant-colo">
                <div> Login Fail , Please try again </div>
              </Col>
              <Col className="closeNoti ant-colo">
                {/* <img src={closeNoti} alt="" className="closeColorRed" /> */}
                <CloseNoti />
              </Col>
            </Row>
          </>
        ),
        key,
        duration: 30,
        icon: <></>,
      }),
        setFail(true);
      setloadingImg(false);
    }


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // validata value
    if (username == "") {
      console.log(inputRef);
      labelUserRef.current.style.color = "#a93838";
      inputRef.current.style.border = "1px solid #a93838";
    }
    if (password == "") {
      console.log(inputNullRef.current);
      labelPassRef.current.style.color = "#a93838";
      inputNullRef.current.style.border = "1px solid #a93838";
    }
    if (username == "" || password == "") {
      return;
    }

    setloadingImg(!loadingImg)

    useAPI(
      "/api/User/getCurrentUser",
      "post",
      "application/json",
      JSON.stringify({
        username: username,
        password: password,
      }),
      loginSuccess,
      loginError
    );
  };
  // lay gia tri cua item
  const handleValueItem = () => {
    setValueSelected("hotel");
  };
  // choose language
  const handleChooseLanguage = () => {
    setValueSelected("Select Location");
    setChooseLanguage(!ChooseLanguage);
    // window.location.reload();
  };
  const [valueLanguageSelected, setvalueLanguageSelected] =
    useState("hoaky.svg");

  return (
    <div className="wrapper">
      <section className="header-container">
        <div className="container">
          <div className="Logo">
            <div className="logo-underfined">
              <img src={logo} alt="" />
            </div>
            <div className="slogan-text">
              <h1> Sproud PMS </h1>
            </div>
          </div>
          <div className="language">
            <img
              src={valueLanguageSelected}
              alt=""
              onClick={handleChooseLanguage}
              className="img-hoaky"
            />
            {ChooseLanguage && (
              <div className="dropdownLanguage">
                <Row
                  justify="start"
                  align="middle"
                  className="border-vietnamese"
                  id="lang-padding"
                  onClick={handleChooseLanguage}
                >
                  <img
                    src="vietnam.svg"
                    alt=""
                    onClick={handleChooseLanguage}
                  />
                  Vietnamese
                </Row>
                <Row
                  justify="start"
                  align="middle"
                  className="handle-japan"
                  id="lang-padding"
                  onClick={handleChooseLanguage}
                >
                  <img src={japan} alt="" />
                  <span>Japan</span>
                </Row>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="login-form-spound">
        <div className="login-f" >

        </div>
      </section>
      <section className="footer-last">
        <Row justify="space-between">

          <Row className="hotline-total">
            <div className="hotline">
              <img src={phone} alt="" />
            </div>
            <div className="phone">019.586.705</div>
          </Row>

          <div className="ver">Version 1.1</div>

        </Row>
      </section>
    </div>
  );
}

export default Login;
