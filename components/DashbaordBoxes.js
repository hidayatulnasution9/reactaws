import React, { useState } from "react";

export default function DashboardBoxes() {
  const [inputfile, setInputfile] = useState(null);
  const [jsonResult, setJsonResult] = useState(null);
  const [vehicleNum, setVehicleNum] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setInputfile(event.target.files[0]);
  };

  const handleJsonResultChange = (event) => {
    setJsonResult(event.target.files[0]);
  };

  const handleVehicleNumChange = (event) => {
    setVehicleNum(event.target.value);
  };

  const handleOptimizeRouting = () => {
    const formData = new FormData();
    formData.append("inputfile", inputfile);
    formData.append("json_result", jsonResult);
    formData.append("vehicle_num", vehicleNum);

    fetch("http://localhost:5000/optimize_routing", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => console.error("Error:", error));
  };

  const renderResultTable = () => {
    if (!result || !result.routes) return null;

    return (
      <table style={{ marginTop: "1rem", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Route ID</th>
            <th>Vehicle ID</th>
            <th>Distance</th>
            <th>Duration</th>
            <th>Route</th>
          </tr>
        </thead>
        <tbody>
          {result.routes.map((route, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{route.vehicle_id}</td>
              <td>{route.distance}</td>
              <td>{route.duration}</td>
              <td>{JSON.stringify(route.route)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div
        className="input-container"
        style={{
          display: "flex", // Set display to flex
          flexDirection: "column", // Stack child elements vertically
          alignItems: "flex-start", // Align child elements to the left
          gap: "8px", // Add spacing between child elements
          // Add any additional styles as needed
        }}
      >
        <div className="text-primary">Vehicle Number</div>
        <input
          type="number"
          name="vehicle_num"
          value={vehicleNum}
          onChange={handleVehicleNumChange}
          required
          className="input-number"
          style={{
            padding: "8px", // Add padding
            borderRadius: "4px", // Add border radius
            border: "1px solid #ccc", // Add border
            // Add any additional styles as needed
          }}
        />
      </div>
      <br />
      <div className="flex gap-5">
        <div className="bg-blue-200 grow w-1/2 flex items-center gap-2 text-primary p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
          <img
            className="h-14"
            src="https://w7.pngwing.com/pngs/117/809/png-transparent-microsoft-excel-training-computer-software-microsoft-office-excel-template-angle-text-thumbnail.png"
            alt=""
          />
          <div>
            <h2 className="font-bold text-2xl leading-2">Input File Excel</h2>
            <input
              type="file"
              name="inputfile"
              onChange={handleInputChange}
              className="input-file"
            />
          </div>
        </div>
        <div className="bg-red-200 grow w-1/2 flex items-center gap-2 text-primary p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
          <img
            className="h-14"
            src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
            alt=""
          />
          <div>
            <h2 className="font-bold text-2xl leading-2">JSON Result</h2>
            <input
              type="file"
              name="json_result"
              onChange={handleJsonResultChange}
              className="input-file"
            />
          </div>
        </div>
      </div>
      <br />
      <button
        onClick={handleOptimizeRouting}
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
        Optimize Routing
      </button>

      {result && (
        <div className="result-container">
          <div>Result:</div>
          {renderResultTable()}
        </div>
      )}
    </div>
  );
}
