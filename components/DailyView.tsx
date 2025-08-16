import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, Settings } from "lucide-react";
import React from "react";

const DailyView = () => {
  const currentDate = new Date();
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-4 border-b bg-background sticky top-0 z-20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <div className="text-center">
            <div className="text-xs">
              {currentDate.toLocaleDateString("en-US", { weekday: "short" })}
            </div>
            <div className="text-2xl">{currentDate.getDate()}</div>
            <div className="text-lg text-muted-foreground">
              {currentDate.toLocaleDateString("en-US", {
                month: "short",
                // year: "2-digit",
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Settings className="size-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Plus className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyView;
