import React, { Component } from "react";
import "./Header.css";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import { faceBook, twitter } from "../../utils/StringConstants";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
