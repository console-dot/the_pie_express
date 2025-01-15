import React from "react";
// import "../css/style.css";
import { Slidercomponent } from "./home_slider_component";
import { IntroComponent } from "./intro_component";
import { AboutComponent } from "./adout_component";
import { ServicesComponent } from "./services_component";
import { MenuComponent } from "./menu_component";
import { BlogComponent } from "./blog_component";
import { ContactUsomponent } from "./contact_us_component";
export const LandingPage = () => {
  return (
    <>
      <Slidercomponent />
      <MenuComponent />
      <IntroComponent />
      <ServicesComponent/>
      <BlogComponent/>
      <AboutComponent/>
      <ContactUsomponent/>
      
    </>
  );
};
