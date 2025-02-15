import { about } from "@/app/assests";
import React from "react";
import { GiFullPizza } from "react-icons/gi";

export const AboutComponent = () => {
  return (
    <div >
      {" "}
      <section id="about" className="ftco-about d-md-flex">
        <div
          className="one-half img"
          style={{
            backgroundImage: `url(${about?.src})`,
          }}
        ></div>
        <div className="one-half ftco-animate">
          <div className="heading-section ftco-animate ">
            <h2 className="mb-4">
              Welcome to <span className="flaticon"><GiFullPizza /> Pizza</span> A Restaurant
            </h2>
          </div>
          <div>
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
