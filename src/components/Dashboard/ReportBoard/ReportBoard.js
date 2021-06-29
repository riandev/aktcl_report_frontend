import React, { useState, useEffect } from "react";

const ReportBoard = () => {
  const [condition1, setCondition1] = useState([]);
  console.log(condition1);

  const handleConnected = () => {
    fetch("http://localhost:5002/updateConnectCall")
      .then((res) => res.json())
      .then((data) => setCondition1([...data.map(d => ({_id: d._id, viewStatus: 1}))]));
  };
  const handleCondition1=() => {
      fetch("http://localhost:5002/update1",{
          method:"PATCH",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(condition1)
      })
  }
  return (
    <div>
      <button className="btn btn-danger" onClick={handleConnected}>
        Generate Connected Call
      </button>
      <button onClick={handleCondition1} className="btn btn-danger">
        Update Condition1
      </button>
    </div>
  );
};

export default ReportBoard;
