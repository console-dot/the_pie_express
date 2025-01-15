"use client";
import { Footer, FooterComponent } from "@/components/footer";
import { LandingPage } from "@/components/landing_page";
import { NavbarComponent } from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll to top on initial load
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
