import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Table, Collapse } from "antd";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Layout from "../components/Layout";
import { TypeAnimation } from "react-type-animation";

export default function OrdersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://127.0.0.1:5000/listusers").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/userdelete/${id}`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
    alert("Successfully Deleted");
  };

  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const openCreateUserModal = () => {
    setIsCreateUserModalOpen(true);
  };

  const closeCreateUserModal = () => {
    setIsCreateUserModalOpen(false);
  };

  const openEditUserModal = (id) => {
    setSelectedUserId(id);
    setIsEditUserModalOpen(true);
  };

  const closeEditUserModal = () => {
    setIsEditUserModalOpen(false);
    setSelectedUserId(null);
  };

  const navigateToHome = () => {
    closeCreateUserModal();
    closeEditUserModal();
    // Replace this with the actual URL of your OrdersPage
    window.location.href = "/orders";
  };

  const handleAddData = (userId) => {
    // Implement the logic for adding data inside the accordion panel.
    // You can use a form or any other method to gather the new data.
    console.log(`Add data for user ID: ${userId}`);
  };

  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Loc_25", dataIndex: "loc_25", key: "loc_25" },
    { title: "Lat", dataIndex: "lat", key: "lat" },
    { title: "Lon", dataIndex: "lon", key: "lon" },
    { title: "Date Added", dataIndex: "date", key: "date" },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div>
          <Button
            onClick={() => deleteUser(record.id)}
            danger
            style={{ marginRight: 8 }}
          >
            Delete
          </Button>
          <Button
            onClick={() => openEditUserModal(record.id)}
            style={{
              background: "#1890ff",
              borderColor: "#1890ff",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#40a9ff";
              e.currentTarget.style.borderColor = "#40a9ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1890ff";
              e.currentTarget.style.borderColor = "#1890ff";
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Layout>
        <h1 className="text-primary text-xl font-bold mb-4">
          <TypeAnimation
            className="text-purple-500 text-xl"
            sequence={["Manual", 2000, "Input", 2000]}
            style={{ fontSize: "24px" }}
            repeat={Infinity}
          />
        </h1>
        <Button
          type="primary"
          onClick={openCreateUserModal}
          style={{
            background: "#1890ff",
            borderColor: "#1890ff",
            color: "#fff",
            marginBottom: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#40a9ff";
            e.currentTarget.style.borderColor = "#40a9ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1890ff";
            e.currentTarget.style.borderColor = "#1890ff";
          }}
        >
          Create New
        </Button>

        <Collapse accordion>
          {users.map((user, index) => (
            <Collapse.Panel
              header={`Accordion Item #${index + 1}`}
              key={user.id}
            >
              <Table dataSource={[user]} columns={columns} pagination={false} />
              <Button onClick={() => handleAddData(user.id)}>Add Data</Button>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Layout>

      <Modal
        title="Create User Modal"
        visible={isCreateUserModalOpen}
        onCancel={closeCreateUserModal}
        footer={null}
      >
        <CreateUser closeModal={navigateToHome} />
      </Modal>

      <Modal
        title="Edit Driver"
        visible={isEditUserModalOpen}
        onCancel={closeEditUserModal}
        footer={null}
      >
        <EditUser userId={selectedUserId} closeModal={navigateToHome} />
      </Modal>
    </div>
  );
}
