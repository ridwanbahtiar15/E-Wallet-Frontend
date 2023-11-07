import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function IncomeChart(props) {
  const dateArr = [];
  const sumArr = [];

  props.data.forEach((result, i) => {
    dateArr.push(result.date);
    sumArr.push(result.sum);
  });

  let bgColor = "#2948FF";
  props.summary == false ? (bgColor = "#2948FF") : (bgColor = "#D00000");

  return (
    <Bar
      data={{
        labels: dateArr,
        datasets: [
          {
            label: "# of votes",
            data: sumArr,
            backgroundColor: bgColor,
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
              stepSize: 100000,
            },
            beginAtZero: true,
          },
        },
        maintainAspectRatio: false,
      }}
      height={400}
      width={600}
    />
  );
}

export default IncomeChart;
