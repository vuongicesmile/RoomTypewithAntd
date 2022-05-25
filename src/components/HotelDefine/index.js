import React from "react";
import { Modal, Button, Row, Col, Input, Select } from "antd";
import { useState, useEffect } from "react";

import { UserOutlined } from "@ant-design/icons";
import { Currency } from "../Currency";
import "./HotelDefine.scss";

function HotelDefine() {
  const [valueCurrency, setValueCurrency] = useState("USD");
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <Row className="setting-content" gutter={[16, 16]}>
        {/* vung 1 */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 10 }}
          xxl={{ span: 8 }}
        >
          <Row gutter={[8, 32]} className="setting-content-info">
            <Col span={24} className="setting-content-info-row">
              <div className="setting-content-info">
                <Row>
                  <Col span={3} className="setting-content-info-row-division">
                    <Row>
                      <Col span={24} className="setting-content-info-row-label">
                        <label htmlFor="examplehtmlFormControlInput1">
                          Division
                        </label>
                      </Col>
                      {/* padding left : 8px => padding left : 5px !important */}
                    </Row>
                  </Col>
                  <Col
                    span={21}
                    className="setting-content-info-row-namehotel d-flex"
                  >
                    <Row gutter={10}>
                      <Col span={5} className="setting-content-info-row-input">
                        <Input
                          size="large"
                          placeholder="large size"
                          prefix={<UserOutlined />}
                        />
                      </Col>
                      <Col span={5} className="setting-content-info-row-label">
                        <label htmlFor="examplehtmlFormControlInput1">
                          Name Hotel
                        </label>
                      </Col>
                      <Col span={14} className="setting-content-info-row-input">
                        <Input
                          size="large"
                          placeholder="large size"
                          prefix={<UserOutlined />}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24} className="setting-content-info-address">
              <Row>
                <Col
                  span={3}
                  className="setting-content-info-label-address d-flex "
                >
                  <label htmlFor="examplehtmlFormControlInput1">Address</label>
                </Col>
                <Col span={21} className="setting-content-info-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-info-tax">
              <Row>
                <Col span={3} className="setting--content-info-label  d-flex  ">
                  <label htmlFor="examplehtmlFormControlInput1">Tax</label>
                </Col>
                <Col span={21} className="setting-content-info-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-info-phone">
              <Row>
                <Col span={3} className="setting-content-info-label d-flex  ">
                  <label htmlFor="examplehtmlFormControlInput1">Phone</label>
                </Col>
                <Col span={21} className="setting-content-info-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-info-fax">
              <Row>
                <Col span={3} className="setting-content-info-label d-flex  ">
                  <label htmlFor="examplehtmlFormControlInput1">Fax</label>
                </Col>
                <Col span={21} className="setting-content-info--input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-info-fax">
              <Row>
                <Col span={3} className="setting-content-info-label d-flex  ">
                  <label htmlFor="examplehtmlFormControlInput1">Currency</label>
                </Col>
                <Col
                  span={21}
                  className="setting-content-info-input d-flex justify-content-start  "
                >
                  <Currency
                    onChange={(e) => {
                      setvalueCurrency(e.value);
                      // setHotelData({ ...hotelData, currency: e.value });
                    }}
                    readOnly={false}
                    value={valueCurrency}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}></Col>
          </Row>
        </Col>
        {/* vung 2 */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 10 }}
          xxl={{ span: 8 }}
        >
          <Row gutter={[8, 32]} className="setting-content-price">
            <Col span={24} className="setting-content-price-label">
              <Row>
                <Col
                  span={3}
                  className="setting-content-price-label-longlb d-flex "
                >
                  <label htmlFor="examplehtmlFormControlInput1">Price</label>
                </Col>
                <Col span={21} className="setting-content-price-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-price-adult-child">
              <Row>
                <Col
                  span={3}
                  className="setting-content-price-label d-flex justify-content-start"
                >
                  <label htmlFor="examplehtmlFormControlInput1">Price</label>
                </Col>
                <Col span={21} className="setting-content-price-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-price-exctrabed">
              <Row>
                <Col span={3} className="setting-content-price-label d-flex">
                  <label htmlFor="examplehtmlFormControlInput1">
                    exctrabed
                  </label>
                </Col>
                <Col span={21} className="setting-content-price-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-price--roomnumber">
              <Row>
                <Col span={3} className="setting-content-price-label d-flex  ">
                  <label htmlFor="examplehtmlFormControlInput1">
                    Room Number
                  </label>
                </Col>
                <Col span={21} className="setting-content-price-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-price-webhotel">
              <Row>
                <Col span={3} className="setting-content-price-label d-flex">
                  <label htmlFor="examplehtmlFormControlInput1">Content</label>
                </Col>
                <Col span={21} className="setting-content-price-input">
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}></Col>
            <Col span={24}></Col>
            <Col span={24}></Col>
          </Row>
        </Col>
        {/* hien thi image */}
        <Row gutter={[8, 32]} className="setting-content-price">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 4 }}
            xxl={{ span: 4 }}
          >
            <div className="setting-content-upload">
              {/* <UploadSingleImage
              handleShowModalPreview={handleShowModalPreview}
              handlePreviewImg={handlePreviewImg}
              logo={hotelData.logo}
            /> */}
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default HotelDefine;
