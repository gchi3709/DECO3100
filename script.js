const dataSource = "wk4 data - Sheet1.csv";
const plotDiv = document.getElementById('myPlot');


function loadData() {
    Plotly.d3.csv(dataSource, function(data){processData(data)});
};


function processData(allRows) {
    let x = [], y = []; //make variables to store the arrays needed to make the trace
    for (let i = 0; i < allRows.length; i++){ // iterate over all rows of the data
        let row = allRows[i];
        x.push(row['my_x_data']);//push data into x
        y.push(row['my_y_data']);//push data into y
    }
    makePlot(x, y);//pass the 'x' and 'y' arrays to the function that makes the line graph
}


function makePlot(x, y) {
    let traces = [
        {
            x: x,
            y: y
        }


    ]


    Plotly.newPlot(plotDiv, traces);


}


loadData();


