import React, { useState, useEffect } from "react";

const ReportBoard = () => {
  const [condition1, setCondition1] = useState([]);
  const [trueContact, setTrueContact] = useState([]);
  const [sob1, setSOB1] = useState([]);
  const [sob2, setSOB2] = useState([]);
  const [extMSB, setextMSB] = useState([]);
  const [notContacted1, setnotContacted1] = useState([]);
  const [notContacted2, setnotContacted2] = useState([]);
  const [notContacted3, setnotContacted3] = useState([]);
  const [notContacted4, setnotContacted4] = useState([]);
  const [finalNotContacted, setFinalNotContacted] = useState([]);
  const [finalPureNotContacted, setFinalPureNotContacted] = useState([]);
  const [falseContact, setFalseContact] = useState([]);
  const [verifyTrueContact, setverifyTrueContact] = useState([]);
  const [noFreeSample, setNoFreeSample] = useState([]);
  const [lessFreeSample, setLessFreeSample] = useState([]);
  const [teaSnaks, setTeaSnaks] = useState([]);
  const [retention, setRetention] = useState([]);
  console.log(falseContact);
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(null);
  const [status3, setStatus3] = useState(null);
  const [status4, setStatus4] = useState(null);
  const [status5, setStatus5] = useState(null);

  const handleConnected = () => {
    fetch("http://localhost:5002/updateConnectCall")
      .then((res) => res.json())
      .then((data) =>
        setCondition1([...data.map((d) => ({ _id: d._id, connectedCall: 1 }))])
      );
  };
  const handleCondition1 = () => {
    fetch("http://localhost:5002/update1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(condition1),
    })
      .then((res) => res.json())
      .then((data) => setStatus1(data));
  };
  const handleTrueContact = () => {
    fetch("http://localhost:5002/getTrueContact")
      .then((res) => res.json())
      .then((data) =>
        setTrueContact([...data.map((d) => ({ _id: d._id, trueContact: 1 }))])
      );
  };
  const updateTrueContact = () => {
    fetch("http://localhost:5002/updateTrueContact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trueContact),
    })
      .then((res) => res.json())
      .then((data) => setStatus2(data));
  };
  const handleSOB1 = () => {
    fetch("http://localhost:5002/nonSOB1")
      .then((res) => res.json())
      .then((data) =>
        setSOB1([...data.map((d) => ({ _id: d._id, nonSOB1: 1 }))])
      );
  };
  const updateSOB1 = () => {
    fetch("http://localhost:5002/updatenonSOB1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sob1),
    })
      .then((res) => res.json())
      .then((data) => setStatus3(data));
  };
  const handleSOB2 = () => {
    fetch("http://localhost:5002/nonSOB2")
      .then((res) => res.json())
      .then((data) =>
        setSOB2([...data.map((d) => ({ _id: d._id, nonSOB2_Final: 1 }))])
      );
  };
  const updateSOB2 = () => {
    fetch("http://localhost:5002/updatenonSOB2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sob2),
    })
      .then((res) => res.json())
      .then((data) => setStatus4(data));
  };
  const handleExtMSB = () => {
    fetch("http://localhost:5002/extMSB")
      .then((res) => res.json())
      .then((data) =>
        setextMSB([...data.map((d) => ({ _id: d._id, extMSB: 1 }))])
      );
  };
  const updateExtMSB = () => {
    fetch("http://localhost:5002/updateextMSB", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(extMSB),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleNotContacted1 = () => {
    fetch("http://localhost:5002/notContacted1")
      .then((res) => res.json())
      .then((data) =>
        setnotContacted1([
          ...data.map((d) => ({ _id: d._id, notContacteda: 1 })),
        ])
      );
  };
  const updateNotContacted1 = () => {
    fetch("http://localhost:5002/updateNotContacted1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted1),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleNotContacted2 = () => {
    fetch("http://localhost:5002/notContacted2")
      .then((res) => res.json())
      .then((data) =>
        setnotContacted2([
          ...data.map((d) => ({ _id: d._id, notContactedb: 1 })),
        ])
      );
  };
  const updateNotContacted2 = () => {
    fetch("http://localhost:5002/updateNotContacted2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted2),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleNotContacted3 = () => {
    fetch("http://localhost:5002/notContacted3")
      .then((res) => res.json())
      .then((data) =>
        setnotContacted3([
          ...data.map((d) => ({ _id: d._id, notContactedc: 1 })),
        ])
      );
  };
  const updateNotContacted3 = () => {
    fetch("http://localhost:5002/updateNotContacted3", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted3),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleNotContacted4 = () => {
    fetch("http://localhost:5002/notContacted4")
      .then((res) => res.json())
      .then((data) =>
        setnotContacted4([
          ...data.map((d) => ({ _id: d._id, notContactedd: 1 })),
        ])
      );
  };
  const updateNotContacted4 = () => {
    fetch("http://localhost:5002/updateNotContacted4", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notContacted4),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleNotContacted = () => {
    fetch("http://localhost:5002/finalNotContacted")
      .then((res) => res.json())
      .then((data) =>
        setFinalNotContacted([
          ...data.map((d) => ({ _id: d._id, notContacted: 1 })),
        ])
      );
  };
  const updateNotContacted = () => {
    fetch("http://localhost:5002/updateFinalNotContacted", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalNotContacted),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handlePureNotContacted = () => {
    fetch("http://localhost:5002/finalNotContacted2")
      .then((res) => res.json())
      .then((data) =>
        setFinalPureNotContacted([
          ...data.map((d) => ({ _id: d._id, notContacted: 0 })),
        ])
      );
  };
  const updatePureNotContacted = () => {
    fetch("http://localhost:5002/updateFinalPureNotContacted", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalPureNotContacted),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };

  const handleFalseContact = () => {
    fetch("http://localhost:5002/falseContact")
      .then((res) => res.json())
      .then((data) =>
        setFalseContact([
          ...data.map((d) => ({ _id: d._id, falseContactFinal: 1 })),
        ])
      );
  };
  const updateFalseContact = () => {
    fetch("http://localhost:5002/updateFalseContact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(falseContact),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleVerifyTrueContact = () => {
    fetch("http://localhost:5002/verifyFalseContact")
      .then((res) => res.json())
      .then((data) =>
        setverifyTrueContact([
          ...data.map((d) => ({ _id: d._id, trueContact: 0 })),
        ])
      );
  };
  const updateVerifyTrueContact = () => {
    fetch("http://localhost:5002/updateVerifiedTrueContact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(verifyTrueContact),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handlenoFreeSample = () => {
    fetch("http://localhost:5002/noFreeSample")
      .then((res) => res.json())
      .then((data) =>
        setNoFreeSample([...data.map((d) => ({ _id: d._id, noFreeSample: 1 }))])
      );
  };
  const updatenoFreeSample = () => {
    fetch("http://localhost:5002/updateNoFreeSample", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noFreeSample),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleLessFreeSample = () => {
    fetch("http://localhost:5002/lessFreeSample")
      .then((res) => res.json())
      .then((data) =>
        setLessFreeSample([
          ...data.map((d) => ({ _id: d._id, lessFreeSample: 1 })),
        ])
      );
  };
  const updateLessFreeSample = () => {
    fetch("http://localhost:5002/updateLessFreeSample", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lessFreeSample),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleTeaSnaks = () => {
    fetch("http://localhost:5002/teaSnaks")
      .then((res) => res.json())
      .then((data) =>
        setTeaSnaks([...data.map((d) => ({ _id: d._id, teaSnaks: 1 }))])
      );
  };
  const updateTeaSnaks = () => {
    fetch("http://localhost:5002/updateTeaSnaks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teaSnaks),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  const handleRetention = () => {
    fetch("http://localhost:5002/retention")
      .then((res) => res.json())
      .then((data) =>
        setRetention([...data.map((d) => ({ _id: d._id, retention: 1 }))])
      );
  };
  const updateRetention = () => {
    fetch("http://localhost:5002/updateRetention", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(retention),
    })
      .then((res) => res.json())
      .then((data) => setStatus5(data));
  };
  return (
    <div>
      <div>
        <h4>Step 1</h4>
        <p>
          Update Status Of Connected Call: {status1 === true && <p>Done</p>}
        </p>
        <button className="btn btn-danger" onClick={handleConnected}>
          Generate Connected Call
        </button>
        <br />
        <br />
        <button onClick={handleCondition1} className="btn btn-danger">
          Update Condition1
        </button>
        {status1 === true && alert("Connected Call Generated")}
      </div>
      <div>
        <div>
          <h4>Step 2</h4>
          <p>Update Status Of True Contact: </p>
          <button className="btn btn-danger" onClick={handleTrueContact}>
            Generate True Contact
          </button>
          <br />
          <br />
          <button onClick={updateTrueContact} className="btn btn-danger">
            Update True Contact
          </button>
        </div>
        {status2 === "true" && alert("True Contact Generated")}
      </div>
      <div>
        <div>
          <h4>Step 3</h4>
          <p>Update Status Of Update NonSOB1: </p>
          <button className="btn btn-danger" onClick={handleSOB1}>
            Generate NonSOB1
          </button>
          <br />
          <br />
          <button onClick={updateSOB1} className="btn btn-danger">
            Update NonSOB1
          </button>
        </div>
        {status3 === "true" && alert("NonSOB1 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 4</h4>
          <p>Update Status Of Update NonSOB2: </p>
          <button className="btn btn-danger" onClick={handleSOB2}>
            Generate NonSOB2
          </button>
          <br />
          <br />
          <button onClick={updateSOB2} className="btn btn-danger">
            Update NonSOB2
          </button>
        </div>
        {status4 === "true" && alert("NonSOB2 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 5</h4>
          <p>Update Status Of Update Ext MSB: </p>
          <button className="btn btn-danger" onClick={handleExtMSB}>
            Generate EXT MSB
          </button>
          <br />
          <br />
          <button onClick={updateExtMSB} className="btn btn-danger">
            Update EXT MSB
          </button>
        </div>
        {status5 === "true" && alert("NonSOB2 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 6</h4>
          <p>Update Status Of Update Not Contacted 1: </p>
          <button className="btn btn-danger" onClick={handleNotContacted1}>
            Generate Not Contacted 1
          </button>
          <button onClick={updateNotContacted1} className="btn btn-danger">
            Update Not Contacted 1
          </button>
          <p>Update Status Of Update Not Contacted 2: </p>
          <button className="btn btn-danger" onClick={handleNotContacted2}>
            Generate Not Contacted 2
          </button>
          <button onClick={updateNotContacted2} className="btn btn-danger">
            Update Not Contacted 2
          </button>
          <p>Update Status Of Update Not Contacted 3: </p>
          <button className="btn btn-danger" onClick={handleNotContacted3}>
            Generate Not Contacted 3
          </button>
          <button onClick={updateNotContacted3} className="btn btn-danger">
            Update Not Contacted 3
          </button>
          <p>Update Status Of Update Not Contacted 4: </p>
          <button className="btn btn-danger" onClick={handleNotContacted4}>
            Generate Not Contacted 4
          </button>
          <button onClick={updateNotContacted4} className="btn btn-danger">
            Update Not Contacted 4
          </button>
          <p>Update Status Of Update Final Not Contacted: </p>
          <button className="btn btn-danger" onClick={handleNotContacted}>
            Generate Not Contacted
          </button>
          <button onClick={updateNotContacted} className="btn btn-danger">
            Update Not Contacted
          </button>
          <p>Update Status Of Update Purefy Not Contacted: </p>
          <button className="btn btn-danger" onClick={handlePureNotContacted}>
            Generate Pure Not Contacted
          </button>
          <button onClick={updatePureNotContacted} className="btn btn-danger">
            Update Pure Not Contacted
          </button>
        </div>
      </div>
      <div>
        <div>
          <h4>Step 7</h4>
          <p>Update Status Of False Contact: </p>
          <button className="btn btn-danger" onClick={handleFalseContact}>
            Generate False Contact
          </button>
          <br />
          <br />
          <button onClick={updateFalseContact} className="btn btn-danger">
            Update False Contact
          </button>
        </div>
        {status5 === "true" && alert("NonSOB2 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 8</h4>
          <p>Verify True Contact: </p>
          <button className="btn btn-danger" onClick={handleVerifyTrueContact}>
            Get True === False
          </button>
          <br />
          <br />
          <button onClick={updateVerifyTrueContact} className="btn btn-danger">
            Update True === False
          </button>
        </div>
        {status5 === "true" && alert("NonSOB2 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 9</h4>
          <p>Update no Free Sample: </p>
          <button className="btn btn-danger" onClick={handlenoFreeSample}>
            Get no Free Sample
          </button>
          <br />
          <br />
          <button onClick={updatenoFreeSample} className="btn btn-danger">
            Update no Free Sample
          </button>
        </div>
        {status5 === "true" && alert("NonSOB2 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 10</h4>
          <p>Update Less Free Sample: </p>
          <button className="btn btn-danger" onClick={handleLessFreeSample}>
            Get Less Free Sample
          </button>
          <br />
          <br />
          <button onClick={updateLessFreeSample} className="btn btn-danger">
            Update Less Free Sample
          </button>
        </div>
        {status5 === "true" && alert("NonSOB2 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 11</h4>
          <p>Update teaSnaks: </p>
          <button className="btn btn-danger" onClick={handleTeaSnaks}>
            Get teaSnaks
          </button>
          <br />
          <br />
          <button onClick={updateTeaSnaks} className="btn btn-danger">
            Update teaSnaks
          </button>
        </div>
        {status5 === "true" && alert("NonSOB2 Generated")}
      </div>
      <div>
        <div>
          <h4>Step 12</h4>
          <p>Update retention: </p>
          <button className="btn btn-danger" onClick={handleRetention}>
            Get retention
          </button>
          <br />
          <br />
          <button onClick={updateRetention} className="btn btn-danger">
            Update retention
          </button>
        </div>
        {status5 === "true" && alert("NonSOB2 Generated")}
      </div>
    </div>
  );
};

export default ReportBoard;
