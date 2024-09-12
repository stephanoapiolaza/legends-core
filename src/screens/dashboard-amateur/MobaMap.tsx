import React, { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import DotaMap from '../../assets/moba-map.png';
import './MobaMap.scss';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const MobaMap = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<{datasets: any}>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      setChartData({
        datasets: [
          {
            label: 'Support',
            data: [
              { x: 20, y: 30 },
              { x: 40, y: 50 },
              { x: 10, y: 40 },
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            pointRadius: 8,
          },
          {
            label: 'Carry',
            data: [
              { x: 30, y: 70 },
              { x: 25, y: 80 },
              { x: 15, y: 60 },
              { x: 28, y: 50 },
              { x: 29, y: 40 },
              { x: 30, y: 35 },
              { x: 31, y: 25 },
              { x: 33, y: 15 },
              { x: 34, y: 15 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            pointRadius: 8,
          },
          // Add more datasets for other roles
        ],
      });
    }
  }, []);

  const options: ChartOptions<'scatter'> = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: (${context.parsed.x}, ${context.parsed.y})`,
        },
      },
    },
    maintainAspectRatio: true,
  };

  return (
    <div className="">
      <div className="position-relative" style={{ width: '200%', height: '20rem' }}>
        <Scatter className="map-tracking" 
        ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MobaMap;