google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
  
function drawChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1CHgW64Or3VF5mGeNV6Uv2xsnOJ7gMkEsMs0ekVddyUY/edit?usp=sharing');
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {

  // Set chart options
  var options = {'title':'Users per day',
  'width':'100%',
  'height':'20rem',
  'backgroundColor': 'transparent',
};             

  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('trafficChart'));
  chart.draw(data, options);
}