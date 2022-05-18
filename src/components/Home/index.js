
import React from 'react'
import { Row, Col, message, Tabs, Table, Tag, Space, Switch } from "antd";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.min.css';
import "./Home.scss"


// import image
import logo from "../../images/logo.png";
import camera from "../../images/camera.svg";
import List from "../../images/list.js";
import Clean from "../../images/clean.js";
import manage from "../../images/manage.svg";
import bacham from "../../images/bacham.svg";
import bell from "../../images/bell.svg";
import user from "../../images/user.svg";
import drop from "../../images/drop.svg";
import hoaky from "../../images/hoaky.svg";
import setting from "../../images/setting.svg";
import back from "../../images/back.svg";
import create from "../../images/create.svg";
import excel from "../../images/excel.svg";
import vietnam from "../../images/vietnam.svg";
import japan from "../../images/Japan.svg";
import morning from "../../images/morning.svg";
import deleteIcon from "../../images/delete.svg";
import { useAPI } from '../API/useAPI';
import RoomKind from '../RoomKind/RoomKind';
import RoomType from '../RoomType';



function Home() {

 
  const { TabPane } = Tabs;
  // handle when click Dihotel
  const [CheckDropdownDiHotel, setCheckDropdownDiHotel] = useState(false);
  // handle when click lang
  const [CheckDropdownLang, setCheckDropdownLang] = useState(false);

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];


  const columns3 = [
    {
      title: 'Room',
      dataIndex: 'address',
      key: 'address',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Room Kind',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Guest',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Extrabed',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Area',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Floor',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Row',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Column',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Connect',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Day Use',
      key: 'shortname',
      render: () => (
        <Switch defaultChecked onChange={onChange} />
      )
    },

    {
      title: 'Owner Room',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'Action',
      key: 'action',
      render: () => (
        <button
          className="undefined buttonList d-flex justify-content-center align-items-center1"
        >
          <img src={deleteIcon} alt=""></img>
          <span className="delete-icon">Delete</span>
        </button>
      ),
    },
  ];


  function onChange(checked) {
    console.log(`switch to ${checked}`);
}

  function callback(key) {
    //console.log(key);
  }


  return (
    <div>
      <Row className="Header-component">

        <div className="clock undefined">
          <div>
            <img src={morning} alt=""></img>
            <div>10:51</div>
          </div>
          <div>
            15-4-2022
          </div>
        </div>
        <Col span={24} className="module-head-form">
          {/* logo */}
          <Col xs={8} sm={5} lg={5} xl={2} xxl={3} className="module-head">
            <div className="Logo1 cursor-pointer module-logo">
              <img src={logo} alt=""></img>
            </div>
          </Col>
          <Col className="module-head module-group">
            <Col className='responsive' xs={0} sm={0} md={0} lg={0} xl={4} xxl={4} >
              <a href='#'>
                <img src={camera} alt=""></img>
                RECEPTION
              </a>
            </Col>
            <Col className='responsive' xs={0} sm={0} md={0} lg={0} xl={6} xxl={5} >
              <a className="onSelect" href='#'>
                <List />
                RESERVATION
              </a>
            </Col>
            <Col className='responsive' xs={0} sm={0} md={0} lg={0} xl={6} xxl={5} >
              <a className="onSelect" href='#'>
                <Clean />
                HOUSEKEEPING
              </a>
            </Col>
            <Col className='responsive' xs={0} sm={0} lg={0} md={0} xl={4} xxl={4} >
              <a href='#'>
                <img src={manage} alt=""></img>
                MANAGE
              </a>
            </Col>
            <Col className='responsive' xs={0} sm={0} xl={0} lg={0} md={0} xxl={3} >
              <a href='#'>
                <img src={setting} alt=""></img>
                SETTING
              </a>
            </Col>

            <Col className='responsive' xxl={0}  >
              <div className="component-select menu-respon">
                <div className="d-flex align-items-center1">
                  <img src={bacham} alt=""></img>
                </div>

              </div>
            </Col>
          </Col>

          <Col className="module-head right-nav">
            <div>
              <img src={bell} alt="" ></img>
            </div>
            <div className="component-select undefined">
              <div className="d-flex align-items-center1 custom-md-pd-scale">
                <div className="userID" onClick={() => setCheckDropdownDiHotel(!CheckDropdownDiHotel)}>
                  <img src={user} alt=""></img>
                  DiHotel
                  <img src={drop} alt=""></img>
                </div>
              </div>

              {/* handle hide click DiHotel */}
              {CheckDropdownDiHotel && <div className="dropDown-component-n d-block">
                <div>Change password</div>
                <div>Log out</div>
              </div>}
              {/* ------------------------------------------ */}
            </div>
            {/* phan xy ly ngon ngu */}
            <div className="lang lang-moudle" onClick={() => setCheckDropdownLang(!CheckDropdownLang)}>
              <img src={hoaky} alt=""></img>
              {CheckDropdownLang &&
                <div className="dropDown d-block">
                  <Row
                    justify="start"
                    align="middle"
                    className="border-vietnamese"
                    id="lang-padding"
                  >
                    <img
                      src="vietnam.svg"
                      alt=""
                    />
                    Vietnamese
                  </Row>
                  <Row
                    justify="start"
                    align="middle"
                    className="handle-japan"
                    id="lang-padding"
                  >
                    <img src={japan} alt="" />
                    <span>Japan</span>
                  </Row>
                </div>
              }
            </div>


          </Col>
        </Col>
      </Row>

      <Row className="setting-header-container d-flex align-items-center1">
        <img src={back} alt=""></img>
        <span className="room-define">Room Define</span>
      </Row>

      <div className="setting-children">
        <div className="room-define-container">

          <Tabs defaultActiveKey="1" onChange={callback} size="large">
            <TabPane tab="Room" key="1">
              <div className="room-kind-container">
                <Row>
                  <Col span="24" className="mb-3">
                    <Row gutter={20}>
                      <Col><button className='undefined buttonList d-flex justify-content-center align-items-center1'>
                        <img src={create} alt=""></img>
                        <span className='add'>Add</span>
                      </button>
                      </Col>
                      <Col>
                        <button className='undefined buttonList d-flex justify-content-center align-items-center1'>
                          <img src={excel} alt="" style={{ width: '20px' }}></img>
                          <span className='add'>Import Excel</span>
                        </button>
                      </Col>
                    </Row>
                  </Col>
                  <Col span="24">
                    <Table columns={columns3} dataSource={data} />
                  </Col>
                </Row>
              </div>
            </TabPane>
            {/* get API room type */}
            <TabPane tab="Room Type" key="2">
              <RoomType />
            </TabPane>
            {/* get API room kind */}
            <TabPane tab="Room Kind" key="3">
              <RoomKind />
            </TabPane>
          </Tabs>

        </div>
      </div>

    </div>
  )
}

export default Home