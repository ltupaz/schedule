import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export type ViewType = "daily" | "weekly" | "monthly";

interface ViewSelectorProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewSelector = ({ currentView, onViewChange }: ViewSelectorProps) => {
  return (
    <Tabs
      value={currentView}
      onValueChange={(value) => onViewChange(value as ViewType)}
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="daily">Daily</TabsTrigger>
        <TabsTrigger value="weekly">Weekly</TabsTrigger>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ViewSelector;
