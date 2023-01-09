import React from "react";
import { Card } from "./Card";

export function Footer() {
  return (
    <div className="flex justify-center items-center">
      <h3 className="w-40 text-lg font-thin uppercase p-4 -mt-4">Other</h3>
      <Card />
      <hr className="w-10 bg-black items-center" />
       <Card />
      <hr className="w-10 bg-black items-center" />
      <Card />
    </div>
  );
}
