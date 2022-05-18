import React from 'react'
import { useState, useEffect } from "react";
import { Row, Col, message, Tabs, Table, Tag, Space, Switch } from "antd";

import create from "../../images/create.svg";
import { useAPI } from '../API/useAPI';
import deleteIcon from "../../images/delete.svg";

function RoomType() {
  // get API room kind 
  const [dataRoomKind, setdataRoomKind] = useState([]);
  // loading
  const [loading, setloading] = useState(false);
  // get pagination
  const [pagination, setpagination] = useState({
    current: 1,
    pageSize: 10,
  })
  const columnsRoomKind = [
    {
      title: 'Room Kind',
      dataIndex: 'dangPhong',
      key: 'dangPhong',
    },
    {
      title: 'Adult',
      dataIndex: 'soNguoi',
      key: 'soNguoi',
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
  const handleTableChange = (pagination, filters, sorter) => {
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  useEffect(() => {
    fetch({ pagination })

  }, [])

  //console.log(pagination);

  const getDataRoomKindSuccess = (pagination, res) => {
    //console.log(res.length);
    setdataRoomKind(res)
    setpagination({
      ...pagination,
      total: res.length
    })
  }
  const getDataRoomKindError = () => {
    console.log("error");
  }
  const fetch = (params = {}) => {
    setloading(true);
    useAPI(
      "/api/Defines/GetRoomKind",
      "get",
      "application/json",
      null
      ,
      (res) => {
        getDataRoomKindSuccess(params.pagination, res);
        setloading(false)
      },
      getDataRoomKindError)

  }

  return (
    <div className="room-kind-container">
      <Row>
        <Col span="24" className="mb-3">
          <button className='undefined buttonList d-flex justify-content-center align-items-center1'>
            <img src={create} alt=""></img>
            <span className='add'>Add</span>
          </button>
        </Col>
        <Col span="24">
          <Table
            columns={columnsRoomKind}
            dataSource={dataRoomKind}
            rowKey={record => record.ma}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
          />

        </Col>
      </Row>
    </div>
  )
}

export default RoomType