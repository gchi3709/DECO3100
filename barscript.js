const dataSource = "animal shelter data - average age.csv";
const plotDiv = document.getElementById('myPlot');


function loadData() {
    Plotly.d3.csv(dataSource, function(data){processData(data)});
};


function processData(allRows) {
    let x = [], y = []; //make variables to store the arrays needed to make the trace
    for (let i = 0; i < allRows.length; i++){ // iterate over all rows of the data
        let row = allRows[i];
        x.push(row['Intake reason']);//push data into x
        y.push(row['Average age of intake by reason (years)']);//push data into y
    }
    makePlot(x, y);//pass the 'x' and 'y' arrays to the function that makes the line graph
}


function makePlot(x, y) {
    let traces = [
        {
            x: x,
            y: y,
            type:'bar'
        }
    ]

    let layout = {
        title: "The relationship between intake reason and animal's age",
        font: {
            size: 18,
            family: "Arial, sans-serif",
            color: "Darkblue"
        },
        xaxis: {
            title: "Intake Reason",
            xref: 'paper',
            automargin: true //pushes the xaxis heading down so it doesnt overlap with the data

        },
        yaxis: {
            title: "Age of intake (years)"
        },
        
        showlegend: false,
        
        // legend: {
        //     x: 0.9,
        //     xanchor: "left",
        //     y: -0.9    
        // }
    };

        Plotly.newPlot(plotDiv, traces, layout);


}


loadData();


