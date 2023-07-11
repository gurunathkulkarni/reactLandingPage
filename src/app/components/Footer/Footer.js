import React, { Component } from "react";
import FbIframe from "../FbIframe/FbIframe";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { faceBook, twitter } from "../../utils/StringConstants";
import Twitterframe from "../Twitter/TwitterFrame";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="card" style={{ marginTop: "8px" }}>
          <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
              <div class="footer-text pull-left">
                <div class="d-flex">
                  <img
                    className="d-block img-fluid logoImg"
                    src={logo}
                    alt="Logo"
                    width="41%"
                  />
                </div>
                <p class="card-text">
                  Bharatiya Janata Party is today the most prominent member of
                  the family of organisations known as the “Sangh Parivar”. And
                  RSS has always been dubbed “communal”, “reactionary” and what
                  not by its detractors. Sanghs of swayamsevaks have of course
                  always shaken off that criticism like so much water off a
                  duck’s back. They have never had any doubt that the
                  organisation is wedded to national unity, national integrity,
                  national identity and national strength through individual
                  character and national character. And today this organisation
                  is poised for a great leap forward. Even its long- time
                  detractors think and say that now BJP is “unstoppable”.
                </p>
                <div class="social mt-2 mb-3">
                  <div class="social-icons">
                    <FaYoutubeSquare className="footerIcon" />

                    <a className="links" href={faceBook} target="_blank">
                      <FaFacebookSquare className="footerIcon" />
                    </a>
                    <a className="links" href={twitter} target="_blank">
                      <FaTwitterSquare className="footerIcon" />
                    </a>
                    {/* <FaLinkedin className="footerIcon" />{" "} */}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-4">
              <h5 class="heading">Twitter Updates</h5>
              <Twitterframe />
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <h5 class="heading">Facebook Updates</h5>
              <FbIframe />
            </div>
          </div>
          <div class="divider mb-4"> </div>
          <div class="row" style={{ fontSize: "10px" }}>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="pull-left">
                <p className="copyPara">
                  Copyright©2022 Anand Mamani, All Rights Reserved. Powered by
                  poojasguru.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
