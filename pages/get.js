import { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Layout from "../components/Layout";
import { TypeAnimation } from "react-type-animation";

export default function OrdersPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://127.0.0.1:5000/get_driver_data")
      .then((response) => {
        const driverData = response.data;
        const rows = driverData.map((driver, index) => ({
          id: index + 1,
          "Get Data Driver": `Driver ${driver.vehicle_num}`,
          No: driver.result.routes
            .map((route) => route.route.join(" ,  "))
            .join(" ;  "),
          LAT: "",
          LON: "",
          LOC_25: "",
        }));
        setData(rows);
        setFilteredData(rows);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const downloadExcel = async () => {
    try {
      // Load XLSX library dynamically from CDN
      const xlsx = await import("xlsx");
      if (xlsx) {
        const worksheet = xlsx.utils.json_to_sheet(filteredData);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
        const excelBuffer = xlsx.write(workbook, {
          bookType: "xlsx",
          type: "array",
        });
        const excelData = new Blob([excelBuffer], {
          type: "application/octet-stream",
        });
        saveAs(excelData, "data.xlsx");
      } else {
        console.error("Failed to load XLSX library.");
      }
    } catch (error) {
      console.error("Error loading XLSX library:", error);
    }
  };

  const columns = [
    {
      field: "Get Data Driver",
      headerName: "Get Data Driver",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "No",
      headerName: "No",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 10,
    },
  ];

  return (
    <Layout>
      <h1 className="text-primary text-xl font-bold mb-4">
        <TypeAnimation
          className="text-purple-500 text-xl"
          sequence={["Historical", 2000, "Data", 2000]}
          style={{ fontSize: "24px" }}
          repeat={Infinity}
        />
      </h1>
      <button
        onClick={downloadExcel}
        style={{
          backgroundColor: "#067A7A",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease", // Adding transition for smooth effect
        }}
        // Add the hover styles using :hover pseudo-class
        onMouseOver={(e) => (e.target.style.backgroundColor = "#02EDED")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#067A7A")}
      >
        Download Excel
      </button>
      <br />
      <br />
      {/* Render the data in a table */}
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field}>{column.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.field}>{item[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
