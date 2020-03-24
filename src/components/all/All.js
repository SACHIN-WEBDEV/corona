import React, { useEffect, useState } from "react";

// import Moment from "react-moment";
// import "moment-timezone";

let covid = require("novelcovid");

export default function All() {
  const [all, setall] = useState([]);
  useEffect(() => {
    coronaapi();
  }, []);

  const coronaapi = async () => {
    let data = await covid.getCountry();
    setall(data);
    console.log(data);
  };

  return (
    <div>
      {" "}
      <div class="table-responsive-md">
        <table class="table table-borderless table-hover " id="table">
          <thead className="sticky-top bg-light ">
            <tr className="text-capitalize border-bottom   font-italic ">
              <th className="lead table-active text-center">country</th>
              <th className="lead table-info text-center">cases</th>
              <th className="lead table-warning text-center">active</th>
              <th className="lead text-center">todayCases</th>
              <th className="lead bg-danger text-light text-center">deaths</th>
              <th className="lead table-danger  text-center">todayDeaths</th>
              <th className="lead text-center table-primary">critical</th>
              <th className="lead  table-success text-center">recovered</th>
              <th className="lead text-center">casesPerOneMillion</th>
            </tr>
          </thead>
          {all.map(item => (
            <tbody key={item.id}>
              <tr className="text-center">
                <td className="mx-auto table-active lead text-center">
                  <div className="row mx-auto">
                    <div className="col p-1">{item.country}</div>
                    <div className="col p-1">
                      <img
                        src={
                          item.countryInfo.flag ===
                          "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/unknow.png"
                            ? "none"
                            : item.countryInfo.flag
                        }
                        className="img img-fluid mx-auto"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                </td>
                <td className="table-info">{item.cases}</td>
                <td className="table-warning">{item.active}</td>
                <td>{item.todayCases}</td>
                <td class="bg-danger text-light">{item.deaths}</td>
                <td className="table-danger">{item.todayDeaths}</td>
                <td className="table-primary">{item.critical}</td>
                <td className="table-success">{item.recovered}</td>

                <td>{item.casesPerOneMillion}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
