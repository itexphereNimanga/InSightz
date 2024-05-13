import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

// Register components and scales
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const AnalyticsPage = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/youtube/analytics",
          {
            dimensions: "day",
            startDate: "2024-01-01",
            endDate: "2024-03-20",
            ids: "channel==MINE",
            metrics: "views",
            sort: "day",
          }
        );
        setDataList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: dataList.map((item) => item.date),
    datasets: [
      {
        label: "Views",
        data: dataList.map((item) => item.views),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "MMM dd, yyyy", // Formatting date for tooltip
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Views",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            // Customizing tooltip to display the x and y values more explicitly
            const dateLabel = context.label || "";
            const valueLabel = context.parsed.y || "";
            return `Date: ${dateLabel}, Views: ${valueLabel}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "350px", height: "350px" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AnalyticsPage;
