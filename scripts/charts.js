google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(engageChart);
  
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
  'fontSize': '17'
};             

  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('trafficChart'));
  chart.draw(data, options);
}


function engageChart() {
  var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1CHgW64Or3VF5mGeNV6Uv2xsnOJ7gMkEsMs0ekVddyUY/edit#gid=1609625473/tq?sheet=Sheet1');
  query2.send(handleQueryResponse2);
}

function handleQueryResponse2(response2) {

  // Set chart options
  var options2 = {'title':'Session Durations',
  'width':'100%',
  'height':'30rem',
  'backgroundColor': 'transparent',
};             

  var data = response2.getDataTable();
  var chart = new google.visualization.BarChart(document.getElementById('engagementChart'));
  chart.draw(data, options2);
}

