import React from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function IncomeChart() {
  return (
    <Bar
      data={{
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "# of votes",
            data: [15000, 1000, 100000, 30000, 40000, 20000, 15000],
            backgroundColor: "#2948FF",
            fill: true,
          },
        ],
      }}
      options={{
        tension: 0.4,
        pointStyle: false,
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              stepSize: 25000,
            },
            beginAtZero: true,
          },
        },
      }}
      height={400}
      width={600}
    />
  );
}

export default IncomeChart;
