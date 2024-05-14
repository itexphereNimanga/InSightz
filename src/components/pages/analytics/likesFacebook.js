import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, Legend, ArcElement, Title } from "chart.js";

// Register components for the chart
Chart.register(Tooltip, Legend, ArcElement, Title);

// Custom tooltip handler to display percentages
const tooltipHandler = (context) => {
  // Check if tooltip is defined and visible
  if (!context.tooltip || !context.tooltip.dataPoints) {
    return null;
  }

  const tooltipModel = context.tooltip;
  const dataPoints = tooltipModel.dataPoints;

  if (!dataPoints.length) {
    return null;
  }

  // Calculate the total data sum for percentage calculation
  const total = context.chart.data.datasets[0].data.reduce(
    (acc, curr) => acc + curr,
    0
  );
  return dataPoints
    .map((point) => {
      const val = point.raw;
      const percentage = ((val / total) * 100).toFixed(2);
      return `${point.label}: ${val} (${percentage}%)`;
    })
    .join("\n");
};

const Likes = () => {
  const [counts, setCounts] = useState({ likes: 0, dislikes: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/youtube/analytics",
          {
            dimensions: "day",
            startDate: "2024-03-01",
            endDate: "2024-03-20",
            ids: "channel==MINE",
            metrics: "likes,dislikes",
            sort: "day",
          }
        );
        let likes = 0,
          dislikes = 0;
        response.data.forEach((item) => {
          likes += item.likes;
          dislikes += item.dislikes;
        });
        setCounts({ likes, dislikes });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: ["Likes", "Dislikes"],
    datasets: [
      {
        label: "Engagement",
        data: [10, 3],
        backgroundColor: ["#42a5f5", "#ef5350"],
        hoverBackgroundColor: ["#64b5f6", "#f44336"],
        borderWidth: 1,
        hoverBorderColor: "black",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 16,
          },
        },
        onClick: (e, legendItem, legend) => {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;
          if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
          } else {
            ci.show(index);
            legendItem.hidden = false;
          }
          ci.update();
        },
      },
      tooltip: {
        callbacks: {
          label: tooltipHandler,
        },
      },
      title: {
        display: true,
        text: "Likes vs Dislikes",
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div style={{ width: "350px", height: "350px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Likes;
