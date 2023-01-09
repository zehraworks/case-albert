import React from "react";
import { Expanded, Unexpanded } from "./EvaluationCard";
import { OverAll } from "./OverAll";

export function Content() {
  return (
    <div className="h-64">
      <Expanded className="absolute " />
      <Unexpanded className="absolute -mr-3"/>
      <Unexpanded />
      <OverAll />
    </div>
  );
}
