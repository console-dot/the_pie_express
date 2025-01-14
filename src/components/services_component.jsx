import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { LiaPizzaSliceSolid } from "react-icons/lia";
export const ServicesComponent = () => {
  return (
    <>
      {" "}
      <section id="services" className="ftco-section ftco-services">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Our Services</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="">
                    {" "}
                    <IoFastFoodSharp />
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Healthy Foods</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className="">
                  <FaShippingFast />
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Fastest Delivery</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className=""><LiaPizzaSliceSolid /></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Original Recipes</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
