import React, { useContext } from "react";
// import "../css/style.css";
import { Slidercomponent } from "./home_slider_component";
import { IntroComponent } from "./intro_component";
import { AboutComponent } from "./adout_component";
import { ServicesComponent } from "./services_component";
import { MenuComponent } from "./menu_component";
import { BlogComponent } from "./blog_component";
import { ContactUsComponent } from "./contact_us_component";
import AppContext from "@/context";
import { CartPage } from "./basketModal";
export const LandingPage = () => {
  const { basketModal, setBasketModal } = useContext(AppContext);

  return (
    <div style={{ position: "relative" }}>
      {basketModal && (
        <div
          className="ftco-section md:px-[10px] overflow-auto items-start p-0 md:p-auto md:items-center"
          style={{
            position: "fixed",
            zIndex: 50,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
           }}
            
        >
          <div
            style={{
              background: "#1A191E",
              borderRadius: "8px",
              position: "relative",
            
            }}
            className="max-w-6xl md:p-6 p-3"
          >
            <button
              onClick={() => setBasketModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
              className="px-2 md:right-4"
            >
              X
            </button>
            <CartPage />
          </div>
        </div>
      )}
      <Slidercomponent />
      <IntroComponent />
      <MenuComponent />
      <ServicesComponent />
      <BlogComponent />
      <AboutComponent />
      <ContactUsComponent />
    </div>
  );
};
