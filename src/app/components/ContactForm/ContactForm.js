import React, { Component } from "react";
import "./ContactForm.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { faceBook, twitter } from "../../utils/StringConstants";
import { post } from "../../utils/apiMethods";
import { CONTACT_US } from "../../utils/apiConstants";

const emailTest =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexOnlyNumber = /^[0-9]+$/;
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameErr: "",
      email: "",
      emailErr: "",
      phoneNumber: "",
      numberErr: "",
      message: "",
      messageErr: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };
  handleValidation = (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, message } = this.state;

    if (name === "") {
      this.setState({ nameErr: "Please enter your name " });
      return false;
    } else {
      this.setState({ nameErr: "" });
    }

    if (email === "") {
      this.setState({ emailErr: "Please enter your email " });
    } else if (!emailTest.test(email)) {
      this.setState({ emailErr: "Please enter valid email " });
      return false;
    } else {
      this.setState({ emailErr: "" });
    }

    if (phoneNumber === "") {
      this.setState({ numberErr: "Please enter your phone number " });
    } else if (!regexOnlyNumber.test(phoneNumber)) {
      this.setState({ numberErr: "Please enter valid number " });
    } else if (phoneNumber.length < 10) {
      this.setState({ numberErr: "Phone number should be 10 digits " });
      return false;
    } else {
      this.setState({ numberErr: "" });
    }

    if (message === "") {
      this.setState({ messageErr: "Please enter message" });
      return false;
    } else {
      this.setState({ messageErr: " " });
      this.onSubmit();
    }
  };
  onSubmit = async () => {
    const { name, email, phoneNumber, message } = this.state;

    const obj = {
      name: name,
      email: email,
      phone_number: phoneNumber,
      message: message,
    };

    const response = await post({ url: CONTACT_US, obj: obj });
    if (response.status) {
      alert(response.message);
      window.location.reload();
    }
  };
  render() {
    const {
      nameErr,
      emailErr,
      numberErr,
      messageErr,
      name,
      email,
      phoneNumber,
      message,
    } = this.state;
    return (
      <div class="container conContainer">
        <div class="Contactform">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              {" "}
              To contact us . Please fill up the form with required details.
            </p>
            <div class="info">
              <div class="social-information">
                {" "}
                <BiMap className="contactAddIcon" />
                <p>RAMAPUR SITE, SAVADATTI</p>
              </div>
              <div class="social-information">
                {" "}
                <AiFillMail className="contactAddIcon1" />
                <p>anandmamani@gmail.com</p>
              </div>
              <div class="social-information">
                {" "}
                <FiPhoneCall className="contactAddIcon1" />
                <p>+91 9611656516</p>
              </div>
              <div class="social-information">
                {" "}
                <FiPhoneCall className="contactAddIcon1" />
                <p>+91 083300295170</p>
              </div>
            </div>
            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                {" "}
                <a href="#">
                  {" "}
                  <FaYoutubeSquare className="contactIcon" />{" "}
                </a>{" "}
                <a href={faceBook} target="_blank">
                  {" "}
                  <FaFacebookSquare className="contactIcon" />{" "}
                </a>{" "}
                <a href={twitter} target="_blank">
                  {" "}
                  <FaTwitterSquare className="contactIcon" />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div class="contact-info-form">
            {" "}
            <span class="circle one"></span> <span class="circle two"></span>
            <form
              action="#"
              onclick="return false;"
              autocomplete="off"
              className="mainForm"
            >
              <h3 class="title">Contact us</h3>
              <div class="social-input-containers">
                {" "}
                <input
                  type="text"
                  name="name"
                  class="inputBox"
                  placeholder="Name"
                  onChange={(e) => this.handleChange(e)}
                  value={name}
                />{" "}
                {nameErr ? <p className="error">{nameErr}</p> : ""}
              </div>
              <div class="social-input-containers">
                {" "}
                <input
                  type="email"
                  name="email"
                  class="inputBox"
                  placeholder="Email"
                  onChange={(e) => this.handleChange(e)}
                  value={email}
                />{" "}
                {emailErr ? <p className="error">{emailErr}</p> : ""}
              </div>
              <div class="social-input-containers">
                {" "}
                <input
                  type="tel"
                  name="phoneNumber"
                  class="inputBox"
                  placeholder="Phone"
                  maxLength={10}
                  onChange={(e) => this.handleChange(e)}
                  value={phoneNumber}
                />{" "}
                {numberErr ? <p className="error">{numberErr}</p> : ""}
              </div>
              <div class="social-input-containers textarea">
                {" "}
                <textarea
                  name="message"
                  class="inputBox"
                  placeholder="Message"
                  onChange={(e) => this.handleChange(e)}
                  value={message}
                ></textarea>{" "}
              </div>{" "}
              {messageErr ? <p className="error">{messageErr}</p> : ""}
              <button
                onClick={(e) => this.handleValidation(e)}
                class="btnContact"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
