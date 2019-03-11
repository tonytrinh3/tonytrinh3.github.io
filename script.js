
//change color of h1
d3.select('h1').style('color', 'darkblue');
d3.select('h1').style('font-size', '24px');

//create list of fruits
const fruits = ['apple','lime','pears','grapes'];

d3.select('ul')
    .selectAll('li')
    .data(fruits)
    .enter()
    .append('li')
    .text(function(d) { return d;})
    .style('color', 'red');//d is data? 

//to create rectangle
const svg = d3.select('#rect');

svg.append('rect')
//    .attr('x', 50)
//    .attr('y', 20)
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'green');



const data = [80, 120, 60, 150, 200];
let barHeight = 20;
const bar = d3.select('#chart')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', function(d){return d; })
    .attr('height', barHeight - 10)
    .attr('transform', function(d,i){
       return "translate(0, " + i * barHeight + ")"
    });//this transform and translate is needed to get one bar and loop it through all data


const data0 = [
    { gpa: 3.42, height: 138 },
    { gpa: 3.54, height: 153 },
    { gpa: 3.14, height: 148 },
    { gpa: 2.76, height: 164 },
    { gpa: 2.95, height: 162 },
    { gpa: 3.36, height: 143 }
]
const data1 = [
{ gpa: 3.15, height: 157 },
{ gpa: 3.12, height: 175 },
{ gpa: 3.67, height: 167 },
{ gpa: 3.85, height: 149 },
{ gpa: 2.32, height: 165 },
{ gpa: 3.01, height: 171 },
{ gpa: 3.54, height: 168 },
{ gpa: 2.89, height: 180 },
{ gpa: 3.75, height: 153 }
]

