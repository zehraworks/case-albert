import React from "react";
import { Aside } from "./Aside";
import { Header } from "./Header";
import { Overview } from "./Overview";
import { Section } from "./Section";

export function Main() {
  return (
    <div className="h-screen w-full p-8">
      <Header />
      <div className="flex h-[450px]">
        <Overview />
        <Aside />
      </div>
      <Section />
    </div>
  );
}
