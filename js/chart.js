
var chart1, chart2, chart3, chart4, chart5;
var chart1Options, chart2Options, chart3Options, chart4Options, chart5Options;

function resizeCharts() {
    chart1.resize();
    chart2.resize();
    chart3.resize();
    chart4.resize();
    chart5.resize();
}

// CHART INITIALIZATION //
function initializeCharts() {

    //initialize chart 1
    chart1 = echarts.init(document.getElementById('salesSku'));

    chart1Options = {
        color: ['#131955',
        '#3c4072',
        '#222a82',
        '#2e4064',
        '#092764',
        '#193163'],
        
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        xAxis: {
            type: 'value',
            name: 'Total Lost Sales',
            nameLocation: 'middle',
            nameGap: 35,
            data: [],
            nameTextStyle: {
            fontWeight: 'bold'
            }
        },
        dataZoom: [
            {
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter'
            },
            {
                id: 'dataZoomY',
                type: 'slider',
                yAxisIndex: [0],
                filterMode: 'empty'
            }
        ],
        yAxis: {
            type: 'category',
            data: [],
            name: 'SKU ID',
            nameLocation: 'end',
            data: [],
            nameGap: 5,
            nameTextStyle: {
                fontWeight: 'bold'
            }
        },
        series: [{
            name: 'Lost Sales By SKU',
            data: [],
            type: 'bar',
        }]
    };
    
    // use configuration item and data specified to show chart
    chart1.setOption(chart1Options);

    //initialize chart 2
    chart2 = echarts.init(document.getElementById('lostSales'));

    // specify chart configuration item and data
    chart2Options = {
        color: ['#131955',
            '#3c4072',
            '#222a82',
            '#2e4064',
            '#092764',
            '#193163'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: 'Day of Date [2017]',
            nameLocation: 'middle',
            nameGap: 35,
            nameTextStyle: {
            fontWeight: 'bold'
            }
        },
        yAxis: {
            type: 'value',
            name: 'Total Lost Sales',
            nameLocation: 'middle',
            nameGap: 43,
            nameTextStyle: {
            fontWeight: 'bold'
            }
        },
        series: [{
            name: 'Total Lost Sales',
            data: [],
            type: 'line',
            areaStyle: {}
        }]
    };

    // use configuration item and data specified to show chart
    chart2.setOption(chart2Options);

    // Initialize chart 3
    chart3 = echarts.init(document.getElementById('salesStore'));

    // specify chart configuration item and data
    chart3Options = {
        color: ['#131955',
        '#3c4072',
        '#222a82',
        '#2e4064',
        '#092764',
        '#193163'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        xAxis: {
            type: 'value',
            name: 'Total Lost Sales',
            nameLocation: 'middle',
            nameGap: 35,
            nameTextStyle: {
            fontWeight: 'bold'
            }
        },
        yAxis: {
            type: 'category',
            data: ['37', '27', '26', '88', '65', '89', '51', '94', '58'],
            name: 'Store ID',
            nameLocation: 'end',
            nameGap: 5,
            nameTextStyle: {
                fontWeight: 'bold'
            }
        },
        series: [{
            data: [440, 450, 470, 480, 490, 500, 510, 515, 590],
            type: 'bar'
        }]
    };

    // use configuration item and data specified to show chart
    chart3.setOption(chart3Options);
    
    // Initialize chart 4
    chart4 = echarts.init(document.getElementById('lostSales%'));

    // specify chart configuration item and data
    chart4Options = {
            color: ['#131955',
            '#3c4072',
            '#222a82',
            '#2e4064',
            '#092764',
            '#193163'
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        xAxis: {
            name: 'Lost Sales Units',
            nameLocation: 'middle',
            nameGap: 35,
            nameTextStyle: {
            fontWeight: 'bold'
            }
        },
        yAxis: {
            name: 'Lost Sales %',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
            fontWeight: 'bold'
            },
        },
        series: [{
            name: 'Lost Sales % vs Unit',
            data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
            ],
            type: 'scatter'
        }]
    };

    // use configuration item and data specified to show chart
    chart4.setOption(chart4Options);

    // Initialize chart 5
    chart5 = echarts.init(document.getElementById('OOS'));

    // specify chart configuration item and data
    chart5Options = {
            color: ['#131955',
            '#3c4072',
            '#222a82',
            '#2e4064',
            '#092764',
            '#193163'
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        xAxis: {
            name: 'Lost Sales Units',
            nameLocation: 'middle',
            nameGap: 35,
            nameTextStyle: {
            fontWeight: 'bold'
            }
        },
        yAxis: {
            name: 'Lost Sales %',
            nameLocation: 'middle',
            nameGap: 25,
            nameTextStyle: {
            fontWeight: 'bold'
            },
        },
        series: [{
            name: 'Lost Sales % vs Unit',
            data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
            ],
            type: 'scatter'
        }]
        };

    // use configuration item and data specified to show chart
    chart5.setOption(chart5Options);
}

function configureChart1(data) {
    
    // sort
    data = data.sort(compareEstLostSales);
    // slice since we only display 10 SKUs max
    var subsetData = data.slice(0, 10);

    // convert to dataset
    var dataset = arrayToDataset(subsetData, "SUM_Lost_Sales_Est", "SKU_ID");

    // set the new data to echart instance
    chart1Options.xAxis.data = dataset.x;
    chart1Options.yAxis.data = dataset.y;
    chart1Options.series = {
        name: "Lost Sales by SKU",
        data: dataset.x,
        type: "bar"
    }

    //update chart
    chart1.setOption(chart1Options);
}

function configureChart2(data) {
    // sort
    data = data.sort(compareEstLostSales);
    // slice since we only display 10 SKUs max
    var subsetData = data.slice(0, 10);

    // convert to dataset
    var dataset = arrayToDataset(subsetData, "SUM_Lost_Sales_Est", "SKU_ID");

    // set the new data to echart instance
    chart2Options.xAxis.data = dataset.x;
    chart2Options.yAxis.data = dataset.y;
    chart2Options.series = {
        name: 'Total Lost Sales',
        data: [820, 932, 607, 1300, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }

    //update chart
    chart2.setOption(chart2Options);
}

function configureChart3(data) {
    // sort
    data = data.sort(compareEstLostSales);
    // slice since we only display 10 SKUs max
    var subsetData = data.slice(0, 10);

    // convert to dataset
    var dataset = arrayToDataset(subsetData, "SUM_Lost_Sales_Est", "SKU_ID");                   // The params will change once we have JSON for this chart

    // set the new data to echart instance
    chart3Options.xAxis.data = dataset.x;
    chart3Options.yAxis.data = dataset.y;
    chart3Options.series = {
        data: [440, 450, 470, 480, 490, 500, 510, 515, 590],
        type: 'bar'
    }

    //update chart
    chart3.setOption(chart3Options);
}

function configureChart4(data) {
    // sort
    data = data.sort(compareEstLostSales);
    // slice since we only display 10 SKUs max
    var subsetData = data.slice(0, 10);

    // convert to dataset
    var dataset = arrayToDataset(subsetData, "SUM_Lost_Sales_Est", "SKU_ID");                   // The params will change once we have JSON for this chart

    // set the new data to echart instance
    chart4Options.xAxis.data = dataset.x;
    chart4Options.yAxis.data = dataset.y;
    chart4Options.series = {
        name: 'Lost Sales % vs Unit',
        data: [[10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81], [11.0, 8.33],              // this data will be replaced by parsed JSON once we have it
        [14.0, 9.96], [6.0, 7.24], [4.0, 4.26], [12.0, 10.84], [7.0, 4.82], [5.0, 5.68] ],
        type: 'scatter'
    }

    //update chart
    chart4.setOption(chart4Options);
}

function configureChart5(data) {
    // sort
    data = data.sort(compareEstLostSales);
    // slice since we only display 10 SKUs max
    var subsetData = data.slice(0, 10);

    // convert to dataset
    var dataset = arrayToDataset(subsetData, "SUM_Lost_Sales_Est", "SKU_ID");                   // The params will change once we have JSON for this chart

    // set the new data to echart instance
    chart5Options.xAxis.data = dataset.x;
    chart5Options.yAxis.data = dataset.y;
    chart5Options.series = {
        name: 'Lost Sales % vs Unit',
        data: [[10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81], [11.0, 8.33],              // this data will be replaced by parsed JSON once we have it
        [14.0, 9.96], [6.0, 7.24], [4.0, 4.26], [12.0, 10.84], [7.0, 4.82], [5.0, 5.68] ],
        type: 'scatter'
    }

    //update chart
    chart5.setOption(chart5Options);
}

// Creation for all the charts
function configureDataForCharts(dataArray) {
    configureChart1(dataArray[0]);
    configureChart2(dataArray[1]);
    configureChart3(dataArray[2]);
    configureChart4(dataArray[3]);
    configureChart5(dataArray[4]);
}

/* Generic function which takes in an array and converts it to an object with two fields, an array of all the x coorindate values
and an array of all the y coordinate values. Looking at a element at the same index in both x and y arrays is effectively and (x, y) coordinate.
Params: array, key_x, key_y
array: an array in which each element is an object with two fields. The object is a data point and the two fields are the x and y points.
key_x: a string which defines the field on the elements of array which corresponds to the x value
key_xy a string which defines the field on the elements of array which corresponds to the y value
    */
   function arrayToDataset(array, key_x, key_y) {
    var dataSet = {x: [], y: []};
    for(i=0;i<array.length;i++) {
        dataSet.x.push(array[i][key_x]);
        dataSet.y.push(array[i][key_y]);
    }
    // object of two arrays (x, y) points
    return dataSet;
}

/// SORTING ALGORITHMS ///

/* Comparison function usable for both Chart 1 and Chart 2.
Returns 1 for a >= b
Returns -1 if b < a
*/
function compareEstLostSales(a, b) {			
    const varA = parseFloat(a.SUM_Lost_Sales_Est);
    const varB = parseFloat(b.SUM_Lost_Sales_Est);
    var comparison = 0;
    if (varA >= varB) {
        comparison = 1;
    } 
    else {
        comparison = -1;
    }
    return comparison;
}
