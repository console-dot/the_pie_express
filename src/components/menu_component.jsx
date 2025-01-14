import {
  about,
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5,
  pizza6,
  pizza7,
  pizza8,
} from "@/app/assests";
import React from "react";

export const MenuComponent = () => {
  return (
    <div >
      <section id="menu"  className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Hot Pizza Meals</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="container-wrap">
          <div className="row no-gutters d-flex">
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza1?.src})`,
                  }}
                ></a>
                <div className="text p-4">
                  <h3>Italian Pizza</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia{" "}
                  </p>
                  <p className="price">
                    <span>$2.90</span>{" "}
                    <a href="#" className="ml-2 btn btn-white btn-outline-white">
                      Order
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza2?.src})`,
                  }}
                ></a>
                <div className="text p-4">
                  <h3>Greek Pizza</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p className="price">
                    <span>$2.90</span>{" "}
                    <a href="#" className="ml-2 btn btn-white btn-outline-white">
                      Order
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza3?.src})`,
                  }}
                ></a>
                <div className="text p-4">
                  <h3>Caucasian Pizza</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p className="price">
                    <span>$2.90</span>{" "}
                    <a href="#" className="ml-2 btn btn-white btn-outline-white">
                      Order
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a
                  href="#"
                  className="img order-lg-last"
                  style={{
                    backgroundImage: `url(${pizza4?.src})`,
                  }}
                ></a>
                <div className="text p-4">
                  <h3>American Pizza</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia{" "}
                  </p>
                  <p className="price">
                    <span>$2.90</span>{" "}
                    <a href="#" className="ml-2 btn btn-white btn-outline-white">
                      Order
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a
                  href="#"
                  className="img order-lg-last"
                  style={{
                    backgroundImage: `url(${pizza5?.src})`,
                  }}
                ></a>
                <div className="text p-4">
                  <h3>Tomatoe Pie</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p className="price">
                    <span>$2.90</span>{" "}
                    <a href="#" className="ml-2 btn btn-white btn-outline-white">
                      Order
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex ftco-animate">
              <div className="services-wrap d-flex">
                <a
                  href="#"
                  className="img order-lg-last"
                  style={{
                    backgroundImage: `url(${pizza6?.src})`,
                  }}
                ></a>
                <div className="text p-4">
                  <h3>Margherita</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p className="price">
                    <span>$2.90</span>{" "}
                    <a href="#" className="ml-2 btn btn-white btn-outline-white">
                      Order
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Our Menu Pricing</h2>
              <p className="flip">
                <span className="deg1"></span>
                <span className="deg2"></span>
                <span className="deg3"></span>
              </p>
              <p className="mt-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza1?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Italian Pizza</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza2?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Hawaiian Pizza</span>
                    </h3>
                    <span className="price">$29.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza3?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Greek Pizza</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza4?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Bacon Crispy Thins</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza5?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Hawaiian Special</span>
                    </h3>
                    <span className="price">$49.91</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza6?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Ultimate Overload</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza7?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Bacon Pizza</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-entry d-flex ftco-animate">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${pizza8?.src})`,
                  }}
                ></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>Ham &amp; Pineapple</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  id="menu" className="ftco-menu">
        <div className="container-fluid">
          <div className="row d-md-flex">
            <div
              className="col-lg-4 ftco-animate img f-menu-img mb-5 mb-md-0"
              style={{
                backgroundImage: `url(${about?.src})`,
              }}
            ></div>
            <div className="col-lg-8 ftco-animate p-md-5">
              <div className="row">
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div
                    className="nav ftco-animate nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-1-tab"
                      data-toggle="pill"
                      href="#v-pills-1"
                      role="tab"
                      aria-controls="v-pills-1"
                      aria-selected="true"
                    >
                      Pizza
                    </a>

                    <a
                      className="nav-link"
                      id="v-pills-2-tab"
                      data-toggle="pill"
                      href="#v-pills-2"
                      role="tab"
                      aria-controls="v-pills-2"
                      aria-selected="false"
                    >
                      Drinks
                    </a>

                    <a
                      className="nav-link"
                      id="v-pills-3-tab"
                      data-toggle="pill"
                      href="#v-pills-3"
                      role="tab"
                      aria-controls="v-pills-3"
                      aria-selected="false"
                    >
                      Burgers
                    </a>

                    <a
                      className="nav-link"
                      id="v-pills-4-tab"
                      data-toggle="pill"
                      href="#v-pills-4"
                      role="tab"
                      aria-controls="v-pills-4"
                      aria-selected="false"
                    >
                      Pasta
                    </a>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div className="tab-content ftco-animate" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-1"
                      role="tabpanel"
                      aria-labelledby="v-pills-1-tab"
                    >
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              style={{
                                backgroundImage: `url(${pizza1?.src})`,
                              }}
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              style={{
                                backgroundImage: `url(${pizza2?.src})`,
                              }}
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              style={{
                                backgroundImage: `url(${pizza3?.src})`,
                              }}
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-2"
                      role="tabpanel"
                      aria-labelledby="v-pills-2-tab"
                    >
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/drink-1.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Lemonade Juice</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/drink-2.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Pineapple Juice</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/drink-3.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Soda Drinks</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-3"
                      role="tabpanel"
                      aria-labelledby="v-pills-3-tab"
                    >
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/burger-1.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/burger-2.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/burger-3.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-4"
                      role="tabpanel"
                      aria-labelledby="v-pills-4-tab"
                    >
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/pasta-1.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/pasta-2.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="menu-wrap">
                            <a
                              href="#"
                              className="menu-img img mb-4"
                              // style="background-image: url(images/pasta-3.jpg);"
                            ></a>
                            <div className="text">
                              <h3>
                                <a href="#">Itallian Pizza</a>
                              </h3>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                              </p>
                              <p className="price">
                                <span>$2.90</span>
                              </p>
                              <p>
                                <a
                                  href="#"
                                  className="btn btn-white btn-outline-white"
                                >
                                  Add to cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
