import React from "react";
import GuestNavbar from "../components/GuestNavbar";
import GuestFooter from "../components/GuestFooter";
import GuestTopBar from "../components/GuestTopBar";

export default function GuestLayout({ children }) {
  return (
    <div>
      <GuestTopBar/>
      <GuestNavbar />
      <main>{children}</main>
      <GuestFooter />
    </div>
  );
}
