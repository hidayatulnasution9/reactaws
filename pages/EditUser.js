import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Row, Col, message } from "antd";

export default function EditUser({ userId, closeModal }) {
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getUser();
  }, [userId]);

  function getUser() {
    axios
      .get(`http://127.0.0.1:5000/userdetails/${userId}`)
      .then(function (response) {
        console.log(response.data);
        setInputs(response.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    axios
      .put(`http://127.0.0.1:5000/userupdate/${userId}`, inputs)
      .then(function (response) {
        console.log(response.data);
        closeModal();
        alert("User data successfully updated!");
      })
      .catch(function (error) {
        console.error(error);
        message.error("Failed to update user data. Please try again!");
      });
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div>
      <div className="container h-100">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <Form form={form} initialValues={inputs} onFinish={handleSubmit}>
              <div className="mb-3">
                <label>No</label>
                <Input
                  type="text"
                  className="form-control"
                  name="no"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Loc_25</label>
                <Input
                  type="text"
                  className="form-control"
                  name="loc_25"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Lat</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lat"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Lon</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lon"
                  onChange={handleChange}
                />
              </div>
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#DB0408")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#F50207")
                    }
                  >
                    Cancel
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      marginRight: 28,
                      backgroundColor: "#067A7A",
                      transition: "background-color 0.3s", //
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#02EDED")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#067A7A")
                    }
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
