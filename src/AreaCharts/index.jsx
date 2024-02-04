import React from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

const AreaCharts = () => {
  const navigate = useNavigate();

  const series = [
    {
      name: "Oʻzbekiston viloyatlari",
      data: [
        {
          x: "Qoraqalpogʻiston ",
          y: 1200000,
          z: " 160.000 (kv.km)",
        },
        {
          x: "Navoiy ",
          y: 1338000,
          z: "100.800 (kv.km)",
        },
        {
          x: "Buxoro ",
          y: 1976000,
          z: "39.400 (kv.km",
        },
        {
          x: "Qashqadaryo",
          y: 3408000,
          z: "28.400 (kv.km)",
        },
        {
          x: "Surxondaryo",
          y: 2743000,
          z: "20.800 (kv.km)",
        },
        {
          x: "Jizzax ",
          y: 1443000,
          z: "20.500 (kv.km)",
        },
        {
          x: "Samarqand ",
          y: 4312000,
          z: "16.400 (kv.km)",
        },
        {
          x: "Toshkent",
          y: 5872000,
          z: "15.300 (kv.km)",
        },
        {
          x: "Namangan",
          y: 2931000,
          z: "7.900 (kv.km)",
        },
        {
          x: "Fargʻona",
          y: 3896000,
          z: "6.800 (kv.km)",
        },
        {
          x: "Xorazm",
          y: 1924000,
          z: "6.300 (kv.km)",
        },
        {
          x: "Sirdaryo ",
          y: 878000,
          z: "5.100 (kv.km)",
        },
        {
          x: "Andijon",
          y: 3253000,
          z: "4.200 (kv.km)",
        },
      ],
    },
  ];

  const options = {
    legend: {
      show: true,
    },

    chart: {
      height: 350,
      type: "treemap",
      events: {
        click: function (event, chartContext, { dataPointIndex }) {
          navigate("/viloyat");
          console.log(event, dataPointIndex);
        },
      },
      tooltip: {
        y: {
          click: function (value, { series, seriesIndex, dataPointIndex, w }) {
            console.log(value, dataPointIndex, seriesIndex, series);
            return value;
          },
        },
      },
    },

    title: {
      text: "Oʻzbekiston viloyatlari aholi soni bno'yicha",
      align: "center",
      color: "#4d9651",
    },

    colors: [
      "#3B93A5",
      "#F7B844",
      "#ADD8C7",
      "#EC3C65",
      "#CDD7B6",
      "#C1F666",
      "#D43F97",
      "#1E5D8C",
      "#421243",
      "#7F94B0",
      "#EF6537",
      "#C0ADDB",
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },

  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="treemap" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default AreaCharts;
