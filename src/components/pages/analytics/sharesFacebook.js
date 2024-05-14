import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

// Register the components you need from ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Shares = () => {
  const [counts, setCounts] = useState([
    { date: "2024-05-01", shares: 20 },
    { date: "2024-05-02", shares: 4 },
    { date: "2024-05-03", shares: 6 },
    { date: "2024-05-04", shares: 5 },
    { date: "2024-05-05", shares: 10 },
    { date: "2024-05-06", shares: 60 },
    { date: "2024-05-07", shares: 30 },

  ]);
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
            metrics: "shares",
            sort: "day",
          }
        );
        // setCounts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: counts.map((item) => item.date),
    datasets: [
      {
        label: "Dialy Shares",
        data: counts.map((item) => item.shares),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dialy Shares Count",
      },
    },
  };

  return (
    <div style={{ width: "350px", height: "350px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Shares;
