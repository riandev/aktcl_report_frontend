import React, { useEffect, useState } from "react";
import "./TmrReport.css";

const TmrReport = () => {
  const [counted, setCounts] = useState([]);
  console.log(counted);
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
  const nonSOB1=counted[0]?.noSOB1_total
  const nonSOB2=counted[0]?.nonSOB2_total
  const totalwtgnonSOB = nonSOB1 + nonSOB2;
  console.log(nonSOB1,nonSOB2);
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
  return (
    <div className="m-3">
      <h2>TMS TMR Report</h2>
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
                  )}
                </td>
                <td>{query.valid_Data_count}</td>
                <td>
                  {Math.round((query.valid_Data_count / query.target) * 100)}
                </td>

                <td>{query.connected_Call_count}</td>
                <td>
                  {Math.round(
                    (query.connected_Call_count / query.valid_Data_count) * 100
                  )}
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
                  )}
                </td>

                <td>{query.non_SOB1_count + query.non_SOB2_count}</td>
                <td>
                  {Math.round(
                    ((query.non_SOB1_count + query.non_SOB2_count) /
                      query.connected_Call_count) *
                      100
                  )}
                </td>
                <td>{query.ext_MSB_count}</td>
                <td>
                  {Math.round(
                    (query.ext_MSB_count / query.connected_Call_count) * 100
                  )}
                </td>
                <td>{query.false_Contact_count}</td>
                <td>
                  {Math.round(
                    (query.false_Contact_count / query.connected_Call_count) *
                      100
                  )}
                </td>

                <td>{query.no_Free_Sample}</td>
                <td>{query.less_Free_Sample}</td>
                <td>{query.no_Free_Sample + query.less_Free_Sample}</td>
                <td>
                  {Math.round(
                    ((query.no_Free_Sample + query.less_Free_Sample) /
                      query.connected_Call_count) *
                      100
                  )}
                </td>
                <td>{query.teaSnaks}</td>
                <td>
                  {Math.round(
                    (query.teaSnaks / query.connected_Call_count) * 100
                  )}
                </td>

                <td>{query.retention}</td>
                <td>
                  {Math.round(
                    (query.retention / query.connected_Call_count) * 100
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">Total</td>

              <td>{totalTarget}</td>

              <td>{totalLessContact}</td>
              <td>{lessConnectedPercentage}</td>
              <td>{totalValid}</td>
              <td>{validPercentage}</td>

              <td>{totalConnected}</td>
              <td>{connectedPercentage}</td>

              <td>{totalTruelyConnected}</td>
              <td>{TruelyConnectedPercentage}</td>

              <td>{totalNotConnected}</td>
              <td>{notConnectedPercentage}</td>

              <td>{totalwtgnonSOB}</td>
              <td>{wtgnonsobPercentage}</td>
              <td>{totalextMSB}</td>
              <td>{extmsbPercentage}</td>
              <td>{totalFalseContact}</td>
              <td>{falseContactPercentage}</td>

              <td>{totalnoFreeSample}</td>
              <td>{totallessFreeSample}</td>
              <td>{totalnoandlessSample}</td>
              <td>{nolessPercentage}</td>
              <td>{totalTeasnaks}</td>
              <td>{teasnaksPercentage}</td>

              <td>{totalretention}</td>
              <td>{retentionPercentage}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TmrReport;
