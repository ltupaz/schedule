import React from "react";
import ViewSelector from "./ViewSelector";

const MobileSchedule = () => {
  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="p-4 border-b bg-background">
        <ViewSelector />
      </div>
    </div>
  );
};

export default MobileSchedule;
