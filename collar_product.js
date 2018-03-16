var time = ["Aug 2017","Sep 2017","Oct 2017","Nov 2017","Dec 2017","Jan 2018","Feb 2018"];
var config = {
  type: 'line',
  data: {
    labels: time,
    datasets: [{
      label: "Price",
      borderColor: 'rgba(211,211,211,1)',
      backgroundColor: 'rgba(211,211,211,1)',
      data: [14,17,18,18,20,17,16],
      fill: false,
      lineTension: 0,
    }, {
      label: "Average",
      borderColor: 'rgba(52, 116, 132, 1)',
      backgroundColor: 'rgba(52, 116, 132, 1)',
      data: [17,17,17,17,17,17,17],
      fill: false,
    }]
  },
  options: {
    responsive: true,
    title:{
      display:true,
      text:'Price History'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Price (USD)'
        },
      }]
    }
  }
};

var ctx = document.getElementById("priceGraph").getContext("2d");
var myLine = new Chart(ctx, config);

