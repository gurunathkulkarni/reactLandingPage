import React, { Component } from "react";
import { get } from "../../utils/apiMethods";
import { GET_PROFILE_DATA } from "../../utils/apiConstants";

import "./Profile.css";
import ProfileMainInfo from "../../components/ProfileMainInfo/ProfileMainInfo";
import Loader from "../../components/Loader/Loader";
import { profilepagedata } from "../../utils/seoConstants";
import OpenGraphTags from "../../components/OpenGraphTags/OpenGraphTags";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      loader: false,
    };
  }
  async componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ loader: true });
    const data = await get({ url: GET_PROFILE_DATA });

    if (data) {
      this.setState({ profileData: data, loader: false });
    } else {
      this.setState({ loader: false });
    }
  }
  render() {
    const { profileData, loader } = this.state;
    // console.log("profile", profileData);
    return (
      <div className="profileH3">
          <OpenGraphTags ogtags={profilepagedata}/>
        <h2 className="profileTitle">Profile</h2>
        {/* <ProfileMainInfo
          name={name}
          position={position}
          electedPlace={electedPlace}
          // General={General}
        /> */}

        {loader ? (
          <Loader />
        ) : (
          <>
            {this.state.profileData &&
              Object.keys(this.state.profileData).map((item) => {
                const type =
                  typeof profileData[item] === "object" ? true : false;
                const data = profileData[item];
                return (
                  <div className="profileP">
                    {type ? (
                      <>
                        {/* {console.log(
                      "nonsense",
                      data.name === "Positions held in Vidhana Sabha"
                    )} */}
                        {(data &&
                          data.name === "Positions held in Vidhana Sabha") ||
                        data.name === "Other positions" ? (
                          <>
                            <h3>{data.name}</h3>
                            {data &&
                              data.data &&
                              data.data.map((item) => {
                                return (
                                  <>
                                    <p>{item.pos_name}</p>
                                  </>
                                );
                              })}
                          </>
                        ) : (
                          <>
                            <h3>{data.name}</h3>

                            {data &&
                              data.data &&
                              data.data.map((item) => {
                                {
                                  // console.log("return", data.data);
                                }

                                return <p>{item.para_data}</p>;
                              })}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <>
                          <div>
                            {item && item === "name" ? (
                              <h3>
                                <strong>{data}</strong>
                              </h3>
                            ) : (
                              <>
                                {item && item === "General" ? (
                                  <>
                                    <h3>
                                      <strong>{item}</strong>
                                    </h3>
                                    <p>{data}</p>
                                  </>
                                ) : (
                                  <>
                                    <p className="items">{item}</p>
                                    <p>{data}</p>
                                  </>
                                )}
                              </>
                            )}
                          </div>
                        </>
                      </>
                    )}
                  </div>
                );
              })}
          </>
        )}
      </div>
    );
  }
}
