import React, { useEffect, useState } from "react";

let covid = require("novelcovid");

export default function Single() {
  // eslint-disable-next-line
  const [all, setall] = useState([]);
  const coronaapi = async () => {
    let data = await covid.getCountry();
    setall(data);
    console.log(all);
  };

  useEffect(() => {
    coronaapi();
  }, [all]);

  return (
    <div>
      {all
        .filter(function(all) {
          // filter first for friends
          return all.country === "India";
          // returns a new array
        })
        .map(function(all) {
          // map the new array to list items
          return (
            <React.Fragment>
              <div className="col-md-6 mx-auto text-center lead">
                <div className="display-8 text-bolder  shadow-lg p-2 ">
                  <div className="display-6 text-capitalized rounded  my-auto">
                    <span className="p-3 display-4 text-uppercase my-auto">
                      <span className="text-danger">COVID-19 </span>IN{" "}
                      {all.country}
                    </span>
                    <br></br>
                    <span className="my-auto d-inline-block p-3">
                      <img
                        src={all.countryInfo.flag}
                        className="img img-fluid my-auto"
                      ></img>
                    </span>
                  </div>{" "}
                </div>
                <table className="table table-borderless table-hover ">
                  <tr className=" rounded shadow-sm">
                    <td>
                      <span className="p-2 mx-0 bg-warning mr-1 rounded-circle d-inline-block"></span>{" "}
                    </td>
                    <td className="text-capitalized ">Cases</td>
                    <td>
                      <h3>{all.cases}</h3>{" "}
                    </td>
                  </tr>

                  {/* <tr className="text-capitalized bg-primary text-light rounded shadow-sm">
                      <td>active</td>
                      <td>{all.active}</td>
                    </tr> */}

                  {/* <tr className="text-capitalized bg-primary text-light rounded shadow-sm">
                      <td className="text-capitalized">critical</td>
                      <td>{all.critical}</td>
                    </tr> */}

                  <tr className="text-capitalized  rounded shadow-sm">
                    <td>
                      <span className="p-2 mx-0 bg-danger mr-1 rounded-circle d-inline-block"></span>
                    </td>
                    <td className="text-capitalized">deaths</td>
                    <td className="text-danger">
                      <h3> {all.deaths}</h3>
                    </td>
                  </tr>
                  <tr className="text-capitalized  rounded shadow-sm">
                    <td>
                      <span className="p-2  mx-0 bg-success mr-1 rounded-circle d-inline-block"></span>
                    </td>
                    <td className="text-capitalized">recovered</td>
                    <td className="text-success">
                      <h3> {all.recovered}</h3>
                    </td>
                  </tr>
                  {/* <tr className="text-capitalized bg-primary text-light rounded shadow-sm">
                      <td className="text-capitalized">todayCases</td>
                      <td>{all.todayCases}</td>
                    </tr> */}
                  {/* <tr className="text-capitalized  rounded shadow-sm">
                      <td className="text-capitalized">
                        <span className="p-2 bg-danger mr-1 rounded-info d-inline-block"></span>
                        todayDeaths
                      </td>
                      <td>{all.todayDeaths}</td>
                    </tr> */}
                </table>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}
