
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


const buildings = [
    {space: "Conditioning Systems", href: "https://elementa.nyc/projects/yale-berkeley-college/img/9_ZoneDiagrams_190205_Conditioning_Systems-01.jpg"}, 
    {space: "Program", href: "https://elementa.nyc/projects/yale-berkeley-college/img/ZoneDiagrams_190205_Program-01.jpg"},
    {space: "Envelope", href: "https://elementa.nyc/projects/yale-berkeley-college/img/00_ZoneDiagrams_190205_Envelope-01.jpg"},
    {space: "Bedrooms", href: "https://elementa.nyc/projects/yale-berkeley-college/img/0_ZoneDiagrams_190205_Bedroom-01.jpg"},
    {space: "Cafe and Dining", href: "https://elementa.nyc/projects/yale-berkeley-college/img/1_ZoneDiagrams_190205_CafeDining-01.jpg"},
    {space: "Circulation", href: "https://elementa.nyc/projects/yale-berkeley-college/img/2_ZoneDiagrams_190205_Circulation-01.jpg"}, 
    {space: "Fitness", href: "https://elementa.nyc/projects/yale-berkeley-college/img/3_ZoneDiagrams_190205_Fitness-01.jpg"},
    {space: "Food Prep", href: "https://elementa.nyc/projects/yale-berkeley-college/img/4_ZoneDiagrams_190205_FoodPrep-01.jpg"},
    {space: "Student Activity", href: "https://elementa.nyc/projects/yale-berkeley-college/img/5_ZoneDiagrams_190205_LibraryStudyLounge-01.jpg"},
    {space: "Back of House", href: "https://elementa.nyc/projects/yale-berkeley-college/img/6_ZoneDiagrams_190205_BOH-01.jpg"},
    {space: "Office", href: "https://elementa.nyc/projects/yale-berkeley-college/img/7_ZoneDiagrams_190205_Office-01.jpg"},
    {space: "Restrooms", href: "https://elementa.nyc/projects/yale-berkeley-college/img/8_ZoneDiagrams_190205_Restrooms-01.jpg"}
    ]   
//this is to create the drop down for the buildings picture in "calibrated energy model"

const buildingMenu = d3.select('#thermal-block');

buildingMenu
    .append("select")//this is the select from html when wanting to start creating a dropdown
    .selectAll("option")//this is the individual options within the <select></select>. for all option, attach on the data below?
    .data(buildings)//data associated with each option
    .enter() //this starts the loop
    .append("option") // loop each option and add on to selection
    .attr("value", function(d){ //add on value (html standard) on to each option
        return d.space;
    })
    .text(function(d){ //add the associated text to each value
        return d.space;
    });

//this is to show the picture of the spaces for the thermal energy model - default pic with page loads
let buildingPic = d3.select("#building-pic")
    .append("img")
    .attr('src', buildings[0].href);


//updates the building picture
let updateBuildingPic = function(building){
    //this gives back the data of "buildings" variable based on what user chose
    const selectBuilding = buildings.filter(function(d){
        return d.space == building;
    })


    //this overwrites the default picture with a new href
    buildingPic
    .attr('src', selectBuilding[0].href);

}

//already has d3 selected...
//to update the building picture 
buildingMenu.on('change', function(){

    //get the value of the building that user chose
    const selectedBuilding = d3.select(this)
        .select('select')
        .property('value');

    //pass the selected value to update picture of building
    updateBuildingPic(selectedBuilding);


})









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

