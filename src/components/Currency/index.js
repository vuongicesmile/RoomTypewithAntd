import react from "react";
import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Input, Select, Tabs } from "antd";
import "../Currency/Currency.scss";
import check from "./assets/image.svg";
import { CaretDownOutlined } from "@ant-design/icons";

import vnd from "./assets/CHF.svg";
import cny from "./assets/CNY.svg";
import thaiBaht from "./assets/EUR.svg";
import cambodia from "./assets/GBP.svg";
import dola from "./assets/HKD.svg";
import rub from "./assets/IDR.svg";

function Currency({ onChange, readOnly, value }) {
  const { Search } = Input;

  const listCurr = [
    {
      id: "vn-flag",
      flag: vnd,
      name: "Vietnamese Dong",
      label: "₫",
      isActive: false,
      value: "VND",
    },
    {
      id: "cny-flag",
      flag: cny,
      name: "Chinese Yuan",
      label: "¥",
      isActive: false,
      value: "CNY",
    },
    {
      id: "rub-flag",
      flag: rub,
      name: "Russian Ruble",
      label: "₽",
      isActive: false,
      value: "RUB",
    },
    {
      id: "dola-flag",
      flag: dola,
      name: "United States Dollar",
      label: "$",
      isActive: false,
      value: "USD",
    },
    {
      id: "thaiBaht-flag",
      flag: thaiBaht,
      name: "Thai Baht",
      label: "฿",
      isActive: false,
      value: "THB",
    },
    {
      id: "cambodia-flag",
      flag: cambodia,
      name: "Cambodian Riel",
      label: "៛",
      isActive: false,
      value: "Riel",
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [itemCurrency, setitemCurrency] = useState({
    id: "vn-flag",
    flag: vnd,
    name: "Vietnamese Dong",
    label: "₫",
    isActive: false,
    value: "VND",
  });
  const [listCurrency, setlistCurrency] = useState(listCurr);

  const CloseModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    handleSetItemCurrency(value);
  }, []);
  const handleSetItemCurrency = (value) => {
    listCurrency.filter((item) => {
      if (item.value.includes(value)) {
        item.isActive = true;
        setitemCurrency(item);
      }
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleActive = (itemCurrency) => {
    let newArray = [];
    listCurrency.map((item) => {
      if (item.id == itemCurrency.id) {
        item.isActive = true;
        newArray.push(item);
      } else {
        item.isActive = false;
        newArray.push(item);
      }
    });
    setlistCurrency(newArray);
    setitemCurrency(itemCurrency);
    onChange(itemCurrency.value);
    CloseModal();
  };

  return (
    <>
      <Button type="dashed" onClick={showModal}>
        <Row gutter={4}>
          <Col>
            <img src={itemCurrency.flag}></img>
          </Col>
          <Col> {itemCurrency.value}</Col>
          <Col className="d-flex  ">
            <CaretDownOutlined />
          </Col>
        </Row>
      </Button>
      <Modal
        title="Add Currency"
        visible={!readOnly && isModalVisible}
        bodyStyle={{ paddingTop: "0px" }}
        width={648}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="currency-container">
          <div className="mt-4 mb-4">
            {/* input search */}
            <Search
              placeholder="input search text"
              onChange={(event) => {
                setsearchTerm(event.target.value);
              }}
            />
          </div>

          <div className="container">
            <Col span={24}>
              <p className="m-0 title-label">Popular currencies</p>
            </Col>
            <Row gutter={[2, 2]}>
              {listCurrency
                .filter(
                  (item) =>
                    item.value.includes(searchTerm.toUpperCase()) ||
                    item.name.toUpperCase().includes(searchTerm.toUpperCase())
                )
                .map((item, index) => {
                  return (
                    <Col
                      xl={12}
                      xxl={12}
                      lg={24}
                      md={24}
                      sm={24}
                      xs={24}
                      key={item.id}
                    >
                      <div
                        className={
                          item.isActive
                            ? "content p-2  w-100  selected"
                            : "content p-2  w-100"
                        }
                        onClick={() => {
                          handleActive(item);
                        }}
                      >
                        <Row gutter={10}>
                          <Col className="d-flex  " span={4}>
                            <img id={item.id} src={item.flag} alt=""></img>
                          </Col>
                          <Col className="d-flex flex-column" span={16}>
                            <span>{item.name}</span>
                            <span className="currency-label">
                              {item.value + " - " + item.label}
                            </span>
                          </Col>
                          <Col span={4}>
                            {item.isActive && (
                              <div className="currency-check h-100 d-flex  ">
                                <img src={check}></img>
                              </div>
                            )}
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </Modal>
    </>
  );
}

export { Currency };
