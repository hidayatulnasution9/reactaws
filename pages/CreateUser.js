import React from "react";
import axios from "axios";
import Link from "next/link";

import { Modal, Form, Input, Button, Row, Col, message } from "antd";

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 20,
  },
};

export default function CreateUser({ closeModal, navigateToHome }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    axios
      .post("http://127.0.0.1:5000/useradd", values)
      .then(function (response) {
        console.log(response.data);
        closeModal();
        alert("Data successfully added!"); // Display success message
        navigateToHome();
      })
      .catch(function (error) {
        console.error(error);
        // Display error message
      });
  };

  const handleCancel = () => {
    closeModal();
    navigateToHome(); // Go back to the home page
  };

  return (
    <Modal
      title="Create New"
      visible={true}
      onCancel={handleCancel}
      footer={null}
    >
      <Form {...layout} form={form} onFinish={handleSubmit}>
        <Form.Item label="No" name="no" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Loc_25" name="loc_25" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Lat" name="lat" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Lon" name="lon" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Row justify="end">
          <Col>
            <Button
              onClick={handleCancel}
              style={{
                marginRight: 300,
                marginLeft: 10,
                backgroundColor: "#FF0000",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#DB0408")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#F50207")}
            >
              Cancel
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              style={{
                marginRight: 28,
                backgroundColor: "#067A7A",
                transition: "background-color 0.3s", //
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#02EDED")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#067A7A")}
              htmlType="submit"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
