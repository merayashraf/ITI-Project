import React from "react";
import './Contact.css'
function ContactUs() {
  return (
    <>
      <h1 className="contacth1">Contact Us</h1>
      <div className="contactrow">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary ">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;