import React, { useEffect, useState } from "react";
import aktcl from "../../../image/aktcl.png";
import fifotech from "../../../image/logo_s.png";
import "./SummeryReport.css";

const SummaryReport = () => {
  const [summary, setSummary] = useState([]);
  const [count, setCount] = useState([]);
  const [dataDate, setDataDate] = useState([]);

  console.log(dataDate);
  useEffect(() => {
    fetch("http://localhost:5002/territoryReports")
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5002/reportTable")
      .then((res) => res.json())
      .then((data) => setCount(data));

    fetch("http://localhost:5002/finalReport")
      .then((res) => res.json())
      .then((data) =>
        setDataDate([
          ...data.map((d) => ({ date: d.data_date, callDate: d.callDate })),
        ])
      );
  }, []);
  const totalTarget = summary[0]?.grandTarget;
  const totalValid = summary[0]?.grandValiddata;
  const totalLessContact = totalTarget - totalValid;
  const lessConnectedPercentage = Math.round(
    (totalLessContact / totalTarget) * 100
  );
  const validPercentage = Math.round((totalValid / totalTarget) * 100);
  const totalConnected = summary[0]?.grandConnectedCall;
  const connectedPercentage = Math.round((totalConnected / totalValid) * 100);
  const totalTruelyConnected = summary[0]?.grandTrueContact;
  const TruelyConnectedPercentage = Math.round(
    (totalTruelyConnected / totalConnected) * 100
  );
  const totalNotConnected = summary[0]?.grandNotContacted;
  const notConnectedPercentage = Math.round(
    (totalNotConnected / totalConnected) * 100
  );
  const totalwtgnonSOB = summary[0]?.grandNonSOB1 + summary[0]?.grandNonSOB2;
  const wtgnonsobPercentage = Math.round(
    (totalwtgnonSOB / totalConnected) * 100
  );
  const totalextMSB = summary[0]?.grandextMSB;
  const extmsbPercentage = Math.round((totalextMSB / totalConnected) * 100);
  const totalFalseContact = summary[0]?.grandFalseContact;
  const falseContactPercentage = Math.round(
    (totalFalseContact / totalConnected) * 100
  );
  const totalnoFreeSample = summary[0]?.grandNoFreeSample;
  const totallessFreeSample = summary[0]?.grandLessFreeSample;
  const totalnoandlessSample = totalnoFreeSample + totallessFreeSample;
  const nolessPercentage = Math.round(
    (totalnoandlessSample / totalConnected) * 100
  );
  const totalTeasnaks = summary[0]?.grandTeaSnaks;
  const teasnaksPercentage = Math.round((totalTeasnaks / totalConnected) * 100);
  const totalretention = summary[0]?.grandRetention;
  const retentionPercentage = Math.round(
    (totalretention / totalConnected) * 100
  );
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <img className="img-fluid image-design" src={aktcl} alt="" />
        <img className="img-fluid image-design" src={fifotech} alt="" />
      </div>
      <h4 className="text-center">Abdul Khair Tobacco Company Ltd.</h4>
      <h5 className="text-center">Call Center Verification Summary Report</h5>
      <div className="d-flex justify-content-around mt-4">
        <div>
          <h6>Date Of Contact By TMS/TMR: {dataDate[0]?.date}</h6>
        </div>
        <div>
          <h6>Total TMR/TMR Count: {count.length}</h6>
        </div>
        <div>
          <h6>Date Of Call: {dataDate[0]?.callDate}</h6>
        </div>
      </div>
      <div className="text-center mt-3">
        <table className="table bordered table-hover">
          <thead>
            <tr>
              <th className="align-middle">ID</th>
              <th className="align-middle">TERITORY_NAME</th>

              <th className="align-middle">Contact Against Target</th>
              <th className="align-middle">True Contact</th>
              <th className="align-middle">Total False Contact</th>

              <th className="align-middle">
                Not Contacted (Logic:Name not mached, Non smoker, Not contacted,
                Contacted by other Company.)
              </th>
              <th className="align-middle">
                Non SOB (Logic:Rather than Derby, Pilot, Hollywood, Sheikh,
                Royals & MSB)
              </th>

              <th className="align-middle">
                Existing Marise Consumer Contacted
              </th>
              <th className="align-middle">Free sample not Or Less given</th>

              <th className="align-middle">Tea/ Snacks not given</th>
              <th className="align-middle">
                Retaintion (Retaintion/Actual contact)
              </th>
            </tr>
          </thead>
          <tbody>
            {summary.map((query, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{query.userId}</td>
                <td>
                  {isNaN(
                    Math.round((query.sumValiddata / query.sumTarget) * 100)
                  )
                    ? 0
                    : Math.round((query.sumValiddata / query.sumTarget) * 100) +
                      "%"}
                </td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumTrueContact / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumTrueContact / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumFalseContact / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumFalseContact / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumNotContacted / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumNotContacted / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
                <td>
                  {isNaN(
                    Math.round(
                      ((query.sumNonSOB1 + query.sumNonSOB2) /
                        query.sumConnectedCall) *
                        100
                    )
                  )
                    ? 0
                    : Math.round(
                        ((query.sumNonSOB1 + query.sumNonSOB2) /
                          query.sumConnectedCall) *
                          100
                      ) + "%"}
                </td>

                <td>
                  {isNaN(
                    Math.round((query.sumextMSB / query.sumConnectedCall) * 100)
                  )
                    ? 0
                    : Math.round(
                        (query.sumextMSB / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
                <td>
                  {isNaN(
                    Math.round(
                      ((query.sumNoFreeSample + query.sumLessFreeSample) /
                        query.sumConnectedCall) *
                        100
                    )
                  )
                    ? 0
                    : Math.round(
                        ((query.sumNoFreeSample + query.sumLessFreeSample) /
                          query.sumConnectedCall) *
                          100
                      ) + "%"}
                </td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumTeaSnaks / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumTeaSnaks / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumRetention / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumRetention / query.sumConnectedCall) * 100
                      ) + "%"}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                colspan="2"
              >
                Total
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {validPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {TruelyConnectedPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {falseContactPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {notConnectedPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {wtgnonsobPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {extmsbPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {nolessPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {teasnaksPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {retentionPercentage + "%"}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SummaryReport;
