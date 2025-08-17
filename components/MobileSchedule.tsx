"use client";

import DailyView from "@/components/DailyView";
import ViewSelector, { ViewType } from "@/components/ViewSelector";
import React, { useState } from "react";

const MobileSchedule = () => {
  const [currentView, setCurrentView] = useState<ViewType>("daily");
  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="p-4 border-b bg-background">
        <ViewSelector currentView={currentView} onViewChange={setCurrentView} />
      </div>
      <div className="flex-1 overflow-hidden">
        {/* {currentView} */}
        <DailyView />
      </div>
    </div>
  );
};

export default MobileSchedule;
