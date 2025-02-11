import { mapImage } from "@/app/assests";
import React from "react";

export const ContactUsComponent = () => {
  return (
    <div>
      <section id="contact" className="ftco-appointment">
        <div className="overlay"></div>
        <div className="container-wrap">
          <div className="row no-gutters d-md-flex align-items-center">
            <div className="col-md-6 d-flex align-self-stretch">
              <iframe
              className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.1387833921865!2d74.38708993198959!3d31.316038588784732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a900549a64b3%3A0x9d2a1a4b4cffbb8d!2sThe%20Pie%20Express!5e0!3m2!1sen!2s!4v1739284316348!5m2!1sen!2s"
              ></iframe>
            </div>
            <div className="col-md-6 appointment ftco-animate">
              <h3 className="mb-3">Contact Us</h3>
              <form action="#" className="appointment-form">
                <div className="d-md-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="d-me-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn-primary py-3 px-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
