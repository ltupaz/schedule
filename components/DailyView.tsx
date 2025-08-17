import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plus, Settings } from "lucide-react";
import React from "react";

const DailyView = () => {
  const currentDate = new Date();

  const isToday = currentDate.toDateString() === new Date().toDateString();

  const formatTime = (hour: number) => {
    const isPM = hour >= 12;
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour} ${isPM ? "PM" : "AM"}`;
  };

  const getCurrentTimePosition = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return {
      hour: hours,
      position: (minutes / 60) * 100,
    };
  };

  const currentTimePos = getCurrentTimePosition();

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
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

        {/* isToday Button */}

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Badge variant="default">Test</Badge>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          {Array.from({ length: 24 }, (_, hour) => {
            const isCurrentHour = isToday && hour === currentTimePos.hour;
            return (
              <div key={hour}>
                <div className="border p-3 min-h-16" id={`time-${hour}`}>
                  {/* Time label */}
                  <div className={`text-sm mb-2 ${isCurrentHour}`}>
                    {formatTime(hour)}
                  </div>

                  {/* TODO: Fix current time indicator */}
                  {/* Current time indicator */}
                  {isCurrentHour && (
                    <div
                      className="absolute left-0 right-0 h-0.5 bg-red-500 z-10"
                      style={{
                        top: `${20 + (currentTimePos.position / 100) * 40}px`,
                      }}
                    >
                      <div className="absolute -left-1 -top-1 size-2 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailyView;
