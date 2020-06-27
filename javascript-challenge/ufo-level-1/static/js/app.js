// from data.js
var tableData = data;

// YOUR CODE HERE!

// //------

var tbody = d3.select("tbody");


console.log(tableData);


tableData.forEach(function(alienReport) {
  console.log(alienReport);
});


tableData.forEach(function(alienReport) {
  console.log(alienReport);
  var row = tbody.append("tr");
});


tableData.forEach(function(alienReport) {
  console.log(alienReport);
  var row = tbody.append("tr");

  Object.entries(alienReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});


tableData.forEach(function(alienReport) {
  console.log(alienReport);
  var row = tbody.append("tr");

  Object.entries(alienReport).forEach(function([key, value]) {
    console.log(key, value);
  
    var cell = row.append("td");
  });
});


tableData.forEach(function(alienReport) {
  console.log(alienReport);
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(function([key, value]) {
    console.log(key, value);
   
    var cell = row.append("td");
    cell.text(value);
  });
});


//-----------------------------

// var button = d3.select("#button");


// var form = d3.select("#form");


// button.on("click", runEnter);
// form.on("submit",runEnter);


// function runEnter() {


//   d3.event.preventDefault();
  

//   var inputElement = d3.select("#datetime");


//   var inputValue = inputElement.property("value");

//   output.text(tableData => tableData.datetime === inputValue)};

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = tableData.filter(alienReport => alienReport.datetime === inputValue);

//   console.log(filteredData)};


  