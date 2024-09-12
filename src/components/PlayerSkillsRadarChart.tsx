import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const PlayerSkillsRadarChart = () => {
  const data = {
    labels: ['Support', 'Carry', 'Jungla', 'Mid', 'Top'],
    datasets: [
      {
        label: 'Player Skills',
        data: [90, 75, 60, 80, 70],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'rgba(0, 255, 255, 1)',
        borderWidth: 2,
      },
      {
        label: 'Team Average',
        data: [70, 85, 65, 75, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          display: false,
        },
        pointLabels: {
          font: {
            size: 14,
          },
          color: 'rgba(255, 255, 255, 0.8)',
        },
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
  };

  return (
    <Radar data={data} options={options} />

  );
};

export default PlayerSkillsRadarChart;