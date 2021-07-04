import React, { useEffect, useState } from "react";

const TerritoryReport = () => {
  const [territoryRport, setTerritoryReport] = useState([]);
  console.log(territoryRport);
  useEffect(() => {
    fetch("http://localhost:5002/territoryReports")
      .then((res) => res.json())
      .then((data) => setTerritoryReport(data));
  }, []);
  const totalTarget = territoryRport[0]?.grandTarget;
  const totalValid = territoryRport[0]?.grandValiddata;
  const totalLessContact = totalTarget - totalValid;
  const lessConnectedPercentage = Math.round(
    (totalLessContact / totalTarget) * 100
  );
  const validPercentage = Math.round((totalValid / totalTarget) * 100);
  const totalConnected = territoryRport[0]?.grandConnectedCall;
  const connectedPercentage = Math.round((totalConnected / totalValid) * 100);
  const totalTruelyConnected = territoryRport[0]?.grandTrueContact;
  const TruelyConnectedPercentage = Math.round(
    (totalTruelyConnected / totalConnected) * 100
  );
  const totalNotConnected = territoryRport[0]?.grandNotContacted;
  const notConnectedPercentage = Math.round(
    (totalNotConnected / totalConnected) * 100
  );
  const totalwtgnonSOB =
    territoryRport[0]?.grandNonSOB1 + territoryRport[0]?.grandNonSOB2;
  const wtgnonsobPercentage = Math.round(
    (totalwtgnonSOB / totalConnected) * 100
  );
  const totalextMSB = territoryRport[0]?.grandextMSB;
  const extmsbPercentage = Math.round((totalextMSB / totalConnected) * 100);
  const totalFalseContact = territoryRport[0]?.grandFalseContact;
  const falseContactPercentage = Math.round(
    (totalFalseContact / totalConnected) * 100
  );
  const totalnoFreeSample = territoryRport[0]?.grandNoFreeSample;
  const totallessFreeSample = territoryRport[0]?.grandLessFreeSample;
  const totalnoandlessSample = totalnoFreeSample + totallessFreeSample;
  const nolessPercentage = Math.round(
    (totalnoandlessSample / totalConnected) * 100
  );
  const totalTeasnaks = territoryRport[0]?.grandTeaSnaks;
  const teasnaksPercentage = Math.round((totalTeasnaks / totalConnected) * 100);
  const totalretention = territoryRport[0]?.grandRetention;
  const retentionPercentage = Math.round(
    (totalretention / totalConnected) * 100
  );
  return (
    <div className="m-3">
      <h2>Territory Report</h2>
      <div className="text-center">
        <table className="table bordered table-hover">
          <thead>
            <tr>
              <th
                Style="color:blue;"
                className="text-center"
                colspan="2"
                scope="colgroup"
              >
                Territory Information
              </th>
              <th
                colspan="5"
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
                colspan="8"
                scope="colgroup"
                Style="color:blue;"
                className="text-center"
              >
                False Contact
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

              <th className="align-middle">Non SOB</th>
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
            {territoryRport.map((query, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{query.userId}</td>
                <td>{query.sumTarget}</td>

                <td>{query.sumTarget - query.sumValiddata}</td>
                <td>
                  {isNaN(
                    Math.round(
                      ((query.sumTarget - query.sumValiddata) /
                        query.sumTarget) *
                        100
                    )
                  )
                    ? 0
                    : Math.round(
                        ((query.sumTarget - query.sumValiddata) /
                          query.sumTarget) *
                          100
                      )}
                </td>
                <td>{query.sumValiddata}</td>
                <td>
                  {isNaN(
                    Math.round((query.sumValiddata / query.sumTarget) * 100)
                  )
                    ? 0
                    : Math.round((query.sumValiddata / query.sumTarget) * 100)}
                </td>

                <td>{query.sumConnectedCall}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumConnectedCall / query.sumValiddata) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumConnectedCall / query.sumValiddata) * 100
                      )}
                </td>

                <td>{query.sumTrueContact}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumTrueContact / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumTrueContact / query.sumConnectedCall) * 100
                      )}
                </td>

                <td>{query.sumNotContacted}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumNotContacted / query.sumNotContacted) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumNotContacted / query.sumNotContacted) * 100
                      )}
                </td>

                <td>{query.sumNonSOB1 + query.sumNonSOB2}</td>
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
                      )}
                </td>
                <td>{query.sumextMSB}</td>
                <td>
                  {isNaN(
                    Math.round((query.sumextMSB / query.sumConnectedCall) * 100)
                  )
                    ? 0
                    : Math.round(
                        (query.sumextMSB / query.sumConnectedCall) * 100
                      )}
                </td>
                <td>{query.sumFalseContact}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumFalseContact / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumFalseContact / query.sumConnectedCall) * 100
                      )}
                </td>

                <td>{query.sumNoFreeSample}</td>
                <td>{query.sumLessFreeSample}</td>
                <td>{query.sumNoFreeSample + query.sumLessFreeSample}</td>
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
                      )}
                </td>
                <td>{query.sumTeaSnaks}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumTeaSnaks / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumTeaSnaks / query.sumConnectedCall) * 100
                      )}
                </td>

                <td>{query.sumRetention}</td>
                <td>
                  {isNaN(
                    Math.round(
                      (query.sumRetention / query.sumConnectedCall) * 100
                    )
                  )
                    ? 0
                    : Math.round(
                        (query.sumRetention / query.sumConnectedCall) * 100
                      )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Total</td>

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

export default TerritoryReport;
