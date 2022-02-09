import React from "react";
import BottomNavLabel from "./BottomNavLabel";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <main>{props.children} </main>
      <BottomNavLabel />
    </>
  );
}
