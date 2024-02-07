import React from "react";
import ReactApexChart from "react-apexcharts";
import { series } from "./Data";
import { useNavigate } from "react-router-dom";
const HeatMap = () => {
  const navigate = useNavigate();
  const res = series[0].data.map((num) => {
    if (+num.x[2] <= -3) {
      return "rgb(153, 31, 41)";
    }
    if (+num.x[2] <= -2 && +num.x[2] > -3) {
      return "rgb(242, 54, 69)";
    }
    if (+num.x[2] <= -1 && +num.x[2] > -2) {
      return "rgb(247, 124, 128)";
    }
    if (+num.x[2] <= 0 && +num.x[2] > -1) {
      return "rgb(193, 196, 205)";
    }
    if (+num.x[2] <= 1 && +num.x[2] > 0) {
      return "rgb(66, 189, 127)";
    }
    if (+num.x[2] <= 2 && +num.x[2] > 1) {
      return "rgb(8, 153, 80)";
    }
    if (+num.x[2] >= 3) {
      return "rgb(5, 102, 54)";
    }

    return null;
  });
  const options = {

    dataLabels: {
      enabled: true,
      textAnchor: "middle",

      style: {
        fontSize: "50vw",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        color: "wihte",
      },

      formatter: function (val, opt) {
        return [ val[1], `${val[2]} %`]
      }
    },
    legend: {
      show: false,
    },
    markers: {
      onClick: function(e) {
        console.log(e);
      }
    },

    chart: {
      width: 1000,
      type: "treemap",
      events: {
        click: function (event, chartContext, { dataPointIndex }) {
          navigate("/company");
        },
      },
    },
    title: {
      text: "Head Map",
      align: "center",
    },
 
  
    colors: res,      

    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  };

  return (
    <div>
      <div>
        <div id="chart" className="chart">
          <ReactApexChart options={options} series={series} type="treemap" height={700} className="ReactApexChart"/>
          <div id="html-dist" className="color-list">
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "2vw",

              }}
            >
              <span>-3%</span>
              <p
                style={{
                  width: "8vw",
                  height: "1vw",
                  backgroundColor: "rgb(153, 31, 41)",
                }}
              ></p>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "2vw",
              }}
            >
              <span>-2%</span>
              <p
                style={{
                  width: "8vw",
                  height: "1vw",
                  backgroundColor: "rgb(242, 54, 69)",
                }}
              ></p>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "2vw",
              }}
            >
              <span>-1%</span>
              <p
                style={{
                  width: "8vw",
                  height: "1vw",
                  backgroundColor: "rgb(247, 124, 128)",
                }}
              ></p>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "2vw",
              }}
            >
              <span>0%</span>
              <p
                style={{
                  width: "8vw",
                  height: "1vw",
                  backgroundColor: "rgb(193, 196, 205)",
                }}
              ></p>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "2vw",
              }}
            >
              <span>+1%</span>
              <p
                style={{
                  width: "8vw",
                  height: "1vw",
                  backgroundColor: "rgb(66, 189, 127)",
                }}
              ></p>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "2vw",
              }}
            >
              <span>+2%</span>
              <p
                style={{
                  width: "8vw",
                  height: "1vw",
                  backgroundColor: "rgb(8, 153, 80)",
                }}
              ></p>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginLeft: "2vw",
              }}
            >
              <span>+3%</span>
              <p
                style={{
                  width: "8vw",
                  height: "1vw",
                  backgroundColor: "rgb(5, 102, 54)",
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
