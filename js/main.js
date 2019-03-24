var globalFilterWidth;
var chart1, chart2, chart3, chart4, chart5;

/// FUNCTIONS THAT CALL AFTER THE WINDOW HAS BEEN LOADED ///

/// RESIZING OF FILTERS AND GRAPHS ///
function handleSizing() {
    globalFilterWidth = $(".filterDropDownColumn").width();
    resizeFilters(globalFilterWidth);
    resizeCharts(); 
}

function loadDashboardData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
        }
    }
}

/// Loading of Dashboard Data into Charts ///

// This function loads the JSON data into the charts
function loadDashboardData() {
    // Pro tip. Don't waste your time trying to get these on anything but one line. It messes up the formatting and parsing.

    // Chart 1
    json = '[{"SUM_Lost_Sales_Est":"136.2299","SKU_ID":"1"},{"SUM_Lost_Sales_Est":"28.5522","SKU_ID":"2"},{"SUM_Lost_Sales_Est":"2.3529","SKU_ID":"3"},{"SUM_Lost_Sales_Est":"38.3255","SKU_ID":"4"},{"SUM_Lost_Sales_Est":"4.9924","SKU_ID":"5"},{"SUM_Lost_Sales_Est":"21.0692","SKU_ID":"6"},{"SUM_Lost_Sales_Est":"6.9556","SKU_ID":"7"},{"SUM_Lost_Sales_Est":"45.6914","SKU_ID":"8"},{"SUM_Lost_Sales_Est":"20.1704","SKU_ID":"9"},{"SUM_Lost_Sales_Est":"97.0955","SKU_ID":"10"},{"SUM_Lost_Sales_Est":"97.0955","SKU_ID":"11"}]';
    chart1JSON = JSON.parse(json);
    
    // Chart 2
    json = '[{"Sales_Date": "2017-01-01","SUM_Lost_Sales_Est": "0.0000"},{"Sales_Date": "2017-01-02","SUM_Lost_Sales_Est": "0.0264"}]';
    chart2JSON = JSON.parse(json);

    // Chart 3
    json = '[]';
    chart3JSON = JSON.parse(json);

    // Chart 4 
    json = '[]';
    chart4JSON = JSON.parse(json);

    // Chart 5
    json = '[]';
    chart5JSON = JSON.parse(json);
    
    var dataArray = [chart1JSON, chart2JSON, chart3JSON, chart4JSON, chart5JSON];

    // We will also need to either have JSON of all the stores skus and time or we need to save this info when parsing
    // the respective fields to populate the filter dropdowns.


    configureDataForCharts(dataArray);
}

/// AJAX METHODS ///

// AJAX method to call the server via a GET request
function getData() {
    // GET method code
    //var xhttp = new XMLHttpRequest(); 
    // xhttp.onreadystatechange = function() { 
        // if (this.readyState == 4 && this.status == 200) { 
            // var myObj = JSON.parse(this.responseText); 
            // console.log(myObj); 
        // } 
    // }; 
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true); 
    // xhttp.send(); 
}


// just a test function showing that we an now manipulate the series field of our chartOptions
function testAddFilter() {
    chart1Options.series.push(chart1.series, {name: "data 2", data: [1000, 800, 1200, 300, 550, 490, 870, 950, 392, 120, 900, 1100, 1300, 1400, 1500, 400,
    900, 1500, 900, 450, 680, 380, 890, 908, 490, 380, 549, 540, 340, 320], type: "bar"});
    chart1.setOption(chart1Options);
}