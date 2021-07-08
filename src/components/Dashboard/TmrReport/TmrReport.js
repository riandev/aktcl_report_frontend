import React, { useEffect, useState } from "react";
import "./TmrReport.css";
import aktcl from "../../../image/aktcl.png";
import fifotech from "../../../image/logo_s.png";

const TmrReport = () => {
  const [counted, setCounts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5002/reportTable")
      .then((res) => res.json())
      .then((data) => setCounts(data));
  }, []);
  const totalTarget = counted[0]?.target * counted.length;
  const totalValid = counted[0]?.valid_total;
  const totalLessContact = totalTarget - totalValid;
  const lessConnectedPercentage = Math.round(
    (totalLessContact / totalTarget) * 100
  );
  const validPercentage = Math.round((totalValid / totalTarget) * 100);
  const totalConnected = counted[0]?.connected_total;
  const connectedPercentage = Math.round((totalConnected / totalValid) * 100);
  const totalTruelyConnected = counted[0]?.true_total;
  const TruelyConnectedPercentage = Math.round(
    (totalTruelyConnected / totalConnected) * 100
  );
  const totalNotConnected = counted[0]?.notConnected_total;
  const notConnectedPercentage = Math.round(
    (totalNotConnected / totalConnected) * 100
  );
  const nonSOB1 = counted[0]?.noSOB1_total;
  const nonSOB2 = counted[0]?.nonSOB2_total;
  const totalwtgnonSOB = nonSOB1 + nonSOB2;
  console.log(nonSOB1, nonSOB2);
  const wtgnonsobPercentage = Math.round(
    (totalwtgnonSOB / totalConnected) * 100
  );
  const totalextMSB = counted[0]?.extMSB_total;
  const extmsbPercentage = Math.round((totalextMSB / totalConnected) * 100);
  const totalFalseContact = counted[0]?.falseContact_total;
  const falseContactPercentage = Math.round(
    (totalFalseContact / totalConnected) * 100
  );
  const totalnoFreeSample = counted[0]?.noFreeSample_total;
  const totallessFreeSample = counted[0]?.lessFreeSample_total;
  const totalnoandlessSample = totalnoFreeSample + totallessFreeSample;
  const nolessPercentage = Math.round(
    (totalnoandlessSample / totalConnected) * 100
  );
  const totalTeasnaks = counted[0]?.teaSnaks_total;
  const teasnaksPercentage = Math.round((totalTeasnaks / totalConnected) * 100);
  const totalretention = counted[0]?.retention_total;
  const retentionPercentage = Math.round(
    (totalretention / totalConnected) * 100
  );
  const targetTrueContactTotal = counted[0]?.targetTrueContact * counted.length;
  const perConsumeravgTotal = counted[0]?.grandAvgExpense;
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <img className="img-fluid image-design" src={aktcl} alt="" />
        <img className="img-fluid image-design" src={fifotech} alt="" />
      </div>
      <h4 className="text-center">Abdul Khair Tobacco Company Ltd.</h4>
      <h5 className="text-center mb-4">
        Call Center Verification TMS/TMR Report
      </h5>
      <div className="text-center">
        <table className="table bordered table-hover">
          <thead>
            <tr>
              <th
                Style="color:blue;"
                className="text-center"
                colspan="5"
                scope="colgroup"
              >
                TMS and TMR Information
              </th>
              <th
                colspan="4"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Data Info
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Connected Call
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Truly Contacted
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Not Contacted
              </th>
              <th
                colspan="6"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Wrong TG
              </th>
              <th
                colspan="6"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Entertainment
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Retaintion
              </th>
              <th
                colspan="1"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Minimum True Contact
              </th>
              <th
                colspan="2"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                Actual true contact (Based on call center report)
              </th>
            </tr>
            <tr>
              <th className="align-middle">ID</th>
              <th className="align-middle">TMS/TMR User Name</th>
              <th className="align-middle">TMS/TMR Name</th>
              <th className="align-middle">TERITORY_NAME</th>
              <th className="align-middle">Target</th>

              <th className="align-middle">Less/More contacted</th>
              <th className="align-middle">%</th>
              <th className="align-middle">Data Received</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Connected Call</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Truly Contacted</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Not Contacted</th>
              <th className="align-middle">%</th>

              <th className="align-middle">WTG Non SOB</th>
              <th className="align-middle">%</th>
              <th className="align-middle">
                Existing Marise consumer contacted
              </th>
              <th className="align-middle">%</th>
              <th className="align-middle">Total False Contact</th>
              <th className="align-middle">%</th>

              <th className="align-middle">No Free Sample</th>
              <th className="align-middle">Less Free sample</th>
              <th className="align-middle">No and less Free Sample Given</th>
              <th className="align-middle">%</th>
              <th className="align-middle">Tea/ Snacks not given</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Retaintion</th>
              <th className="align-middle">%</th>

              <th className="align-middle">Numbers of Truly contacted Call</th>

              <th className="align-middle">
                Extrapulated Data (L*H/J) for Truly contacted Call
              </th>
              <th className="align-middle">
                Less/More truly contacted Call numbers than minimum True
                Contact-15 (AE-AD)
              </th>

              <th className="align-middle">
                Per consumer average Entertainment Expenditure
              </th>
              <th className="align-middle">
                Charged for deficit of minimum True Contact (Tk.)
              </th>
            </tr>
          </thead>
          <tbody>
            {counted.map((query, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{query.userId}</td>
                <td>{query.userName}</td>
                <td>{query.teritory}</td>
                <td>{query.target}</td>

                <td>{query.target - query.valid_Data_count}</td>
                <td>
                  {Math.round(
                    ((query.target - query.valid_Data_count) / query.target) *
                      100
                  ) + "%"}
                </td>
                <td>{query.valid_Data_count}</td>
                <td>
                  {Math.round((query.valid_Data_count / query.target) * 100) +
                    "%"}
                </td>

                <td>{query.connected_Call_count}</td>
                <td>
                  {Math.round(
                    (query.connected_Call_count / query.valid_Data_count) * 100
                  ) + "%"}
                </td>

                <td>{query.true_Contact_count}</td>
                <td>
                  {Math.round(
                    (query.true_Contact_count / query.connected_Call_count) *
                      100
                  ) + "%"}
                </td>

                <td>{query.not_Contacted_count}</td>
                <td>
                  {Math.round(
                    (query.not_Contacted_count / query.connected_Call_count) *
                      100
                  ) + "%"}
                </td>

                <td>{query.non_SOB1_count + query.non_SOB2_count}</td>
                <td>
                  {Math.round(
                    ((query.non_SOB1_count + query.non_SOB2_count) /
                      query.connected_Call_count) *
                      100
                  ) + "%"}
                </td>
                <td>{query.ext_MSB_count}</td>
                <td>
                  {Math.round(
                    (query.ext_MSB_count / query.connected_Call_count) * 100
                  ) + "%"}
                </td>
                <td>{query.false_Contact_count}</td>
                <td>
                  {Math.round(
                    (query.false_Contact_count / query.connected_Call_count) *
                      100
                  ) + "%"}
                </td>

                <td>{query.no_Free_Sample}</td>
                <td>{query.less_Free_Sample}</td>
                <td>{query.no_Free_Sample + query.less_Free_Sample}</td>
                <td>
                  {Math.round(
                    ((query.no_Free_Sample + query.less_Free_Sample) /
                      query.connected_Call_count) *
                      100
                  ) + "%"}
                </td>
                <td>{query.teaSnaks}</td>
                <td>
                  {Math.round(
                    (query.teaSnaks / query.connected_Call_count) * 100
                  ) + "%"}
                </td>

                <td>{query.retention}</td>
                <td>
                  {Math.round(
                    (query.retention / query.connected_Call_count) * 100
                  ) + "%"}
                </td>

                <td>{query.targetTrueContact}</td>

                <td>
                  {Math.round(
                    (query.true_Contact_count * query.valid_Data_count) /
                      query.connected_Call_count
                  )}
                </td>
                <td>
                  {Math.round(
                    (query.true_Contact_count * query.valid_Data_count) /
                      query.connected_Call_count
                  ) - query.targetTrueContact}
                </td>

                <td>{Math.round(query.avgExpense)}</td>
                <td>
                  {Math.round(
                    (query.true_Contact_count * query.valid_Data_count) /
                      query.connected_Call_count
                  ) >= query.targetTrueContact
                    ? Math.round(
                        (query.true_Contact_count * query.valid_Data_count) /
                          query.connected_Call_count -
                          query.targetTrueContact
                      ) *
                      Math.round(query.avgExpense / query.valid_Data_count) *
                      0
                    : Math.round(
                        (query.true_Contact_count * query.valid_Data_count) /
                          query.connected_Call_count -
                          query.targetTrueContact
                      ) * Math.round(query.avgExpense / query.valid_Data_count)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                style={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                colspan="4"
              >
                Total
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalTarget}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalLessContact}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {lessConnectedPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalValid}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {validPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {connectedPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalTruelyConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {TruelyConnectedPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalNotConnected}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {notConnectedPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalwtgnonSOB}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {wtgnonsobPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalextMSB}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {extmsbPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalFalseContact}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "yellow" }}>
                {falseContactPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalnoFreeSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totallessFreeSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalnoandlessSample}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {nolessPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalTeasnaks}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {teasnaksPercentage + "%"}
              </td>

              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {totalretention}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {retentionPercentage + "%"}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {targetTrueContactTotal}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(
                  (totalTruelyConnected * totalValid) / totalConnected
                )}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(
                  (totalTruelyConnected * totalValid) / totalConnected
                ) - targetTrueContactTotal}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(perConsumeravgTotal / totalValid)}
              </td>
              <td style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
                {Math.round(
                  (totalTruelyConnected * totalValid) / totalConnected
                ) >= targetTrueContactTotal
                  ? Math.round(
                      (totalTruelyConnected * totalValid) / totalConnected -
                        targetTrueContactTotal
                    ) *
                    Math.round(perConsumeravgTotal / totalValid) *
                    0
                  : Math.round(
                      (totalTruelyConnected * totalValid) / totalConnected -
                        targetTrueContactTotal
                    ) * Math.round(perConsumeravgTotal / totalValid)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TmrReport;
