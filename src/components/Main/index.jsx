import React from "react";
import { Aside } from "./Aside";
import { Header } from "./Header";
import { Overview } from "./Overview";
import { Section } from "./Section";

export function Main() {
  return (
    <div className="h-screen w-full p-8">
      <Header />
      <div className="flex bg-red-400 h-[450px]">
        <Overview />
        <Aside />
      </div>
      <Section />
    </div>
  );
}
