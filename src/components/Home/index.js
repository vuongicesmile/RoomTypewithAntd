
import React from 'react'
import { Row, Col, message } from "antd";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.scss"


// import image
import logo from "../../images/logo.png";
import camera from "../../images/camera.svg";
import list from "../../images/list.svg";
import clear from "../../images/clean.svg";
import manage from "../../images/manage.svg";
import bacham from "../../images/bacham.svg";
import bell from "../../images/bell.svg";
import user from "../../images/user.svg";
import drop from "../../images/drop.svg";
import hoaky from "../../images/hoaky.svg";
import vietnam from "../../images/vietnam.svg";
import japan from "../../images/Japan.svg";



function Home() {


  return (
    <div>
      <Row className="Header-component">
        <Col span={24} className="module-head-form">
          {/* logo */}
          <Col className="module-head">
            <div className="Logo1 cursor-pointer module-logo">
              <img src={logo} alt=""></img>
            </div>
          </Col>
          <Col className="module-head module-group">
            <a className="onSelect" href='#'>
              <img src={camera} alt=""></img>
              RECEPTION
            </a>
            <a className="onSelect" href='#'>
              <img src={list} alt=""></img>
              HOUSEKEEPING
            </a>
            <a className="onSelect" href='#'>
              <img src={clear} alt=""></img>
              MANAGE
            </a>
            <a className="onSelect" href='#'>
              <img src={manage} alt=""></img>
              SETTING
            </a>

            <div className="component-select menu-respon">
              <div className="d-flex align-items-center1">
                <img src={bacham} alt=""></img>
              </div>

            </div>
          </Col>

          <Col className="module-head">
            <div>
              <img src={bell} alt="" ></img>
            </div>
            <div className="component-select undefined">
              <div className="d-flex align-items-center1">
                <div className="userID">
                  <img src={user} alt=""></img>
                  DiHotel
                  <img src={drop} alt=""></img>
                </div>
              </div>
            </div>
            {/* phan xy ly ngon ngu */}
            <div className="lang lang-moudle">
              <img src={hoaky} alt=""></img>
              </div>


          </Col>
        </Col>
      </Row>

    </div>
  )
}

export default Home