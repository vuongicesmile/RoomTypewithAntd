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
                <Row gutter={[8, 32]}>
                  <Col
                    span={3}
                    className="setting-content-info-row-division d-flex align-items-center1"
                  >
                    <div className="setting-content-info-row-label">
                      <label htmlFor="examplehtmlFormControlInput1">
                        Division
                      </label>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 21 }}
                    sm={{ span: 21 }}
                    md={{ span: 21 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className="setting-content-info-row-namehotel d-flex align-items-center1"
                  >
                    <Input
                      size="large"
                      placeholder="large size"
                      prefix={<UserOutlined />}
                    />
                  </Col>
                  <Col
                    span={3}
                    className="setting-content-info-row-label d-flex align-items-center1"
                  >
                    <label htmlFor="examplehtmlFormControlInput1">
                      Name Hotel
                    </label>
                  </Col>
                  <Col
                    xs={{ span: 21 }}
                    sm={{ span: 21 }}
                    md={{ span: 21 }}
                    lg={{ span: 10 }}
                    xl={{ span: 10 }}
                    xxl={{ span: 10 }}
                    className="setting-content-info-row-input"
                  >
                    <Input
                      size="large"
                      placeholder="large size"
                      prefix={<UserOutlined />}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24} className="setting-content-info-address">
              <Row>
                <Col
                  span={3}
                  className="setting-content-info-label-address d-flex align-items-center1"
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
                <Col
                  span={3}
                  className="setting--content-info-label  d-flex align-items-center1 "
                >
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
                <Col
                  span={3}
                  className="setting-content-info-label d-flex align-items-center1 "
                >
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
                <Col
                  span={3}
                  className="setting-content-info-label d-flex align-items-center1 "
                >
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
                <Col
                  span={3}
                  className="setting-content-info-label d-flex align-items-center1 "
                >
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
                  xs={{ span: 4 }}
                  sm={{ span: 4 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                  className="setting-content-price-label-longlb d-flex align-items-center1"
                >
                  <label htmlFor="examplehtmlFormControlInput1">Price</label>
                </Col>
                <Col
                  xs={{ span: 20 }}
                  sm={{ span: 20 }}
                  md={{ span: 20 }}
                  lg={{ span: 21 }}
                  xl={{ span: 21 }}
                  xxl={{ span: 21 }}
                  className="setting-content-price-input"
                >
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
                  xs={{ span: 4 }}
                  sm={{ span: 4 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                  className="setting-content-price-label d-flex justify-content-start align-items-center1"
                >
                  <label htmlFor="examplehtmlFormControlInput1">Price</label>
                </Col>
                <Col
                  xs={{ span: 20 }}
                  sm={{ span: 20 }}
                  md={{ span: 20 }}
                  lg={{ span: 21 }}
                  xl={{ span: 21 }}
                  xxl={{ span: 21 }}
                  className="setting-content-price-input"
                >
                  <Input
                    size="large"
                    placeholder="large size"
                    prefix={<UserOutlined />}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="setting-content-price-exctrabed">
              <Row gutter={16}>
                <Col
                  xs={{ span: 4 }}
                  sm={{ span: 4 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                  className="setting-content-price-label d-flex align-items-center1"
                >
                  <label htmlFor="examplehtmlFormControlInput1">
                    exctrabed
                  </label>
                </Col>
                <Col
                  xs={{ span: 20 }}
                  sm={{ span: 20 }}
                  md={{ span: 20 }}
                  lg={{ span: 21 }}
                  xl={{ span: 21 }}
                  xxl={{ span: 21 }}
                  className="setting-content-price-input"
                >
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
                {/* max-height : 40.14 px */}
                <Col
                  xs={{ span: 4 }}
                  sm={{ span: 4 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                  className="setting-content-price-label d-flex align-items-center1"
                >
                  <label htmlFor="examplehtmlFormControlInput1">
                    Room Number
                  </label>
                </Col>
                <Col
                  xs={{ span: 20 }}
                  sm={{ span: 20 }}
                  md={{ span: 20 }}
                  lg={{ span: 21 }}
                  xl={{ span: 21 }}
                  xxl={{ span: 21 }}
                  className="setting-content-price-input"
                >
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
                <Col
                  xs={{ span: 4 }}
                  sm={{ span: 4 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                  className="setting-content-price-label d-flex align-items-center1"
                >
                  <label htmlFor="examplehtmlFormControlInput1">Content</label>
                </Col>
                <Col
                  xs={{ span: 20 }}
                  sm={{ span: 20 }}
                  md={{ span: 20 }}
                  lg={{ span: 21 }}
                  xl={{ span: 21 }}
                  xxl={{ span: 21 }}
                  className="setting-content-price-input"
                >
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
