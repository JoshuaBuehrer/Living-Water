import React, { use, useEffect } from "react";
import { ColorTheme } from "../ColorTheme";

const GOAL_BAPTISMS = 1000;

type ProgressBarProps = {
  numBaptisms: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ numBaptisms }) => {
  const percentComplete = (numBaptisms / GOAL_BAPTISMS) * 100;

  return (
    <div>
      <div
        style={{
          marginRight: "1rem",
          textAlignLast: "right",
          color: ColorTheme.textColorLight,
        }}
      >
        {percentComplete.toFixed(0)}% Complete
      </div>
      <Bar percentComplete={percentComplete} numBaptisms={numBaptisms} />
    </div>
  );
};

export default ProgressBar;

type BarProps = {
  percentComplete: number;
  numBaptisms: number;
};

const Bar: React.FC<BarProps> = ({ percentComplete, numBaptisms }) => (
  <div
    style={{
      background: ColorTheme.backgroundColorSecondary,
      width: "100%",
      height: "1.5rem",
      borderRadius: "0.5rem /* 8px */",
    }}
  >
    <div
      className="rounded-lg shimmer-effect"
      style={{
        width: `${percentComplete}%`,
        background: ColorTheme.primaryColorTertiary,
        minWidth: "1rem",
        height: "100%",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {numBaptisms}
    </div>
  </div>
);
