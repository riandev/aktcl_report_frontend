import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CSVLink } from "react-csv";

const FinalReport = () => {
  const [finalReport, setFinalReport] = useState([]);
  console.log(finalReport);
  useEffect(() => {
    fetch("http://localhost:5002/finalReport")
      .then((res) => res.json())
      .then((data) => setFinalReport(data));
  }, []);
  const handleFinalReport = () => {};
  let headers = [
    { label: "id", key: "id" },
    { label: "diid", key: "diid" },
    { label: "data_status", key: "data_status" },
    { label: "data_date", key: "data_date" },
    { label: "ACTIVITY_ID", key: "ACTIVITY_ID" },
    { label: "TERITORY_NAME", key: "TERITORY_NAME" },
    { label: "ZONE_NAME", key: "ZONE_NAME" },
    { label: "ROUTE_NAME", key: "ROUTE_NAME" },
    { label: "TEAM_ID", key: "TEAM_ID" },
    { label: "TEAM_NAME", key: "TEAM_NAME" },
    { label: "TM_USER_NAME", key: "TM_USER_NAME" },
    { label: "TM_NAME", key: "TM_NAME" },
    { label: "TERITORY_NAME", key: "TERITORY_NAME" },
    { label: "OUTLET_NAME", key: "OUTLET_NAME" },
    { label: "r_name", key: "r_name" },
    { label: "Consumer_No", key: "Consumer_No" },
    { label: "USING_BRAND", key: "USING_BRAND" },
    { label: "OFFERED_BRAND", key: "OFFERED_BRAND" },
    { label: "SAMPLING_NO", key: "SAMPLING_NO" },
    { label: "no_of_pack", key: "no_of_pack" },
    { label: "SALES_PACK_QTY", key: "SALES_PACK_QTY" },
    { label: "ENTERTAINMENT_NO", key: "ENTERTAINMENT_NO" },
    { label: "GIFT_QTY", key: "GIFT_QTY" },
    { label: "ADD_DATE_TIME", key: "ADD_DATE_TIME" },
    { label: "for_d", key: "for_d" },
    { label: "connectedCall", key: "connectedCall" },
    { label: "trueContact", key: "trueContact" },
    { label: "nonSOB1", key: "nonSOB1" },
    { label: "nonSOB2_Final", key: "nonSOB2_Final" },
    { label: "extMSB", key: "extMSB" },
    { label: "notContacted", key: "notContacted" },
    { label: "falseContactFinal", key: "falseContactFinal" },
    { label: "noFreeSample", key: "noFreeSample" },
    { label: "lessFreeSample", key: "lessFreeSample" },
    { label: "teaSnaks", key: "teaSnaks" },
    { label: "retention", key: "retention" },
    { label: "q1", key: "q1" },
    { label: "q2", key: "q2" },
    { label: "q3", key: "q3" },
    { label: "q4", key: "q4" },
    { label: "q5", key: "q5" },
    { label: "q6", key: "q6" },
    { label: "q7", key: "q7" },
    { label: "q8", key: "q8" },
    { label: "q9", key: "q9" },
    { label: "q10", key: "q10" },
    { label: "q11", key: "q11" },
  ];
  return (
    <div>
      <div
        style={{ display: finalReport.length > 0 ? "block" : "none" }}
        className="mt-5"
      >
        <button onClick={handleFinalReport} className="btn btn-danger">
          <CSVLink
            headers={headers}
            title="Export data to CSV"
            filename={"AKTCL_EAS_Report.csv"}
            data={finalReport}
          >
            Download
          </CSVLink>
        </button>
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default FinalReport;
