import React from "react";
import { ScanCard } from "./ScanCard";
import { Text } from "./Text";

export function Section() {
  return (
    <div className="h-32 flex justify-between items-center">
      <Text />
      <ScanCard />
      <ScanCard />
      <ScanCard />
    </div>
  );
}
