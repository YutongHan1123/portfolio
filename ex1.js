var dataset = [108, 103, 100, 97, 96, 95, 92, 91, 91, 90, 90, 89, 88, 82, 82, 82, 80, 80, 78, 77, 73, 73, 67, 67, 66, 64, 63, 62, 58, 47];
// var dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

    var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, svgWidth]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, svgHeight]);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    // .attr("y", function(d) {
    //      return svgHeight - d
    // })
    .attr("y", function (d, i) {
        return svgHeight - d;
    })
    .attr("x", function (d, i) {
        return barWidth * i + 60;;
    })
    .attr("height", function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, -20];
        return "translate("+ translate +")";
    });



    var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - d - 20;
    })
    .attr("x", function(d, i) {
        return barWidth * i + 60;
    })
    .attr("fill", "#A64C38");



var x_axis = d3.axisBottom().scale(xScale);

var y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);

var xAxisTranslate = svgHeight - 20;

svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate  +")")
    .call(x_axis);


// import {select,csv}from'd3';
//
// const svg = select('svg');
//
// const width = +svg.attr('width');
// const height = +svg.attr('height');
//
// csv('mlb-satndings.csv').then(data => {
//   console.log(data);
// });

// var dataset = [];
//     d3.csv("mlb-standings.csv", function(data) {
//     dataset = data.map(function(d) { return [ d["w"], d["l"], d["pct"] ]; });
//     console.log(dataset[0]);
//     console.log(dataset.length);
//     });

// d3.csv("data.csv",function(error,csvdata){
//
// 			if(error){
// 				console.log(error);
// 			}
// 			console.log(csvdata);
//
// 		});

// d3.csv("data.csv")
//   .then(function(data) {
//     console.log(data);
//   });

// var dataset = [108, 103, 100, 97, 96, 95, 92, 91, 91, 90, 90, 89, 88, 82, 82, 82, 80, 80, 78, 77, 73, 73, 67, 67, 66, 64, 63, 62, 58, 47]
//
// var svgWidth = 500, svgHeight = 300, barPadding = 5;
// var barWidth = (svgWidth / dataset.length);
//
// var svg = d3.select('svg')
//             .attr("width", svgWidth)
//             .attr("height", svgHeight);
//
// var barChart = svg.selectAll("rect")
//           .data(dataset)
//           .enter()
//           .append("rect")
//           .attr("y", function(d){
//             return svgHeight - d
//           })
//           .attr("hieght", function(d){
//             return d;
//           })
//           .attr("width", barWidth - barPadding)
//           .attr("transform", function(d, i){
//             var translate = [barWidth * i, 0];
//             return "translate("+ translate +")";
//           });
