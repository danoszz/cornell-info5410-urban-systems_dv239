import React, { Component } from "react"
import * as d3 from "d3"

const nycOpenDataLookup = {
  population: "https://data.cityofnewyork.us/resource/y7yy-gq65.json",
  housing: "https://data.cityofnewyork.us/resource/wwhg-3wy7.json",
  census: "https://data.cityofnewyork.us/resource/w5g7-dwbx.json"
}

// const nyc = "/data/nyc.json"

class MapVisual extends Component {
  componentDidMount() {
    // console.log("nycTopo", nycTopo)
    // this.loadData()
    this.drawBasicMap()

    // this.drawChart()
  }

  loadData() {
    // const nycOpenData = d3.json(nycOpenDataLookup[datasets])
    // const nycTopo = d3.json("./nyc.json")
    // console.log(nyc)
    // drawBasicMap()
    // nyc.map()
    // d3.json(nyc, function (data) {
    //   console.log(data)
    // })
  }

  drawBasicMap() {
    // The svg
    // var svg = d3.select("svg"),
    //   width = +svg.attr("width"),
    //   height = +svg.attr("height")

    const width = 800
    const height = 400

    const svg = d3
      .select(".dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
    // .append("circle")
    // .attr("cx", width / 2)
    // .attr("cy", height / 2)
    // .attr("r", height / 4)

    // Map and projection
    const projection = d3
      .geoNaturalEarth1()
      .scale(width / 1.3 / Math.PI)
      .translate([width / 2, height / 2])

    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ).then(function (data) {
      console.log(data)

      svg
        .append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("fill", "#f9f9f9")
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "#000")
    })
    // Load external data and boot
  }

  render() {
    return <div id={"#" + this.props.id}></div>
  }
}

export default MapVisual
