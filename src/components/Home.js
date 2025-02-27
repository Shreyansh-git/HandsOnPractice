import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Home = () => {
  const options = {
    title: {
      text: "My Chart",
    },
    series: [
      {
        name: "Data Series 1",
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  return (
    <div
      style={{
        height: "200px",
        width: "600px",
        "max-width": "fit-content",
        margin: "auto",
      }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Home;
