import React, { useState, useEffect } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import { useSelector } from 'react-redux'
import ReactFusioncharts from "react-fusioncharts";
import { getAllMovies } from '../../features/movies/movieSlice'
import { Col, Row, Container } from "react-bootstrap";

// Resolves charts dependancy
charts(FusionCharts);

const Barchart = () => {
  const movies = useSelector(getAllMovies);
  const allData = movies?.results || {};
  const [barData, setBarData] = useState({
    chart: {
      caption: "10 Top Rated movies ",
      yaxisname: "Number of Movies",
      showvalues: "1",
      numberprefix: "",
      theme: "fusion"
    },
    data: []
  });


  useEffect(() => {
    if (allData && allData.length > 0) {
      const barChart = allData.slice(0, 10).map(movie => {
        return { "label": movie.title, "value": movie.vote_average }
      })
      let temp = JSON.parse(JSON.stringify(barData));
      temp.data = barChart;
      setBarData(temp);

    }

  }, [allData])

  return (

    <Container>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <ReactFusioncharts
            type="column3d"
            width="100%"

            dataFormat="JSON"
            dataSource={barData}
          />
        </Col>
        <Col md={2}></Col>
      </Row>

    </Container>
  );
}

export default Barchart;