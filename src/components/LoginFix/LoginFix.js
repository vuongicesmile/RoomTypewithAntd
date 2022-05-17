import React from 'react'
import './LoginFix.scss'


import { Row, Col, message } from "antd";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import image
import logo from "../../images/logo.png";
import hoaky from "../../images/hoaky.svg";
import vietnam from "../../images/vietnam.svg";
import japan from "../../images/Japan.svg";
import closeEyes from "../../images/closeEyes.svg";
import phone from "../../images/phone.svg";
import dropdown from "../../images/dropdow.svg";
import { getAPI } from "../API/fetchAPI";
import { Content } from "antd/lib/layout/layout";

import success from "../../images/success.svg";
import err from "../../images/err.svg";
import openEyes from "../../images/openEyes.svg";
import loading from "../../images/loading.svg";
import CloseNoti from "../../images/closeNoti.js";

function LoginFix() {

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
        } else {
            btnLogin.current.disabled = true;
            // btnLogin.current.innerText = " ";
            btnLogin.current.style.background = '#3e5c76';
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
                        <Row justify="center" className="custom-content" align="middle" >
                            <Col className="ant-colo" span={2}>
                                <img src={success} alt="" />
                            </Col>
                            <Col className="ant-colo" span={20}>Login successfull</Col>
                            <Col className="ant-colo d-flex justify-content-center" span={2}>
                                <CloseNoti />
                            </Col>
                        </Row>
                    </>
                ),
                key,
                duration: 40,
                icon: <></>,
            })
            setTimeout(() => navigate("/home"), 2000);
        }
        else {
            message.error({
                content: (
                    <>
                        <Row justify="space-around" className="custom-content-fail " align="middle">
                            <Col className="ant-colo" span={2}>
                                <img src={err} alt="" />
                            </Col>
                            <Col className="ant-colo" span={20}>
                                <div> Login Fail , Please try again </div>
                            </Col>
                            <Col className="closeNoti ant-colo d-flex justify-content-center" span={2}>
                                {/* <img src={closeNoti} alt="" className="closeColorRed" /> */}
                                <CloseNoti />
                            </Col>
                        </Row>
                    </>
                ),
                key,
                duration: 40,
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

        getAPI(
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
        <form className='wrapper'>
            <Row className='login-container' >
                {/* phan xy ly logo */}
                <div className="Logo cursor-pointer">
                    <div className="logo-underfined">
                        <img src={logo} alt="" />
                    </div>
                    <div className="slogan-text">
                        Sproud PMS
                    </div>
                </div>
                {/* phan xy ly ngon ngu */}
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
                {/* phan hien thi form */}
                <Col span={24}>
                    <Col className="login-f"
                        xxl={{ span: 6, offset: 14 }}
                        xl={{ span: 8, offset: 14 }}
                        lg={{ span: 8, offset: 8 }}
                        md={{ span: 13, offset: 6 }}
                        sm={{ span: 18, offset: 3 }}
                        xs={{ span: 22, offset: 2 }}
                    >
                        <Col span={24} className="l-head">Sign in</Col>
                        <Col span={24} className="l-user">
                            <Col>
                                <Row>
                                    <label htmlFor="" ref={labelUserRef}>Username or Email</label>
                                </Row>
                                <Row>
                                    <input
                                        type="text"
                                        ref={inputRef}
                                        className="input-component"
                                        placeholder="Username or Email"
                                        onChange={(event) => setUser(event.target.value)}
                                    />
                                </Row>
                            </Col>
                        </Col>
                        <Col className="l-pass" span={24}>
                            <Row>
                                <label htmlFor="" ref={labelPassRef}>Password</label>
                            </Row>
                            <Row className="pass-input">
                                {HidePass ? (
                                    <>
                                        <input
                                            type="password"
                                            className="input-component normal"
                                            placeholder="Password"
                                            ref={inputNullRef}
                                            onChange={(event) => setPass(event.target.value)}
                                        ></input>
                                        <img onClick={handlePassword} src={closeEyes}></img>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            className="input-component normal "
                                            placeholder="Password"
                                            ref={inputNullRef}
                                        ></input>

                                        <img onClick={handlePassword} src={openEyes}></img>
                                    </>
                                )}
                            </Row>
                            {fail && <p className="invalid">Invalid email or password</p>}
                        </Col>
                        <Col className="l-select" span={24}>
                            <Row className="d-flex" align="middle">
                                <input
                                    type="checkbox"
                                    checked={Check}
                                    onChange={handleLocation}
                                />
                                <label>Location</label>
                            </Row>
                        </Col>

                        {Check && (
                            <Row className="pass-input" id="select-location">
                                <div
                                    className="align-items-center"
                                    onClick={handleSelected}
                                >
                                    {valueSlected}
                                </div>
                                <div className="dropdown-location">
                                    <img
                                        className="dropdown-location-img"
                                        src={dropdown}
                                        alt=""
                                    />
                                </div>

                                { }
                                {CheckDropdown && (
                                    <Row
                                        className="pass-input dropDown-items-custom"
                                        onClick={handleSelected}
                                    >
                                        {valueHotel.map((valueHotelItem, index) => (
                                            <div
                                                key={index}
                                                className="dropDown-items"
                                                onClick={(index) => {
                                                    // console.log('1', index.target.innerText);
                                                    setValueSelected(index.target.innerText);
                                                }}
                                            >
                                                {valueHotelItem}
                                            </div>
                                        ))}
                                    </Row>
                                )}
                            </Row>
                        )}
                        {!CheckDropdown && (
                            <Col className="l-button d-flex justify-content-center" span={24} >
                                <button onClick={handleSubmit} ref={btnLogin}>
                                    <div className={loadingImg ? 'display-login-none' : 'display-login-block'}> Login </div>
                                    {loadingImg && (
                                        <div className="loading-img">
                                            {" "}
                                            <img src={loading} ref={loadingRef} />
                                            {" "}
                                        </div>
                                    )}
                                </button>
                            </Col>

                        )}
                    </Col>

                </Col>

                <div className="hotline-total">
                    <div className="hotline">
                        <img src={phone} alt="" />
                    </div>
                    <div className="phone">019.586.705</div>
                </div>

                <div className="ver">Version 1.1</div>

            </Row>
        </form>
    )
}

export default LoginFix