import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, message, Tabs, Table, Tag, Space, Switch } from "antd";

import create from "../../images/create.svg";
import { useAPI } from "../API/useAPI";
import deleteIcon from "../../images/delete.svg";
import HotelDefine from "../HotelDefine";
import { Currency } from "../Currency";

function RoomKind() {
  const [valueCurrency, setValueCurrency] = useState("USD");
  // get API room kind
  const [dataRoomType, setdataRoomType] = useState([]);
  // loading
  const [loading, setloading] = useState(false);
  // get pagination
  const [pagination, setpagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const columnsRoomType = [
    {
      title: "Room type",
      dataIndex: "loaiPhong",
      key: "loaiPhong",
    },
    {
      title: "Short Name",
      dataIndex: "tenNgan",
      key: "tenNgan",
    },
    {
      title: "Day Use",
      key: "shortname",
      render: () => <Switch defaultChecked onChange={onChange} />,
    },
    {
      title: "Group",
      dataIndex: "tenNgan",
      key: "tenNgan",
    },

    {
      title: "Action",
      key: "action",
      render: () => (
        <button className="undefined buttonList d-flex justify-content-center align-items-center1">
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
    fetchRoomType({ pagination });
  }, []);

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const getDataRoomTypeSuccess = (pagination, res) => {
    console.log(res);
    setdataRoomType(res);
    setpagination({
      ...pagination,
      total: res.length + 1,
    });
  };

  const getDataRoomTypeError = () => {};

  const fetchRoomType = (params = {}) => {
    setloading(true);
    useAPI(
      "/api/Defines/GetRoomType",
      "get",
      "application/json",
      null,
      (res) => {
        getDataRoomTypeSuccess(params.pagination, res);
        setloading(false);
      },
      getDataRoomTypeError
    );
  };

  return (
    <div className="room-type-container">
      <Row>
        <Col span="24" className="mb-3">
          <button className="undefined buttonList d-flex justify-content-center align-items-center1">
            <img src={create} alt=""></img>
            <span className="add">Add</span>
          </button>
        </Col>
        <Col span="24">
          <Table columns={columnsRoomType} dataSource={dataRoomType} />
          <HotelDefine />
        </Col>
      </Row>
    </div>
  );
}

export default RoomKind;
