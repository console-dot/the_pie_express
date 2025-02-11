"use client";
import { FooterComponent } from "@/components/footer";
import { LandingPage } from "@/components/landing_page";
import { NavbarComponent } from "@/components/navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <NavbarComponent />
    <LandingPage/>
    <FooterComponent/>
    </>
  );
}
