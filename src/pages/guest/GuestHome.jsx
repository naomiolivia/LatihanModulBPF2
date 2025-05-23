import React from "react";
import About from "./About";
import ProductList from "./ProductList";
import TestimonialList from "./TestimonialList";
import GuestHero from "../../components/GuestHero";
import GuestHero2 from "../../components/GuestHero2";
import Member from "./Member";

export default function GuestHome() {
  return (
    <>
      <GuestHero />
      <GuestHero2/>
      <ProductList />
      <About />
      <TestimonialList />
      <Member />
    </>
  );
}
