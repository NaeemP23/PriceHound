var ctx = document.getElementById("priceGraph");
Chart.defaults.global.defaultFontColor = 'rgba(52,54,53,1)';
var priceGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Aug 2017","Sep 2017","Oct 2017","Nov 2017","Dec 2017","Jan 2018","Feb 2018"],
        datasets: [{
            label: 'Price',
            data: [14,17,18,18,20,17,16],
            backgroundColor: [
                'rgba(255,255,255,0.0)',
            ],
            borderColor: [
                'rgba(255,255,255,1)',
            ],
            borderWidth: 2,
            lineTension: 0
        },
        {
            label: 'Average',
            data: [17,17,17,17,17,17,17],
            backgroundColor: [
                'rgba(255,140,0,0.0)',
            ],
            borderColor: [
                'rgba(255,140,0,1)',
            ],
            borderWidth: 2,
            lineTension: 0
        }]
    },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
                    
    //             }

    //         }]
    //     }
    // }
});
