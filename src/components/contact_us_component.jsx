import React from "react";

export const ContactUsomponent = () => {
  return (
    <div >
      {" "}
      <section id="contact" className="ftco-appointment">
        <div className="overlay"></div>
        <div className="container-wrap">
          <div className="row no-gutters d-md-flex align-items-center">
            <div className="col-md-6 d-flex align-self-stretch">
              <div id="map"></div>
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
