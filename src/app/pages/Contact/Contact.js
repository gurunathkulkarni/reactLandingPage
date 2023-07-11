import React, { Component } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import OpenGraphTags from "../../components/OpenGraphTags/OpenGraphTags";
import { contactusdata } from "../../utils/seoConstants";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <OpenGraphTags ogtags={contactusdata} />

        <div class="row justify-content-center contactRow">
          <div class="col-md-12 text-center contact-heading ">
            <h2 class="heading-section">Contact Us</h2>
          </div>
        </div>
        <ContactForm />
      </div>
    );
  }
}
