import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


    const LineChart = ({ coinHistory, currentPrice, coinName }) => {
        const coinPrice = [];
        const coinTimestamp = [];
      
        for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
          coinPrice.push(coinHistory?.data?.history[i].price);
        }
      
        for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
          coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
        }
        const data = {
          labels: coinTimestamp,
          datasets: [
            {
              label: 'Price In USD',
              data: coinPrice,
              fill: false,
              backgroundColor: '#0071bd',
              borderColor: '#0071bd',
            },
          ],
        };
      
        const options = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        };
  return (
    <Box sx={{marginLeft:{sm:10}, maxWidth:'90%'}}>
      <>
      
      <Typography variant='h5'>{coinName} Price Chart  Change: {coinHistory?.data?.change}% Current {coinName} Price: $ {currentPrice} </Typography>
      <Line data={data} options={options} />
      </>
    </Box>
  )
}

export default LineChart
