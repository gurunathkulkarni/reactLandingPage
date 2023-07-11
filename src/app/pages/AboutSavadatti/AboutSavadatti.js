import React, { useEffect } from "react";
import OpenGraphTags from "../../components/OpenGraphTags/OpenGraphTags";
import { aboutsavdattidata } from "../../utils/seoConstants";
import { aboutSavadatti } from "../../utils/StringConstants";
import "../AboutBJP/bjp.css";

const Aboutsavadatti = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="BJP">
      <OpenGraphTags ogtags={aboutsavdattidata} />
      <header className="page-header">
        <h1 className="BJPheading ">ABOUT SAVADATTI</h1>
      </header>
      <div className="px-5 mx-5 mt-3 mob-res">
        {aboutSavadatti.map((data) => {
          return (
            <>
              {data.title ? (
                <>
                  <h5>{data.title}</h5>
                  <p>{data.info}</p>
                </>
              ) : (
                <p>{data.info}</p>
              )}
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Aboutsavadatti;
