import React, { useEffect } from "react";
import OpenGraphTags from "../../components/OpenGraphTags/OpenGraphTags";
import { aboutbjpdata } from "../../utils/seoConstants";
import {
  aboutBJP,
  bjpKarnataka,
  chronology,
  partyPresidents,
  presidentList,
} from "../../utils/StringConstants";
import "./bjp.css";
const Aboutbjp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="BJP">
          <OpenGraphTags ogtags={aboutbjpdata}/>

      <header className="page-header">
        <h1 className="BJPheading ">ABOUT BJP</h1>
      </header>
      <div className="px-5 mx-5 mt-3 BJP">
        <h5>National History</h5>
        {aboutBJP.map((data) => {
          return (
            <>
              {data.title ? (
                <>
                  <h5>{data.title}</h5>
                  <p>{data.info}</p>;
                </>
              ) : (
                <p>{data.info}</p>
              )}
            </>
          );
        })}
        <h5>Timeline Chronology</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              {chronology.map((item) => {
                return (
                  <tr>
                    <td>{item.th}</td>
                    <td>{item.td}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h5>Chronological List of Bharatiya Jana Sangh Presidents</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              {presidentList.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h5>Chronological List of Bharatiya Janata Party Presidents</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              {partyPresidents.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h5>BJP – FORGING AHEAD IN KARNATAKA</h5>
        {bjpKarnataka.map((data) => {
          return <p>{data}</p>;
        })}
      </div>
    </div>
  );
};

export default Aboutbjp;
