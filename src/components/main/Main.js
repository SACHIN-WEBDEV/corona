import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
let covid = require("novelcovid");

export default function Main() {
  const [main, setmain] = useState("");
  useEffect(() => {
    coronaapi();
  }, []);

  const coronaapi = async () => {
    let data = await covid.getAll();
    setmain(data);
    console.log(data);
  };
  return (
    <div>
      <div className="display-4 text-uppercase text-center my-3">
        All over World <span className="text-danger">COVID-19</span> Cases
      </div>{" "}
      <div className="col-md-6 mx-auto text-center lead">
        {" "}
        <table className="table table-borderless table-hover ">
          <tr className=" rounded shadow-sm">
            <td>
              <span className="p-2 mx-0 bg-warning mr-1 rounded-circle d-inline-block"></span>{" "}
            </td>
            <td className="text-capitalized">Cases</td>
            <td>
              {" "}
              <h3>{main.cases}</h3>
            </td>
          </tr>
          <tr className=" rounded shadow-sm">
            <td>
              <span className="p-2 mx-0 bg-danger mr-1 rounded-circle d-inline-block"></span>{" "}
            </td>
            <td className="text-capitalized">Death</td>
            <td className="text-danger">
              <h3>{main.deaths}</h3>
            </td>
          </tr>
          <tr className=" rounded shadow-sm">
            <td>
              <span className="p-2 mx-0 bg-success mr-1 rounded-circle d-inline-block"></span>{" "}
            </td>
            <td className="text-capitalized">Recovered</td>
            <td className="text-success">
              <h3>{main.recovered}</h3>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <span className="p-2 mx-0 bg-light mr-1 rounded-circle d-inline-block"></span>{" "}
            </td>
            <td>Updated On</td>
            <td>
              <Moment interval={1000} format="DD/MM/YYYY HH:mm" withTitle>
                {main.updated}
              </Moment>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
