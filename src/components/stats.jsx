"use client"
import { allAudits } from "contentlayer/generated";
import { useEffect, useState } from "react";

const Stats = () => {
  const [highsAndMeds, setHighsAndMeds] = useState(0);
  const [cumulativeEarnings, setCumulativeEarnings] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      let totalHMs = 0;
      let totalEarnings = 205.02;

      allAudits.forEach((audit) => {
        if (audit.published) {
          totalHMs += Number(audit.HMs) || 0;
          totalEarnings += Number(audit.earnings) || 0;
        }
      });

      setHighsAndMeds(totalHMs);
      setCumulativeEarnings(totalEarnings.toFixed(2));
    };

    calculateTotals();
  }, []);

  return { highsAndMeds, cumulativeEarnings };
};

export default Stats;