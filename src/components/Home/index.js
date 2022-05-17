
import React from 'react'
import { Row, Col, message, Tabs, Table, Tag, Space } from "antd";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.min.css';
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
import setting from "../../images/setting.svg";
import back from "../../images/back.svg";
import create from "../../images/create.svg";
import excel from "../../images/excel.svg";
import vietnam from "../../images/vietnam.svg";
import japan from "../../images/Japan.svg";
import morning from "../../images/morning.svg";


function Home() {

  const { TabPane } = Tabs;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

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



  function callback(key) {
    console.log(key);
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
              RESERVATION
            </a>
            <a className="onSelect" href='#'>
              <img src={clear} alt=""></img>
              HOUSEKEEPING
            </a>
            <a className="onSelect" href='#'>
              <img src={manage} alt=""></img>
              MANAGE
            </a>
            <a className="onSelect" href='#'>
              <img src={setting} alt=""></img>
              SETTING
            </a>

            <div className="component-select menu-respon">
              <div className="d-flex align-items-center1">
                <img src={bacham} alt=""></img>
              </div>

            </div>
          </Col>

          <Col className="module-head right-nav">
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

      <Row className="setting-header-container d-flex align-items-center1">
        <img src={back} alt=""></img>
        <span className="room-define">Room Define</span>
      </Row>

      <div className="setting-children">
        <div className="room-define-container">

          <Tabs defaultActiveKey="1" onChange={callback} size="large">
            <TabPane tab="Room" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Room Type" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Room Kind" key="3">
              <div className="room-kind-container">
                <Row>
                  <Col span="24" className="mb-3">
                      <button className='undefined buttonList d-flex justify-content-center align-items-center'>
                        <img src={create} alt=""></img>
                        <span className='add'>Add</span>
                      </button>
                  </Col>
                  <Col span="24">
                  <Table columns={columns} dataSource={data} />
                  </Col>
                </Row>
              </div>
            </TabPane>
          </Tabs>

        </div>
      </div>

    </div>
  )
}

export default Home